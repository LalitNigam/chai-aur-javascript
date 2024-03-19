const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "James"
tinderUser.email = "john.c.breckinridge@altostrat.com"

// *console.log(tinderUser)

const regularUser = {
    email : "lalitnigam46@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Lalit",
            lastname : "Nigam"
        }
    }
}

// console.log(regularUser.fullname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,  ...obj2}
// console.log(obj3)


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename : "javascript",
    price : 999,
    courseteacher : "Hitesh"
}

const {courseteacher : teacher} = course
console.log(teacher)