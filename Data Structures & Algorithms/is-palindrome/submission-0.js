class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const n = s.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
      if (
        !(
          s[left].toLowerCase().charCodeAt() >= 48 &&
          s[left].toLowerCase().charCodeAt() <= 57
        ) &&
        !(
          s[left].toLowerCase().charCodeAt() >= 97 &&
          s[left].toLowerCase().charCodeAt() <= 122
        )
      ) {
        left++;
      } else if (
        !(
          s[right].toLowerCase().charCodeAt() >= 48 &&
          s[right].toLowerCase().charCodeAt() <= 57
        ) &&
        !(
          s[right].toLowerCase().charCodeAt() >= 97 &&
          s[right].toLowerCase().charCodeAt() <= 122
        )
      ) {
        right--;
      } else {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
          return false;
        } else {
          left++;
          right--;
        }
      }
    }

    return true;
  }
}
