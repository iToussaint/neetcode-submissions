class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    nums.sort((num1, num2) => num1 - num2);
    let left = 0;

    for (let right = 1; right < nums.length; right++) {
      if (nums[left] === nums[right]) return true;
      left++;
    }
    return false;
  }
}
