// const bar=document.getElementById("bar");
// const nav=document.getElementById("navbar");
// const close=document.getElementById("close");

// if(bar){
//     bar.addEventListener("click",()=>{
//     nav.classList.add("active");
//     })
    
// }
// if(close){
//     close.addEventListener("click",()=>{
//         nav.classList.remove("active");
//         })
// }
function redirectToProduct(imageName) {
    window.location.href = 'sproduct.html?imageName=' + imageName;
}



var queryParams = new URLSearchParams(window.location.search);
var imageName = queryParams.get('imageName');

document.querySelector('#image').src = imageName;


function changeProduct(imageName) {
    document.querySelector('#image').src = imageName;
}