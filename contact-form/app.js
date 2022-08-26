// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAAyPWWYi6JmZPJ4Ojhzn82na0xdaPEm0g",
    authDomain: "mango-mentors-landing-page.firebaseapp.com",
    projectId: "mango-mentors-landing-page",
    storageBucket: "mango-mentors-landing-page.appspot.com",
    databaseURL: "https://mango-mentors-landing-page-default-rtdb.firebaseio.com/",
    messagingSenderId: "886916120017",
    appId: "1:886916120017:web:6594b1d44789926ef874f0",
    measurementId: "G-SZ37JR338Y"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference Contact Information collections
const contactInfo = firebase.database().ref("infos");

//Listens for a submission
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    
    //Get form values here
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let message = document.querySelector(".message").value;
    console.log(name,email,phone,message);

    saveContactInfo(name, email, phone, message);

    document.querySelector(".contact-form").reset();
}

function saveContactInfo(name, email, phone, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  }
  