function myName () {
    console.log("L");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("T");
}

//* myName ()

// function addTwoNumber (number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumber()

function addTwoNumber (number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3, 6)
// *console.log("result =", result);

function login (username) {
    return `${username} just loged in`
}

console.log(login("Lalit"));