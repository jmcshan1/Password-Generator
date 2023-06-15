// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){

  // Prompts that asks the user for their criteria for the generated password
  var passwordLength = window.prompt("How many character would you like your password to contain?");
  // Checks if the user inputted password length meets the acceptance criteria
  if (!(8 <= passwordLength && passwordLength <= 128) && passwordLength){
    window.alert("Pick a number that is at least 8 and no more than 128.");
    return;
  }else if(!passwordLength){
    return;
  }

  var passwordLower = window.confirm("Click OK to include lowercase characters.");
  var passwordUpper = window.confirm("Click OK to include uppercase characters.");
  var passwordNumeric = window.confirm("Click OK to include numeric characters.");
  var passwordSpecial = window.confirm("Click OK to include special characters.");
  // Checks if the user picked at least one character type
  if (!passwordLower && !passwordUpper && !passwordNumeric && !passwordSpecial){
    window.alert("Pick at least one character type");
    return;
  }

  // Variables containing the all characters matching the prompted character types above
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar="0123456789";
  var specialChar = ' !"#$%&()*+,-./:;<=>?@[\]^_{|}`~' + "'";

  // Checks whichever character 
  // types the user selected and stores
  // the matching characters within one variable
  var passwordArray = '';

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

  // Variable to store the generated Password
  var generatedPassword= "";
  // Adds on a random character from passwordArray to generatedPassword
  for(i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    generatedPassword = generatedPassword.concat(passwordArray[randomIndex]);
  }

  // Window alert telling the user what their generated password is
  window.alert("Your password is " + generatedPassword + ".");
  console.log(generatedPassword);
  // Returns the generated password
  return generatedPassword;
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (typeof(password) === "string"){
    passwordText.value = password;
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
