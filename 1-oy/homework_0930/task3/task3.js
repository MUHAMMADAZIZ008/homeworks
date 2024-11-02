const magic = {
	replace(a, b, c){
        a.replace(b, c)
	},
	length(data){
        // let date = data
        return String(date).length
	//har qanday data bersak ham uni uzunligini qaytarsin
	},
	toUpperCase(str){
        let newStr = ""
        const uppers = {
            'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G',
            'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N',
            'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U',
            'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
        };
        for (key in uppers){
            if(str.inlucdes(key)){
                newStr += uppers[key]
            }
        }
        return newStr
	},
	repeat(data, n){
        let newStr = ""
        // let data = data
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                newStr += date[j]
            }
            if(i !== n - 1){
                date += " "
            }
        }
        return newStr
	},
	count(str){
        let obj = {}
        for(ch of str){
            if(!obj[ch]){
                obj[ch] = 1
            }else{
                obj[ch] += 1
            }
        }
        return obj
	}
}
console.log(magic.count("hello world"));
