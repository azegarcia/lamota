const firebaseConfig = {
    apiKey: "AIzaSyB7gqHKTg_zu19pUOoWJRMJT1th6eLBAa0",
    authDomain: "lamotapos-f25b9.firebaseapp.com",
    projectId: "lamotapos-f25b9",
    storageBucket: "lamotapos-f25b9.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ✅ Protect the page by checking auth state
auth.onAuthStateChanged(user => {
    if (!user) {
    // ❌ Not logged in — redirect to login
    window.location.href = "index.html";
    } else {
    console.log("User is logged in:", user.email);
    }
});

function logout() {
    auth.signOut().then(() => {
    window.location.href = "login.html";
    });
}