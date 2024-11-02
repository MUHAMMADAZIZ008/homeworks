//To'liq so'z tugaguncha ketma-ket harflarni qo'shib, so'zni qabul qiladigan va yozadigan funksiya yarating.

function spelling(str) {
    let newArr = []
    for(let i = 1; i <= str.length; i++){
        newArr.push(str.slice(0, i))
    }
    return newArr
}
console.log(spelling("bee"));
console.log(spelling("happy"));
console.log(spelling("eagerly"));