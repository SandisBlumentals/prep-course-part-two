/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
    const reverseStr:Array<string> = [];
    for (var i = str.length; i >= 0; i--){
        reverseStr.push(str[i]);
    }
    return reverseStr.join('').toString();
}

export { reverse };
