// var
var randQset = questions[Math.floor(Math.random() * questions.length)];
var compAns = '';
var userPick = '';
var activeQset = [];
var gameActive = 'false';
//
var questionHolder = randQset.question;
var answerHolder = randQset.answer;
var mock1 = randQset.fakeAns1;
var mock2 = randQset.fakeAns2;
var mock3 = randQset.fakeAns3;
//
var score = 0;
var correct = 0;
var incorrect = 0;

//

$( document ).ready(function() {
  console.log( "ready!" );
  $('#game').on("click", function(){
    gameActive = true;
    setTimeout(() => {
      start();
    }, 500);
    //

  });






});
//
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

  console.log(questionHolder);
  console.log(answerHolder);

}
//
function updateMe(){
  $('#').text();
}