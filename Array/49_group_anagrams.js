/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// First Approach - Using HashTable and Sorting
// Time Complexity: O(n * m * log(m))
var groupAnagrams = function (strs) {
  if (strs.length < 2) {
    return [strs];
  }

  let result = [];
  let hashTable = new Map();
  let slotNum = 0;
  for (let i = 0; i < strs.length; i++) {
    let currentSortStr = strs[i].split("").sort().join("");

    if (!hashTable.has(currentSortStr)) {
      hashTable.set(currentSortStr, slotNum);
      slotNum++;
    }

    if (result[hashTable.get(currentSortStr)]) {
      result[hashTable.get(currentSortStr)].push(strs[i]);
    } else {
      result[hashTable.get(currentSortStr)] = [strs[i]];
    }
  }
  return result;
};
