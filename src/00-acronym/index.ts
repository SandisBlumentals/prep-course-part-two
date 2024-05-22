/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    var acronym:Array<string> = [];
    var splitName = input.toUpperCase().split((/[\s.?!&^,_-]+/));
    for (var i = 0; i < splitName.length; i++){
        acronym.push(splitName[i][0]);
    }
    var acronymString = acronym.join('').toString();
    return acronymString;
}

export { parse };
