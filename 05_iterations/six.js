const coding = ["js", "py", "c++", "java"]


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num>4)
console.log(newNums);

// if we use curly braces then the scope roles comes in place we have to use "return" keyword for getting the output
const nNums = myNums.filter((item) => {
    return item>5
})
console.log(nNums);


const newwNums = []

myNums.forEach((num) =>{
    if(num>7){
        newwNums.push(num)
    }
})

console.log(newwNums);
