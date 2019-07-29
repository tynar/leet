/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i in nums) {
    let looking = target - nums[i];
    if (map.has(looking)) {
      return [map.get(looking), i];
    }
    else {
      map.set(nums[i], i);
    }
  }
}
