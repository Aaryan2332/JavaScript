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
