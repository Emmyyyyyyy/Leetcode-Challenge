var merge = function(intervals) {
    let change = false;
    for(let i = 0;i<intervals.length;i++){
        let arr = intervals[i]
        for(let j = i+1;j<intervals.length;j++){
            if(intervals[j][0] <= arr[1] && intervals[j][1] >= arr[0]){
                if(intervals[j][1] > arr[1]){
                    arr.pop()
                    arr.push(intervals[j][1])
                }
                if(intervals[j][0] < arr[0]){
                    arr.shift()
                    arr.unshift(intervals[j][0])
                }
                intervals.splice(j, 1)
                j--
                change = true
            }
        }
        if(change){
            i = -1
        }
        change = false
    }
    return intervals    
};
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,4],[0,0]]))
// console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))