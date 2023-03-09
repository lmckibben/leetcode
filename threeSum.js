// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// const nums = [0, 1, 1];
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// const nums = [0, 0, 0];
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = nums => {
  let solutionArrays = [];

  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] > 0) {
      break;
    }

    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const subTotal = sortedNums[left] + sortedNums[right] + sortedNums[i];

      if (subTotal == 0) {
        solutionArrays.push([
          sortedNums[i],
          sortedNums[left],
          sortedNums[right],
        ]);

        do {
          left++;
        } while (sortedNums[left] == sortedNums[left - 1]);

        do {
          right--;
        } while (sortedNums[right] == sortedNums[right + 1]);
      } else if (subTotal < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return solutionArrays;
};

console.log(threeSum(nums));
