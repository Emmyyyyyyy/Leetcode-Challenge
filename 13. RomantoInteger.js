var romanToInt = function(s) {
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
    let num = 0;
    let prevChar = '';
    for(let i = 0;i<s.length;i++){
        if(s[i] === 'M'){
            if(prevChar === 'C'){
                num = num + 800;
            }
            else{
                num = num + 1000;
            }
        }
        else if(s[i] === 'D'){
            if(prevChar === 'C'){
                num = num + 300;
            }
            else{
                num = num + 500;
            }
        }
        else if(s[i] === 'C'){
            if(prevChar === 'X'){
                num = num + 80;
            }
            else{
                num = num + 100;
            }
        }
        else if(s[i] === 'L'){
            if(prevChar === 'X'){
                num = num + 30;
            }
            else{
                num = num + 50;
            }
        }
        else if(s[i] === 'X'){
            if(prevChar === 'I'){
                num = num + 8;
            }
            else{
                num = num + 10;
            }
        }
        else if(s[i] === 'V'){
            if(prevChar === 'I'){
                num = num + 3;
            }
            else{
                num = num + 5;
            }
        }
        else if(s[i] === 'I'){
            num = num + 1;
        }
        prevChar = s[i];
    }
    return num;
};
console.log(romanToInt("III"))