// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*_-+=";
var characters = ""; //collect possible characters

var generateBtn = document.querySelector("#generate"); 

var lenSelect = function() {
  var numChars = prompt("Enter a length for your password. You may choose a number between 8 and 128 characters");
    //validate
  if (numChars === "" || numChars < 8 || numChars > 128) {
    alert("Not a valid option. Please try again.");
    lenSelect();
  } 
  return numChars;
};

//function to collect character types 
var charTypeSelect = function() {
  var lower = prompt("Would you like to include lowercase letters?");
  if (lower === "yes" || lower === "YES" ) {
    characters += lowercase;
  } 

  var upper = prompt("Would you like to include uppercase letters?");
  if (upper === "yes" || upper === "YES" ) {
    characters += uppercase;
  } 

  var num = prompt("Would you like to include numeric characters?");
  if (num === "yes" || num === "YES" ) {
    characters += numeric;
  } 
  
  var spec = prompt("Would you like to include any special characters? eg. !@#$%^&*_-+=");
  if (spec === "yes" || special === "YES" ) {
    characters += special;
  } 

  if (characters === "") {
    alert("You must select at least one character type. Please try again.");
    charTypeSelect();
  }

  return characters; 
};

function generatePassword() {
  alert("Welcome to the Password Generator. There will be several steps to create password");
  
  //call function to collect length
  var length = lenSelect();
  //call function to collect character types
  charTypeSelect(); 

  //generate password of specified length with the specified number of character types
  var password = "";
  for (var i = 0; i < length; i++) {
    //add a random character chosen from those available up to the length of the array
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);