var findLengthOfLCIS = function(nums) {
    let count = 1
    let max = 1
    for(let i = 1;i<nums.length;i++){
        if(nums[i] <= nums[i-1]){
            if(max < count){
                max = count
            }
            // console.log(max + " " + count + " " + nums[i])
            count = 0
            
        }
        count++
    }
    if(max < count){
        max = count
    }
    return max
};
// console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]))