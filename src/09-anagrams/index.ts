/**
 * Anagrams
 *
 * Return true or false - it depends on if provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    var string1 = stringA.toLowerCase().split((/[\s.?!&^,_-]+/)).join('').toString();
    var string2 = stringB.toLowerCase().split((/[\s.?!&^,_-]+/)).join('').toString();
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
    
    if (string1 === string2) return true;
        else return false;
}

export { anagrams };
