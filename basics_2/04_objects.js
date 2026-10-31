const newUser= {
    email:"srzpanthi@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Saroj",
            lastName:"Panthi"
        }
    }
}

// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.hasOwn('isLoggedIn'))


// console.log(newUser.fullName)
// console.log(newUser.fullName.userFullname.lastName)


const target= {
    1:"a",
    2:"b"
}

const source={
    3:"c",
    4:"d"
}


// const object3= Object.assign({}, target, source) // Object.assign is used to combine objects as one
// const object4= {...target, ...source} // used more commonly nowdays
// console.log(object4)


const saroj1={
    name:"saroj",
    age:26
}

const saroj2={
    email:"srzpanthi@gmail.com",
    location:"sydney"
}

const saroj3= {...saroj1, ...saroj2}
// console.log(saroj3)




// object deconstructing

const course={
    coursename:"javaScript revision",
    coursetime:"10days"
}

console.log(course.coursename)
const {coursename, coursetime}= course
console.log(coursetime)


// json
// {
//     "name": "saroj",
//     "coursename":"javascript",
//     "price":"free"

// }
