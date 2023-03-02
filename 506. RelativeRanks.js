var findRelativeRanks = function(score) {
    let arr = score.map((x) => x);
    let rank = new Array()
    let minScore = 0
    let minScoreIndex = 0
    while(score.length > 0){
        minScore = Math.min(...score)
        minScoreIndex = arr.indexOf(minScore)
        // console.log(minScore + " " + minScoreIndex)
        if(score.length === 3){
            rank[minScoreIndex] = "Bronze Medal"
        }
        else if(score.length === 2){
            rank[minScoreIndex] = "Silver Medal"
        }
        else if(score.length === 1){
            rank[minScoreIndex] = "Gold Medal"
        }
        else{
            rank[minScoreIndex] = (score.length).toString()
        }
        score.splice(score.indexOf(minScore), 1)
    }
    return rank
};
// console.log(findRelativeRanks([10,3,8,9,4]))