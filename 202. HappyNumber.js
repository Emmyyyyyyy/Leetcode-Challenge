var isHappy = function(n) {
    var sum = 0
    var count = 0
    n = n.toString()
    while(n.length >= 1){
        for(let i = 0;i<n.length;i++){
            sum += Math.pow(n[i], 2)
        }
        if(sum === 1)
            return true
        n = sum.toString()
        sum = 0
        count++;
        if(count >= 100)
            return false
        // console.log(n)
    }
    return n
};
console.log(isHappy(2))