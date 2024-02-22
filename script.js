// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
    console.log("Button Click");

    //prompt w password criteria
    // length 8-128, character types: lowercase, uppercase, numberic, special characters.
    // input should validate and 1 character type must be selected
    var uppercaseLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var lowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
    var numbers = "1234567890";
    var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var multiple = "";
    var randomPass = "";

    var passLength = prompt(
        "Your password must meet the requirement of 8 to 128 characters, enter the desired number of characters in a numberic character. "
    );

    
    
    return "Generated Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
