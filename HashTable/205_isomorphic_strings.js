/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let switchLetter = {};
  let compareString = "";

  // Mapping s to t the hashtable.
  for (let i = 0; i < s.length; i++) {
    if (switchLetter[t[i]]) {
      continue;
    } else if (Object.values(switchLetter).includes(s[i])) {
      continue;
    } else {
      switchLetter[t[i]] = s[i];
    }
  }

  for (let j = 0; j < t.length; j++) {
    compareString += switchLetter[t[j]];
  }

  return s === compareString;
};

// 2nd approach - using javascript built-in function - indexOf
var isIsomorphic2 = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
};
