/**
 * @param {string} s
 * @return {string}
 */

 /* Naive solution
var longestPalindrome = function(s) {
  let max = '';
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      let substr = s.slice(i, j + 1);
      if (isPalindrome(substr)) {
        if (max.length < substr.length) max = substr;
      }
    }
  }  
  return max;
};

function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while( left < right ) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }
  return true;
}

*/

var longestPalindrome = function(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let s1 = expand(s, i, i);
    let s2 = expand(s, i, i + 1);
    let current = s1.length > s2.length ? s1 : s2;
    if (current.length > result.length) result = s.slice(current.left, current.right + 1);
  }
  return result;
}

function expand(s, left, right) {
  while(left >= 0 && right < s.length && s[left] == s[right]){
    left--;
    right++;
  }

  left++;
  right--;
  return {left, right, length: (right - left + 1)};
}
