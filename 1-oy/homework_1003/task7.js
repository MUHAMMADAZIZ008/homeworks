function oddIndexedElements(arr) {
    let rest =arr.map((num, index) =>{
        if(index % 2 ){
            return num
        }
    })
    return rest.filter((num) => num !== undefined)
}

console.log(oddIndexedElements([1, 2, 3, 4, 5, 6])); 