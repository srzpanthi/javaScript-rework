////////////////////// Reduce method ////////////////////////
// reduce method is mainly used when you want to take multiple values from an array and turn them into one final result

const nums = [1, 2, 3, 4, 5, 6];
const myTotal = nums.reduce((acc, curval) => {
  // console.log(`accumulator is ${acc}, current value is ${curval}`)
  return acc + curval;
}, 4);

// console.log(myTotal)

const shoppingCart = [
  {
    itemname: "javascript course",
    itemprice: 0,
  },

  {
    itemname: "java course",
    itemprice: 0,
  },

  {
    itemname: "c++ course",
    itemprice: 50,
  },

  {
    itemname: "python course",
    itemprice: 5,
  },
];


const totalMoney= shoppingCart.reduce( (acc, item) =>{
    return acc + item.itemprice

}, 0)


console.log(`Total amount to pay is ${totalMoney}`)