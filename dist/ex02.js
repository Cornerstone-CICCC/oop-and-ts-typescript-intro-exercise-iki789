"use strict";
// 2. Create a function named `isPalindrome` that takes a string as a parameter.
//    The function should return `true` if the string is a palindrome (reads the same backward as forward),
//    otherwise, return `false`.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function isPalindrome(word) {
    let l = 0;
    let r = word.length - 1;
    let result = false;
    while (word[l] && word[r] && r > l) {
        if (word[l] === word[r]) {
            l++;
            result = true;
            r--;
        }
        else {
            return false;
        }
    }
    return result;
}
// Expected output:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
