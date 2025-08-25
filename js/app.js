// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config (replace with your real config)
const firebaseConfig = {
    apiKey: "AIzaSyB7gqHKTg_zu19pUOoWJRMJT1th6eLBAa0",
    authDomain: "lamotapos-f25b9.firebaseapp.com",
    projectId: "lamotapos-f25b9",
    storageBucket: "lamotapos-f25b9.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to main container div
const container = document.getElementById("container");

// Load Firestore data and build HTML blocks
async function loadData() {
  const snapshot = await getDocs(collection(db, "Products"));

  snapshot.forEach((doc) => {
    const { Category, Name, Price } = doc.data();

    // Create wrapper div
    const wrapper = document.createElement("div");
    wrapper.className = "position-relative mb-4";

    // Build custom HTML structure
    wrapper.innerHTML = `
      <div class="text-dark bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">
        ${Category || 'No Category'}
      </div>
      <div class="p-4 border border-secondary border-top-0 rounded-bottom text-white-section">
        <h4>${Name || 'No Name Provided'}</h4>
        <div class="d-flex justify-content-between flex-lg-wrap">
          <p class="text-dark fs-5 fw-bold mb-0">$${parseFloat(Price).toFixed(2) || '0.00'}</p>
          <a href="#" class="btn border border-primary rounded-pill px-3 text-primary">
            <i class="fa fa-shopping-bag me-2 text-white-section"></i> Add to cart
          </a>
        </div>
      </div>
    `;

    // Append to container
    container.appendChild(wrapper);
  });
}

loadData();
