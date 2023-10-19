function removeStars(s: string): string {
    let ans: string = ""
    for(let i:number = 0;i<s.length;i++){
        if(s[i] === '*') {
            ans = ans.slice(0, -1)
        } else {
            ans = ans + s[i]
        }
    }
    return ans
};

// console.log(removeStars("leet**cod*e"));
// console.log(removeStars("erase*****"));

// "leet**cod*e"
// "lecoe"
// "erase*****"