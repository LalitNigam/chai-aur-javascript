                                                 //? named iife

(function chai () {                              // use to bracket- () in without call function        
    console.log(`DB connection`)
})();                                                                 //!  Required  use ; to stop function   

// !=============================================================================================================================

( (name) => {                                                              //arrow function
    console.log(`DB connection Two ${name}`)                          
})('Lalit')

