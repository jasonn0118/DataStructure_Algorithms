/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const stringArr = s.split(" ");
  let lastStringCount = 0;

  for (i = stringArr.length - 1; i >= 0; i--) {
    if (stringArr[i] !== "") {
      lastStringCount = stringArr[i].length;
      break;
    }
  }

  return lastStringCount;
};
