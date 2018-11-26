var current1 = document.getElementById('current1');
var percent1 = document.getElementById('percent1');
var bar1 = document.getElementById('bar1');

var ref = firebase.database().ref('patient1');

ref.on("value", function(snapshot) {
  var json = snapshot.val();
   console.log(json.current);
   console.log(json.goal);
   var current = json.current;
   var goal = json.goal;
   setCampaign(goal,current);
}, function (error) {
   console.log("Error: " + error.code);
});

function setCampaign(goal,current){
  current1.innerText = current.toLocaleString()+' Baht';
  var percent = (goal-current)*100/goal;
  percent1.innerText = percent+'%';
  bar1.style.width = percent+'%';
}
