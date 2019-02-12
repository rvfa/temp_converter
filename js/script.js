// console.log('ready');

// this is the <p> where the result will be displayed
var convertionResult = document.getElementById('temp-convertion-result');


// Both functions bellow to the same thing, one calculates C to F and the other one
// calculates F to C
function convertToCelcius() {

  // this variable holds the user input
  var userInput = document.getElementById('user-input-temp').value;

  // checks if the input is a number or not
  if (userInput == "" || isNaN(userInput)) {
    // if it's not a number you get an alert
    alert("Please type a numeric value");
    
  } else {
    // formula used for conversion
    var celciusTemp = 5 / 9 * (userInput - 32);
    // tempFinal holds the value with only 3 decimal numbers
    var tempFinal = celciusTemp.toFixed(3);
    // display the final result message
    convertionResult.innerHTML = userInput + "°F converts to " + tempFinal + "°C.";
  } // closes the if statement
} // closes the convertToCelcius function


function convertToFah() {

  var userInput = document.getElementById('user-input-temp').value;

  if (userInput == "" || isNaN(userInput)) {

    alert("Please type a numeric value");

  } else {

    var fahTemp = 9 / 5 * userInput + 32;

    var tempFinal = fahTemp.toFixed(3);

    convertionResult.innerHTML = userInput + "°C converts to " + tempFinal + "°F.";
  } // closes the if statement
} // closes the convertToFah function

// Conversion formulas
// F to C > C = 5/9(F - 32)
// C to F > F = 9/5(C) + 32
