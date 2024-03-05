function reverseWords(s: string): string {
    let words: string[] = s.split(' ').filter((word) => word != '')
    let words_middle: number = Math.floor(words.length/2)
    for(let i = 0;i<words_middle;i++){
        let tmp:string = words[i]
        words[i] = words[words.length-i-1]
        words[words.length-i-1] = tmp
    }
    return words.join(' ')
};

console.log(reverseWords("the sky is so blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
