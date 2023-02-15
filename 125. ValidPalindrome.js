var isPalindrome = function(s) {
    var regexPattern = /[^A-Za-z]/g;
    s = s.replace(regexPattern, "").toLowerCase();
    let lastElement = s.length-1;
    for(let i = 0;i<Math.ceil((s.length-1)/2);i++){
        if(s[i] !== s[lastElement])
            return false   
        lastElement-- 
    }
    return true
    // return s
};
// console.log(isPalindrome("ab a"))