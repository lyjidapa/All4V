var report = document.getElementById("reportdiv");
var photo = document.getElementById("photodiv");
var amount_2000 = document.getElementById("id_amount_2000");
var amount_1000 = document.getElementById("id_amount_1000");
var amount_500 = document.getElementById("id_amount_500");
var id_amount_custom = document.getElementById("id_amount_custom");
var id_real_amount = document.getElementById("id_real_amount");
report.style.display='block';
photo.style.display='none';

function showreport(){
  report.style.display='block';
  photo.style.display='none';
}
function showphoto(){
  report.style.display='none';
  photo.style.display='block';
}

// Goal box link to payment form
function mypayment() {
    location.href = "#pay";
}


function cardinfo(){
    location.href = "#Cardinfo";
}
function cardinfo(){
    location.href = "#bankAcc";
}

create_token.addEventListener("click", function () {
  var money;
  if(amount_500.checked){
  money = 500;
  }
  else if(amount_1000.checked){
  money = 1000;
  }
  else if(amount_2000.checked){
  money = 2000;
  }
  else if(id_amount_custom.checked){
  money = parseInt(id_real_amount.value);
  }
  console.log('You donate money '+money+' Baht');
  if(money!==null){
  current = current+money;
  // alert(current);
  ref.update({
  "current": current
});
  window.location.href='successdonation.html';
}
else{
  alert('Please fill in all information');
}
});
