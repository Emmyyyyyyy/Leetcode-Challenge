var singleNonDuplicate = function(nums) {
    // let count = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === nums[i+1])
            i++;
        else
            return nums[i]
    }    
};
// console.log(singleNonDuplicate([3,3,7,7,10,11,11]))