"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };
    let i = 0;
    let count = 0;
    while (word[i]) {
        if (word[i] in vowels) {
            count++;
        }
        i++;
    }
    return count;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
