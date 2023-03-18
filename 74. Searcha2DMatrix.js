var searchMatrix = function(matrix, target) {
    for(let i = 0;i<matrix.length;i++){
        if(matrix[i][0] === target){
            return true
        }
        else if(matrix[i][0] > target){
            if(i === 0){
                for(let j = 0;j<matrix[i].length;j++){
                    if(matrix[i][j] === target)
                        return true
                }
            }
            else {
                for(let j = 0;j<matrix[i-1].length;j++){
                    if(matrix[i-1][j] === target)
                        return true
                }
            }
        }
        else if(i+1 === matrix.length){
            for(let j = 0;j<matrix[i].length;j++){
                if(matrix[i][j] === target)
                    return true
            }
        }
    }
    return false
};
// console.log(searchMatrix([[1]], 0))