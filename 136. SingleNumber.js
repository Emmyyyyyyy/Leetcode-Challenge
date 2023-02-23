var singleNumber = function(nums) {
    for(let i = 0;i<nums.length;i++){
        if(nums.indexOf(nums[i], i+1) === -1){
            return nums[i]
        }

        nums.splice(nums.indexOf(nums[i], i+1), 1)
        nums.splice(i, 1)
        i--
        //console.log(nums)
    }
};
// console.log(singleNumber([1, 7, 3, 2, 1, 3, 7]))