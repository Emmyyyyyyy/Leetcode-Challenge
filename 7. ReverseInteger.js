var reverse = function(x) {
    let text = x.toString();
    let ans = new Array();
    for(let i = text.length-1;i>=0;i--){
      if(text[i] !== "-")
        ans.push(text[i]);
    }
    ans = ans.map(Number);
    const int = Number(ans.join(''));
    if(int > (Math.pow(2, 31)-1) || int < -Math.pow(2, 31))
        return 0;
    else if(text[0] === "-")
      return (-int);
    else
      return int;
};