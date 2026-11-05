const email= "szpanthi@gmail.com"
if(email){
    console.log("Got user email")
}else{
    console.log("No user email")
}



// falsy value - false, 0, -0, 0n, BigInt, "", null, undefined, nan 
// truthy value- true, "0", "false", "  ", [], {}, function(){}, 

const userEmail=[]
const emptyObject={}

if(userEmail.length===0){
    console.log("The array is empty")
}


if(Object.keys(emptyObject).length===0){
    console.log("The object is empty")
}


// nullish coaleasing operator(??): null and undefined
// The Nullish Coalescing Operator (??) in JavaScript provides a default value when the left side is null or undefined.
// used when you want to provide a default value if a variable is null or undefined
//  used in data retrieving annd handling error

let val1;
// val1=6??10
val1=null??38
console.log(val1)


///////////////////////////   Ternary operator ////////////////////
const iceTeaPrice=100
iceTeaPrice>=80?console.log("Less than 80"):console.log("more than 80")

