// normal code
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}



// encapsulated code
let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (overtime * rate)
    }
}

employee.getWage()


// What is encapsulation?
// The process of wrapping properties and function into a single unit is known as encapsulation

// class based encapsulation
class Encapsulation{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    add_address(add){
        this.address = add;
    }

    getInfo(){
        return `Person's name is ${this.name} ${this.address !== undefined ? `and lives in ${this.address} `: ""}`;
    }
}

let person = new Encapsulation("Mayuresh", 21);
person.add_address("Mumbai");
console.log(person.getInfo())


class BankAccount{
    constructor(accountNumber, accountHoldersName, balance){
        this.accountNumber = accountNumber
        this.accountHoldersName = accountHoldersName
        this.balance = balance
    }

    showAccountDetails(){
        console.log(`Account holder's name: ${this.accountHoldersName}`)
        console.log(`Account number: ${this.accountNumber}`)
        console.log(`Account Balance: ${this.balance}`)
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if (this.balance < amount){
            console.log("Insufficient balance");
        }else{
            this.balance -= amount;
            this.showAccountDetails();
        }
    }
}

let acc = new BankAccount(123,"Mayuresh", 20000);
acc.deposit(3000)
acc.withdraw(15000)