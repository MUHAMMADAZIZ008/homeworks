const url = "https://jsonplaceholder.typicode.com/todos"

const toDo = async (id) =>{
    try{
        let res = await fetch(url)
        if(!res.ok){
            throw new Error("url xato")
        } 
        let date = await res.json()
        let toDoArr = []
        for(let todo of date){
            if(todo.userId === id){
                toDoArr.push(todo)
            }
        }

        console.log(toDoArr);
    }catch(e){
        console.log(e);
    }
}


toDo(5)