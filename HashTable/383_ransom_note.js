/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomNoteMap = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNoteMap.has(ransomNote[i])) {
      ransomNoteMap.set(ransomNote[i], ransomNoteMap.get(ransomNote[i]) + 1);
    } else {
      ransomNoteMap.set(ransomNote[i], 1);
    }
  }

  for (let j = 0; j < magazine.length; j++) {
    if (ransomNoteMap.has(magazine[j])) {
      ransomNoteMap.set(magazine[j], ransomNoteMap.get(magazine[j]) - 1);
      if (ransomNoteMap.get(magazine[j]) === 0) {
        ransomNoteMap.delete(magazine[j]);
      }
    }
  }
  if (ransomNoteMap.size === 0) {
    return true;
  }

  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// 2nd approach
