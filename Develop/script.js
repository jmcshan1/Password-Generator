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

  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar="0123456789";
  var specialChar = ' !"#$%&()*+,-./:;<=>?@[\]^_{|}`~' + "'";
  var passwordArray = '';
  //GeneratedPassword
  var generatedPassword;
  if(passwordLower){
    passwordArray = passwordArray + lowerChar;
  }
  if(passwordUpper){
    passwordArray = passwordArray + upperChar;
  }
  if(passwordNumeric){
    passwordArray = passwordArray + numericChar;
  }
  if(passwordSpecial){
    passwordArray = passwordArray + specialChar;
  }

  console.log(passwordArray);

  var generatedPassword= "";

  for(i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    generatedPassword = generatedPassword.concat(passwordArray[randomIndex]);
  }

  window.alert("Your password is " + generatedPassword + ".");
  console.log(generatedPassword)

  return generatedPassword;
}

function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
