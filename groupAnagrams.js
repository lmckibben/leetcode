// Given an array of strings strs, group the anagrams
// together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically
// using all the original letters exactly once.

// Example 1:
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// const strs = [''];
// Output: [[""]]

// Example 3:
// const strs = ['a'];
// Output: [["a"]]

const groupAnagrams = function (strs) {
  const hash = {};
  if (strs.length === 1) {
    return [strs];
  }
  for (const str of strs) {
    const splitStr = str.split('').sort();
    if (!hash[splitStr]) {
      hash[splitStr] = [str];
    } else {
      hash[splitStr].push(str);
    }
  }

  return Object.values(hash);
};
console.log(groupAnagrams(strs));
