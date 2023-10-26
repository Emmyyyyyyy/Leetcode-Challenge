function isSubsequence(s: string, t: string): boolean {
    let arr:number[] = []
    let pos:number = 0
    for(let i:number = 0;i<s.length;i++){
        pos = t.indexOf(s[i])
        if(pos === -1){
            return false
        } else if ((i !== 0) && arr[i-1] > pos) {
            while (pos !== -1) {
                t = t.substring(0, pos) + t.substring(pos+1,t.length)
                pos = t.indexOf(s[i])
                console.log(t+ " " +s[i] + " " + pos);
                if(arr[i-1] <= pos) {
                    break
                }
            }
            if (pos === -1)
                return false
        }
        t = t.substring(0, pos) + t.substring(pos+1,t.length)
        arr.push(pos)
        console.log(arr);
    }
    return true
};

console.log(isSubsequence("ab", "baab"));
console.log(isSubsequence("acb", "ahbgdc"));


// s = "abc", t = "ahbgdc"
// s = "axc", t = "ahbgdc"