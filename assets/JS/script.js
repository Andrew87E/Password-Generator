// Assignment Code
var generateBtn = document.querySelector("#generate");
// empty variable to be used later
var length ;

// character arrays 
var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*"];

// function to generate the password
function generatePassword(){
  var lengthAnswer = window.prompt("How long should your password be? Please choose a number between " + minLength +" and " +maxLength); // prompt the use for the number of characters to be used in the password
  //check if the user input is Not a Number...alert the user and return to the begining
  if (isNaN(lengthAnswer)) {
    window.alert(lengthAnswer +" is not a valid number. Please try again.");
    return;
    //check if the user input is larger than 128...alert the user and return to the begining
  } else if (lengthAnswer > 128){
    window.alert(lengthAnswer +" is not a valid selection. Please try again.");
    return;
    //check if the user input is smaller than 8...alert the user and return to the begining
  } else if (lengthAnswer < 8){
    window.alert(lengthAnswer +" is not a valid number");
    return;
  }
// empty arrays for future use
  var pass = [];
  var pwd = [];
  // counter to ensure good distribtion of each character
  var counter = 0;
// ask the user if they want to use numbers, symbols, uppercase, and lowercase
  let numUppers = Number(window.confirm("Would you like uppercase letters?"));  
  let numLowers = Number(window.confirm("Would you like lowercase letters?"));
  let numNumbers = Number(window.confirm("Would you like Numbers?"));
  let numSymbols = Number(window.confirm("would you like symbols?"));
  //if using uppers shuffle the whole uppers array and push it to the empty pwd array add +1 to the counter
  if (numUppers) {
    pwd = pwd.concat(uppers);
    pass.push(uppers[Math.floor(Math.random() * uppers.length)]);
    counter++
   //if using lowers shuffle the whole lowers array and push it to the empty pwd array add +1 to the counter
  } if (numLowers) {
    pwd = pwd.concat(lowers);
    pass.push(lowers[Math.floor(Math.random() * lowers.length)]);
    counter++
    //if using numbers shuffle the whole numbers array and push it to the empty pwd array add +1 to the counter
  } if (numNumbers) {
    pwd = pwd.concat(numbers);
    pass.push(numbers[Math.floor(Math.random() * numbers.length)]);
    counter++
    //if using symbols shuffle the whole symbols array and push it to the empty pwd array add +1 to the counter
  } if (numSymbols) {
    pwd = pwd.concat(symbols);
    pass.push(symbols[Math.floor(Math.random() * symbols.length)]);
    counter++
    //check to make sure the user selected at least 1 character set
  } if (!(numUppers || numUppers || numSymbols || numNumbers)) {
    window.alert("Please select a valid password format.");
  }
    //for loop to pull a random character set from the combined array
for (let i = 0; i < lengthAnswer - counter; i++) {
  var random = Math.floor(Math.random() * pwd.length);
  pass.push(pwd[random]);
}
// function to randomly shuffle the combined array ensures a random distribution of characters 
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // whle there are characters left to shuffle 
  while (currentIndex != 0) {i
    // pick the remaining
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // swap with the current
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
//shuffle the combined array
shuffle(pass);
return pass.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);