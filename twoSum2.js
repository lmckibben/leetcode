// Given a 1-indexed array of integers numbers that is already sorted
// in non-decreasing order, find two numbers such that they add up to
// a specific target number. Let these two numbers be numbers[index1]
// and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by
// one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:
const numbers = [2, 7, 11, 15];
const target = 9;
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// const numbers = [2, 3, 4];
// const target = 6;
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// const numbers = [-1, 0];
// const target = -1;
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;

  while (start !== end) {
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else if (numbers[start] + numbers[end] < target) {
      start++;
    } else {
      return [start + 1, end + 1];
    }
  }
};

console.log(twoSum(numbers, target));
