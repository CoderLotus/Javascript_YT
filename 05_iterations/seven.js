const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Map automatically returns a value 
//Whenever you open scope through {} in arrow function always return it through return keyword

// const newNums = myNumers.map( (num) => { return num + 10})

//Chaining => applying 2 or more methods at a time like map then map then filter 

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
