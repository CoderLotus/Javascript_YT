const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//For in loop
//One use case of for in loop is to iterate an object

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

//If we print keys directly here then it prints 0,1,2,3,4 not the values so we have to print this way.

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

//Map is not iteratable so we can't print it this way.

// for (const key in map) {
//     console.log(key);
// }
