var current1 = document.getElementById('current1');
var goal1 = document.getElementById('goal1');
var percent1 = document.getElementById('percent1');
var bar1 = document.getElementById('bar1');
var donate1 = document.getElementById('donate1');
var current;
var goal;
var ref = firebase.database().ref('patient1');

ref.on("value", function(snapshot) {
  var json = snapshot.val();
   console.log(json.current);
   console.log(json.goal);
   current = json.current;
   goal = json.goal;
   setCampaign(goal,current);
}, function (error) {
   console.log("Error: " + error.code);
});

function setCampaign(goal,current){
  goal1.innerText = goal.toLocaleString()+' Baht';

  if(current1!==null){
    current1.innerText = current.toLocaleString()+' Baht';
  }

  var percent = (goal-current)*100/goal;
  percent = 100-percent;
  percent1.innerText = percent.toFixed(2)+'%';
  bar1.style.width = percent+'%';
}

donate1.addEventListener("click", function () {

  var money = 1000;
  current = current+money;
  alert(current);
ref.update({
  "current": current
});
});
