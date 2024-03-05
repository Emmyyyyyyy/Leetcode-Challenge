function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    if(citations.length == 1){
        if(citations[0] == 0)
            return 0
        return 1
    }
    for(let i =0;i<citations.length;i++){
        if(i+1 == citations[i]) {
            return i + 1
        }
        else if(i+1 > citations[i]) {
            return i
        }
    }
    return citations.length
};