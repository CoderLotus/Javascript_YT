const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //"This" keyword refers to current context
        console.log(this); //Prints all the current context
    }

}

// user.welcomeMessage()
// user.username = "sam" // Sam is changed here so current context changed so in the next line message is printed for Sam
// user.welcomeMessage()

// console.log(this); // This prints the content of the current context in global frame here which is none

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //For this.username it does not print "hitesh" as it is a function not an object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//ARROW FUNCTION : 
const chai =  () => {
    let username = "hitesh"
    console.log(this); 
}


// chai()


//ARROW FUNCTION :

//Basic arrow function: For curly braces write return keyword 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit Return : It assumes return itself

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 ) //For square braces no need to write return keyword

const addTwo = (num1, num2) => ({username: "hitesh"}) // To return object


console.log(addTwo(3, 4))


//More discussion on loops video
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
