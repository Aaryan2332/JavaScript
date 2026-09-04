// {} -> this is known as scope

let a = 300

if(true){
    let a = 10
    const b = 30
    // console.log("INNER:", a);
        
}

// console.log(a);

// nested Scope

function one(){
    const username =  "aaryan"

    function two(){
        const website = "yt"
        console.log(username);
        
    }
    // console.log(website);

    // two()
    
}
// one()


if(true){
    const username = "Aaryan"
    if(username === "Aaryan"){
        const website = " yt"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++++++  interesting  ++++++++++++++++++++++++++++

function addOne(num){
    return num +1;
}

console.log(addOne(5));


const addTwo = function(num){
    return num+2;
}
console.log(addTwo(4));