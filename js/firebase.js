
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAfXhEIrZ2lgabQXDuNALGZvcU-RNhHvCY",
  authDomain: "all4v-fd7fe.firebaseapp.com",
  databaseURL: "https://all4v-fd7fe.firebaseio.com",
  projectId: "all4v-fd7fe",
  storageBucket: "all4v-fd7fe.appspot.com",
  messagingSenderId: "750350348578"
};
firebase.initializeApp(config);

var ref = firebase.database().ref('campaigns');

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
