const repeatString = function(text,numOfRepeat) {
    let multistr="";
    if(numOfRepeat>=0){
        return text.repeat(numOfRepeat);
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
