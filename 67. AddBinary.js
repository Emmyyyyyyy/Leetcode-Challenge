var addBinary = function(a, b) {
    // let sum = parseInt(a, 2) + parseInt(b, 2)
    // return sum.toString(2)
    let carry = 0;
    if(a.length >= b.length){
        let lengthB = b.length-1
        for(let i = a.length-1;i>=0;i--){
            if(lengthB >= 0){
                if(a[i] === '1' && b[lengthB] === '1'){
                    if(carry === 1){
                        a = a.substring(0, i) + '1' + a.substring(i + 1);
                        carry = 1;
                    }
                    else{
                        a = a.substring(0, i) + '0' + a.substring(i + 1);
                        carry = 1;
                    }
                }
                else if((a[i] === '1' && b[lengthB] === '0') || (a[i] === '0' && b[lengthB] === '1')){
                    if(carry === 1){
                        a = a.substring(0, i) + '0' + a.substring(i + 1);
                        carry = 1;
                    }
                    else{
                        a = a.substring(0, i) + '1' + a.substring(i + 1);
                        carry = 0;
                    }
                }
                else if(a[i] === '0' && b[lengthB] === '0'){
                    if(carry === 1){
                        a = a.substring(0, i) + '1' + a.substring(i + 1);
                        carry = 0;
                    }
                    else{
                        a = a.substring(0, i) + '0' + a.substring(i + 1);
                        carry = 0;
                    }
                }
                lengthB--
                console.log(a + " " + carry)
            }
            else{
                if(a[i] === '1' && carry === 1){
                    a = a.substring(0, i) + '0' + a.substring(i + 1);
                    carry = 1
                }
                else if(a[i] === '0' && carry === 1){
                    a = a.substring(0, i) + '1' + a.substring(i + 1);
                    carry = 0
                }
            }
        }
        if(carry === 1)
            return '1' + a;
        return a
    }
    else{
        let lengthA = a.length-1
        for(let i = b.length-1;i>=0;i--){
            if(lengthA >= 0){
                if(a[lengthA] === '1' && b[i] === '1'){
                    if(carry === 1){
                        b = b.substring(0, i) + '1' + b.substring(i + 1);
                        carry = 1;
                    }
                    else{
                        b = b.substring(0, i) + '0' + b.substring(i + 1);
                        carry = 1;
                    }
                }
                else if((a[lengthA] === '1' && b[i] === '0') || (a[lengthA] === '0' && b[i] === '1')){
                    if(carry === 1){
                        b = b.substring(0, i) + '0' + b.substring(i + 1);
                        carry = 1;
                    }
                    else{
                        b = b.substring(0, i) + '1' + b.substring(i + 1);
                        carry = 0;
                    }
                }
                else if(a[lengthA] === '0' && b[i] === '0'){
                    if(carry === 1){
                        b = b.substring(0, i) + '1' + b.substring(i + 1);
                        carry = 0;
                    }
                    else{
                        b = b.substring(0, i) + '0' + b.substring(i + 1);
                        carry = 0;
                    }
                }
                lengthA--
                console.log(b + " " + carry)
            }
            else{
                if(b[i] === '1' && carry === 1){
                    b = b.substring(0, i) + '0' + b.substring(i + 1);
                    carry = 1
                }
                else if(b[i] === '0' && carry === 1){
                    b = b.substring(0, i) + '1' + b.substring(i + 1);
                    carry = 0
                }
            }
        }
        if(carry === 1)
            return '1' + b;
        return b
    }
};
console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))