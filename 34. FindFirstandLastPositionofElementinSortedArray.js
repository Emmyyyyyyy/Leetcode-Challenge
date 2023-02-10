var searchRange = function(nums, target) {
    let start = -1;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == target){
            start = i
            while(nums[i] === target)
                i++;
            return [start, i-1] 
        }
    }
    return [-1, -1]
};
console.log(searchRange([], 6))