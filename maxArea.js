// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints
// of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// const height = [1, 1];
// Output: 1

const maxArea = height => {
  let max = 0;
  let area;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const width = end - start;
    const x = height[start];
    const y = height[end];
    area = width * Math.min(x, y);
    max = Math.max(area, max);
    if (x < y) {
      start++;
    } else {
      end--;
    }
  }
  return max;
};

console.log(maxArea(height));
