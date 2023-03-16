var sortArrayByParity = function(nums) {
    var pos = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[pos] % 2 === 0){
            nums.unshift(nums[pos])
            nums.splice(pos+1, 1)
        }
        else{
            nums.push(nums[pos])
            nums.splice(pos, 1)
            pos--
        }
        pos++
    }
    return nums
};
console.log(sortArrayByParity([1,3,5,0]))