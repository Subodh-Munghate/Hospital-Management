// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBKdLkLtCkX5bRIZVPp0zkTQrsEC-DGVtU",
  authDomain: "hospitalmanagement-ssgmce.firebaseapp.com",
  databaseURL: "https://hospitalmanagement-ssgmce-default-rtdb.firebaseio.com",
  projectId: "hospitalmanagement-ssgmce",
  storageBucket: "hospitalmanagement-ssgmce.appspot.com",
  messagingSenderId: "872102038610",
  appId: "1:872102038610:web:3242cbc8996a5dbf1d238b",
  measurementId: "G-SHC99GRZP6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();
var db = firebase.firestore();

// Get the current user's UID
function uploadData() {
  var currentUser = firebase.auth().currentUser;
  if (currentUser) {
    var currentUID = currentUser.uid;

    // Get today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    // Get form data
    var formData = {
      fullName: document.getElementById("fullName").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      contactInfo: document.getElementById("contactInfo").value,
      medicalConditions: document.getElementById("medicalConditions").value,
      immunizationHistory: document.getElementById("immunizationHistory").value,
      symptoms: document.getElementById("symptoms").value,
      durationSeverity: document.getElementById("durationSeverity").value,
      exerciseRoutine: document.getElementById("exerciseRoutine").value,
      sleepPatterns: document.getElementById("sleepPatterns").value,
      mentalHealthHistory: document.getElementById("mentalHealthHistory").value,
      date: today,
    };

    
    // Store form data in Firestore under "users/UID/medical_history/history_date"
    db.collection("users")
      .doc(currentUID)
      .collection("medical_history")
      .doc(today)    
      .set(formData)
      .then(function () {
        console.log("Document successfully written!");
        // Optionally, perform additional actions after data is successfully written
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  } else {
    console.error("No user is currently logged in.");
  }
}
