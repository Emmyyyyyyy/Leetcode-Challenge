var lengthOfLastWord = function(s) {
    let lastWord = false;
    let count = 1;
    for(let i = s.length-1;i>=0;i--){
        if(s[i] !== " "){
            lastWord = true;
        }
        while(lastWord){
            if(s[i] === " " || i < 0)
                return count
            i--
            count++
        }
    }
    return 0
};
console.log(lengthOfLastWord("a"))