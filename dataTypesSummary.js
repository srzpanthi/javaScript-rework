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


//************************************************************* */
// stack (primitive) 
/* Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. value you get is always a copy
4. Changes to copies don't affect the original.*/ 
let myEmail= "srpan@gmail.com"
let anotherEmail= myEmail;
anotherEmail="srzpan@gmail.com";

console.log(myEmail)
console.log(anotherEmail);

//heap(non-primitive)
/*Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2.value you get is a reference
3. Changing the value through another reference affects the original.*/

let user1= {
    name:"saroj",
    email:"srzpan@gmail.com"
}

let user2=user1;
user2.email="srzpan@gmail.com"

console.log(user1.email)
console.log(user2.email)








