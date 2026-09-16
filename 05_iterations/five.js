const coding = ["js", "py", "c++", "java"]

// call back fucntion does not use name for function
// coding.forEach(function (item) {
//     console.log(item);
    
// })


// using arrow function
// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// We can also use multiple prameters in forEach
// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "c++",
        langFileName: "cpp"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
    
})