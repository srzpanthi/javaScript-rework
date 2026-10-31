// singleton - when you make object with constructor, it is singleton
//object.create()

//object literals

const mySym = Symbol("key1");

const user = {
  name: "Saroj",
  [mySym]: "myKey2", // symbols are represented as square brackets
  age: 26,
  email: "srzpanthi@gmail.com",
  isLoggedIn: false,
  location: "sydney",
  lastLogginedIn: ["monday", "wednesday"],
};

user.email = "srzpanthi@google.com";
// Object.freeze(user) // doesn't allow any further changes to user object
user.email = "srzpanthi@apple.com";

// console.log(user.email)
// console.log(user["name"])
// console.log(user["location"])
// console.log(user[mySym])
// console.log(user)

user.greeting = function () {
  console.log("Hello user!");
};

user.greetingTwo = function () {
  console.log(`Hello js user ${this.name}`);
};

user.greeting3= function(){
    console.log(`Hello ${this.name}, are you located in ${this.location}?`)
}

console.log(user.greeting());
console.log(user.greetingTwo());
console.log(user.greeting3())

// note: mostly the values in an objects are accessed using dot notations but sometimes when there are no any other options it's better to know [] method too
