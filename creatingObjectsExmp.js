// Using Object Literals: 

const person = {
    firstName: "Mayuresh",
    // method
    getName: function(lastName){
        return `My name is ${person.firstName} ${lastName}`
    },

    // object within object
    contact:{
        landline: 1234455,
        phone: 9871341243
    }
}

console.log(person.getName("Ovhal"))
console.log(person.contact.phone)










// Using constructors: 
function getPerson(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const person1 = new getPerson("Mayuresh", "Ovhal");
const person2 = new getPerson("Rutuja", "Khilari");

console.log(person1.firstName)
console.log(`${person2.firstName} ${person1.lastName}`)