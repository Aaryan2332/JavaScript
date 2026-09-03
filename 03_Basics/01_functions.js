function myName(){
    console.log("A");
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}


// myName()

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// }

// addTwoNumber(3,4)

function addTwoNumber(number1 , number2){
    let result = number1 + number2 
    return result
}

const result = addTwoNumber(4,4)

// console.log("Result:", result);


function loginUserMessage(username = "lodu"){
    if(username === undefined){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

// (...)-> there are used as rest or spread operator

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 8934, 439, 3409));

const user = {
    username: "hitesh",
    age: 18
}

function handleObject(anyObject){
    console.log((`Username is ${anyObject.username} and age is ${anyObject.age}`));
    
}

// handleObject(user)


const myArr = [200, 400 , 700, 800]

function returnSecVal(getVal){
    return getVal[2]
}

console.log(returnSecVal(myArr));
