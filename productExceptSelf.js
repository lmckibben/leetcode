// Given an integer array nums, return an array answer
// such that answer[i] is equal to the product of all
// the elements of nums except nums[i].

// The product of any prefix or suffix of nums is
// guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time
// and without using the division operation.

// Example 1:
// const nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// Example 2:
const nums = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]

const productExceptSelf = function (nums) {
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  const output = new Array(n);

  left[0] = 1;
  right[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let j = n - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }

  for (let i = 0; i < n; i++) {
    output[i] = left[i] * right[i];
  }
  return output;
};

console.log(productExceptSelf(nums));
