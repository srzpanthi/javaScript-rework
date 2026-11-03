var  c= 400
let b=60

if (true){
    const a=20
    let b= 30
    var c= 40
}

// console.log(a)
// console.log(b)
// console.log(c)

// anything written inside a scope is called block scope
// anything written outside a block is called global scope


//nested functions

function one(){
    const website="www.google.com"
    function two(){
        const channelName="saroj"
        console.log(website)
    }

    // console.log(channelName)
    two()
}

// one()

if(true){
    const username="saroj"
    if(username==="saroj"){
        const website="panthi"
        console.log(username + website)
    }

    // console.log(website)  reference as it is outside the scope
}

// console.log(username)   it is gonna show reference error, username is not defined as it is outside the scope




function addOne(num){
    return num + 1

}

console.log(addOne(5))

const addTwo= function(num){
    return num+2

}

console.log(addTwo(5))
