/* /* const reverseString = function(str) {
    let revstr = "";
    let splitStr = str.split("");
    let reverseArray = splitStr.reverse();
    let joinArray = reverseArray.join("");
    revstr = joinArray;
    return(revstr);
}; */
const reverseString = function(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}
reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
