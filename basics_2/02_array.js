const marvel_heroes= ["Thor", "Ironman", "Spiderman"]
const dc_heroes= ["Batman", "Superman", "Green lantern"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // pushes dc_heroes as a single element in existing array

const all_heroes= marvel_heroes.concat(dc_heroes)
console.log(all_heroes)  // gives a whole new array and merges the two arrays

// spread operator
const all_new_heroes= [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)
// Both can give same results but spread operator is used more often in modern code especially working on arrays in react

const another_array= [1,2,3, [5,6,8,6,[3,9,2,34]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Saroj"))
console.log(Array.from("Saroj")) // converts the given value to an array

let score1 = 100
let score2= 200
let score3= 300
console.log(Array.of(score1, score2, score3))


