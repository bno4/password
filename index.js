const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^`ù!;:&é\"'(-è_ç";
const rangeValue = document.getElementById("password-length");
console.log(rangeValue.value);
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Merci de sélectionner au moins un critère");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value); //copy password
  generateButton.textContent = "Copié !";
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
};
generateButton.addEventListener("click", generatePassword);
