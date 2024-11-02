var finalPositionOfSnake = function(n, commands) {
   let matrix = []
   let m = 0
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < n; j++){
            row.push(m)
            m++
        }
        matrix.push(row)
    }
    let i = 0
    let j = 0
    for(let command of commands){
        if(j < n && command === "RIGHT"){
            j++
        }
        if(j > 0 && command === "LEFT"){
            j--
        }
        if(i < n && command === "DOWN"){
            i++
        }
        if(i > 0 && command === "UP"){
            i--
        }
    }

    return matrix[i][j]
};

let n = 2 
let commands = ["RIGHT","DOWN"]


console.log(finalPositionOfSnake(n, commands));