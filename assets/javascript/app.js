// var
var randQset = questions[Math.floor(Math.random() * questions.length)];
var compAns = '';
var userPick = '';
var activeQset = [];
var gameActive = 'false';
var gameTime = 60;

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
$('#time-display').hide();
$('#game').hide();

$( document ).ready(function() {
  console.log( "ready!" );
  // $('#game').hide();
  $('#btnStart').on("click", function(){
    gameActive = true;
    setTimeout(() => {
      start();
    }, 500);
    //
  });
  //

});
//
function timerDown (x){
  for(var i = 60; i > 0; i--){
    x--;
    $('#time-display').text(gameTime);
    console.log(x);
    if(x === 0){
      x = 0;
    }
  }
  return x;
}
//
function start(){
 // will create the start buttong and do a condition go to to other function if pressed
 $('#time-display').show();
  $('#game').show();
  console.log('game started');
  $('#start-button').remove();
  genQuestion();
  timerDown(gameTime);
//

}
//
function genQuestion(){
  $('#question').text(questionHolder);
  $('#answer1').text(mock1);
  $('#answer2').text(mock2);
  $('#answer3').text(mock3);
  $('#answer4').text(mock4);
  //
  $('#time-display').text(gameTime);
    console.log(questionHolder);
    checker();
    // console.log(answerHolder);
}
//
function checker() {
  $('#answer1').on("click", function(){
    console.log(mock1);
    if (mock1 === answerHolder) {
      correct++;
      score++;
      $('#game').hide();
      console.log('this is the answer ' + answerHolder);
      updateMe();
    } else {
      incorrect++;
      $('#game').hide();
      console.log('this is not the answer');
      updateMe();
    }
  });
  $('#answer2').on("click", function(){
    console.log(mock2);
    if (mock2 === answerHolder) {
      correct++;
      score++;
      $('#game').hide();
      console.log('this is the answer ' + answerHolder);
      updateMe();
    } else {
      incorrect++;
      $('#game').hide();
      console.log('this is not the answer');
      updateMe();
    }
  });
  $('#answer3').on("click", function(){
    console.log(mock3);
    if (mock3 === answerHolder) {
      correct++;
      score++;
      $('#game').hide();
      console.log('this is the answer ' + answerHolder);
      updateMe();
    } else {
      incorrect++;
      $('#game').hide();
      console.log('this is not the answer');
      updateMe();
    }
  });
  $('#answer4').on("click", function(){
    console.log(mock4);
    if (mock4 === answerHolder) {
      correct++;
      score++;
      $('#game').hide();
      console.log('this is the answer ' + answerHolder);
      updateMe();
    } else {
      incorrect++;
      $('#game').hide();
      console.log('this is not the answer');
      updateMe();
    }
  });

}
//
function updateMe(){
  randQset = questions[Math.floor(Math.random() * questions.length)];
  questionHolder = randQset.question;
  answerHolder = randQset.answer;
  mock1 = randQset.answerList.a;
  mock2 = randQset.answerList.b;
  mock3 = randQset.answerList.c;
  mock4 = randQset.answerList.d;
  genQuestion();
  gameTime = 60;

  setTimeout(() => {
    $('#game').show();
    console.log('updating');
    // $('#').text();
  }, 200);
}

