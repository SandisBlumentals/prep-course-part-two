/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    for(var i = 1; i <= n; i++){
        var spaces = ' '.repeat(n - i);
        var hashTag = '#'.repeat(i);
        console.log(hashTag + spaces);
    }
}

export { steps };
