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
var currentWord;
var spaceCount = [null];

/*Render character spaces to View*/
function underScore() {
  for(i = 0; i < words.length; i+= 1) {
    spaceCount.push("_");
    spaceCount.join(" ");
    spaceCount.toString("");
  }
};



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
