let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "46abs" => NaN(not a number)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=>true; 0=>false
// "" => false
// "name" => true

let someNum = 33

let stringNumber = String(someNum)
console.log(stringNumber)
console.log(typeof stringNumber)

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "Hello"
let str2 = " Aaryan"
let str3 = str1+str2
console.log(str3); 

// Prefix and Postfix operators
let gameCount = 1000
gameCount++
console.log(gameCount);

let gameCount2 = 2000
++gameCount2
console.log(gameCount2);