const removeFromArray = function(inArr, ...args) {
    // .filter() removes element when expression is false
    // indexOf(el) returns -1 when el does not exist
    // args.indexOf(el) returns the index of el if it exists, returns -1 if el does not exist
    // return args.indexOf(el)==-1 returns TRUE when element in inArr does not exist in args, is not filtered
    inArr=inArr.filter(el=>{
        return args.indexOf(el)==-1;
    })
    return inArr;
};

// Do not edit below this line
module.exports = removeFromArray;
