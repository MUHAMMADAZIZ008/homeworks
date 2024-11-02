// 1-misol
// let num1 = +prompt("1-son")
// let num = +prompt("2-son")

// 2-misol
// let text = prompt("Matn kiriting")
// let new_str = ""
// for (let i = text.length - 1; i >= 0; i--){
//     new_str += text[i]
// }
// alert(new_str)

// 3-misol
// let mixed_number = prompt("Son aralashgan matn kiriting")
// let new_num = ""
// for (let i = 0; i < mixed_number.length; i++){
//     if (!isNaN(Number(mixed_number[i]))){
//         new_num += mixed_number[i]
//     }
// }
// alert(new_num)

// 4-misol
// let num = prompt("son kriting")
// let max = 0

// for (let i = 0; i < num.length; i++){
//     for (let j = 0; j < i; j++){
//         if (Number(num[i]) - Number(num[j]) > max){
//             max = Number(num[i]) - Number(num[j])
//         }
//     }
// }
// alert(max)

// 5-misol
// let num1 = +prompt("1-son")
// let num2 = +prompt("2-son")
// let num3 = +prompt("3-son")

// let max = num1
// let min = num1

// if (max < num2){
//     max = num2
// } 
// if (num3 > max){
//     max = num3
// }
// if (min > num2){
//     min = num2
// } 
// if (min > num3){
//     min = num3
// }

// alert(`Max son: ${max}, min son: ${min}`)


// 6-misol
// let expression = prompt("Matematik ifoda kriting")
// alert(eval(expression))

// 7-misol
// let num = prompt("son kriting")
// let new_num = ""
// for (let i = num.length - 1; i >= 0; i--){
//     new_num += num[i]
// }
// new_num = Number(new_num)
// alert(new_num)

// 8-misol
// let mixed_number = prompt("Son aralashgan matn kiriting")
// let new_num = 0
// for (let i = 0; i < mixed_number.length; i++){
//     if (!isNaN(Number(mixed_number[i]))){
//         new_num += +mixed_number[i]
//     }
// }
// alert(new_num)

// 9-misol
// let hiiden_num = 32

// let num = +prompt("Yashirin sonni toping?")

// let limit = 7

// while (limit >= 0){
//     if (num === hiiden_num){
//         alert(`${limit} ta urinishda topdizngiz!`)
//         break
//     }
//     if (limit === 0){
//         alert("Urinishlar soni tugadi")
//         break
//     }
//     if (num > hiiden_num){
//         alert("Siz kiritgan son yashirin sondan katta")
//     }
//     if(num < hiiden_num){
//         alert("Siz kiritgan son yashirin sondan kichik")
//     }
//     num = +prompt("Yashirin sonni toping?")
// }


// 10-misol
// let num1 = +prompt("1-son")
// let num2 = +prompt("2-son")
// alert(num1 * num2)