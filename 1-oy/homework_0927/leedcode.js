var similarPairs = function(words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let word1 = [...new Set(words[i])].sort().join('');
            let word2 = [...new Set(words[j])].sort().join('');
            
            if (word1 === word2) {
                count++;
            }
        }
    }
    return count;
};

let words = ["aba", "aabb", "abcd", "bac", "aabc"];
console.log(similarPairs(words)); 
