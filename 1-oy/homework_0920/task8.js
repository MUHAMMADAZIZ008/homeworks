var rotateString = function(s, goal){
    let temp = ""
    let temp1 = ""
    for (let i = 0; i < s.length; i++){
        temp = s.slice(i)
        temp1 = s.slice(0, i)
        if(temp + temp1 === goal){
            return true
        }
    }
    return false
};

s = "abcde" 
goal = "cdeab"
console.log(rotateString(s, goal))