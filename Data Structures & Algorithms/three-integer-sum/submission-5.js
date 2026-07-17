class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
  let left = 0;
  let right = nums.length - 1;

  const result = [];

  nums.sort((a, b) => a - b);

  while (left < right - 1) {
    let res1 = nums[left] + nums[right];


    if (res1 >= 0) {
      let middle = left + 1;
      let res2 = res1 + nums[middle];


      while (res2 <= 0) {
        if (res2 === 0) {
          result.push([nums[left], nums[middle], nums[right]]);
          break;
        }
        res2 -= nums[middle];
        middle++;
        res2 += nums[middle];
      }

      right--;
    } else {
      let middle = right - 1;

      let res2 = res1 + nums[middle];



      while (res2 >= 0) {

        if (res2 === 0) {
          result.push([nums[left], nums[middle], nums[right]]);
          break;
        }
        res2 -= nums[middle];
        middle--;
        res2 += nums[middle];
      }

      left++;
    }
  }

  return result;
}}
