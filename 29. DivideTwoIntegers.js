var divide = function(dividend, divisor) {
    let quotient = 0; 
    if(dividend == 0)
        return 0; 
    else if(divisor == 1)
        return dividend;
    else if(divisor == -1)
        return -dividend
    else if(divisor > 0){
        while(dividend > 0){
            quotient++;
            dividend = dividend - divisor;
        }
        // console.log(dividend)
        if(dividend == 0)
            return quotient;
        else
            return quotient - 1;
    }
    else if(divisor < 0){
        if(dividend > 0){
            while(dividend > 0){
                quotient--;
                dividend = dividend + divisor;
            }
            // console.log(dividend)
            if(dividend == 0)
                return quotient;
            else
                return quotient + 1;
        }
        else if(dividend < 0){
            while(dividend < 0){
                quotient++;
                dividend = dividend - divisor;
            }
            // console.log(dividend)
            if(dividend == 0)
                return quotient;
            else
                return quotient - 1;
        }
    }  
};
console.log(divide(-2147483648, -1))