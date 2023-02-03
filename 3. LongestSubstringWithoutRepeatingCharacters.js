var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let longest = 0;
    let crrCount = 0;
    for(let i  = 0;i<s.length;i++){
      if(arr.length === 0){
        arr.push(s[0]);
        longest = longest + 1;
        crrCount = crrCount + 1;
      }
      else if(arr.includes(s[i]) === true){
        if(longest < crrCount){
          longest = crrCount;
        }  
        while(arr.includes(s[i])){
          arr.shift();
          crrCount = crrCount - 1;
        }
        arr.push(s[i]);
        crrCount = crrCount + 1;
        console.log(arr)
        
      }
      else{
        arr.push(s[i]);
        console.log(arr);
        crrCount = crrCount + 1;
      }
    }
    if(longest < crrCount){
      longest = crrCount;
    }
    return longest;
};