const marvel_heros = ["thor", "vision", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_h\ros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator  

const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5], 6,7,[8,9,[5,4]],10]
const another_real_array = another_array.flat(Infinity)
// console.log(another_real_array);


// console.log(Array.isArray("Aaryan"))
// console.log(Array.from("Aaryan"))

// console.log(Array.from({name: "Aaryan"}));

let s1 = 1
let s2 = 2
let s3 = 3

console.log(Array.of(s1,s2,s3));

