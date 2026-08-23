// Primitive Data types (In this type we can only access the copy of the original 
// data original address is not accessible)

// 7 Tpyes : String, number , boolean, null, undefined, symbol, BigInt 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference Type(Non - Primitive)

// Arrays, objects, functions

const cars = ["audi" , "bmw" , "fortuner"];
let myObj={
    name: "Aaryan",
    age: 18,
}

const myFunction = function(){
        console.log("Hello world");
        
}

console.log(typeof myFunction);
console.log(typeof cars);
console.log(typeof myObj);
console.log(typeof id);


// (STACK & HEAP)

// Stack is used in Primitive Datatypes
// heap is used in Non - Primitive Datatypes
let myName = "aman"

let anotherName = myName
anotherName = "Aaryan"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "userone.com",
    upi : "fiuvn"

}

let userTwo = userOne 

userTwo.email = "jdcncwnc"

console.log(userOne.email);
console.log(userTwo.email);
