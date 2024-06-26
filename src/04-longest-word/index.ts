/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    var splitSen = sen.split((/[\s.?!&^,_-]+/));
    var longWord = splitSen[0];
    for (var i = 1; i < splitSen.length; i++){   
        if (longWord.length < splitSen[i].length) longWord = splitSen[i];
    }
    return longWord;
}

export { longestWord };
