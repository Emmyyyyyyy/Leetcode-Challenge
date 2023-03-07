var calPoints = function(operations) {
    let sum = 0;
    let arr = new Array();
    for(let i = 0;i<operations.length;i++){
        switch(operations[i]) {
            case 'C':                
                sum -= arr[arr.length-1]
                arr.pop()
                break;
            case 'D':
                let double = arr[arr.length-1]*2
                arr.push(double)
                sum += double
                break;
            case '+':
                let plus = arr[arr.length-1] + arr[arr.length-2]
                arr.push(plus)
                sum += plus
                break;
            default:
                arr.push(operations[i]-0)
                sum += operations[i]-0
        }
        // console.log(arr + ", " + sum)
    }
    return sum
};
// console.log(calPoints(["1","C"]))