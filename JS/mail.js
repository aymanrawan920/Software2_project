const firebaseConfig = {
    apiKey: "AIzaSyBY6DHxjMnY2QkVHvapQjzy3fJ2si51tz4",
    authDomain: "contactform-bdce2.firebaseapp.com",
    databaseURL: "https://contactform-bdce2-default-rtdb.firebaseio.com",
    projectId: "contactform-bdce2",
    storageBucket: "contactform-bdce2.appspot.com",
    messagingSenderId: "761387503603",
    appId: "1:761387503603:web:9889fc61e899a624604c86"
};
// initilize firebase
firebase.initializeApp(firebaseConfig);
// reference my database
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();
    var name = getElementval('name');
    var email = getElementval('email');
    
    var subject = getElementval('Subject');
    var msgcontact = getElementval('msgcontact');

saveMessages(name, email, subject, msgcontact);
    /// enable alert
    document.querySelector(".alert").style.display = "block"; /// الماسيدج تظهر لما اعمل ارسال
    /// remove alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none"// تختفى لما ما ابعتش ف الفورم 
    }, 3000 /// هتختفى بعد ثلاث ثوانى
    );
    // عبارة عن فانكشن هتمسح الداتا اللى اتكتبت مرة عشان اكتب داتا تانيه 
   document.getElementById("contactForm").reset();

}
const saveMessages = (name, email, subject, msgcontact) => {
    var newContactform = contactFormDB.push();
    
    newContactform.set({
        name: name,
        email: email,
        subject: subject,
        msgcontact: msgcontact,
    });
};

const getElementval = (id) => {
    return document.getElementById(id).value;
};
