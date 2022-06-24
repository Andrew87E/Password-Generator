// Assignment Code
var generateBtn = document.querySelector("#generate");

let pwd = '';

var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*"];

let minLength = 8;
let maxLength = 128;

function generateLength() {
  var numLength = Number(window.prompt("How long do you want your password to be?", '8-128'));
  if (numLength < 8 ) {
    alert.prompt("You must enter a value between 8 and 128");
    return null;
  } else if (numLength > 128 ) {
      alert.prompt("You must enter a value between 8 and 128");
      return null;
  } else {
    return numLength;
  }
}

function generateUppers() {
  let numUppers = Number(window.prompt("How many uppercase letters?", "2"));
  if (!numUppers){
    return null;
  } else {
      var upperAnswer = uppers[Math.floor(Math.random() * numUppers.Number)];
      return upperAnswer;
  }
}

function generateLowers() {
  let numLowers = Number(window.prompt("How many lowercase letters?", "6"));
  if(!numLowers){
    return null;
  } else{
    var lowerAnswer = lowers[Math.floor(Math.random() * numLowers.Number)];
    return lowerAnswer;
  }
}

function generateNumbers() {
  let numNumbers = Number(window.prompt("How many numbers?", "2"));
  if(!numNumbers){
    return null;
  } else{
    var numbersAnswer = numbers[Math.floor(Math.random() * numNumbers.Number)];
    return numbersAnswer;
  }
}

function generateSymbols() {
  let numSymbols = Number(window.prompt("How many symbols would you like to use?", "2"));
  if(!numSymbols){
    return null;
  } else{
    var symbolsAnswer = symbols[Math.floor(Math.random() * numSymbols.Number)];
    return symbolsAnswer;
  }
}

function generatePassword() {
var password = 
}
 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
