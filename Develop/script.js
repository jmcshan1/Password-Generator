// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){

  var passwordLength = window.prompt("How many character would you like your password to contain?");

  if (!(8 <= passwordLength && passwordLength <= 128)){
    window.alert("Pick a number of at least 8 and no more than 128.");
    generatePassword();
  };

  var passwordLower = window.confirm("Click OK to include lowercase characters.");
  var passwordUpper = window.confirm("Click OK to include uppercase characters.");
  var passwordNumeric = window.confirm("Click OK to include numeric characters.");
  var passwordSpecial = window.confirm("Click OK to include special characters.");
  
}

function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
