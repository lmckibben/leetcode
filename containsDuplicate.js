// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.

// Example 1:
// const nums = [1, 2, 3, 1];
// Output: true

// Example 2:
// const nums = [1, 2, 3, 4];
// Output: false

// Example 3:
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true

const containsDuplicate = function (nums) {
  const arr = [];
  for (const num in nums) {
    if (arr.includes(nums[num])) {
      return true;
    } else {
      arr.push(nums[num]);
    }
  }

  return false;
};

console.log(containsDuplicate(nums));
