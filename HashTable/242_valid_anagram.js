/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// First Approach
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map[t[j]]) {
      map[t[j]] -= 1;
      if (map[t[j]] === 0) {
        delete map[t[j]];
      }
    }
  }

  return !Object.values(map).length;
};
isAnagram("car", "rat");

// Second Approach - Using ASCII CODE
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }

  for (let j = 0; j < t.length; j++) {
    arr[t.charCodeAt(j) - 97]--;
  }

  return !arr.some((el) => el !== 0);
};
