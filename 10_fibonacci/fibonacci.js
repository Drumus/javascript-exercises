const fibonacci = function(index) {
    if(index < 0) {
        return "OOPS";
    }
    fibo = [1, 1];
    for (let i = 2; i < 50; i++) {
        fibo[i]= Number(fibo[i - 2]) + Number(fibo[i - 1]);
        //console.log(i);
    } 
    //console.log(fibo);
    return Number(fibo[index - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
