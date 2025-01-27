/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let hashMap = {};
  let patternArr = pattern.split("");
  let strArr = s.split(" ");

  if (patternArr.length !== strArr.length) {
    return false;
  }

  for (let i = 0; i < patternArr.length; i++) {
    if (hashMap[patternArr[i]]) {
      if (hashMap[patternArr[i]] !== strArr[i]) {
        return false;
      }
    } else {
      if (Object.values(hashMap).includes(strArr[i])) {
        return false;
      }
      hashMap[patternArr[i]] = strArr[i];
    }
  }

  return true;
};
