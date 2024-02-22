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

    if (passLength < 8 || passLength > 128 || isNaN(passLength)){
        alert("Your password did not meet the character requirement. Password must be between 8 and 128 characters. Please enter another number between 8 and 128.");
        return;
    } else {
        var lettersUppercase = confirm("Click ok in order to generate uppercase letters in your password.");
        var lettersLowercase = confirm("Click ok in order to generate lowercase letters in your password.");
        var chooseNumbers = confirm("Click ok in order to generate numbers in your password.");
        var chooseSymbols = confirm("Click ok in order to generate symbols in your password.");
    }

    if(lettersUppercase) {multiple += uppercaseLetters;}
    if(lettersLowercase) {multiple += lowercaseLetters;}
    if(chooseNumbers) {multiple += numbers;}
    if (chooseSymbols) {multiple += symbols;}

    for (x = 0; x < passLength; x++) {
        
        randomPass += multiple[Math.floor(Math.random() * multiple.length)]
    }
    return(randomPass);
}

    var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword(randomPass) {
    if (password.length ===0){
        return;
    }
 

  passwordText.value = randomPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){ writePassword(generatePassword())});
