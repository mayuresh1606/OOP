// What is inheritance
// It is the concept where some properties of another object are used by another object

class Car{
    constructor(brand){
        this.brand = brand;
    }
    present(){
        return "This is the car model: " + this.brand;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    show(){
        return `${super.present()} and model is: ${this.model}`;
    }
}

let car1 = new Car("Ford")
console.log(car1.present());

let car2 = new Model("Nissan", "GTR");
console.log(car2.show());


class SuperCar{
    constructor(brand){
        this.carname = brand;
    }
    get cname(){
        return this.carname;
    }
    set cname(x){
        this.carname = x;
    }
}

let newCar = new SuperCar("Supra")
console.log(newCar.cname);
newCar.cname = "GTR"
console.log(newCar.cname);