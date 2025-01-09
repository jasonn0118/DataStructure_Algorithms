function reverseString(str) {
  let splitedStr = str.split("");
  let reversed = new Array();

  for (let i = splitedStr.length - 1; i >= 0; i--) {
    reversed.push(splitedStr[i]);
  }

  return reversed.join("");
}

function reverseString2(str) {
  // Using the JS built-in functions
  return str.split("").reverse().join("");
}

reverseString2("hello");
