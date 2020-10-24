// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  alert("Lets begin by specifying the criteria desired for your password.");
  var upperOrLower = prompt("[ CRITERIA#1 ]\nUtilize only lower case, only upper case or both ? \n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilze both");
  
  
  var password = generatePassword();
  passwordText.value = password;
}
