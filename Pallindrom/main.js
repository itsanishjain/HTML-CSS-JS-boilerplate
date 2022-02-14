console.log("Main loaded.....");

function checkPailndromWithReverse(str) {
  var str = str.toLowerCase();
  var str = str.replace(/ /g, "");
  console.log("str:", str);
  var str2 = str.split("");
  console.log("STR2:", str2);
  var str3 = str2.reverse();
  var str4 = str3.join("");
  console.log("STR4:", str4);
  if (str == str4) {
    return true;
  } else {
    return false;
  }
}

document.querySelector("#check-pailndrom").addEventListener("click", () => {
  console.log("Button clicked");
  const output = document.querySelector("#output");
  var str = document.querySelector("#pailndrom-input");
  if (checkPailndromWithReverse(str.value)) {
    output.innerHTML = `Yes, ${str.value} is pailndrom`;
  } else {
    output.innerHTML = `No, ${str.value} is not pailndrom`;
  }
  str.value = "";
});

console.log("IS PALINDROM:", checkPailndromWithReverse("r a dar"));

function checkPailndromWithLoop(str) {
  var str2 = str.toLowerCase();
  //   var str2 = str.split("");
  //   console.log(str2);

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] != str2[str2.length - 1 - i]) {
      return false;
    }
  }
}
