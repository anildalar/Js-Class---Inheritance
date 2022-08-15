/*
class <ClassName>{
    //1. Properties

    //2. Constructor

    //3. Method
}
*/

//1. Function defination
function myFunction(){
    console.log("ok")
}

//2. Function Calling
myFunction();

class A{
    //1. Properties

    //2. constructor

    //3. method/functions
    //function defination iside a class
    myFunction2(){
        console.log("Hello from myfunction2");

        //object.method();
        this.myMethod3();
    }

    myMethod3(){
        console.log("Hello from myMethod3")
    }

}

class B extends A{
    //1. Properties

    //2. constructor

    //3. Method
    myBMethod1(){
        console.log("Hello from myBMethod1")
        this.myMethod3();
    }

}

//Create object from the class
// let object  = new ClassName();
    let x = new A(); // x is a external class object

    //object.method();
    x.myFunction2();   // . member selection operator

// object.member
//object.method();
//object.property


let obj = new B();

obj.myBMethod1();

obj.myFunction2();