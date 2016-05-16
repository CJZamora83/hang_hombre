console.log("JS Loaded!");

/*DATA MODEL*/
var isPlaying       = null;
var hombreHead      = null;
var hombreBody      = null;
var hombreArmRight  = null;
var hombreArmLeft   = null;
var hombreLegRight  = null;
var hombreLegLeft   = null;


var words = ["agarrar", "tocar", "quedar",
            "arrancar", "suponer", "proponer",
            "confiar", "dormir", "molear", "estar"];
var CharCount = null;

/*PLAYING STATUS*/
function PlayingStatus() {
  if (isPlaying) {
    isPlaying = false;
  } else {
    isPlaying = true;
  }
}

/*RENDER - START GAME*/

function render() {
  if (isPlaying) {
    $("PlayButton").text("Start Game");
  }
};


/*Select from word array*/
function randomWord() {
  return words[Math.floor(Math.random() * 10)];
};

/*Render randomWord's character count*/


/*Render character spaces to View*/
function underline() {
  var hidden = '';
  for (i = 0; i <word.length; i++) {
    hidden += "_";
  }
  $('#underline-container').text(hidden);
}


/*Crosscheck guesses with random word*/
console.log("Javascript Loaded");

function checkGuess() {
  document.getElementByID("checkguess");
  if (id === letter) {
      "replace space with letter";
      } else {
      return attempts -= 1;
      }
}

/*Calling functions*/
render();
PlayingStatus();
randomWord();
underScore();

console.log("JS Loaded!");

// /*DATA MODEL*/
// var wordBoard = [];
// var wordsArray = ["agarrar", "tocar", "quedar",
//                   "arrancar", "suponer", "proponer",
//                   "confiar", "dormir", "molear",
//                   "estar"];
// var underlineArray = [];
// var word = null;
// var wordcharCount = null;
// var $startHanging = $('#startHanging');

// /*Select from word array*/
// function randomWord() {
//   word = wordsArray[Math.floor(Math.random() * 10)];
// }

// /*Set underline to wordBoard*/
// function underline() {
//   randomWord();
//   for(i = 0; i < word.length; i++) {
//     wordsArray[i] = wordcharCount(i);
//     wordsArray[i] = "_";
//   }
//   .join("");
// }
