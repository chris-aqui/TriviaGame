// var
var randQset = questions[Math.floor(Math.random() * questions.length)];
var compAns = '';
var userPick = '';
var activeQset = [];
var gameActive = 'false';
//
var questionHolder = randQset.question;
var answerHolder = randQset.answer;
var mock1 = randQset.answerList.a;
var mock2 = randQset.answerList.b;
var mock3 = randQset.answerList.c;
var mock4 = randQset.answerList.d;
//
var score = 0;
var correct = 0;
var incorrect = 0;

//

$( document ).ready(function() {
  console.log( "ready!" );
  $('#btnStart').on("click", function(){
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
 $('#start-button').remove();
genQuestion();
//
}
//
function genQuestion(){
$('#question').text(questionHolder);
$('#answer1').text(mock1);
$('#answer2').text(mock2);
$('#answer3').text(mock3);
$('#answer4').text(mock4);

  console.log(questionHolder);
  console.log(answerHolder);

}
//
function updateMe(){
  $('#').text();
}