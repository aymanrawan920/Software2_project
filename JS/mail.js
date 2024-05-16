const firebaseConfig = {
    apiKey: "AIzaSyBY6DHxjMnY2QkVHvapQjzy3fJ2si51tz4",
    authDomain: "contactform-bdce2.firebaseapp.com",
    databaseURL: "https://contactform-bdce2-default-rtdb.firebaseio.com",
    projectId: "contactform-bdce2",
    storageBucket: "contactform-bdce2.appspot.com",
    messagingSenderId: "761387503603",
    appId: "1:761387503603:web:9889fc61e899a624604c86"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference my database
  var contactFormDB = firebase.database().ref('contactForm');
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementval('name');
    var email = getElementval('email');
    var subject = getElementval('Subject');
    var msgcontact = getElementval('msgcontact');
  
    saveMessages(name, email, subject, msgcontact)
      .then(() => {
        // Clear form inputs after successful save
        document.getElementById("contactForm").reset();
  
        // Show alert for success (optional)
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").textContent = "Message sent successfully!";  // Update message
  
        setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
        }, 3000);
      })
      .catch((error) => {
        // Handle errors (optional)
        console.error("Error saving message:", error);
        document.querySelector(".alert").style.display = "block";
        document.querySelector(".alert").textContent = "Error sending message!";
});
  }
  
  const saveMessages = (name, email, subject, msgcontact) => {
    var newContactform = contactFormDB.push();
    return newContactform.set({
      name: name,
      email: email,
      subject: subject,
      msgcontact: msgcontact
    });
  };
  
  const getElementval = (id) => {
    return document.getElementById(id).value;
  };
  