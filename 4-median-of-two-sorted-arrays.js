/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i1 = 0, i2 = 0;
  let merged = [];
  while(i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      merged.push(nums1[i1++])
    } else {
      merged.push(nums2[i2++])
    }
  }

  while(i1 < nums1.length) merged.push(nums1[i1++]);
  while(i2 < nums2.length) merged.push(nums2[i2++]);

  if (merged.length % 2 == 0) {
    let first = merged.length/2 - 1;
    let second = first + 1;
    return (merged[first] + merged[second])/2;
  }

  return merged[Math.floor(merged.length/2)];
};
