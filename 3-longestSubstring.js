/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = "", current = "", startIdx = 0, lookup = new Map();

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (lookup.has(c)) {
      current = s.slice(startIdx, i);
      let idx = lookup.get(c) + 1;
      startIdx = Math.max(idx, startIdx);
      if (current.length > max.length) {
        max = current;
      }
    }
    lookup.set(c, i);
  }

  current = s.slice(startIdx);

  if (current.length > max.length) max = current;
  return max.length;
};
