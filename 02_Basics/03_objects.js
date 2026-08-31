// Object Literals 
const mySym = Symbol("key1")
const JsUser = {
    name: "Aaryan",
    age : 18,
    [mySym]: "mykey1",
    address: "Ludhiana",
    email: "aaru2332@gmail.com"

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "aaru2332code@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "aaru2332coder@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
