function mergeAlternately(word1: string, word2: string): string {
    let mergedString : string = ""
    if(word1.length >= word2.length) {
        for(let i : number = 0;i<word1.length;i++){
            mergedString = mergedString + word1[i]
            if(i < word2.length){
                mergedString = mergedString + word2[i]
            }
        }
    } else {
        for(let i : number = 0;i<word2.length;i++){
            if(i < word1.length){
                mergedString = mergedString + word1[i]
            }
            mergedString = mergedString + word2[i]
        }
    }
    return mergedString
};

// console.log(mergeAlternately("ab", "pqrs"));
