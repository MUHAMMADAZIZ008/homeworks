//Closure function yarating ular massiv va butun son (n)(m) qabul qilsin (n = [], m > 0) shu hola ==n== massivning ichidagi elementlarni ichida m soniga yaqin bo'lgan sonni topadigan algorithm tuzing!.

function similarNumber(arr, n){
    let obj = {}
    for (item of arr){
        obj[Math.abs(n - item)] = item
    }
    let min = Infinity
    for (key in obj){
        if (min > +key){
            min = +key
        }
    }
    return obj[String(min)]
}


console.log(similarNumber([16,8,2,1,5,9,3], 6))
// console.log(similarNumber([1,12,32,2,10,5,4], 30))