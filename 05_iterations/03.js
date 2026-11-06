// for of - mostly used for arrays

//[], [], []
// [{}, {}, {}, {}]

const arr =[1,2,3,4,5]
for (const num of arr) {
    //console.log(num)
    
}

const greeting="Hello World"
for (const greet of greeting) {
    // console.log(greet)
    
}

//Maps

const map =new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
// console.log(map)

for (const [key, value] of map) {
    // console.log(key)
    
}

// const myGame= {
//     "Game1":"Call of duty",
//     "Game2":"Battlegrounds"
// }

// for (const [key, value] of myGame) {
//     console.log(key, ":-", value)
    
// }

