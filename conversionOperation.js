let score = 45;
console.log(typeof score);
score = "45abc";
console.log(typeof score);

// convertion in number 
console.log("number conversion..")
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" -> String
// "33ab" -> NaN(not a number)
// true -> 1 and false -> 0


//convertion in boolean
console.log("boolean conversion..")

let isLoggedIn = 1; // 1 means true
    isLoggedIn = ""; // "" means false
let booleanConvertion = Boolean(isLoggedIn);
console.log(typeof booleanConvertion);
console.log(booleanConvertion);

console.log("String conversion..")
//convertion in string
let someNumber = 45;
let inString = String(someNumber);
console.log(inString);
console.log(typeof inString);