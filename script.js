// Assignment code here

let lowerAlpa = "abcdefghijklmnopqrstuvwxyz";
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*()_-=+?/";


const lowerCaseArr = lowerAlpa.split("");
const upperAlphaArr = upperAlpha.split("");
const numbersArr = numbers.split("");
const specialCharArr = specialCharacters.split("");



// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function passwordCriteria(){
  let passLength = prompt("Input the length of the password(between 8-128");
    if (passLength >= 8 && passLength <= 128){
  let lowerCase = confirm("Include lowercase letters?");
  let upperCase = confirm("Include uppercase letters?");
  let numeric = confirm("Include numbers?");
  let specialChar = confirm("include special characters?");
    } else {
      alert("password must be between 8 and 128 characters");
      passwordCriteria();
    }
}

// Write password to the #password input
function writePassword() {
  passwordCriteria();

  console.log(passLength, lowerCase, upperCase, numeric, specialChar);
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
