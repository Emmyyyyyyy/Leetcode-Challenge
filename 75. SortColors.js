var sortColors = function(nums) {
    let i = 0
    let fromLastIndex = 0;
    // let fromFirstIndex = -1;
    while(i < nums.length){
        console.log(i + " " + nums + " " + fromLastIndex)
        // l = 3 , fli = 0 , i = 1
        if(nums[i] == 2 && nums.length-fromLastIndex != 0){
            nums.splice(i, 1)
            nums.push(2)
            fromLastIndex++
            if(nums[i] == 2)
                i--
        }
        if(nums[i] == 0){
            nums.splice(i, 1)
            nums.unshift(0)
        }
        i++
    }
    console.log(nums)
};
// 2, 2, 1, 0
sortColors([2, 2, 2, 1])