// Assignment code here


const charOptions = {
  lowerAlpa: "abcdefghijklmnopqrstuvwxyz",
  upperAlpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialCharacters: "!@#$%^&*()_-=+?/"

};




// Get references to the #generate element
let generateBtn = document.querySelector("#generate");



function generatePassword(){
  let requiredPassChar = "";
  
  let passLength = prompt("Choose a password length between 8 and 128");
    if(passLength >= 8 && passLength <= 128){
  
          let lowerAlpa = confirm("Include lower case characters?");
          if (lowerAlpa){
            requiredPassChar += charOptions.lowerAlpa;
          };
          
          let upperAlpha = confirm("Include upper case characters?");
          if (upperAlpha){
            requiredPassChar += charOptions.upperAlpha;
          };
          
          let numbers = confirm("Include numbers?");
          if (numbers) {
            requiredPassChar += charOptions.numbers;
          };
          
          let specialCharacters = confirm("Include special characters");
          if (specialCharacters) {
            requiredPassChar += charOptions.specialCharacters;
          };

          
          console.log(requiredPassChar);

          if (lowerAlpa === false && upperAlpha === false && numbers === false && specialCharacters === false){
            alert("You must select at least one criteria.  Please click Generate Password again")
          } else{
          
          let password = "";
          for (let i = 0; i < passLength; i++){
            password += requiredPassChar[Math.floor(Math.random() * requiredPassChar.length)]
          }

          return password;
        }
      } else {
        alert("Invalid password length.  Please click Generate Password again");

      }
};

// Write password to the #password input



function writePassword() {


  // console.log(passLength, lowerCase, upperCase, numeric, specialChar);
  
  let password = generatePassword();

  let passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
