const add = function(...args) {
	return args.reduce((a,b)=>{
    return a+b;
  },0)
};

const subtract = function(a,b) {
  return a-b;
}

let sum = function(arr) {
  return arr.reduce((a,b)=>{
    return a+b;
  },0)
};

const multiply = function(arr) {
  return arr.reduce((a,b)=>{
    return a*b;
  },1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  let total=1;
	for(let i=1;i<=num;i++){
    total*=i;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
