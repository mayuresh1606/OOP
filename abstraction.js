// Abstraction involves simplifying complex reality by modeling classes based
// on their essential characteristics while hiding implementation details.

class Abstraction{
    set(x, y){
        this.a = x;
        this.b = y;
    }

    display(){
        console.log(`a = ${this.a}`)
        console.log(`b = ${this.b}`)
    }
}

let obj = new Abstraction()
obj.set(2, 4);
obj.display();