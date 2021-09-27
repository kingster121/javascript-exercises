const fibonacci = function (num) {
    num = parseInt(num);
    let arr = [1, 1];

    if (num > 0) {
        for (let i = 2; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr[num-1];
    }
    else if(num<0){
        return "OOPS"
    }
    
};



// Do not edit below this line
module.exports = fibonacci;
