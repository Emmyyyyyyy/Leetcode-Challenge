var isValid = function(s) {
    if((s.length % 2) === 1)
        return false
    for(let i = 0;i<s.length;i++){
        if(s[i] === '(' && s[i+1] === ')'){
            s = s.slice(0, i) + s.slice(i+2, s.length)
            if(s.length === 0)
                return true
            else
                i = i-2;
        }
        else if(s[i] === '{' && s[i+1] === '}'){
            s = s.slice(0, i) + s.slice(i+2, s.length)
            if(s.length === 0)
                return true
            else
                i = i-2;
        }
        else if(s[i] === '[' && s[i+1] === ']'){
            s = s.slice(0, i) + s.slice(i+2, s.length)
            if(s.length === 0)
                return true
            else
                i = i-2;
        }
        // console.log(s + " " + i)
    }
    return false
};
// console.log(isValid("(){}}{"))