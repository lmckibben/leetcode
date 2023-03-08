// A phrase is a palindrome if, after converting all uppercase letters
// into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include
// letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// const s = 'A man, a plan, a canal: Panama';
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
const s = 'A man, a plan, a canal: Panama';
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// const s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrom

const isPalindrome = s => {
  let str = s
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '')
    .toLowerCase();
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(s));
