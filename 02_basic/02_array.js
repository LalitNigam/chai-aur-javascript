const marvel = ["Iron Man", "Captain America"," hulk", "thor", "Black Widow"]
const dc = ["bat man", "supar man","flash"]

// marvel.push(dc)
// console.log(marvel)

// const hero = marvel.concat(dc)      //mearg to array
// console.log(hero)

// const allHero = [...marvel, ...dc]            //mearg to array 2nd type
// console.log(allHero)

const arr = [1, 2, 3, [4, 5, 6],2, 3, 5, 6[1, 2, [1, 9]]]
const real = arr.flat(Infinity)

console.log(real);

console.log(Array.isArray("lalit"))               //check array or not
console.log(Array.from("lalit"))                 //convert array



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
