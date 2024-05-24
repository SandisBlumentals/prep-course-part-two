/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */
function pyramid(n: number) {
    for(var i = 1; i <= n; i++){
        var spaces = ' '.repeat(n-i);
        var hashTag = '#'.repeat(i * 2 - 1);
        console.log(spaces + hashTag + spaces);
    }
}

export { pyramid };
