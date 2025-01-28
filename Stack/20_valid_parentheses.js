/**
 * @param {string} s
 * @return {boolean}
 */
// First Approach
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  let parenthesesArr = s.split("");
  let matchArr = new Array();

  for (let i = s.length - 1; i >= 0; i--) {
    console.log(matchArr, parenthesesArr);
    switch (parenthesesArr[i]) {
      case ")":
      case "}":
      case "]":
        matchArr.push(parenthesesArr.pop());
        break;
      case "(":
        parenthesesArr.pop();
        if (matchArr.pop() !== ")") return false;
        break;
      case "{":
        parenthesesArr.pop();
        if (matchArr.pop() !== "}") return false;
        break;
      case "[":
        parenthesesArr.pop();
        if (matchArr.pop() !== "]") return false;
        break;
      default:
        break;
    }
  }
  console.log(parenthesesArr, matchArr);
  return parenthesesArr.length === 0 && matchArr.length === 0;
};

// console.log(isValid("))")); //false

// Second Approach - Using Stack and HashTable
var isValid2 = function (s) {
  let stackArr = new Array();
  let parenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (parenthesesMap[s[i]]) {
      stackArr.push(parenthesesMap[s[i]]);
    } else {
      if (stackArr.pop() !== s[i]) {
        return false;
      }
    }
  }

  return stackArr.length === 0;
};
console.log(isValid2("([])")); //true
