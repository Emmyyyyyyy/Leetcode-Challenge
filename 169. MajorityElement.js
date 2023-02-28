var majorityElement = function(nums) {
    let minLength = Math.floor(nums.length/2)
    const counts = {}
    let tmp = 0
    nums.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
        if(counts[element] > minLength){
            tmp = element
        }
    });
    return tmp
};
// console.log(majorityElement([3,2,3]))