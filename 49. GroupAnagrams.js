var groupAnagrams = function(strs) {
    var word = ''
    var arr = new Array()
    for(let i = 0;i<strs.length;i++){
        word = strs[i]
        var tmp = [word]
        for(let j = 1;j<strs.length;j++){
            var cur_word = strs[j]
            while(word.length !== 0){
                var pos = cur_word.indexOf(word[0])
                if(pos === -1){
                    word = strs[i]
                    break
                }
                else if(pos !== -1){
                    cur_word = cur_word.slice(0,pos) + cur_word.slice(pos+1,cur_word.length)
                }
                word = word.substring(1)
            }
            // console.log("word = " + word + " cur_word = " + cur_word)
            if(cur_word.length === 0 && word.length === 0){
                tmp.push(strs[j])
                strs.splice(j, 1)
                j--
            }
            word = strs[i]
        }
        arr.push(tmp)
        strs.splice(i, 1)
        i--
    }
    return arr
};
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))