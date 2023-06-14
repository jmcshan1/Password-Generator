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
  
  if (!passwordLower && !passwordUpper && !passwordNumeric && !passwordSpecial){
    window.alert("Pick at least one character type");
    generatePassword();
  }

  var numeric="0,1,2,3,4,5,6,7,8,9";
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var special = ' !"#$%&()*+,-./:;<=>?@[\]^_{|}`~' + "'";
  console.log(special);
  //GeneratedPassword
  var generatedPassword;

  for(i=0; i < passwordLength; i++){

    generatedPassword[i];
  }
}

function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
