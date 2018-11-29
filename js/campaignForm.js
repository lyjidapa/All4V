var saveCampaignForm = document.getElementById('saveCampaignForm');

// saveCampaignForm.addEventListener()

function linktothank(){
  window.location.href='submitCampaignForm.html';
}

// // On page loaded
// $( document ).ready(function() {
//
//     // On change fist name input
//     $("#inputFirstName").keyup(function() {
//         if(validation_name($("#inputFirstName").val()).code == 0) {
//             $("#inputFirstName").attr("class", "form-control is-invalid");
//             $("#inputFirstNameFeedback").html(validation_name($("#inputFirstName").val()).message);
//         } else {
//             $("#inputFirstName").attr("class", "form-control");
//         }
//     });
//
//     // On change last name input
//     $("#inputLastName").keyup(function() {
//         if(validation_name($("#inputLastName").val()).code == 0) {
//             $("#inputLastName").attr("class", "form-control is-invalid");
//             $("#inputLastNameFeedback").html(validation_name($("#inputLastName").val()).message);
//         } else {
//             $("#inputLastName").attr("class", "form-control");
//         }
//     });
// });
//
//
// /**
// *   Validation function for last name and first name
// */
// function validation_name (val) {
//     if (val.length < 2) {
//         // is not valid : name length
//         return {"code":0, "message":"The name is too short."};
//     }
//     if (!val.match("^[a-zA-Z\- ]+$")) {
//         // is not valid : bad character
//         return {"code":0, "message":"The name use non-alphabetics chars."};
//     }
//
//     // is valid
//     return {"code": 1};
// }
//
// /**
// * Upload photo
// */
// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();
//
//       reader.onload = function (e) {
//           $('#blah')
//               .attr('src', e.target.result);
//       };
//
//       reader.readAsDataURL(input.files[0]);
// }}
//
// /**
// *  Insert Campaign Information into Database
// */
// $(function(){
//   //make a variable to keep track of data coming from firebase
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAfXhEIrZ2lgabQXDuNALGZvcU-RNhHvCY",
//     authDomain: "all4v-fd7fe.firebaseapp.com",
//     databaseURL: "https://all4v-fd7fe.firebaseio.com",
//     projectId: "all4v-fd7fe",
//     storageBucket: "all4v-fd7fe.appspot.com",
//     messagingSenderId: "750350348578"
//   };
//
//   firebase.initializeApp(config);
//
//   var data= [];
//   //create new connection to firebase
// 	var ref = firebase.database();
//
//
//   // //listen to data updates from firebase
// 	// ref.on("value", function (snapshot){
//   //   console.log(snapshot.val());
//   //  //when the data updates at firebase, put it in the data variable
//   //   data= snapshot.val();
//   // });
//
//   // Reference
// var key = ref.key;
// var rootRef = ref.root;
// var parentRef = ref.parent;
//
// // Query
// var queryRef = query.ref;
//
// // DataSnapshot
// ref.on("value", function(snapshot) {
//   var dataRef = snapshot.ref;
//   var dataKey = snapshot.key;
// });
//
// //Entire Form (handler)
// $('#newCampaign').submit(function(event) {
//
//   var $form = $(this);
//   console.log("Submit to Firebase");
//
//   //disable submit button
//   $form.find("#saveCampaignForm").prop('disabled', true);
//
//   //get values to send to Firebase
//   var sex = $('#inputSex').val();
//   console.log(sex);
//
//   var firstName = $('#inputFirstName').val();
//   console.log(firstName);
//
//   var lastName = $('#inputLastName').val();
//   console.log(lastName);
//
//   var relationship = $('#inputRelationship').val();
//   console.log(relationship);
//
//   var cancerType = $('#inputCancerType').val();
//   console.log(cancerType);
//
//   var email = $('#inputEmail').val();
//   console.log(email);
//
//   var tel = $('#inputTel').val();
//   console.log(tel);
//
//   var description = $('#inputDescription').val();
//   console.log(description);
//
//   var address = $('#inputAddress').val();
//   console.log(address);
//
//   var goal = $('#inputGoal').val();
//   console.log(goal);
//
//   var endDate = $('#inputEndDate').val();
//   console.log(endDate);
//
//   var endDate = $('#inputEndDate').val();
//   console.log(endDate);
//
//   var photo = $('#inputPhoto').val();
//   console.log(photo);
//   //take the values from the form, and put them in an object
//   var campaign = {
//     "sex": sex,
//     "firstName": firstName,
//     "lastName": lastName,
//     "relationship": relationship,
//     "cancerType": cancerType,
//     "email": email,
//     "tel": tel,
//     "description": description,
//     "address": address,
//     "goal": goal,
//     "endDate": endDate,
//     "photo": photo
//   }
//   //put new object in data array
//   data.push(newCampaign);
//   console.log(data);
//
//     //send the new data to Firebase
// 		ref.set(data, function(err){
//       if(err){
//         alert("Data no go");
//       }
//     });
//
//     return false;
//   })
//
//
//   ///Make a login form submission handler
//   // $('#login').submit(function(event){
//   //   var $form = $(this);
//   //   $form.find('#registerForm').prop('disabled', true);
//   //
//   //   //get the value of the login email
// 	// 	var login = $("#loginInput").val();
//   //   //get the value of the password
//   //   var password = $("#passwordInput").val();
//   //
//   //   console.log(login, password);
//   //   register(login, password);
//   //
//   //   return false;
//   // })
//
//   ////Detect the authication state
//   // var reg = new Firebase("gs://all4v-fd7fe.appspot.com");
//   // reg.onAuth(function(authData){
//   //   console.log("info on authentication");
//   //   if(authData){
//   //     //you are logged in
//   //
//   //   }else{
//   //     //you are not logged in
//   //
//   //   }
//   // })
//
// })
