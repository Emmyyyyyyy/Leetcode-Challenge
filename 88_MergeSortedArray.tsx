function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let pos:number = 0
    nums1.splice(m);
    for(let i:number = 0;i<n;i++){
        if(pos < nums1.length){
            while(pos < nums1.length) {
                if(nums1[pos] >= nums2[i]) {
                    break
                }
                pos++
            }
            nums1.splice(pos, 0, nums2[i])
        } else {
            nums1.push(nums2[i]);
        }
    }
    console.log(nums1);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([4, 5, 6, 0, 0], 2, [1, 2], 2);
merge([4, 5, 6, 0, 0], 1, [0], 0);