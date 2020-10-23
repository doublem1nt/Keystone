// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var upperOrLower = promt("I'm Glad you would like to begin! \n For your password, would you like to include only Lower Case or a combination of both ? \n Please input 1 for Lower Case Only or input 2 for both Upper & Lower Case.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
