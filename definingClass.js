// ES6 classes definition

class Vehicle{
    constructor (name, make, engine){
        this.name = name,
        this.make = make,
        this.engine = engine
    }
    
    getDetails(){
        return (`The name of the bike is ${this.name}.`);
    }
}

let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc")
let bike2 = new Vehicle("R1M", "Yamaha", "1000cc")


console.log(bike2.getDetails())




// traditional way

function Bike(name, make, engine){
    this.name = name,
    this.make = make,
    this.engine = engine
}

Bike.prototype.getDetails = function(){
    console.log(`${this.name} is the name of the vehicle.`)
}

let bike3 = new Bike("Hayabusa", "Suzuki", "1340cc");
console.log(bike3.make)
bike3.getDetails()