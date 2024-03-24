const user = {
    usrename : "lalit",
    price: 999,

    welcomMsg : function() {
        console.log(`${this.usrename}, Welcom to website`);
    }
}

// user.welcomMsg()
// user.usrename = "prince"
// user.welcomMsg()

// !--------------------------------------------------------------------------------

// function chai(){
//     console.log(this);
// }
// chai()

// !-------------------------------------------------------------------------------------

// const chai = function() {
//     let username = "lalit"
//     console.log(this.username);
// }
// chai()

// !-------------------------------------------------------------------------------------

const chai = () => {
    let username = "lalit"
    console.log(this.username);
}
// chai()

// !----------------------------------------------------------------------------------------
                                 //?  arrow function 1st type to code

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }                                                                                   
                                                                                        
// console.log(addTwo(3, 5))

// !----------------------------------------------------------------------------------------
                                    //?  arrow function 2nd type to code

const addTwo = (num1 , num2) =>  num1 + num2              //  OR  (num1 + num2)       use bracket

console.log(addTwo(3, 5))