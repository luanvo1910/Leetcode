/**
 * 7. Reverse integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example:
Input: x = 123
Output: 321
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    if (reversed < -(2 ** 31) || reversed > (2 ** 31 - 1)) {
        return 0;
    }
    return reversed;
};
