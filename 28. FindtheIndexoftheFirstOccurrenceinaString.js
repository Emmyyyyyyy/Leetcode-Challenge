var strStr = function(haystack, needle) {
    let firstIndex = -1;
    let count = 0;
    let needleIndex= 0;
    for(let i = 0;i<haystack.length;i++){
        if(haystack[i] == needle[needleIndex]){
            firstIndex = i;
            while(haystack[i] == needle[needleIndex]){
                if(count == needle.length-1)
                    return firstIndex;
                i++;
                needleIndex++;
                count++;
            }
            i = firstIndex;
            count = 0;
            needleIndex = 0;
        }
    }
    return -1;
};
console.log(strStr("mississippi", "pi"));