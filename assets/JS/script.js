// Assignment Code
var generateBtn = document.querySelector("#generate");

let Allowed = {
  Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
  Lowers: "qwertyuiopasdfghjklzxcvbnm",
  Numbers: "1234567890",
  Symbols: "!@#$%^&*"
}

var Allow = confirm("")

function userSelection() {
  
}

if(Allowed.Uppers = true){

}

if(Allowed.Numbers = true){

}

if(Allowed.Symbols = true){

}





const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))
const generatePassword = (length = 16) => { // password will be @Param-length, default to 8, and have at least one upper, one lower, one number and one symbol
  let pwd = "";
  pwd += getRandomCharFromString(Allowed.Uppers); //pwd will have at least one upper
  pwd += getRandomCharFromString(Allowed.Lowers); //pwd will have at least one lower
  pwd += getRandomCharFromString(Allowed.Numbers); //pwd will have at least one number
  pwd += getRandomCharFromString(Allowed.Symbols);//pwd will have at least one symbolo
  for (let i = pwd.length; i < length; i++)
      pwd += getRandomCharFromString(Object.values(Allowed).join('')); //fill the rest of the pwd with random characters
  return pwd
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
