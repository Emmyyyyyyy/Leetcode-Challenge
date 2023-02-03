var isPalindrome = function(x) {
    var text = x.toString();
    var pos = text.length - 1;
    for(var i = 0;i<text.length;i++){
        if(text[i] == "-")
            return false
        if(text[i]!=text[pos])
            return false;
        pos--;
    }
    return true;
};
console.log(isPalindrome(10));