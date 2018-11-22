var txtUsername = document.getElementById('txtUsername');
var txtEmail = document.getElementById('txtEmail');
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

//Register Button Click Event
btnRegister.addEventListener('click', function(e){
  e.preventDefault();
  if(txtUsername.value == '' || txtEmail.value == '' || txtPassword.value == ''){
    info.className = '';
    info.innerHTML = 'Please fill the form!';
    info.style.color = '#e74c3c';
    info.style.display = 'block';
    info.className += 'animated shake';
  }
  else{
      if(txtUsername.value.length < 3){
        info.className = '';
        info.innerHTML = 'Username must contain at least 3 character!';
        info.style.color = '#e74c3c';
        info.style.display = 'block';
        info.className += 'animated shake';
      }else{
        if(!validateEmail(txtEmail.value)){
          info.className = '';
          info.innerHTML = 'Invalid Email!';
          info.style.color = '#e74c3c';
          info.style.display = 'block';
          info.className += 'animated shake';
        }else{
          if(txtPassword.value.length < 6){
            info.className = '';
            info.innerHTML = 'Password must contain at least 6 character!';
            info.style.color = '#e74c3c';
            info.style.display = 'block';            
            info.className += 'animated shake';
          }
          else{
            info.innerHTML = 'You"ve registered successfully!';
            info.className += 'animated bounce';
            info.style.color = '#2ecc71';
            info.style.display = 'block';
           		firebaseRef.child('users').push({
				Username: txtUsername.value,
				Email: txtEmail.value,
				Password: txtPassword.value
			});
			
            txtUsername.value = '';
            txtEmail.value = '';
            txtPassword.value = '';
            txtUsername.focus();
          }
        }
      }
  
  }
  
});