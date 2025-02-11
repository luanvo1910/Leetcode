/**
 * 8. String to Integer
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
1 Whitespace: Ignore any leading whitespace (" ").
2 Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
3 Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4 Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

Example:
Input: s = "42"
Output: 42
Explanation:
The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    
    let i = 0;
    let result = 0;
    let sign = 1;

    while (i < s.length && s[i] === ' ') {
        i++;
    }

    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        
        if (result > Math.floor(INT_MAX / 10) || 
           (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
};
