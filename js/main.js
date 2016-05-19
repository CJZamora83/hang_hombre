console.log("JS Loaded!");

/*DATA MODEL*/
var isPlaying        = null;
var misses           = 0;
var correctIndices   = [];
var input            = "";
var word;
var timer;
var time;
var chosenLetters = [];
//var wins;
//var losses;
var words = ["agarrar", "tocar", "quedar", "equis",
            "arrancar", "suponer", "proponer",
            "confiar", "dormir", "moler", "estar",
            "descifrar", "quebrar", "amar", "recoger",
            "querer", "descifrador", "vaina", "aquel",
            "aquella", "cuyo", "cuya", "cesped", "arbol",
            "televisión", "arepa", "empanada", "vaso",
            "tierra", "suelo", "cielo", "pared", "sotano",
            "atica", "triangulo", "puerta", "lavaplatos",
            "cuadro", "abrelatas", "circulo", "pisina",
            "flecha", "antojito", "resbalarse","hincharse",
            "teniente", "capitán", "enfermera", "médico",
            "cero", "cerdo", "alcalde", "rango", "oficial",
            "partido", "equipo", "moscú", "dinamarca",
            "aleman", "hindu", "fallar", "mayor", "nino", "nina",
            "padrino", "patrón", "niña", "niño", "nene", "nena",
            "ayudar", "apoyar", "resistir", "capital", "consejo",
            "consejero", "consejera", "llegar", "ancho", "hondo",
            "rio", "arroyo", "hoyo", "calefacción", "anchura",
            "altura", "escosia", "colina", "valle", "llano",
            "parilla", "almohada", "cobija", "escopeta", "rifle",
            "pistola", "coche", "derecho"
            ];


/*Select from word array*/
function randomWord() {
  return words[Math.floor(Math.random() * 100)].split('');
}

/*Render character spaces to View*/
function underline() {
  word = randomWord();

  for (var i = 0; i < word.length; i++) {
    correctIndices[i] = "_";
    var node = $("<div></div>").text("_");
    $("#underline-container").append(node);
  }
}


function checkLetter(input) {
  // Get the index of the letter in the word, if it exists.
  // If it does not exist, foundIndex equals -1.
  console.log("here's your word:", word, " and here's your input: ", input)
  var foundIndex = word.indexOf(input);

  if (foundIndex === -1) { // Letter not found.
    console.log("No letter yet.");
  } else { // Letter found!
    // Repeat the following steps as long as the search for the
    // letter in the word returned an index! (ie, it didn't return -1).
    while (foundIndex !== -1) {
      console.log("Letter found:", foundIndex);

      // Add the found index to the list of found indices.
      correctIndices.splice(foundIndex, 1, input);
      $("#underline-container div:nth-child(" + (foundIndex + 1).toString() + ")").text(input);
      console.log(correctIndices);

      // Look through the word for ANOTHER instance of the letter,
      // starting at the next letter from the last one found.
      foundIndex = word.indexOf(input, foundIndex+1);
    } // ... go back to the while condition ...

    // Check to see if this letter finished the word! (Ie, you have
    // pushed into correctIndices all the indices).
    // if (correctIndices.length === word.length) {
    //   console.log("¡NOS SALVASTE!");
    // }
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
  // if (isPlaying) {
  //   $("PlayButton").text("Start Game");
  // }
  $('#underline-container').text("");
  underline();
  timer(20);
}

/* Event listener for letter guess input*/
// $(".letter-button").on("click", checkLetter(this));
  $('.letter-button').each(function(button) {
    $(this).on("click", function() {
      checkLetter($(this).text())
    })
  });

/* Event listener for click - start game*/
$('#startHanging').on("click", startGame);




// //Determine a Win condition
function winOrLose() {
  if ('underline-container'.length === word.length) {
    clearTimeOut();
    console.log("TOTAL WIN, BRAH!");
  } else {
    if (correctIndices.length !== word.length && time === 0)
    console.log("FAIL! FAIL! FAIL!");
  }
}
