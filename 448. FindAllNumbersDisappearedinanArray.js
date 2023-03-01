var findDisappearedNumbers = function(nums) {
    const numsLength = Math.max(...nums)
    let missingNums = new Array()
    for(let i = 1;i<nums.length+1;i++){
        if(nums.indexOf(i) === -1)
            missingNums.push(i)
    }
    if(missingNums.length === 0 && numsLength!=nums.length)
        missingNums.push(nums.length)
    return missingNums
};
console.log(findDisappearedNumbers([1,2]))