// Polymorphism enables objects of different classes to be treated as objects of a common base class, allowing for flexibility in method implementation.
// poly means many and morphism means transforming one form into another.
// Polymorphism means the same function with different signatures is called many times.

class firstClass{
    add(){
        console.log("First Method");
    }
}

class secondClass extends firstClass{
    add(){
        console.log(1 + 2);
    }
}

class thirdClass extends secondClass{
    add(){
        console.log("Last Method")
    }
}


let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();


ob.add();
ob2.add();
ob3.add();


class A{
    area(x, y){
        console.log(x * y);
    }
}
class B extends A{
    area(a, b){
        super.area(a, b);
        console.log("class b")
    }
}

let a = new A();
let b = new B();

b.area(4, 4)