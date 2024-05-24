/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    str = str.split("").sort().join("");
    console.log(str);

    return str;

    // remove duplicates
    // count every instance of every char in string
    // assign value to that chars key
    // print key of the biggest value
}


export { maxChar };
