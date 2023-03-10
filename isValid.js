// Given a string s containing just the characters '(', ')',
// '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// const s = '()';
// Output: true

// Example 2:
const s = '((';
// Output: true

// Example 3:
// const s = '(]';
// Output: false

const isValid = s => {
  if (s.length <= 1) return false;
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') {
    return false;
  }
  const closeOrder = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      closeOrder.push(s[i]);
    } else if (s[i] === ')') {
      if (closeOrder[closeOrder.length - 1] === '(') {
        closeOrder.pop();
      } else {
        return false;
      }
    } else if (s[i] === ']') {
      if (closeOrder[closeOrder.length - 1] === '[') {
        closeOrder.pop();
      } else {
        return false;
      }
    } else if (s[i] === '}') {
      if (closeOrder[closeOrder.length - 1] === '{') {
        closeOrder.pop();
      } else {
        return false;
      }
    }
  }

  if (closeOrder.length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isValid(s));
