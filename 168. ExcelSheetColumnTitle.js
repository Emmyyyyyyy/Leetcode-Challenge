var convertToTitle = function(columnNumber) {
    // [1...26, 27...53, 54...80]
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let title = '';
    let remainder = columnNumber % 26
    let quotient = Math.floor(columnNumber / 26)
    if(columnNumber === 52){
        return 'AZ'
    }
    if(remainder === 0){
        if((columnNumber / 26) % 1 === 0){
            while(columnNumber/26 >= 1){
                title = 'Z' + title
                columnNumber = columnNumber/26
            }
        }
        return title
    }
    else
        title = alphabet[remainder-1] + title
    while(quotient > 0){
        remainder = quotient % 26
        quotient = Math.floor(quotient / 26)
        if(remainder === 0){
            title = 'Z' + title
            break
        }
        else
            title = alphabet[remainder-1] + title
    }
    // title = alphabet[remainder-1] + title
    // console.log([title])
    return title
};
// console.log(convertToTitle(52))