let contact = {}
let index = 1
let showContact = ""
let commandInfo = `
- add: Yangi kontakt qo'shish \n
- search: Kontaktni qidirish \n
- delete: Kontaktni o'chirish \n
- list: Barcha kontaktlarni ko'rsatish \n
- help: Mavjud komandalarni ko'rsatish \n
- exit: Dasturdan chiqish \n
`
let isTrue = true

let phoneNumberArr = [91, 90, 88, 97, 93, 33]
let phoneNumberTrue = false
let searchContact = ""
while (isTrue) {
    alert(commandInfo);
    let command = prompt("Enter a command").toLowerCase();
    switch (command) {
        case "add":
            let newConatact = prompt("Enter a new conact name").toLowerCase();
            let newConatactNumber = prompt("Enter a new conact phone number").toLowerCase();
            for(number of phoneNumberArr){
                if(number === Number(newConatactNumber.slice(0, 2)) && newConatactNumber.length === 9){
                        phoneNumberTrue = true
                }
            }
            if(phoneNumberTrue){
                contact[newConatact] = {
                    name : newConatact,
                    phoneNumber : `+998${newConatactNumber}`
                };
                alert("Successfully added")
            }else{
                alert("You entered the wrong number")
                continue
            }
            break;
        case "search":
            searchContact = ""
            index = 1
            let search = prompt("...")
            for(key in contact){
                if(contact[key].phoneNumber.includes(search)){
                    searchContact += `
                ${index}. ${key}: \n
                Phone Number: ${contact[key].phoneNumber}
                `
                index++
                }
            }
            alert(searchContact)
            break
        case "delete":
            alert(showContact)
            let deleteContact = prompt("Enter the contact name").toLowerCase();
            if(deleteContact in contact){
                delete contact[deleteContact]
                alert("Deleted successfully")  
            }else{
                alert("There is no such contact")
            }
            break;
        case "list":
            index = 1
            showContact = ""
            for(key in contact){
                showContact += `
                ${index}. ${key}: \n
                Phone Number: ${contact[key].phoneNumber}
                `
                index++
            }
            if(showContact){
                alert(showContact)
            }else{
                alert("Emtpy")
            }
        case "help":
            alert(commandInfo)
            break
        case "exit":
            isTrue = false
            break
        default:
            alert("You criticized the wrong command")
            break;
    }

}