// Given an unsorted array of integers nums, return
// the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
const nums = [0, -1];
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
// Output: 9

const longestConsecutive = nums => {
  if (nums.length === 0) {
    return 0;
  }
  let unique = [...new Set(nums)];
  unique.sort((a, b) => a - b);
  let longest = 1;
  let count = 1;
  for (let i = 1; i < unique.length; i++) {
    if (unique[i] - unique[i - 1] == 1 || unique[i] - unique[i - 1] == -1) {
      count++;
      if (i === unique.length - 1) {
        if (count > longest) {
          longest = count;
        }
      }
    } else {
      if (count > longest) {
        longest = count;
      }
      count = 1;
    }
  }
  return longest;
};
console.log(longestConsecutive(nums));
