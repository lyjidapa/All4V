var txtUsername = document.getElementById('txtUsername');
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnRegister = document.getElementById('btnRegister');
var btnLogin = document.getElementById('btnLogin');
var registrationTable = document.getElementById('registrationTable');
var loginTable = document.getElementById('loginTable');
var info = document.getElementById('info');
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
       window.location.href="/All4V/index1.html";
   })
  .catch(function(error) {
       // Error Handling
       console.log(error);
       alert(error);
       window.location.href="/All4V/index.html";
  });
}

function signIn(){
  // check value
  //alert(txtLoginEmail.value);
  //alert(txtLoginPassword.value);
  firebase.auth().signInWithEmailAndPassword(txtLoginEmail.value,txtLoginPassword.value)
   .then(function(firebaseUser) {
       // Success
       alert('Successful Login');
       window.location.href="/All4V/index1.html";
   })
  .catch(function(error) {
       // Error Handling
       console.log(error);
       alert(error);
       window.location.href="/All4V/index.html";
  });
}

//Register Button Click Event
btnRegister.addEventListener('click', function(e){
  e.preventDefault();
  if(txtUsername.value == '' || txtEmail.value == '' || txtPassword.value == ''){
    info.className = '';
    alert('Please fill the form!');
    info.style.color = '#e74c3c';
    info.style.display = 'block';
    info.className += 'animated shake';
  }
  else{
      if(txtUsername.value.length < 3){
        info.className = '';
        alert('Username must contain at least 3 character!');
        info.style.color = '#e74c3c';
        info.style.display = 'block';
        info.className += 'animated shake';
      }else{
        if(!validateEmail(txtEmail.value)){
          info.className = '';
          alert('Invalid Email!');
          info.style.color = '#e74c3c';
          info.style.display = 'block';
          info.className += 'animated shake';
        }else{
          if(txtPassword.value.length < 6){
            info.className = '';
            alert('Password must contain at least 6 character!');
            info.style.color = '#e74c3c';
            info.style.display = 'block';
            info.className += 'animated shake';
          }
          else{
            info.className += 'animated bounce';
            info.style.color = '#2ecc71';
            info.style.display = 'block';
           		firebaseRef.child('users').push({
				Username: txtUsername.value.trim(),
				Email: txtEmail.value.trim(),
				Password: txtPassword.value.trim()
			});

			signUp();
			alert('You"ve registered successfully!');

            txtUsername.value = '';
            txtEmail.value = '';
            txtPassword.value = '';
            txtUsername.focus();
          }
        }
      }

  }

});
