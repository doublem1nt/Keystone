// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// String Character Pool
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNum = "0123456789";
var charSpec = "!@#$%^&*()_+|}{:?";
var pool = "";

function writePassword() {
    alert("Lets begin by specifying the criteria desired for your password.");    
    var upperLowerBoth = prompt("[ CRITERIA#1 ]\nUtilize only lower case, only upper case or both ? \n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilize both");
    while (upperLowerBoth !== "1" && upperLowerBoth !== "2" && upperLowerBoth !== "3") {
        upperLowerBoth = prompt("Please try that again, you may ONLY input 1, 2 or 3.\n Input 1 for lower case only \n Input 2 for upper case only \n Input 3 to utilze both.");
    } if (upperLowerBoth === "1") {
        pool += charLower;
    } else if (upperLowerBoth === "2") {
        pool += charUpper;
    } else {
        pool = pool + (charUpper + charLower);
    }

    var lengthPass = prompt("[ CRITERIA#2 ]\n Please specify the desired password length.\n Please Input a number between 8 & 128.");

    // Data validation for lengthPass to be integers at/or between 8 and 128. Continues to loop until condition is satisfied. 
    while (lengthPass < 8 || lengthPass > 128) {
        lengthPass = prompt("Please try that again !!\n You may ONLY input #s between (or equal to) 8 and 128.");
    }

    var numbersInclude = confirm("[ CRITERIA#3 ]\nWould you like to include numbers in your password?");

    if (numbersInclude) {
        pool += charNum;
    }
    
    var speCharInclude = confirm("[ CRITERIA#4 ]\nLastly, would you like to include special characters?");
    if (speCharInclude) {
        pool += charSpec;
    }
    

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var password = generatePassword();
// function generatePassword();
// passwordText.value = password;
    
