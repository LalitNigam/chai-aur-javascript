// !  IF

const temperature = 42
if(temperature < 50){
    //*  console.log("less then 50")
}

// -------------------------------------------------------------------------------------------------------------------------------------

const scor = 200
if(scor > 100){
    const power = "fly"
    //*  console.log(`user power ${power}`);
}
// !  console.log(`user power ${power}`);     //not to run this line

// --------------------------------------------------------------------------------------------------------------------------------------

// const balance = 1000

// if(balance < 500){
//     console.log("Less the 500");
// }
// else if(balance < 750){
//     console.log("Less the 750");
// }
// else if(balance < 900){
//     console.log("Less the 900");
// }
// else {
//     console.log("Less the 1200");
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------

const userLogIn = true
const debitcard = true
const logineFromEmail = true
const logineFromGoogle = false
if(userLogIn && debitcard){                                                     //? two condition are true 
    console.log("user allow shoping");
}

if(logineFromGoogle  || logineFromEmail ){                                   //? only one condition are true
    console.log("user liged in");
}