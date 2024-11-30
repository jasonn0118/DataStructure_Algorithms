// Naive solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const newSortS = s.split('').sort();
  const newSortT = t.split('').sort();

  for (let i = 0; i < s.length; i++) {
    if (newSortS[i] !== newSortT[i]) {
      return false;
    }
  }
  return true;
};
// Time complexity is O(nlogn)
// Space complexity is O(n)

// Better solution
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    map[t[i]] = (map[t[i]] || 0) - 1;
  }

  for (let key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
};

// Time complexity is O(n)
// Space complexity is O(n)

// Optimized solution
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;

  // There are 26 characters in the English alphabet, so we can use an array of size 26 to store the count of each character
  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // a = 97 in ASCII
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i]) return false;
  }

  return true;
};

// Time complexity is O(n)
// Space complexity is O(1)
