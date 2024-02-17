// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKdLkLtCkX5bRIZVPp0zkTQrsEC-DGVtU",
    authDomain: "hospitalmanagement-ssgmce.firebaseapp.com",
    databaseURL: "https://hospitalmanagement-ssgmce-default-rtdb.firebaseio.com",
    projectId: "hospitalmanagement-ssgmce",
    storageBucket: "hospitalmanagement-ssgmce.appspot.com",
    messagingSenderId: "872102038610",
    appId: "1:872102038610:web:3242cbc8996a5dbf1d238b",
    measurementId: "G-SHC99GRZP6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  const auth = firebase.auth()
  var user = auth.currentUser;
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
  
    database.ref('users/' + user).set({
      email : email,
      password : password,
      username : username
    })
  
    alert('Saved')
  }
  
  function getDataFromFirestore() {
    // Reference to the collection "users"
    var usersCollection = db.collection("users");

    // Get all documents in the "users" collection
    usersCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // Access each document's data
            var data = doc.data();
            // Do something with the data (e.g., display it)
            console.log(data);
        });
    }).catch((error) => {
        console.error("Error getting documents: ", error);
    });
}

  
  function update() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + user).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    database.ref('users/' + user).remove()
  
    alert('deleted')
  }