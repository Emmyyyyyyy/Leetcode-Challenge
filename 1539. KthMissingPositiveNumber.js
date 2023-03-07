var findKthPositive = function(arr, k) {
    let pos = 0;
    let num = 1;
    while(k > 0){
        if(arr[pos] !== num){
            k--
        } else{
            pos++
        }
        num++
        // console.log(pos)
    }
    return num-1
};
// console.log(findKthPositive([1, 2, 3, 4], 2))