function increasingTriplet(nums: number[]): boolean {
    if(nums.length < 3) {
        return false
    }
    let min_num: number = Math.min(...nums)
    while(true) {
        console.log("start");
        let max_num: number = Math.max(...nums)
        let tmp: number = 0
        let index :number = nums.lastIndexOf(max_num)
        if(min_num === max_num)
            return false
        let count: number = 1
        for(let i :number = index-1;i>=0;i--){
            // console.log("max num: " + max_num + " tmp: " + tmp);
            if(max_num > nums[i]) {
                tmp = max_num
                max_num = nums[i]
                count++
                // console.log("in 1");
            } else if(max_num < nums[i] && nums[i] < tmp) {
                max_num = nums[i]
                // console.log("in 2");
            } else if(max_num === nums[i] || tmp === nums[i]) {
                nums.splice(i, 1)
                // i++
                // console.log("in 3");
            }
            // console.log("nums: " + nums + " count: " + count + " i: " + i);
            // console.log("----------");
            if(count === 3) {
                return true
            }
        }
        nums.splice(index, 1)
    }
};

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([3, 4,5,4,3,5,2,1]));
console.log(increasingTriplet([1, 2, 1, 2, 1, 2, 1, 2]));