var txtUsername = document.getElementById('txtUsername');
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnRegister = document.getElementById('btnRegister');
var btnLogin = document.getElementById('btnLogin');
var registrationTable = document.getElementById('registrationTable');
var loginTable = document.getElementById('loginTable');
var info = document.getElementById('info');

//Firebase Config
var firebaseRef = firebase.database().ref();

//Email Validation
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function signUp(){
	firebase.auth().createUserWithEmailAndPassword(txtEmail.value,txtPassword.value).catch(function (error){
		console.log(error);
	});
}

function signIn(){
	firebase.auth().signInWithEmailAndPassword(txtEmail.value,txtPassword.value).catch(function (error){
		console.log(error);
	});
	alert('Successful Login');
	window.location.href="/All4V/index1.html";
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
				Username: txtUsername.value,
				Email: txtEmail.value,
				Password: txtPassword.value
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
