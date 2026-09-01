const tinderUser = new Object()
tinderUser.id = "7340980"
tinderUser.name = "Aman"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aaryan",
            lastname : "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const car = {
    carName: "Polo gt",
    carModel: "2020",
    carPrice: "800000"

}

const {carName} = car 
console.log(carName);



// jason form
// {
//     "name" : "aaryan",
//     "age": "18"
// }