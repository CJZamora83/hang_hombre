console.log("JS Loaded!");

/*DATA MODEL*/
var isPlaying        = null;
var misses           = 0;
var correctIndices   = [];
var input            = "";
var word;
var words = ["agarrar", "tocar", "quedar", "equis",
            "arrancar", "suponer", "proponer",
            "confiar", "dormir", "molear", "estar",
            "descifrar", "quebrar", "amar", "recoger",
            "querer", "descifrador", "vaina", "aquel",
            "aquella", "cuyo", "cuya", "cesped", "arbol",
            "television", "arepa", "empanada", "vaso",
            "tierra", "suelo", "cielo", "pared", "sotano",
            "atica", "triangulo", "puerta", "lavaplatos",
            "cuadro", "abrelatas", "circulo", "pisina",
            "flecha", "antojito", "resbalarse","hincharse",
            "teniente", "capitán", "enfermera", "medico",
            "cero", "cerdo", "alcalde", "rango", "oficial",
            "partido", "equipo", "Moscú", "Dinamarca",
            "aleman", "hindu", "fallar", "mayor", "nino", "nina",
            "padrino", "patrón", "niña", "niño", "nene", "nena",
            "ayudar", "apoyar", "resistir", "capital", "consejo",
            "consejero", "consejera", "llegar", "ancho", "hondo",
            "rio", "arroyo", "hoyo", "calefacción", "anchura",
            "altura", "Escosia", "colina", "valle", "llano",
            "parilla", "almohada", "cobija", "escopeta", "rifle",
            "pistola", "coche", "derecho"
            ];

var chosenLetters = [];


/*Select from word array*/
function randomWord() {
  return words[Math.floor(Math.random() * 100)].split('');
}

/*Render character spaces to View*/
function underline() {
  word = randomWord();
  var hidden = '';
  for (var i = 0; i < word.length; i++) {
    if (i < word.length - 1) {
      hidden += "_ ";
    } else {
      hidden += "_";
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
      }
    }
  } else {
    return misses++;
    console.log("¡Sigue matando al hombre!");
  }
}

function checkLetter(input) {
  // Get the index of the letter in the word, if it exists.
  // If it does not exist, foundIndex equals -1.
  var foundIndex = word.indexOf(input);

  if (foundIndex === -1) { // Letter not found.

    // Increment the number of misses.
    misses++;

    // Check to see if game is over: when there are as many
    // misses as there are letters in the word.
    if (misses === word.length) {
      console.log("¡You killed him!");
    } else {
      console.log("Keep killing him.");
    }

  } else { // Letter found!

    // Repeat the following steps as long as the search for the
    // letter in the word returned an index! (ie, it didn't return -1).
    while (foundIndex !== -1) {
      console.log("Letter found:", foundIndex);

      // Add the found index to the list of found indices.
      correctIndices.push(foundIndex);

      // Look through the word for ANOTHER instance of the letter,
      // starting at the next letter from the last one found.
      foundIndex = word.indexOf(input, foundIndex+1);
    } // ... go back to the while condition ...

    // Check to see if this letter finished the word! (Ie, you have
    // pushed into correctIndices all the indices).
    if (correctIndices.length === word.length) {
      console.log("¡YOU WIN!");
    }
  }

  // Mark that this letter was chosen.
  chosenLetters.push(input);
}

/*PLAYING STATUS*/
function playingStatus() {
  if (isPlaying) {
    isPlaying = false;
  } else {
    isPlaying = true;
  }
}

/*RENDER */
function timer(time) {
  if (time === 0) {
    console.log("TIME!");
  } else {
    console.log(time);
    setTimeout(function() {
      time--;
      $('#countdown').text(time);
      timer(time);
    }, 1000);
  }
};

/*START GAME*/
function startGame() {
  if (isPlaying) {
    $("PlayButton").text("Start Game");
  }
  underline();
  timer(10);
}

/* Event listener for click - start game*/

$('#startHanging').on("click", startGame);



/* */
