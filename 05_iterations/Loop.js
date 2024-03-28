for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

// !-----------------------------------------------------------------------------------------------------------------------------------------------------

for(let i = 1; i <= 10; i++){
    const element  = i;
    if(element == 5){
        // console.log("5 is important");
    }
    // console.log(element);
}

// !------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 1; i < 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

// !-------------------------------------------------------------------------------------------------------------------------------------------------------

let myArray = ["ironman","thor", "hulk", "spider man"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// ?-------------------------------------------------- Break & Comtinue --------------------------------------------------------------------------------

for (let i = 0; i < 20; i++) {
    if(i == 5){
        // console.log("ditect on 5");
        break
    }
    // console.log(`value of i = ${i}`);
}


for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("ditect on 5");
        continue
    }
    console.log(`value of i = ${i}`);
}