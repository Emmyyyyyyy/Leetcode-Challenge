var searchInsert = function(nums, target) {
    let indexTarget = nums.indexOf(target)
    if(indexTarget != -1)
        return indexTarget
    for(let i = 0;i<nums.length;i++){
        if(nums[i] >= target)
            return i
    }
    return nums.length
};
// console.log(searchInsert([1,3,5,6], 7))