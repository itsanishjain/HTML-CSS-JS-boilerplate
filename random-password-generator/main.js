console.log("connected..");

// Variables
var slider = document.querySelector("#myRange");
var sliderOutput = document.getElementById("sliderValue");
sliderOutput.innerHTML = slider.value; // Display the default slider value

var copy = document.getElementById("copy");

let generatedPassword;

console.log("sliderOutput", sliderOutput);

slider.oninput = function () {
  sliderOutput.innerHTML = this.value;
  generatedPassword = document.querySelector("#generatedPassword");
  generatedPassword.value = generateRadomPassword(parseInt(this.value));
};

function generateRadomPassword(passwordLength = 10) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$^&*()@#${}/<>";
  let randomPassword = "";
  for (var i = 0, n = charset.length; i < passwordLength; ++i) {
    randomPassword += charset.charAt(Math.floor(Math.random() * n));
  }

  let isUpperCase = document.getElementById("p-uppercase").checked;
  let isLowerCase = document.getElementById("p-lowercase").checked;
  let isNumber = document.getElementById("p-number").checked;
  let isSymbol = document.getElementById("p-symbol").checked;

  if (!isUpperCase) {
    console.log("NO UPP");
    randomPassword = randomPassword.replace(/[A-Z]/g, "");
    console.log("DFADSF", randomPassword);
  }
  if (!isLowerCase) randomPassword = randomPassword.replace(/[a-z]/g, "");
  if (!isNumber) randomPassword = randomPassword.replace(/[0-9]/g, "");

  if (!isSymbol) {
    randomPassword = randomPassword.replace(/[^a-zA-Z0-9]/g, "");
  }

  return randomPassword;
}

copy.addEventListener("click", () => {
  console.log("DFADSF");
  if (generatedPassword.value == "") {
    alert("Please generate password!");
  } else {
    generatedPassword.select(); // it selects text inside input boxes
    document.execCommand("copy"); // copy, cut, paste // execCommand is deprecated // alternatives -->
    alert("Password copied to clipboard!");
  }
});
