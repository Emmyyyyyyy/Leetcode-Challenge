function removeDuplicates(nums: number[]): number {
    let dup:boolean = false
    let cur_num: number = -99999
    for(let i:number = 0;i<nums.length;i++){
        if(cur_num == nums[i]) {
            if(dup == true) {
                nums.splice(i, 1);
                i--
            } else {
                dup = true
            }
        }
        else if(cur_num != nums[i]) {
            cur_num = nums[i]
            dup = false
        }
    }
    console.log(nums);
    return nums.length
};

// console.log(removeDuplicates([1,1,2,2,2,3]));
// console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
