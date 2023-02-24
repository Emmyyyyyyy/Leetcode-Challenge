var maximumGap = function(nums) {
    let lowerThan=(a,b)=>a<b?-1:1; 
    nums.sort(lowerThan);
    let maxGap = 0;
    if(nums.length === 1)
        return maxGap
    for(let i = nums.length-1;i>0;i--){
        if(maxGap < nums[i] - nums[i-1])
            maxGap = nums[i] - nums[i-1]
    }
    return maxGap
};
console.log(maximumGap([3, 6, 9, 1]))