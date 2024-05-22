/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    const vowelsList:Array<string> = ["a", "e", "i", "o", "u"];
    var vowelCount = 0;
    for (var i = 0; i < s.length; i++){
        for (var j = 0; j < vowelsList.length; j++){
            if (s[i].toLowerCase() == vowelsList[j]) vowelCount++;
        }
    }
    return vowelCount;
}

export { vowels };
