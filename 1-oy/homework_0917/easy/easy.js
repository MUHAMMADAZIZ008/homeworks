// 1- misol
// console.log(a) //undefined
// var a = 2
// console.log(a) //2
// a = 5
// console.log(a) //5

/*var orqali o'garuvchi elon qilganimizda uni qayta qiymat berishimiz mukin va 
uni elon qilishdan oldin chaqirganimida u xatolik bermaydi va undefined qaytaradi*/
//-------------------------------//
// console.log(b) //ReferenceError:
// let b = "hello"
// console.log(b) //hello
// b = false
// console.log(b) // false
/*let bilan elon qilganimiz o'zgaruvchiga qayta qiymat bersak o'ladi 
lekin buni elon qilmasdan oldin kaqirsak Error qaytaradi. Buni var dan faq qiladigon joyi scope larida va versitasida*/
//-------------------------------//

// console.log(c) //ReferenceError
// const c = true
// console.log(c) //true
// c = 4
// console.log(c) //ReferenceError
/*const letga o'hshashib ketadi lekin constga qayta qiymat berib bo'lmaydi */
//--------------------------------------------------------------------------------------

// 2-misol
// let n = 21
// let s = "b"
// console.log(n+s)

//--------------------------------------------------------------------------------------
// 3-misol
// let a = 21
// console.log(typeof a)

// a = true
// console.log(typeof a)

// a = "salom"
// console.log(typeof a)


//--------------------------------------------------------------------------------------
// 4-misol
// let a = undefined
// console.log(a + "b")


//--------------------------------------------------------------------------------------
// 5-misol
// let n = "10"
// n = Number(n)
// console.log(n - 1)
// console.log(n + 1)
// console.log(n ** 2)
// console.log(n % 2)
//--------------------------------------------------------------------------------------
// 6-misol
// console.log(5 + "5")

// console.log(5 - "5")
// console.log(true - "5")
// console.log(false - "5")

// console.log(false ** "5")

// console.log(true + "5")
// console.log(false + "5")

// console.log(undefined - "7")

//--------------------------------------------------------------------------------------
// 7-misol

// let n = 10
// let s = "salom"
// console.log(s.toUpperCase() + n)

//--------------------------------------------------------------------------------------
// 8-misol
// let n = 21
// let s = "salom"
// let b = true

// n = b
// b = s
// s = n

// console.log(n)
// console.log(s)
// console.log(b)

//--------------------------------------------------------------------------------------
// 9-misol
// let n = "10"
// console.log(parseInt(n) ** 5)

//--------------------------------------------------------------------------------------
// 10-misol
// const n = 10
// n = 10
// console.log(n)
// //izoh const ligi uchun uni qayta qiymat berib bo'lmaydi



