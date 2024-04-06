const marvelHeros = ["Spiderman", "Ironman", "Thor"];
const dcHeros = ["Superman", "Batman", "Flash"];

// marvelHeros.push(dcHeros);                         // In this it push the dcHeros into a marvelHeros as a single element.
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);



const allHeros = marvelHeros.concat(dcHeros);      //concat add the array in the existing array and create a new array.
// console.log(allHeros);



// spread operator.
const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);



// It flat all the element in the array.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(anotherArray);
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);



// sometime for data scraping.. and also converting elements into the array.
// console.log(Array.isArray("Sachin"));       //determines whether the value passed to this function is an array or not.

// console.log(Array.from("Sachin"));          //Array.from() method is used to create a new array instance from a given array.

// console.log(Array.from({name: "Sachin"}));  // Intresting case search about this. {}curly-braces is an object. we use key and values to create a array and can store the keys and values into the array.



// // For converting variables into the array.
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));          //The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. 