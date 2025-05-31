// Immediately Invoked Function Expressions (IIFE) => To avoid global scope variables to interfere. Also function executes immediately

//First parentheis for function and second parenthesis for execution call
// () () -------> This is the syntax of iife
(function chai(){
    // named IIFE (i.e.chai)
    console.log(`DB CONNECTED`);
})(); //Semicolon important to stop its execution at a point => To write 2 iife

//Using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

