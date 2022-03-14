const palindromes = function (str) {
    let revStr = '';
    newStr = str.toLowerCase().replace(/[^a-z]/g,"");
    
    for (i = 0; i < newStr.length; i ++) {

        revStr = revStr + newStr[newStr.length -1 - i];
        //console.log(i);
    }

    //tests
    /* console.log(str);
    console.log(revStr);
    console.log(str.length);
    console.log(newStr.length);
    console.log(newStr);
    console.log(revStr.length); */

    return (newStr === revStr) ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
