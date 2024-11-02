//function yarating u arraychida object berilsin o'sha objectdagi userlarning namelarini array qilib qaytarilsin
function getUserName(users){
    let names = []
    for (userObj of users){
        names.push(userObj["name"])
    }
    return names
}

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]
console.log(getUserName(users));