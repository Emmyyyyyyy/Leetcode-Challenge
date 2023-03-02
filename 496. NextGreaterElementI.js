var nextGreaterElement = function(nums1, nums2) {
    let nums2Index = 0;
    let arr = new Array()
    for(let i = 0;i<nums1.length;i++){
        nums2Index = nums2.indexOf(nums1[i])
        // console.log(nums2Index)
        if(nums2Index === -1)
            arr.push(-1)
        while(nums2Index < nums2.length){
            if(nums2[nums2Index] > nums1[i]){
                arr.push(nums2[nums2Index])
                break
            }
            nums2Index++
        }
        if(arr.length-1 !== i)
            arr.push(-1)
    }
    return arr
};
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))