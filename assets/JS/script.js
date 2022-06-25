// Assignment Code
var generateBtn = document.querySelector("#generate");

var length ;

var minLength = 8;
var maxLength = 128;

var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*"];


function generatePassword(){
  var lengthAnswer = window.prompt("How long should your password be? Please choose a number between " + minLength +" and " +maxLength);
  if (isNaN(lengthAnswer)) {
    window.alert(lengthAnswer +"is not a valid number. Please try again.");
    return;
  } else if (lengthAnswer > 128){
    window.alert(lengthAnswer +"is not a valid selection. Please try again.");
    return;
  } else if (lengthAnswer < 8){
    window.alert(lengthAnswer +"is not a valid number");
    return;
  }
  var pass = [];
  var pwd = [];
  var counter = 0;

  let numUppers = Number(window.confirm("Would you like uppercase letters?"));  
  let numLowers = Number(window.confirm("Would you like lowercase letters?"));
  let numNumbers = Number(window.confirm("Would you like Numbers?"));
  let numSymbols = Number(window.confirm("would you like symbols?"));
  if (numUppers) {
    pwd = pwd.concat(uppers);
    pass.push(uppers[Math.floor(Math.random() * uppers.length)]);
    counter++
  } if (numLowers) {
    pwd = pwd.concat(lowers);
    pass.push(lowers[Math.floor(Math.random() * lowers.length)]);
    counter++
  } if (numNumbers) {
    pwd = pwd.concat(numbers);
    pass.push(numbers[Math.floor(Math.random() * numbers.length)]);
    counter++
  } if (numSymbols) {
    pwd = pwd.concat(symbols);
    pass.push(symbols[Math.floor(Math.random() * symbols.length)]);
    counter++
  } if (!(numUppers || numUppers || numSymbols || numNumbers)) {
    window.alert("Please select a valid password format.");
  }
//console.log(pwd);
//console.log(lengthAnswer);

for (let i = 0; i < lengthAnswer - counter; i++) {
  var random = Math.floor(Math.random() * pwd.length);
  pass.push(pwd[random]);
//console.log(random);
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
// var arr = [2, 11, 37, 42];
shuffle(pass);
// console.log(pass);
//console.log(pass);
return pass.join("");
}



  
  





//  let password = pwd[Math.floor(Math.random() * pwd.length).toString]











 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var password = function(){
//   var numLength = Number(window.prompt("How long do you want your password to be?", '8-128'));
//   if (numLength < 8 ) {
//     alert.prompt("You must enter a value between 8 and 128");
//     return null;
//   } else if (numLength > 128 ) {
//       alert.prompt("You must enter a value between 8 and 128");
//       return null;
//   } else {
//     return lengthAnswer;
//   }
// }



// function generateLength() {
//   var numLength = Number(window.prompt("How long do you want your password to be?", '8-128'));
//   if (numLength < 8 ) {
//     alert.prompt("You must enter a value between 8 and 128");
//     return null;
//   } else if (numLength > 128 ) {
//       alert.prompt("You must enter a value between 8 and 128");
//       return null;
//   } else {
//     return numLength;
//   }
// }
