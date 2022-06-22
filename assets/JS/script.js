// Assignment Code
var generateBtn = document.querySelector("#generate");

const numUppers = Number(window.prompt("How many uppercase letters?", "2"));
const numLowers = Number(window.prompt("How many lowercase letters?", "6"));
const numNumbers = Number(window.prompt("How many numbers?", "2"));
const numSymbols = Number(window.prompt("How many symbols would you like to use?", "2"));
const numLength = Number(window.prompt("How long do you want your password to be?", '8-128'))

var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*"];

var upperAnswer = uppers[Math.floor(Math.random() * numUppers.Number)]
var lowerAnswer = lowers[Math.floor(Math.random() * numLowers.Number)]
var numbersAnswer = numbers[Math.floor(Math.random() * numNumbers.Number)]
var symbolsAnswer = symbols[Math.floor(Math.random() * numSymbols.Number)]
var lengthAnswer = length

function generatePassword() {

}





// const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))
// const generatePassword = (length = 16) => { // password will be @Param-length, default to 8, and have at least one upper, one lower, one number and one symbol
//   let pwd = "";
//   pwd += getRandomCharFromString(Allowed.Uppers); //pwd will have at least one upper
//   pwd += getRandomCharFromString(Allowed.Lowers); //pwd will have at least one lower
//   pwd += getRandomCharFromString(Allowed.Numbers); //pwd will have at least one number
//   pwd += getRandomCharFromString(Allowed.Symbols);//pwd will have at least one symbolo
//   for (let i = pwd.length; i < length; i++)
//       pwd += getRandomCharFromString(Object.values(Allowed).join('')); //fill the rest of the pwd with random characters
//   return pwd
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
