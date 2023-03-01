var missingNumber = function(nums) {
    for(let i = 0;i<nums.length;i++){
        if(nums.indexOf(i) === -1)
            return i
    }
    return nums.length
};
console.log(missingNumber([3,0,1]))