var txtUsername = document.getElementById('txtUsername');
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnRegister = document.getElementById('btnRegister');
var btnLogin = document.getElementById('btnLogin');
var registrationTable = document.getElementById('registrationTable');
var loginTable = document.getElementById('loginTable');
var infol = document.getElementById('infol');
var infos = document.getElementById('infos');
var txtLoginEmail = document.getElementById('txtLoginEmail');
var txtLoginPassword = document.getElementById('txtLoginPassword');

//Firebase Config
var firebaseRef = firebase.database().ref();

//Email Validation
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function signUp(){
	firebase.auth().createUserWithEmailAndPassword(txtEmail.value.trim(),txtPassword.value.trim())
   .then(function(firebaseUser) {
       // Success
       // alert("You've registered successfully!");
       window.location.href="/All4V/index1.html";
   })
  .catch(function(error) {
       // Error Handling
       console.log(error);
       infos.innerText = error;
  });
}

function signIn(){
  // check value
  firebase.auth().signInWithEmailAndPassword(txtLoginEmail.value,txtLoginPassword.value)
   .then(function(firebaseUser) {
       // Success
       // alert('Successfully Login');
       window.location.href='index1.html';
   })
  .catch(function(error) {
       // Error Handling
       console.log(error);
       infol.innerText = error;
  });
}

//Login Button Event
btnLogin.addEventListener('click', function(e){
  e.preventDefault();
  signIn();
});
//Register Button Click Event
btnRegister.addEventListener('click', function(e){
  e.preventDefault();
  infos.innerText='';
  infol.innerText='';
  if(txtUsername.value == '' || txtEmail.value == '' || txtPassword.value == ''){
    alert('Please fill in the form!');
  }
  else{
      if(txtUsername.value.length < 3){
        infos.innerText = 'Username must contain at least 3 character!';
      }else{
        if(!validateEmail(txtEmail.value)){
          infos.innerText = 'Invalid Email!';
        }else{
          if(txtPassword.value.length < 6){
            infos.innerText = 'Password must contain at least 6 character!';
          }
          else{
           		firebaseRef.child('users').push({
				Username: txtUsername.value.trim(),
				Email: txtEmail.value.trim(),
				Password: txtPassword.value.trim()
			});

			signUp();

            txtUsername.value = '';
            txtEmail.value = '';
            txtPassword.value = '';
            txtUsername.focus();
          }
        }
      }

  }

});
