/**
 * Is Even
 *
 * Determine if given number is even
 * without using any mathematic operators ( +, -, %, /, Math, ParseInt etc.)
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
    if (n & 1) return false;
    else return true; 
}

export { isEven };
