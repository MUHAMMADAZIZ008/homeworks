class product {
    constructor(name, quntitey, price){
        this.name = name
        this.quntitey = quntitey
        this.price = price
    }
    get productInfo(){
        console.log(
        `
        name: ${this.name}
        quntitiey: ${this.quntitey}
        price: ${this.price}
        `);
    }
    set setPrice(newPrice){
        this.price = newPrice
    }
}

const tovar = new product("non", 14, 3500)
tovar.setPrice = 58000
tovar.productInfo