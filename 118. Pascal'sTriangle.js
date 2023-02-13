var generate = function(numRows) {
    let pascalTriangle = [[1], [1, 1]]
    if(numRows === 1)
        return [pascalTriangle[0]]
    for(let i = 1;i<numRows-1;i++){
        let tmp = new Array();
        tmp.push(1)
        for(let j = 0;j<pascalTriangle[i].length;j++){
            if(j+1 <= i)
                tmp.push(pascalTriangle[i][j] + pascalTriangle[i][j+1])
        }
        tmp.push(1)
        pascalTriangle.push(tmp)
    }
    return pascalTriangle
};
console.log(generate(1))