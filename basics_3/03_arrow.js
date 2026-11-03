const user={
    username:"Saroj",
    price:"50$",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my webiste`)  //this here represents current context which is saroj
    }
}


user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()



// function coffee(){
//     const name="flat white"
//     console.log(this.name) looks for name property of the object which is not here so undefined
// }

// coffee()


//###############################   Arrow functions    ################################


// const addTwo= (num1, num2)=>{  
//     return num1 + num2

// }

//const addTwo=(num1, num2)=> num1 + num2  implicit return

const addTwo=(num1, num2)=> (num1 + num2) // if they are wrapped in curly braces we need to use return but with parenthese we don't




console.log(addTwo(4,65))