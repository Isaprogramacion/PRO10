
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

const firebaseConfig = {
      apiKey: "AIzaSyBg9bISls_diIJioylzreAb90VQhxLjXMI",
      authDomain: "otra-vez-9f1a7.firebaseapp.com",
      projectId: "otra-vez-9f1a7",
      storageBucket: "otra-vez-9f1a7.appspot.com",
      messagingSenderId: "445713318708",
      appId: "1:445713318708:web:409802fa4debce2e2f1b61"
    };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              like: 0
       });

       document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

