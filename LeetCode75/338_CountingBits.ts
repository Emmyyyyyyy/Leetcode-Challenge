function countBits(n: number): number[] {
    let ans:number[] = [0]
    if(n === 0)
        return ans
    for(let i:number = 1; i<=n;i++){
        let count:number = 0
        let tmp:number = i
        while(tmp !== 0){
            if(tmp % 2 === 1){
                count++
            }
            tmp = (tmp - (tmp%2))/2
        }
        ans.push(count)
        count = 0
    }
    return ans
};

// console.log(countBits(5));
