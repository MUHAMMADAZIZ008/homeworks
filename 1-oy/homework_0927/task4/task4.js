function checkout(arrMap) {
    let sum = 0
    for (obj of arrMap){
        if(obj["taxable"]){
            sum += (obj["prc"] * obj["qty"]) * 1.06
        }else{
            sum += obj["prc"] * obj["qty"]
        }
    }
    return sum
}

let arrMap = checkout([
    { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
    { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
    { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
])

console.log(arrMap);