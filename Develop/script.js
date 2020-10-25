// Assignment Code
var generateBtn = document.querySelector("#generate");

// String Character Pool
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNum = "0123456789";
var charSpec = "!@#$%^&*()_+|}{:?";
var pool = "";

// Upon click of the Generate Button, Write Password begins asking for Password Criteria
function generatePassword() {
    alert("Lets begin by specifying the criteria desired for your password.");    
    var upperLowerBoth = prompt("[ CRITERIA#1 ]\nUtilize only lower case, only upper case or both ? \n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilize both");


    // While loop forces user to provide only valid input (1,2,3), continues to loop until proper input received. 
    while (upperLowerBoth !== "1" && upperLowerBoth !== "2" && upperLowerBoth !== "3") {
        upperLowerBoth = prompt("Please try that again, you may ONLY input 1, 2 or 3.\n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilze both.");

    // Based on user input, script updates pool with associated string of characters
    } if (upperLowerBoth === "1") {
        pool += charLower;
    } else if (upperLowerBoth === "2") {
        pool += charUpper;
    } else {
        pool = pool + (charUpper + charLower);
    }

    // User defines desired password length
    var lengthPass = prompt("[ CRITERIA#2 ]\n Please specify the desired password length.\n Please Input a number between 8 & 128.");

    // Data validation for lengthPass to be integers at/or between 8 and 128. Continues to loop until condition is satisfied. 
    while (lengthPass < 8 || lengthPass > 128) {
        lengthPass = prompt("Please try that again !!\n You may ONLY input #s between (or equal to) 8 and 128.");
    }

    // Convert var lengthPass into a integer
    var intLength = parseInt(lengthPass);
    
    // User defines if numbers is desired for password
    var numbersInclude = confirm("[ CRITERIA#3 ]\nWould you like to include numbers in your password?");

    if (numbersInclude) {
        pool += charNum;
    }
    
    // User defines if special characters is desired for password
    var speCharInclude = confirm("[ CRITERIA#4 ]\nLastly, would you like to include special characters?");
    
    if (speCharInclude) {
        pool += charSpec;
    }

    // For Loop generates password after string variable pool contains all character's requested by user
    var password = "";
    for (var i=0; i < intLength; i++) {
        password += pool.charAt(Math.floor(Math.random() * pool.length));
    }

    return password;
}

function writePassword() {
    var password = generatePassword();
    
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Event listener to generate button
  generateBtn.addEventListener("click", writePassword);