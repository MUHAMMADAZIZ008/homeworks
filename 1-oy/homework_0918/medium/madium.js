// 1-misol
// let num1 = +prompt("1-sonni kiriting")
// let num2 = +prompt("2-sonni kiriting")
// let num3 = +prompt("3-sonni kiriting")

// if (num1 < num2 && num1 < num3){
//     alert(`kichik son ${num1}`)
// } else if (num1 > num2 && num2 < num3){
//     alert(`kichik son ${num2}`)
// } else{
//     alert(`kichik son ${num3}`)
// }

//---------------------------------
// 2-misol


// 3-misol

// function fibonacci(n){
//     if (n === 0){
//         return 0
//     }
//     if (n === 1){
//         return 1
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// let sum = 0

// for (let i = 1; i <= 10; i++){
//     sum += fibonacci(i)
// }
// console.log(sum)

// 4-misol

// let first_name = prompt("Familiyangizni kiriting").toLowerCase()
// let last_name = prompt("Ismingizni kiriting").toLowerCase()
// if (first_name === last_name){
//     console.log("Ism va familiya bir xil")
// }else{
//     console.log("Har xil")
// }


// 5-misol
// let num1 = +prompt("1-son")
// let num2 = +prompt("2-son")
// let action = prompt("(/*-+) kiriting")

// switch (action) {
//     case "/":
//         num1 > num2 ? alert(num1 / num2) : alert("kattni kichikka bo'lib bo'lmaydi")
//         break;
//     case "*":
//         alert(num1 * num2)
//         break
//     case "-":
//         alert(num1 - num2)
//         break
//     case "+":
//         alert(num1 + num2)
//         break
//     default:
//         alert("Notog'ri belgi")
//         break;
// }

// 6-misol
// let num = prompt("son kriting")
// let new_srt = ""
// let sum = 0
// for (let i = 0; i < num.length; i++){
//     if (i != num.length - 1){
//         new_srt += num[i] + "+"
//         sum += +num[i]
//     }else{
//         new_srt += num[i]
//         sum += +num[i]
//     }
// }
// alert(`${new_srt + " = " + String(sum)}`)

// 7-misol
// let num = prompt("son kriting")
// for (let i = 0; i < num.length; i++){
//     if (+num[i] % 2 === 0){
//         console.log(num[i])
//     }
// }

// 8-misol
// let num1 = +prompt("1-son")
// let num2 = +prompt("2-son")

// alert(num1 ** num2)

// 9-misol
// let num1 = +prompt("1-son")
// let sum = 1
// for (let i = 1; i <= num1; i++){
//     sum *= i
// }

// alert(sum)

// 10-misol

// let mixed_number = prompt("Son aralashgan matn kiriting")
// let new_num = ""
// for (let i = 0; i < mixed_number.length; i++){
//     if (!isNaN(Number(mixed_number[i]))){
//         new_num += mixed_number[i]
//     }
// }
// alert(new_num)

// 11-misol
// let num = prompt("son kriting")
// alert(num.length)

// 12-misol
// let num = prompt("son kriting")
// for (let i = 0; i < num.length - 1; i++){
//     console.log(`${num[i]} - ${num[i+1]} = ${num[i] - num[i+1]}` )
// }

// 13-misol
// let num = +prompt("son kriting")

// for (let i = 0; i < num; i++){
//     console.log("* ")
// }


// 14-misol


// 15-misol
// let num1 = +prompt("1-son")
// let num2 = +prompt("2-son")
// alert(`orasidagi farq: ${num1 - num2}`)