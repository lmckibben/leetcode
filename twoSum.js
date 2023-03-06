// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// const nums = [2, 7, 11, 15];
// const target = 9;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// const nums = [3, 2, 4];
// const target = 6;
// Output: [1,2]

// Example 3:
const nums = [3, 3];
const target = 6;
// Output: [0,1]

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
          return [i, j];
        }
      }
    }
  }
};

console.log(twoSum(nums, target));
