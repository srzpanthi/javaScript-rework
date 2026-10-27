const score = 400
const balance = new Number(100)
console.log(balance)
console.log(balance.toFixed(2)) //puts two digits after decimal useful for ecommerce and a lot of other stuffs


const value= 123.897
console.log(value.toPrecision(3))  //result is 124

const hundreds = 10000000
console.log(hundreds.toLocaleString())


/**********************maths*************************/

console.log(Math.abs(-5))
console.log(Math.round(4.9))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.3))

console.log(Math.random())// gives a random value from 0 to 1 like 0.1,0.87
console.log(Math.random() * 10 +1)// gives a random number from 0 to 9 but + 1 makes it 10
console.log(Math.floor(Math.random()*10)+1)// Math.floor rounds up and gives a value from 1 to 10


console.log(Math.floor(Math.random() * 10 + 1))

const min= 20
const max= 40
console.log(Math.floor(Math.random() * (max-min + min)) +1)















