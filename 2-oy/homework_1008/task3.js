
process.argv.push(function sum(a, b, ch){
    let command = "+-*/"
    if(command.includes(ch)){
        return eval(`${a}${ch}${b}`)
    }
    return "Belgi xato"
})
console.log(process.argv[process.argv.length-1](1,3, "*"));