let a = 500
if (true){
    let a = 30
    const b = 40
    // console.log("INNER: ", a)
}

// console.log(a)

function one(){ 
    const name = "lalit"
    function two(){                                               //*child function
        const view = "youtube"
        // console.log(name)
    }
    two()                        //call function                                //without call not run this code         
}
one()                           //call function                                           //without call not run this code



if (true){
    const name = "lalitnigam46"
    if(name === "lalitnigam46"){
        const email = "@gmail.com"
        console.log("Email-id: ",name+email)
    }
}