// primitive data types
// 7 types- string , number , boolean. null, undefined, symbol, bigInt

const score= 50
const scoreValue= 50.3
const isLoggedIn= false
const outsideTemp= null
let userEmail;


const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);

const bigNum= 1234567n



// non-primitive data types(reference)
// Arrays, objects, functions

const hereos= ["batman", "superman", "green Lantern"]
let myObj = {
    name:"Saroj",
    age:26
}

const myFunction= function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);
console.log(typeof myFunction)
console.log(typeof hereos);





