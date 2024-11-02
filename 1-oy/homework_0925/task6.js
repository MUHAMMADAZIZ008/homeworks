//Funtion yarating u array qabul qilsin array ichida so'zlar berilgan. So'zlardan faqat kichik harfli unlilarni qaytaradigan algorithm tuzing!
function returnVowel(arr){
    let newArr = []
    let vowle = "AEIOUaeiou"
    for (item of arr) {
        let temp = ""
        for (let i = 0; i < item.length; i++) {
            if(vowle.includes(item[i])){
                temp += item[i]
            }
        }
        newArr.push(temp)
    }
    return newArr
}
console.log(returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"]));