class Circle{
    constructor(radius){
        this.radius = radius
    }
    get getArea(){
        let count = Math.PI * (this.radius ** 2)
        console.log(count);
    }
    get getPerimeter(){
        let count = Math.PI * this.radius * 2
        console.log(count);
    }
}

let o1 = new Circle(2)
let o2 = new Circle(7)
o1.getArea
o2.getArea
o1.getPerimeter
o2.getPerimeter