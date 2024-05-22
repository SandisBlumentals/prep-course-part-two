/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
    var newStr = str.split(" ");
    for (var i = 0; i < newStr.length; i++){
        newStr[i] = newStr[i].replace(newStr[i][0],newStr[i][0].toUpperCase());
    }
    var endString = newStr.join(' ').toString();
    return endString;
}

export { capitalize };
