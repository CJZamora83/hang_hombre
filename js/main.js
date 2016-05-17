console.log("JS Loaded!");

/*DATA MODEL*/
var isPlaying       = null;
var misses         = 0;
var guesses        = [];
var correctIndices = [];
var word;


var words = ["agarrar", "tocar", "quedar",
            "arrancar", "suponer", "proponer",
            "confiar", "dormir", "molear", "estar"];

/*PLAYING STATUS*/
function playingStatus() {
  if (isPlaying) {
    isPlaying = false;
  } else {
    isPlaying = true;
    word = randomWord();
    underline();
    checkWord();
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
  return words[Math.floor(Math.random() * 10)].split('');
};

/*Render randomWord's character count*/


/*Render character spaces to View*/
function underline() {
  var hidden = '';
  for (i = 0; i < word.length; i++) {
    if (i < word.length - 1) {
      hidden += "_ ";
    } else {
      hidden += "_"
    }
  }
  $('#underline-container').text(hidden);
}

function checkWord(letter) {
  if (word.indexOf(letter) !== -1) {
    for (var i = 0; i < word.length; i++) {
      // check each letter, if the same, add index to array of correct Indices
      if (letter === word[i]) {
        console.log(word[i] + " is present at the index " + i);
        correctIndices.push[i];
      } else {
          return misses++;
          console.log("¡Estas matando el hombre!");
      }
    }
  }
}


/*Calling functions*/
render();
playingStatus();
randomWord();
underline();
