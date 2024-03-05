function jump(nums: number[]): number {
    let jump_remaining = nums[0]
    let count_jump = 1
    if(jump_remaining == 0 && nums.length > 1)
        return 0
    for(let i = 1;i<nums.length;i++){
        jump_remaining--
        if(jump_remaining < nums[i] && i< nums.length-1 && jump_remaining < nums.length - i-1) {
            let tmp = nums.length - i-1
            console.log('jump_remaining '+ jump_remaining+ " nums.length - i " + tmp);
            
            jump_remaining = nums[i]
            count_jump++
        }
    }
    return count_jump
};

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));
console.log(jump([2,3,1]));
