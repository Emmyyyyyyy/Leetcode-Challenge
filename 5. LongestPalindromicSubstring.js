var longestPalindrome = function(s) {
    let lastElement = s.length-1;
    let tmpj = 0;
    let longestPal = s[0];
    for(let i = 0;i<s.length-1;i++){
        let tmpi = i;
        // console.log(i + " " + j)
        for(let j = lastElement;j >= i;j--){
            // console.log(i + " " + j)
            if(s[i] === s[j]){
                // console.log(i + " " + j)
                if(tmpj < j){
                    // console.log("-" + tmpj + " " + j)
                    tmpj = j;
                }
                if(i === j || i+1 === j){
                    console.log(tmpi + " " + tmpj + " " + s.substring(tmpi, tmpj+1))
                    if(longestPal.length < s.substring(tmpi, tmpj+1).length){
                        longestPal = s.substring(tmpi, tmpj+1)
                        // console.log("in")
                    }
                }
                i++;
            }
            else if(s[i] !== s[j]){
                // console.log("-" + i + " " + j + " " + tmpj)
                if(tmpj !== 0)
                    j = tmpj
                tmpj = 0
                i = tmpi
                // console.log("--" + i + " " + j + " " + tmpj)
            }
        }
        i = tmpi
        tmpj = 0
    }
    return longestPal
};
// console.log(longestPalindrome("aacabkacaa"))