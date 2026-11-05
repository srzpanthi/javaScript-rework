// If statement

// const temperature = 50
// if(temperature<50){
//     console.log("Temperature is less than 50")
// }else{
//     console.log("temperature is greater than 50")
// }



const userLoggedIn= true
const debitCard= true
const userLoggedInFromGoogle=true
const userLoggedInFromEmail=false
if(userLoggedIn && debitCard){
    console.log("You may purchase the product")
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("successfully logged in")
}