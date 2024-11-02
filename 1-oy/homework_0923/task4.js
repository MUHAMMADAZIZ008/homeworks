//afterNYears function yarating people deb nomlanagan object va n year ni kiritilsin n kiritilganda objectdagi hamma qiymatlar n yerga ortishi kerak!.
function afterNYears(obj, n) {
    for(key in obj){
        obj[key] += n
    }
    return obj
}
console.log(afterNYears({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
}, 19))
