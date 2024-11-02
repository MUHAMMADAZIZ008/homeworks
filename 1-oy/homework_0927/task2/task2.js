let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    inAmout : 0,
    outAmout : 0,
    addExpense: function(type, amount) {
        if(type === "water"){
            Expenses.water += amount
            Expenses.inAmout += amount
            return true
        }else if(type === "gas"){
            Expenses.gas += amount
            Expenses.inAmout += amount
            return true

        }else if(type === "electricity"){
            Expenses.electricity += amount
            Expenses.inAmout += amount
            return true
        }
        return false
    },
    removeExpense: function(type, amount) {
        if(type === "water"){
            Expenses.water -= amount
            Expenses.outAmout -= amount
            return true
        }else if(type === "gas"){
            Expenses.gas -= amount
            Expenses.outAmout -= amount
            return true

        }else if(type === "electricity"){
            Expenses.electricity -= amount
            Expenses.outAmout -= amount
            return true
        }
        return false
    },
    printMonthlyReport : function() {
        let showReprot = `
            Mothly report:
                income - ${Expenses.inAmout}\n
                spends money - ${Expenses.outAmout}
        `
        alert(showReprot)
	}
};

let type = `
    type:\n
        1. water\n
        2. gas\n
        3. electricity
`

let command = `
    1. add expense\n
    2. remove expense\n
    3. show monthly reprot\n
    4. exit
`

let isTrue = true
while (isTrue) {
    alert(command)
    let selctCommand = prompt("Selct command").toLowerCase()
    switch (selctCommand) {
        case "add expense":
            alert(type)
            let selectType = prompt("Select type").toLowerCase()
            let amount = Number(prompt("Enter amout"))
            let isAdded = Expenses.addExpense(selectType, amount)
            if(isAdded){
                alert("added successfully")
            }else{
                alert("There is a problem with adding")
            }
            break;
        case "remove expense":
            alert(type)
            selectType = prompt("Select type").toLowerCase()
            amount = Number(prompt("Enter amout"))
            isAdded = Expenses.removeExpense(selectType, amount)
            if(isAdded){
                alert("remove successfully")
            }else{
                alert("There is a problem with removal")
            }
            break;
        case "show monthly reprot":
            Expenses.printMonthlyReport()
            break;
        case "exit":
            let con = confirm("are you sure?")
            if(con){
                isTrue = false
            }
            break;
        default:
            alert("no such command exists")
            break;
    }
}