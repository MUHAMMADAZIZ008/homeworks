import axios from "axios"
let url = "http://localhost:3000/users"


const getAllUsers = () =>{
    axios
        .get(url)
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}

// getAllUsers()

const getUserById = (id) =>{
    axios
        .get(`${url}/${id})`)
        .then(res =>{
            console.log(res);
        })
        .catch(e =>{
            console.log(e);
        })
}
// getUserById()

let newUser = {
    name : "Men", 
    email : "men@gamil.com",
    age : 16
}

const creadUser = (data) =>{
    axios
        .post(url, data)
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}
// creadUser(newUser)

let update = {
    name : "sen", 
    email : "sen@gamil.com",
    age : 18
}


const updateUser = (id, data) =>{
    axios
        .put(`${url}/${id}`, data)
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}

// updateUser(4, update)

const deleteUser = (id) =>{
    axios
    .put(`${url}/${id}`)
    .then(res =>{
        console.log(res.data);
    })
    .catch(e =>{
        console.log(e);
    })
}
deleteUser(5)