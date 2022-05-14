
var firebaseConfig = {
      apiKey: "AIzaSyDI-f-Ps3i9KE1ZS2IUTMAvIdWMUtDIlFo",
      authDomain: "babalonianchristmas.firebaseapp.com",
      databaseURL: "https://babalonianchristmas-default-rtdb.firebaseio.com",
      projectId: "babalonianchristmas",
      storageBucket: "babalonianchristmas.appspot.com",
      messagingSenderId: "465258206745",
      appId: "1:465258206745:web:ccdf2b7cb07287a8a43c88"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function DeleteUser(){
      window.location = "index.html";
}
