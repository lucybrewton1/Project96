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
var user_name=localStorage.getItem("Username");
var room_name=localStorage.getItem("roomName");
function logout() {
    window.location="index.html";
    localStorage.removeItem("roomName");
    localStorage.removeItem("Username");
}
function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          Message:msg,
          User: user_name,
          Likes: 0
    });
    document.getElementById("msg").value="";
}