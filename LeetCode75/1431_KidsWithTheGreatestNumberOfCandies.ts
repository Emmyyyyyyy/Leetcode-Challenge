function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let greatest : number = Math.max(...candies)
    let ans : boolean[] = []
    candies.map((candy)=>{
        if(candy + extraCandies < greatest){
            ans.push(false)
        } else {
            ans.push(true)
        }
    })
    return ans
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([12,1,12], 10));
