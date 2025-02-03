/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// First Approach - Using dequeuing.
var isSubsequence = function (s, t) {
  if (!s.length) return true;

  if (s.length > t.length) return false;

  let sArr = s.split("");

  for (let i = 0; i < t.length; i++) {
    if (sArr[0] === t[i]) {
      sArr.shift();
    }
  }

  return !sArr.length;
};

isSubsequence("abc", "ahbgdc"); // true

// Second Approach - Using Two Pointers
var isSubsequence2 = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};
