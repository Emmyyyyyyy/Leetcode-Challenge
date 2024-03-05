class RandomizedSet {
    private arr: number[];
    constructor() {
        this.arr = [];
        return null
    }
    insert(val: number): boolean {
        const index = this.arr.indexOf(val)
        if (index != -1) {
            return false;
        }
        this.arr.push(val)
        return true
    }

    remove(val: number): boolean {
        const index = this.arr.indexOf(val)
        if(index == -1) {
            return false
        }
        this.arr.splice(index, 1)
        return true
    }

    getRandom(): number {
        const random = Math.floor(Math.random() * this.arr.length);
        return this.arr[random]
    }
}

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1))
console.log(randomizedSet.remove(2))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())
console.log(randomizedSet.remove(1))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())
