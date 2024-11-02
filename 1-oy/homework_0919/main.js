// 1-misol //Funksiya yarating u array olsin va arrayling birinchi elementini( 0 indexda turganini ) qaytarsin

// function getFirstValue(items){
//     return items[0]
// }

// console.log(getFirstValue([1, 2, 3]))

// 2-misol//Function yarating array turidagi paramert olsin va faqat arrayning just qiymatlarni yig'ib qaytarsin.

// function getOddValue(items){
//     let new_arr = []
//     for (item of items){
//         if (item % 2 === 0){
//             new_arr.push(item)
//         }
//     }
//     return new_arr
// }

// console.log(getOddValue([1, 2, 3,6]))


// 3-misol//incrementItems degan Function yarationg u array ([]) turidagi qiymat olsin va har bir elementga 1 qiymat qo'shib qaytarsin
// function incrementItems(numAre) {
//     for (let i = 0; i < numAre.length; i++){
//         numAre[i] += 1
//     }
//     return numAre
// }

// console.log(incrementItems([0, 1, 2, 3]))


// 4-misol//Function yarating u array qabul qilsin va arrayning ohirgi qiymatini qaytarsin!.

// function getLastItem(arr){
//     return arr[arr.length - 1]
// }


// console.log(getLastItem([1, 2, 3, 4]))

// 5-misol//Function yarating u array va son olsin, bizga sonning indexni qaytarsin agarda u bo'lsa yoki u yo'q bo'lsa -1 qaytarsin

// function search(items, target){
//     for (let i = 0; i < items.length; i++){
//         if (items[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(search([1, 5, 3], 5))


// function binarySearch(items, target){
//     items = items.sort()
//     let left = 0
//     let right = items.length - 1
//     let mid = 0
//     while (left <= right){
//         mid = left + (right - left) / 2
//         if (items[mid] === target){
//             return mid
//         }
//         if (items[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch([1, 3, 5], 5))


// 6-misol//Function yarating u array qabul qilsin va arraylarning ichidagi qiymatlarning yig'indisini qaytarsin

// function sumArray(numArray){
//     let sum = 0
//     for (num of numArray){
//         sum += num
//     }
//     return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5]))

// 7-misol//Function yarating u number qabul qilsin va object qaytarsin Ilm uchun 50% qismini ajratsin Harajatlar uchun 30% qismini ajrtsin kelajak uchun 20% qismini ajratsin

// function fiftyThirtyTwenty(num){

//     let obj = {
//         "ilm" : Math.floor((100 / 50) * num),
//         "harajatlar" : harajatlar = Math.floor((100 / 30) * num),
//         "kelajak" : kelajak = Math.floor((100 / 20) * num)
//     }

//     return obj
// }


// console.log(fiftyThirtyTwenty(10000))

// 8-misol//Function yarating u (num1, num2, array) qiymatlarini qabul qilsin va num1 bilan num2 oralig'idagi arrayning elementlarni qaytarsin.

// function arrBetween(num1, num2, array){
//     let new_arr = []
//     for (num of array){
//         if(num1 <= num && num <= num2){
//             new_arr.push(num)
//         }
//     }
//     return new_arr
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))

// 9-misol//Function yarating u array va num olsin ==(array, num)== va arraning ichida num bo'lsa true bo'lmasa false qiymat qaytarsin

// function check(array, num){
//     for (item of array){
//         if (item === num){
//             return true
//         }
//     }
//     return false
// }

// console.log(check([1, 2, 3, 4, 5], 3))

// 10-misol//Function yarating u array qabul qilsin va array ning elementlarni typeni qaytarsin

// function arrayValuesTypes(array) {
//     let new_arr = []
//     for (item of array){
//         new_arr.push(typeof item)
//     }
//     return new_arr
// }

// console.log(arrayValuesTypes([1, 2, "salom"]))

// 11-misol//Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.

// function evenOddIndexSums(arr) {
//     let evenIndexSum = 0
//     let oddIndexSum = 0
//     for (let i = 0; i < arr.length; i++){
//         if(i % 2){
//             evenIndexSum += arr[i]
//         }else{
//             oddIndexSum += arr[i]
//         }
//     }
//     let obj = {
//         "evenIndexSum" : evenIndexSum,
//         "oddIndexSum" : oddIndexSum
//     }

//     return obj
// }
    
// console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));

// 12-misol//Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.

// function removeSpaces(str) {
//     let new_str = ""
//     for (i of str){
//         if (i !== " "){
//             new_str += i
//         }
//     }
//     return new_str
// }

// console.log(removeSpaces("Hello World! How are you?"));



// 13-leedcode
var findRestaurant = function(list1, list2) {
    let min = 9999
    let arr_str = []
    for (let i = 0; i < list1.length; i++){
        for (let j = 0; j < list2.length; j++){
            if (list1[i] === list2[j]){
                let index = i + j
                if(min > index){
                    min = index
                    arr_str = [list1[i]]
                }else if(index === min){
                    arr_str.push(list1[i])
                }
            }
        }
    }
    return  arr_str
};

list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]

ist1 = ["Shogun","Tapioca Express","Burger King","KFC"] 
list2 = ["KFC","Shogun","Burger King"]

list1 = ["happy","sad","good"] 
list2 = ["sad","happy","good"]

console.log(findRestaurant(list1, list2))



// 14-leedcode

// var mostCommonWord = function(paragraph, banned) {
//     let new_arr = []
//     paragraph = paragraph.split(" ")
//     return paragraph
// };



// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// console.log(mostCommonWord(paragraph, banned))

// 15-leedocde
// var sortPeople = function(names, heights) {
//     let peoples = {}
//     let result = []
//     for (let i = 0; i < names.length; i++){
//         peoples[heights[i]] = names[i]
//     }
//     heights = heights.sort()
//     heights = heights.reverse()
//     for (height of heights){
//         for (people in peoples){
//             if(height === +people){
//                 result.push(peoples[people])
//             }
//         }
//     }
//     return result
// };


// names = ["Mary","John","Emma"] 
// heights = [180,165,170]

// names = ["Alice","Bob","Bob"] 
// heights = [155,185,150]

// console.log(sortPeople(names, heights))

