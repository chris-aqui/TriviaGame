// var
var randQset = questions[Math.floor(Math.random() * questions.length)];
var compAns = '';
var userPick = '';
var activeQset = [];
var gameActive = 'false';
var gameTime = 2;
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

// Ln 21 & 22 will hide the game time and game questions div on start up
$('#time-display').hide();
$('#game').hide();

$( document ).ready(function() {
  console.log( "ready!" );
  // $('#game').hide();
  // Ln 28, when the user presses the start button the game will begin
  $('#btnStart').on("click", function(){
    gameActive = true;
// Ln 31: small delay between game idle and game start up
    setTimeout(() => {
      // invoke the game start function
      start();
    }, 800);
    //
  });
  //

});
//

// this function will update the screen to show questions
function start(){
  // Ln 45 removes the start button
 $('#start-button').remove();
//  Ln 47 will show the game timer
  $('#time-display').show();
  // Ln 49 will show the game card with questions and answers
  $('#game').show();
  console.log('game started');
  // invoe the function that will populate the game card with randomly sectected questions
  genQuestion();
  // timerDown(gameTime);
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
  timerDown(gameTime);
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
  if(gameTime < 0){
    console.log('Times up');
    updateMe();
  }
}
//
function updateMe(){
  console.log('called updateMe function');
  randQset = questions[Math.floor(Math.random() * questions.length)];
  questionHolder = randQset.question;
  answerHolder = randQset.answer;
  mock1 = randQset.answerList.a;
  mock2 = randQset.answerList.b;
  mock3 = randQset.answerList.c;
  mock4 = randQset.answerList.d;
  genQuestion();
  clearInterval(downTimev);
  gameTime = 2;


  setTimeout(() => {
    $('#game').show();
    console.log('updating');
    // $('#').text();
  }, 200);
}

var downTimev;

function timerDown (x){
  downTimev = setInterval(function(){
    if(x > 0){
      x--;
      $('#time-display').text(x);
      console.log(x);
    } else{
      // x = 0;
      // console.log(x);
      // $('#time-display').text(x);
      // console.log('Times up, updating');
      // incorrect++;
      // $('#game').hide();
      // updateMe();
    }
    }, 800);
    TimeCheck(gameTime);
    //
    return x;
  }
  //
function TimeCheck(y){
  if(y < 0){
    console.log('Times up, updating');
    // incorrect++;
    // $('#game').hide();
    // // clearInterval(downTimev);
    updateMe();
  }
}
