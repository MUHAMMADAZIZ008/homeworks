function greet(name, callback){
    callback(name)
}
function callback(name) {
    console.log(`hello ${name}`);
}

greet("Muhammadaziz", callback)

