function rotate(nums: number[], k: number): void {
    for(let i = 0;i<k;i++) {
        const last_element = nums[nums.length-1]
        nums.unshift(last_element)
        nums.pop()
    }
};