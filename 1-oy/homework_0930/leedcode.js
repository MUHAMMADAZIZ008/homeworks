var findWordsContaining = function(words, x) {
    let findIndex = []
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            findIndex.push(i)
        }
    }
    return findIndex
};

words = ["leet","code"] 
x = "e"
console.log(findWordsContaining(words, x));

