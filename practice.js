
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDIhbWH4td6UdQ5rVrfXOBRqOAszw-SDIY",
  authDomain: "sowmya-gxwa.firebaseapp.com",
  databaseURL: "https://sowmya-gxwa.firebaseio.com",
  projectId: "sowmya-gxwa",
  storageBucket: "sowmya-gxwa.appspot.com",
  messagingSenderId: "183790850695",
  appId: "1:183790850695:web:f7b8cc2259d87e9a469e22",
  measurementId: "G-2B5PD3GX03"
};
    
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser(){
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    Key:"i am soumya"
});
}