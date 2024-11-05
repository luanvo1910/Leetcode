/** 
 * 9. Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example :
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let str = x.toString();
    let reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
};