//////////////////////////////// map /////////////////////////////

const myNum=[1,2,4,6,7,9,6,66,564]
// const newNums= myNum.map( (num)=>{
//     return num + 10;
// })

// console.log(newNums)




// const myNewNum= myNum.forEach( (num)=>{
//     return num + 10

// })

// console.log(myNewNum)



/////////   chaining ///////////////

const newNumbers= myNum
.map((num)=> num * 10)
.map( (num)=> num + 1)
.filter((num)=> num>=40) // filter is mostly used for true and false


console.log(newNumbers)