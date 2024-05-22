/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    var reverseIntStrArr:Array<string> = [];
    var intString = "";
    var intNumber = 0;
    if (int < 0) {
        int = -int;
        intString = int.toString();
        for (var i = intString.length; i >= 0; i--){
            if (intString[i] === "0") continue;
            reverseIntStrArr.push(intString[i]);
        }
        intString = reverseIntStrArr.join('').toString();
        intNumber = parseInt(intString, 10);
        return -intNumber;
    }
    else {
        intString = int.toString();
        for (var i = intString.length; i >= 0; i--){
            if (intString[i] === "0") continue;
                reverseIntStrArr.push(intString[i]);
        }
        intString = reverseIntStrArr.join('').toString();
        intNumber = parseInt(intString, 10);
        return intNumber;
    }
}

export { reverse };
