function largestAltitude(gain: number[]): number {
    let max:number = 0
    let cur:number = 0
    gain.map((item)=>{
        cur = item + cur
        if(max < cur)
            max = cur
    })
    return max
};

// console.log(largestAltitude([-5,1,5,0,-7]));
// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));
