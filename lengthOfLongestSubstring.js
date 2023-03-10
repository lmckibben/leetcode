// Given a string s, find the length of the longest
// substring without repeating characters.

// Example 1:
// const s =s 'abcabcbb';
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// const s = 'bbbbb';
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// const s = 'pwwkew';
const s = 'dvdf';
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = s => {
  let longest = 0;
  let start = 0;
  let i = 0;
  const set = new Set();
  while (i < s.length) {
    if (set.has(s[i])) {
      set.delete(s[start++]);
    } else {
      set.add(s[i++]);
      longest = Math.max(longest, set.size);
    }
  }
  return longest;
};
console.log(lengthOfLongestSubstring(s));
