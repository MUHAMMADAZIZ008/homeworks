function mostSpokenLanguages(set, n){
    let result = Array.from(set);
    let languageArr = []
    for(val of result){
        let language = Object.keys(val)[0];
        languageArr.push([language, val[language]])
    }
    languageArr.sort((a, b) => b[1] - a[1])

    return languageArr.slice(0, n)
}


let countries = new Set([
    {Russian: 9},
    {English: 91},
    {French: 45},
    {Spanish: 24},
    {Portuguese: 9},
    {Dutch: 8},
    {German: 7},
    {Arabic: 25},
    {Chinese: 5},
    {Swahili: 4},
    {Serbian: 4}
])

console.log(mostSpokenLanguages(countries, 3))
