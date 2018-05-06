// var
var randQset = questions[Math.floor(Math.random() * questions.length)];
var compAns = '';
var userPick = '';
var activeQset = [];
var gameActive = 'false';
//

$( document ).ready(function() {
  console.log( "ready!" );
  setTimeout(() => {
    start();
  }, 500);
});

function start(){
 // will create the start buttong and do a condition go to to other function if pressed
 console.log('game started');
//
var startBtn = $("<button>");

startBtn.addClass("btnColor");

startBtn.attr("onclick", genQuestion());

startBtn.text('Start');

$("#starter").append(startBtn);
//
}
//
function genQuestion(){
  var questionHolder = randQset.question;
  var answerHolder = randQset.answer;
  console.log(questionHolder);
  console.log(answerHolder);
  //math random a question from bo
  // return Math.floor(Math.random() * 10) + 1;
}