const removeFromArray = function(arr) {
    
    //let args = Array.from(arguments);
    let numArg = arguments.length;
    let arrLen = arr.length;
    
    
    //start from i = 1 because the array will be index 0.
    for (let i = 1; i < numArg; i++)
    {
        let index = arr.indexOf(arguments[i]);
        if( index != -1) 
        { 
            arr.splice(index, 1);   
        }
    }
    return(arr);
};

// Do not edit below this line
module.exports = removeFromArray;
