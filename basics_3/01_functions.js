// code that you have written stored inside a package that you can reuse again and again

function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("R")
    console.log("O")
    console.log("J")

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(77 , 97)

//The input passed while making a function is parameter and the value passed while calling the function is called arguments


function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result= addTwoNumbers(87,97)
// console.log("result :", result)


// function userLoginMessage(username){
//     return `${username} just loggedin`
// }

// console.log(userLoginMessage("saroj"))

function userLoginMessage(username){
    if(!username){
        console.log("please use your username")
        return 
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage(""))



function calculateCartPrice(...num){
    return num

}

// console.log(calculateCartPrice(300,4000,50000,500000))


const user= {
    book:"Fever dream",
    price:"50$"
}

function handleObject(myobject){
    console.log(`Bookname ${myobject.book} and price is ${myobject.price}`)

}

handleObject(user)

const myNewArray = [200,900,677,78778]
function getSecondValue(myArr){
    return myArr[2]

}
console.log(getSecondValue(myNewArray))