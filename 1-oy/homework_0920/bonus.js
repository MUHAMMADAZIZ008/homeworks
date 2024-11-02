const magic = {
	// replace(a, b){

	// },
	length(data){
    return data.length
	},

	toUpperCase(str){
        let upperStr = ""
        let asciiValue  = 0
        for (let i = 0; i < str.length; i++){
            asciiValue = str[i].charCodeAt(0)
            if(asciiValue >= 97 && asciiValue <= 122){
                upperStr += String.fromCharCode(asciiValue - 32)
            }else{
                upperStr += str[i]
            }
        }
        return upperStr
	},
  
	repeat(data, n){
        let new_str = ""
        data = String(data)
        for (let i = 0; i < n; i++){
            for (let j = 0; j < data.length; j++){
                new_str += data[j]
            }
            if(i != data.length -1){
                new_str += " "
            }
        }
        return new_str
    },

	count(str){
        let charCount = {}
        for(ch of str){
            if (charCount[ch]){
                charCount[ch] += 1
            }
            else {
                charCount[ch] = 1
            }
        }
        return charCount
	}
}

console.log(magic.toUpperCase("salom"))
console.log(magic.repeat("salom", 2))
console.log(magic.count("hello world"))