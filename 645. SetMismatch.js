var findErrorNums = function(nums) {
    let index = 0
    const toFindDuplicates = nums => nums.filter((item, index) => nums.indexOf(item) !== index)
    const duplicateElementa = toFindDuplicates(nums);
    for(let i = 0;i<nums.length;i++){
        index = nums.indexOf(i+1)
        if(index === -1){
            duplicateElementa.push(i+1)
            return duplicateElementa
        }
    }
};
console.log(findErrorNums([2, 2]))