// Given an integer array nums and an integer k,
// return the k most frequent elements. You may
// return the answer in any order.

// Example 1:
// const nums = [1, 1, 1, 2, 2, 3];
const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
// Output: [1,2]

// Example 2:
// const nums = [1]
// const k = 1
// Output: [1]
// const nums = [3, 0, 1, 0];
// const k = 1;

const topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      const value = map.get(num) + 1;
      map.set(num, value);
    } else {
      map.set(num, 1);
    }
  }
  let list = [...map];

  // Sort the list
  list.sort((o1, o2) => {
    if (o1[1] == o2[1]) return o2[0] - o1[0];
    else return o2[1] - o1[1];
  });
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(list[i][0]);
  }
  return output;
};

console.log(topKFrequent(nums, k));
