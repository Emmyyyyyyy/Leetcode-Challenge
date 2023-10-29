function uniqueOccurrences(arr: number[]): boolean {
    let arrCountNum: number[] = []
    let count:number = 1
    arr.map((item, index)=>{
        while(true){
            let pos:number = arr.lastIndexOf(item)
            if(pos !== index){
                count++;
                arr.splice(pos, 1)
            } else if(pos === index){
                break
            }
        }
        arrCountNum.push(count)
        count = 1
    })
    // console.log(arrCountNum);
    return new Set(arrCountNum).size === arrCountNum.length ? true : false
};

// console.log(uniqueOccurrences([1,2,2,1,1,3]));
// console.log(uniqueOccurrences([1,2]));
// console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));
