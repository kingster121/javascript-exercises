// LOOP through string with charAt()
// IF char is alphabet, replace char by shift left by number times
// IF unicode value would exceed value of z, loop back to a (smae goes to capitalisation)
// a-z=97-122
// A-Z=65-90
const caesar = function(text,number) {
    number=makeNumSmall(number);
    let encryptedText="";
    for(let i=0;i<text.length;i++){
        charCode=text.charCodeAt(i);
        
        //a-z
        if(charCode>=97&&charCode<=122){
            charCode+=number;
            if(charCode>122){
                charCode-=26;
            }
            else if(charCode<97){
                charCode+=26;
            }
            encryptedText+=String.fromCharCode(charCode);
        }
        //A-Z
        else if(charCode>=65&&charCode<=90){
            charCode+=number;
            if(charCode>90){
                charCode-=26;
            }
            else if(charCode<65){
                charCode+=26;
            };
            encryptedText+=String.fromCharCode(charCode);
        }
        //special symbols
        else{
            encryptedText+=text[i];
        }

    }
    return encryptedText;

    function makeNumSmall(number){
        if(number>26){
            return makeNumSmall(number-26);
        }
        else{
            return number;
        }
    }
};

// Do not edit below this line
module.exports = caesar;
