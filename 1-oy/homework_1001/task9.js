const api = 'https://jsonplaceholder.typicode.com/todos/1asjknn'

async function myAsync() {
    try {
        let info = await fetch(api)
        let result = await info.json()
        if(JSON.stringify(info) === JSON.stringify({})){
            throw new Error("API bosh!");
        }
        console.log(result);
    }catch(e){
      console.log(e);
    }
}

myAsync()