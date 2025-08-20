const firebaseConfig = {
    apiKey: "AIzaSyB7gqHKTg_zu19pUOoWJRMJT1th6eLBAa0",
    authDomain: "lamotapos-f25b9.firebaseapp.com",
    projectId: "lamotapos-f25b9",
    storageBucket: "lamotapos-f25b9.appspot.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const message = document.getElementById('message');

auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
    message.style.color = "green";
    message.innerText = "Login successful!";
    console.log("User:", userCredential.user);

    // Redirect to another page after 1 second (optional delay)
    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);
    })
    .catch(error => {
    message.style.color = "red";
    message.innerText = error.message;
    });
}