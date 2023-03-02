var arrayPairSum = function(nums) {
    let sum = 0;
    while(nums.length > 0){
        nums.splice(nums.indexOf(Math.max(...nums)), 1)
        sum += Math.max(...nums)
        nums.splice(nums.indexOf(Math.max(...nums)), 1)
    }
    return sum
};
console.log(arrayPairSum([1, 4, 3, 2]))