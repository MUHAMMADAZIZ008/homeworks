class CaesarCipher{
    constructor(shift){
        this.shift = shift
    }

    encode(str) {
        let result = "";
        for (let ch of str) {
            let asciiCode = ch.charCodeAt(0);
            
            if (asciiCode >= 65 && asciiCode <= 90) {
                if (asciiCode + this.shift <= 90) {
                    result += String.fromCharCode(asciiCode + this.shift);
                } else {
                    result += String.fromCharCode(((asciiCode - 65 + this.shift) % 26) + 65);
                }
            }
            else if (asciiCode >= 97 && asciiCode <= 122) {
                if (asciiCode + this.shift <= 122) {
                    result += String.fromCharCode(asciiCode + this.shift);
                } else {
                    result += String.fromCharCode(((asciiCode - 97 + this.shift) % 26) + 97);
                }
            }
            else {
                result += ch;
            }
        }
        return result;
    }
    

    decode(str) {
        let result = "";
        for (let ch of str) {
            let asciiCode = ch.charCodeAt(0);
            
            if (asciiCode >= 65 && asciiCode <= 90) {
                if (asciiCode - this.shift >= 65) {
                    result += String.fromCharCode(asciiCode - this.shift);
                } else {
                    result += String.fromCharCode(((asciiCode - 65 - this.shift) % 26 + 26) + 65);
                }
            }
            else if (asciiCode >= 97 && asciiCode <= 122) {
                if (asciiCode - this.shift >= 97) {
                    result += String.fromCharCode(asciiCode - this.shift);
                } else {
                    result += String.fromCharCode(((asciiCode - 97 - this.shift) % 26 + 26) + 97);
                }
            }
            else {
                result += ch;
            }
        }
        return result;
    }
    
}

let massage1 = new CaesarCipher(5)
let testEncode = massage1.encode("Codewars")
console.log(testEncode);

let testDecode = massage1.decode("BFKKQJX")
console.log(testDecode);


