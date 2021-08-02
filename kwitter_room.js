var firebaseConfig = {
    apiKey: "AIzaSyClle5xjU-Lar9Wd5UCLhzW0rA5H3CKbBY",
    authDomain: "letschat-6dcbc.firebaseapp.com",
    databaseURL: "https://letschat-6dcbc-default-rtdb.firebaseio.com",
    projectId: "letschat-6dcbc",
    storageBucket: "letschat-6dcbc.appspot.com",
    messagingSenderId: "539890277664",
    appId: "1:539890277664:web:8b8b09c6def41827078b45",
    measurementId: "G-WWKCY17WDG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("Username");
document.getElementById("username").innerHTML="Welcome "+username+"!";
function addRoom() {
    roomName=document.getElementById("room_name").value;
    localStorage.setItem("roomName",roomName);
    firebase.database().ref("/").child(roomName).update({
        Purpose:"Save room name"
    });
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function redirectToRoomName(name) {
    localStorage.setItem("roomName",name);
    window.location="kwitter_page.html";
}
function logout() {
    window.location="index.html";
    localStorage.removeItem("roomName");
    localStorage.removeItem("Username");
}