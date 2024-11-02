class Box{
    constructor(length, width, height){
        this._length = length
        this.width = width
        this.height = height
    }
    getVolume(){
        return this._length * this.width * this.height
    }
    totalVolume(...boxes){
        let totle = 0
        for(let item of boxes){
            totle += item.getVolume()
        }
        return totle
    }
}
let box1 = new Box(2, 5, 3)
let box2 = new Box(3, 7, 1)
let box3 = new Box(4, 2, 8)
console.log(box1.getVolume());
console.log(box2.getVolume());
console.log(box3.getVolume());

console.log(box1.totalVolume(box1, box2, box3));