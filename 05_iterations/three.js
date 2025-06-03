// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { //Used for iterating the array or object in a loop. 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() //Gives unique values and order in which we enter the entries is maintained.
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //Does not get repeated


// console.log(map);

for (const [key, value] of map) { //Thios is a method to destructure the array ointo key and value pairs else the complete array will be printed
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//This syntax does not work for objects; it will show an error that object is not itertable.
//There are other ways to do so we will learn about them shortly

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
