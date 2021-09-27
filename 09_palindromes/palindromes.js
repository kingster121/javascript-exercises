// regex info
// /s matches white space character like spacebar or next line etc.

const palindromes = function (text) {
    text=text.replace(/\W/gi,"");
    text=text.toLowerCase();
    let reverseText=text.split("").reverse().join("");
    if (reverseText===text) {
        return true
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
