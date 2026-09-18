const myNum = [1,2,3,4,5,6]


// here as we have not used scope so we do not use the word return 
// const newNums = myNum.map( (num) => num+10)
// console.log(newNums);

// chaining Method
const newNums =myNum
               .map((num) => num*10)
               .map((num) => num+1)
               .filter((num) => num>=40)
console.log(newNums);
