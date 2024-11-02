function highScore(scoreSet) {
    let result = []
    let max = 0
    let student = {}
    for(val of scoreSet){
        val["scores"] = Math.floor((val["scores"].reduce((acc, num) => acc + num, 0)) / val["scores"].length)
    }
    for(val of scoreSet){
        if(max <= val["scores"]){
            if(max != val["scores"]){
                result.shift(val)
            }
            max = val["scores"]
            student = val
            result.push(student)
        }
    }
    return result
}


const students = new Set([
    { name: "Alice", scores: [90, 85, 92]},
    { name: "Bob", scores: [75, 80, 85]},
    { name: "Charlie", scores: [90, 95, 85]},
    { name: "Jack", scores: [100, 100, 100]},
    { name: "Luci", scores: [100, 100, 100]},
    { name: "luna", scores: [100, 100, 100]}
]);

console.log(highScore(students))