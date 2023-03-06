var findRestaurant = function(list1, list2) {
    const longer = (list1.length > list2.length) ? list1 : list2; 
    const shorter = (list2.length < list1.length) ? list2 : list1; 
    let index = 0
    let min = 99999
    let arr = new Array()
    for(let i = 0;i<longer.length;i++) {
        index = shorter.indexOf(longer[i])
        // console.log(index)
        if(index !== -1){
            if(min > i + index){
                min = i + index;
                arr = []
                arr.push(longer[i])
            } else if(min === i+index){
                arr.push(longer[i])
            }
        }
        // console.log(arr)
    }
    return arr
};
// console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]))