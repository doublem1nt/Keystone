// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user to define desired criteria for their password

function writePassword() {
  alert("Lets begin by specifying the criteria desired for your password.");

  // Defining Criteria for Password

  var upperLowerBoth = prompt("[ CRITERIA#1 ]\nUtilize only lower case, only upper case or both ? \n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilize both");
    // Data validation for upperLowerBoth to be 1, 2 or 3. Continues to loop until condition is satisfied.
    while (upperLowerBoth !== "1" && upperLowerBoth !== "2" && upperLowerBoth !== "3") {
    upperLowerBoth = prompt("Please try that again, you may ONLY input 1, 2 or 3.\n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilze both.");
    } 
  
  var lengthPass = prompt("[ CRITERIA#2 ]\n Please specify the desired password length.\n Please Input a number between 8 & 128.");
    // Data validation for lengthPass to be integers at/or between 8 and 128. Continues to loop until condition is satisfied. 
    while (lengthPass < 8 || lengthPass > 128) {
    lengthPass = prompt("Please try that again !!\n You may ONLY input #s between (or equal to) 8 and 128.");
    } 
  
  var numbersInclude = confirm("[ CRITERIA#3 ]\nWould you like to include numbers in your password?");
  var speCharInclude = confirm("[ CRITERIA#4 ]\nLastly, would you like to include special characters?");
    

  
  var password = generatePassword();
  passwordText.value = password;
}
