console.log("TO PRINT ANYTHING");

//  this is how you create function in javascript
function addition(a, b) {
  let c = a + b; // let-  is scopes the variable to the function, we can use it outside the function, but we can change its value

  console.log(c);
  c = c + 100;
  return c; // return statement
}

var output = addition(10, 20); // var - I am a variable type you can change my values wherever you want I have no scope
console.log(output);

//  this is you use string in javascript
// const - you can't change the value of the variable
const POWER = "With Great Power comes Great Responsibility";

// how to select any html element in Js
const btn = document.querySelector("#button-id"); // this is how you select any element with element id

function signup() {
  console.log("signup, you just change your life");
  btn.innerHTML = '<h1>You just changed your life</h1>';
}

// add event listener on the button
btn.addEventListener("click", signup);
