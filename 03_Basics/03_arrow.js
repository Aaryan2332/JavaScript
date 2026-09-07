const user = {
    username : "aaryan",
    age : 18,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sushma"
// user.welcomeMessage()

// function chai(){
//     let username = "aaryan"
//     console.log(this.username);
    
// }

// chai()

const chai = () => {
    let username = "aaryan"
    console.log(this.username);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4));
