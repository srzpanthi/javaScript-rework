let myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr[2])

//Array methods
// myArr.push(7) // adds 7 to the array
// myArr.push(8)  // adds 8 to the array
// console.log(myArr)

// myArr.pop() // removes the last item in the array
// myArr.unshift(10) // adds 10 to the start of the array

// myArr.shift() // removes first value of the array

// console.log(myArr.includes(9)) // checks if there is 9 in the array

// console.log(myArr.indexOf(6)) // checks index of number 6 in the array

// const newArr= myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr))

console.log(" A ", myArr);
const mynew1 = myArr.slice(1, 3); // makes a new array starting from index 1 to 3 so takes index 1 and 2
console.log(mynew1);
console.log(" B ", myArr); // splice doesn't change the original array

const mynew2 = myArr.splice(1, 3); // splice takes value from index 1 to 3 including index 3
console.log(mynew2);
console.log(" c ", myArr);

// in this example, splice doesn't only incude 3rd index but also when you use slice, original array is not manipulate but splice manipulates original array too and takes out the index from 1 to 3 including index of 3 too
//  slice() takes a portion of an array without changing the original
// splice() adds, removes, or replaces elements in the original array