var removeDuplicates = function(nums) {
    let lowerThan=(a,b)=>a<b?-1:1;
    nums.sort(lowerThan);
    for(let i =0;i<nums.length;i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i+1, 1);
            i--;
        }
    }
    return nums.length;
};