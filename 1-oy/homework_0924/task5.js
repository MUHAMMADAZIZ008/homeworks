function defis(str) {
    let texts = str.split(" ")
    let newStr = ""
    let temp = ""
    for(let text of texts){
        let len = text.length
        if(len > 10){
            let half = Math.floor(len / 2)
            if(half % 2 === 0){
                newStr += text.slice(0, half) + "-" + text.slice(half)
            }else{
                newStr += text.slice(0, half) + "-" + text.slice(half)
            }

        }else{
            newStr += text
        }
    }
    return newStr
}
console.log(defis("Assalomu Alaykum Javohir"));
console.log(defis("Robocontest contest"));
console.log(defis("Bilmasvoyta'tilda"));