/////////////////////////  Filter //////////////////////////////

const myNums= [1,2,3,4,5,6,7,8,9]
// const newNums= myNums.filter( (num)=>{
//     return num > 6
// })



// newNums=[]

// myNums.forEach( (num)=>{
//     if(num>6){
//         newNums.push(num)
//     }
    
// })

// console.log(newNums)


const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publish: 1925,
        edition: "First"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Classic",
        publish: 1960,
        edition: "Second"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: "First"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: 1937,
        edition: "Third"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        publish: 1997,
        edition: "First"
    },
    {
        title: "The Alchemist",
        genre: "Adventure",
        publish: 1988,
        edition: "Second"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publish: 1951,
        edition: "Third"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: 1813,
        edition: "Second"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publish: 1954,
        edition: "First"
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery",
        publish: 2003,
        edition: "Fourth"
    },
    {
        title: "Atomic Habits",
        genre: "Self-help",
        publish: 2018,
        edition: "Second"
    },
    {
        title: "Sapiens",
        genre: "History",
        publish: 2011,
        edition: "Third"
    },
    {
        title: "The Psychology of Money",
        genre: "Finance",
        publish: 2020,
        edition: "First"
    },
    {
        title: "Dune",
        genre: "Science Fiction",
        publish: 1965,
        edition: "Second"
    },
    {
        title: "The Silent Patient",
        genre: "Thriller",
        publish: 2019,
        edition: "First"
    }
];

const userBooks= books.filter( (bk)=>{
    return bk.genre=== "Thriller"
})


const userBookAfter2000= books.filter( (bk)=>{
    return bk.publish > 2000

})

const userBookHistory= books.filter( (bk)=>{
    return bk.publish>2000 && bk.genre==="Thriller"

})

console.log(userBooks)
console.log(userBookAfter2000)
console.log(userBookHistory)


