var insert = function(intervals, newInterval) {
    let change = false;
    let i = 0
    for(i = 0;i<intervals.length;i++){
        if(newInterval[0] <= intervals[i][0]){
            break
        }
    }
    if(i === intervals.length){
        intervals.push(newInterval)
    }
    else(
        intervals.splice(i, 0, newInterval)
    )

    for(i = 0;i<intervals.length;i++){
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
// console.log(insert([], [4, 8]))