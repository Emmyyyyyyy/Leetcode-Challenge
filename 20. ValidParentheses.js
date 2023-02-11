var isValid = function(s) {
    if((s.length % 2) === 1)
        return false
    for(let i = 0;i<s.length;i++){
        // if(s[i] === ')' && (s[i-1] === '[' || s[i-1] === '{' || s.includes('(', 0) === false))
        //     return false;
        // else if(s[i] === ']' && (s[i-1] === '(' || s[i-1] === '{' || s.includes('[', 0) === false))
        //     return false;
        // else if(s[i] === '}' && (s[i-1] === '[' || s[i-1] === '(' || s.includes('{', 0) === false))
        //     return false;
        // else if(s[i-1] === '(' && (s[i] === ']' || s[i] === '}' || s.includes(')', i) === false))
        //     return false;
        // else if(s[i-1] === '{' && (s[i] === ']' || s[i] === ')' || s.includes('}', i) === false))
        //     return false;
        // else if(s[i-1] === '[' && (s[i] === ')' || s[i] === '}' || s.includes(']', i) === false))
        //     return false;
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
        console.log(s + " " + i)
    }
    // console.log("-" + s)
    // console.log(s.length)
    return false
};
console.log(isValid("(){}}{"))