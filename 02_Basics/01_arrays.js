// array

const  myArr = [1, 3 , 5, 7 , 8]
const myCars = ["BMW" , "BMW"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// Array methods

// myArr.push(100)
// myArr.pop()
// myArr.unshift(2)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(2,4)

console.log(myn1);
console.log("B" , myArr);


console.log("A" , myArr);

const myn2 = myArr.splice(2,4)

console.log(myn2);
console.log("B" , myArr);
