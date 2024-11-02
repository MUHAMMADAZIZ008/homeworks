class BankAccount{
    constructor(ownerName, accountNumber){
        this.ownerName = ownerName
        this.accountNumber = accountNumber
        this.blance = 0
    }
    deposit(amaute){
        this.blance += amaute
        console.log((this.blance));
    }
    withdraw(amaute){
        amaute = amaute + (amaute * 0.1)
        if(this.blance > amaute){
            this.blance -= amaute
        }else{
            console.log("mablag' yetarli emas");
        }
    }
    get showBalance(){
        console.log(`Balanse: ${this.blance}`);
    }
}

let user1 = new BankAccount("aziz", "9860")
let user2 = new BankAccount("muhammad", "9860")
user1.deposit(5000000)
user2.deposit(10000000)

user1.withdraw(200)
user2.withdraw(300)

user1.showBalance
user2.showBalance