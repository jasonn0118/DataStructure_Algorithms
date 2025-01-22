/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  let prefixLength = prefix.length;
  for (let i = 1; i < strs.length; i++) {
    while (prefix != strs[i].substring(0, prefixLength)) {
      prefixLength--;
      if (prefixLength === 0) {
        return "";
      }
      prefix = prefix.substring(0, prefixLength);
    }
  }

  return prefix;
};
