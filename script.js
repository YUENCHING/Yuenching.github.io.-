/* .js files add interaction to your website */
var factList = [
  "Fact: activities that could increase heart rate help improve mental state.",/*0*/
  "Fact: Eat more vegetables and anti-inflammatory foods to help prevent depression.",/*1*/
  " Misconceptions:Having a mental illness means you are crazy. ",/*2*/
  "Misconceptions: Why can’t you just smile and think positive like everyone else?",/*3*/
  "Fact: Lack of sleep can negatively affect mood, concentration, and emotional intelligence."];/*4*/   


var fact = document.getElementById("fact");
var myButton = document.getElementById("factButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
