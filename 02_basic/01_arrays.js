const myArr =  [1, 2, 3, 4, 5]
const myHero=["Iron Man", "Captain America"," hulk", "thor", "Black Widow"]

console.log(myHero[3])

// ? myArr.push(6)                 //add elements
// ? myArr.push(7)  
// ? myArr.pop()               //remove last elements


// *console.log(myArr.includes(9))
// *console.log(myArr.includes(5))


const newArr = myArr.join()
// *console.log(myArr)
// *console.log(newArr)

console.log("A" ,myArr)

const myn1 = myArr.slice(0, 3)

console.log(myn1)
console.log("B" ,myArr)

const myn2 = myArr.splice(0, 3)
console.log(myn2)
