var addToArrayForm = function(num, k) {
    let kArr = new Array()
    let tmp = k.toString().length
    let tmp2 = num.length
    let carry = 0;
    var i = 0
    for(i = 0;i<tmp;i++){
        kArr.unshift(k % 10)
        k = Math.floor(k/10)
    }
    // console.log(kArr)
    if(num.length >= tmp){
        for(i = num.length-1; i>=0 ;i--){
            if(tmp - 1 >= 0){
                if(carry === 0){
                    num[i] = num[i] + kArr[tmp-1];
                } 
                else if(carry === 1){
                    num[i] = num[i] + kArr[tmp-1] + 1;
                }
                tmp--
            }
            else{
                if(carry === 0){
                    return num
                } 
                else if(carry === 1){
                    num[i] = num[i] + 1;
                }
            }

            if(num[i] >= 10){
                carry = 1;
                num[i] = num[i] - 10
            }
            else{
                carry = 0
            }

        }

        if(carry === 1)
            if(i > 0){
                num[i] = num[i] + 1
                return num
            }
            else{
                num.unshift(1)
                return num
            }
        else
            return num
    }
    else{
        for(i = tmp-1; i>=0 ;i--){
            if(tmp2-1 >= 0){
                if(carry === 0){
                    kArr[i] = kArr[i] + num[tmp2-1];
                } 
                else if(carry === 1){
                    kArr[i] = kArr[i] + num[tmp2-1] + 1;
                }
                tmp2--
            }
            else{
                if(carry === 0){
                    return kArr
                } 
                else if(carry === 1){
                    kArr[i] = kArr[i] + 1;
                }
            }

            if(kArr[i] >= 10){
                carry = 1;
                kArr[i] = kArr[i] - 10
            }
            else{
                carry = 0
            }
            // console.log(kArr)
        }

        if(carry === 1)
            if(i > 0){
                kArr[i] = kArr[i] + 1
                return kArr
            }
            else{
                kArr.unshift(1)
                return kArr
            }
        else
            return kArr
    }
};
// console.log(addToArrayForm([9], 11))