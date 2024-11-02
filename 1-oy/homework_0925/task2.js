//Function yarating u Array qiymati qabul qilsin va arrayning har bir elementini cublarini yig'indisini qaytarsin!.


function sumOfCubes(arr){
    let sum = 0
    for (const item of arr) {
        sum += item ** 3
    }
    return sum
}
console.log(sumOfCubes([3, 4, 5]));