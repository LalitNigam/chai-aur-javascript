const accountId = 880807
let accountEmail = "lalitnigam46@gmail.com "
var accountPassword = "123456"
accounCity = "maunath bhanjan"
let accountState                              //undefined

//! accountId = 2                         //  (not Allowed)
accountEmail = "prince"              // (yes it's Allowed in log)
accountPassword = "654321"      // (yes it's Allowed in var)
accounCity = "Mau"                     // (yes it's Allowed)


/** 
    * ? prefer not to use var
    * ? because of issue in block scope and functional scop
*/


console.log(accountEmail)
console.table([accountPassword, accounCity, accountState])