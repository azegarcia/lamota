const firebaseConfig = {
    apiKey: "AIzaSyB7gqHKTg_zu19pUOoWJRMJT1th6eLBAa0",
    authDomain: "lamotapos-f25b9.firebaseapp.com",
    projectId: "lamotapos-f25b9",
    storageBucket: "lamotapos-f25b9.appspot.com",
    // messagingSenderId: "YOUR_SENDER_ID",
    // appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('fileInput').addEventListener('change', handleFile, false);

function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Converts sheet to JSON array of objects
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Upload each row to Firestore
    jsonData.forEach(async (row, index) => {
        try {
        await db.collection("your_collection_name").add(row);
        console.log(`Row ${index + 1} uploaded`);
        } catch (err) {
        console.error(`Error uploading row ${index + 1}:`, err);
        }
    });
    };

    reader.readAsArrayBuffer(file);
}