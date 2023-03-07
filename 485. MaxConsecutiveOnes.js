var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let count = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === 0){
            if(max < count){
                max = count
            }
            count = 0
        }
        else {
            count++
        }
    }
    if(max < count){
        max = count
    }
    return max
};
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))