const jsUser = {
    name: "Lalit Nigam",
    rollno: 24 ,
    sub: "javascript",
    age: 19,
}

// *console.log(jsUser.name)
// *console.log(jsUser["name"])

jsUser.name = "Lalit nigam"

// Object.freeze(jsUser)          //use to freez in object and can't be change the data

jsUser.greeting = function (){
    console.log("Hello js user")
}

jsUser.greetingTwo = function (){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo()) 