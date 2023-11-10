function singleNumber(nums: number[]): number {
    let pos:number = 0
    for(let i= 0;i<nums.length;i++){
        pos = nums.lastIndexOf(nums[i])
        if(pos === i){
            return nums[i]
        }
        nums.splice(pos, 1)
    }
};

// console.log(singleNumber([2,2,1]));
// console.log(singleNumber([4,1,2,1,2]));
// console.log(singleNumber([1]));
