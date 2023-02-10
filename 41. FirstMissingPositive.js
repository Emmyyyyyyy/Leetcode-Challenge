var firstMissingPositive = function(nums) {
    let newNums = nums.filter((num, index)=>{
        return nums.indexOf(num) === index && num>0;
    })
    if(newNums.length == 0)
        return 1
    let lowerThan=(a,b)=>a<b?-1:1; 
    newNums.sort(lowerThan);
    // console.log(newNums)
    for(let i = 0;i<newNums.length;i++){
        if(newNums[i] != i+1){
            return i+1
        }
    }
    return newNums[newNums.length-1] + 1
};
console.log(firstMissingPositive([0,2,2,1,1]))