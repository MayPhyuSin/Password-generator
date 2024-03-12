
const generateButton = document.getElementById("generateButton");
const password = document.getElementById("password");

function generatePassword(){

  const pwLength = parseInt(document.getElementById("pwLength").value);
  const lowercaseChecked = document.getElementById("lowercase").checked;
  const uppercaseChecked = document.getElementById("uppercase").checked;
  const numberChecked = document.getElementById("number").checked;
  const symbolChecked = document.getElementById("symbol").checked;


  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&*-_()+=";

  let allowedChars = "";
  let generatedPassword ="";

  allowedChars += lowercaseChecked ? lowercaseChars : "";
  allowedChars += uppercaseChecked ? uppercaseChars : "";
  allowedChars += numberChecked ? numberChars : "";
  allowedChars += symbolChecked ? symbolChars : "";

  if (pwLength != Number(pwLength)) {
    password.innerHTML = "&#9888; Password length should only contain numbers";
    password.classList.remove("alert-primary");
    password.classList.add("alert-danger");
    password.style.fontSize = "16px";
    return;
  }

  if(pwLength <= 0 || pwLength > 30 ){
    password.innerHTML = "&#9888; Password length must be at least 1 and not longer than 30";
    password.classList.remove("alert-primary");
    password.classList.add("alert-danger");
    password.style.fontSize = "16px";
    return;
  }

    
  if(!allowedChars){
    password.innerHTML = "&#9888; At least 1 set of characters need to be selected";
    password.classList.remove("alert-primary");
    password.classList.add("alert-danger");
    password.style.fontSize = "16px";
    return;
   }
  
   for(let i = 0; i < pwLength; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[randomIndex];
   }

   password.textContent = generatedPassword;
   password.classList.remove("alert-danger");
   password.classList.add("alert-primary");
    
}

generateButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  generatePassword();
});




 