function findMaxAverage(nums: number[], k: number): number {
    let subArr: number[] = []
    let max:number = 0
    let sum:number = 0
    subArr = nums.slice(0, k)
    sum = subArr.reduce((a, b) => a + b, 0)
    max = sum / k
    for(let i:number = k;i<nums.length;i++){
        sum = sum - nums[i-(k)] + nums[i]
        if(max < sum / k){
            max = sum/k
        }
        // console.log('sum: ' + sum);
    }
    return max
};

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
// console.log(findMaxAverage([1], 1));
