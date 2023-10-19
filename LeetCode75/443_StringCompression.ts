function compress(chars: string[]): number {
    if(chars.length === 0) {
        return 0 
    }
    let s: string[] = []
    let cur_string:string = chars[0]
    let l: number = 1
    chars.shift()
    chars.map((char)=>{
        if(cur_string != char) {
            s.push(cur_string)
            if(l !== 1) {
                let to_string: string = l.toString()
                for(let i:number = 0;i<to_string.length;i++){
                    s.push(to_string[i])
                }
            }
            cur_string = char
            l = 1
        } else {
            l++
        }
    })
    s.push(cur_string)
    if(l !== 1) {
        let to_string: string = l.toString()
        for(let i:number = 0;i<to_string.length;i++){
            s.push(to_string[i])
        }
    }
    let pos :number = s.length-1
    for(let i : number = pos;i>=0;i--){
        chars.unshift(s[i])
    }
    console.log(chars);
    return s.length
};

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress([]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
