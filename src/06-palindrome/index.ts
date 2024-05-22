/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {
    const reverseStr:Array<string> = [];
    for (var i = str.length; i >= 0; i--){
        reverseStr.push(str[i]);
    }
    var revStr = reverseStr.join('').toString();
    if (str === revStr) return true;
    else return false;
}

export { palindrome };
