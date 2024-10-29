// 3. Longest substring without repeateding characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    const seenChars = new Set();
    
    for (let right = 0; right < s.length; right++) {
        while (seenChars.has(s[right])) {
            seenChars.delete(s[left]);
            left++;
        }
        seenChars.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};