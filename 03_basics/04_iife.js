// Immediately Invoked Function Expressions (IIFE) => To avoid global scope variables to interfere. Also function executes immediately

//First parentheis for function and second parenthesis for execution call
// () ()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //Semicolon important to stop its execution at a point

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

