/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //Naive solution: using two pointers and move if there are matched.
  let forward = "";
  let backward = "";
  const lowercaseS = s.toLowerCase();

  // forward
  for (let i = 0; i < s.length; i++) {
    // ASCII code for lowercase letters
    if (
      (lowercaseS[i].charCodeAt() > 96 && lowercaseS[i].charCodeAt() < 123) ||
      (lowercaseS[i].charCodeAt() > 47 && lowercaseS[i].charCodeAt() < 58)
    ) {
      forward += lowercaseS[i];
    }
  }
  // backward
  for (let j = s.length - 1; j >= 0; j--) {
    if (
      (lowercaseS[j].charCodeAt() > 96 && lowercaseS[j].charCodeAt() < 123) ||
      (lowercaseS[j].charCodeAt() > 47 && lowercaseS[j].charCodeAt() < 58)
    ) {
      backward += lowercaseS[j];
    }
  }
  console.log({ forward, backward, result: forward === backward });
  return forward === backward;
};

// 2nd approach - Using two pointers
var isPalindrome2 = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      console.log(false);
      return false;
    }
    left++;
    right--;
  }
  return true;
};

isPalindrome2("A man, a plan, a canal: Panama");
