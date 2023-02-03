var findMedianSortedArrays = function(nums1, nums2) {
    const mergeArr = nums1.concat(nums2);
    let lowerThan=(a,b)=>a<b?-1:1; 
    mergeArr.sort(lowerThan);
    const med = mergeArr.length / 2;
    if((mergeArr.length % 2) !== 0)
      return mergeArr[Math.floor(med)];
     else 
      return (mergeArr[med-1] + mergeArr[med])/2;
};