var report = document.getElementById("reportdiv");
var photo = document.getElementById("photodiv");
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
