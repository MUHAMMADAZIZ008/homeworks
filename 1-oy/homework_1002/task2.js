const peoples = [
    { name: "Husan", birthYear: 1905, deathYear: 1960},
    { name: "Ali", birthYear: 1900, deathYear: 1980},
    { name: "Vali", birthYear: 1920, deathYear: 1995},
    { name: "Hasan", birthYear: 1915, deathYear: 2005}
];

function elderPerson(peoples) {
    let maxAge = 0
    let arr = []
    for(let people of peoples){
        if(people.deathYear - people.birthYear > maxAge){
            maxAge = people.deathYear - people.birthYear
            arr.shift()
            arr.push(people)
        }
    }
    return arr
}

console.log(elderPerson(peoples));