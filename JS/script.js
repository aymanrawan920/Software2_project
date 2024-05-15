const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

function redirectToProduct(imageSrc) {
  window.location.href = `sproduct.html?imageSrc=${imageSrc}`;
}



var urlParams = new URLSearchParams(window.location.search);
var imageSrc = urlParams.get("imageSrc");

var mainImg = document.getElementById("MainImg");
mainImg.src = imageSrc;
