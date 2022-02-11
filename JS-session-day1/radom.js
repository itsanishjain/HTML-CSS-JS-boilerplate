function generateRandomNumber() {
  var max = 1;
  var min = 30000;

  var diff = max - min; // return 5
  console.log(`Difference between ${max} and ${min} is:`, diff);

  // Math.floor() function returns the largest integer less than or equal to a given number

  var randomNumber = Math.random(); // function returns integers between from 0 -> 1 [ex: 0.001,0.2]
  console.log("Random Number:", randomNumber);

  // Return number in specific range
  var randomNumnerInRange = Math.floor(randomNumber * diff + 1 + min);

  console.log(
    `Random Function between ${min} and ${max} is:`,
    randomNumnerInRange
  );

  document.querySelector("#number").innerHTML = randomNumnerInRange;
  // return randomNumnerInRange;
}

document
  .querySelector("#generate-number")
  .addEventListener("click", generateRandomNumber);
