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
