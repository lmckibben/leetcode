// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word
// or phrase, typically using all the original letters exactly once.

// Example 1:
const s = 'anagram';
const t = 'nagaram';
// Output: true

// Example 2:
// const s = 'rat';
// const t = 'car';
// Output: false

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sSplit = s.split('');
  const tSplit = t.split('');
  for (const i in tSplit) {
    if (sSplit.includes(tSplit[i])) {
      const index = sSplit.indexOf(tSplit[i]);
      sSplit.splice(index, 1);
    }
  }
  if (sSplit.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram(s, t));
