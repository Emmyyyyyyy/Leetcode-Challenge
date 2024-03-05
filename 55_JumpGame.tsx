function canJump(nums: number[]): boolean {
    let jump_remaining = nums[0]
    if(jump_remaining == 0 && nums.length > 1)
        return false
    for(let i = 1;i<nums.length;i++){
        jump_remaining--
        if(jump_remaining == 0 && nums[i] == 0 && i != nums.length-1) {
            return false
        }
        if(jump_remaining < nums[i]) {
            jump_remaining = nums[i]
        }
    }
    return true
};

console.log(canJump([3,2,1,0,4]));
