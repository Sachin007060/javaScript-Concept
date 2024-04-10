// Immediately invoked function expression(IIFE).
//An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined.
// it is use for avoiding polluting the globel scope.
// syntax :- ()()



// It is a named IIFE.
(function DB(){
    console.log("Database is connected...");
})();


//It is a un-named IIFE.
( () => {
    console.log("Database is connected using arrow function...");
})();

// arrow function used in iife passing argument.
( (name) => {
    console.log(`Database is connected ${name}.`);
})('sachin');



let result = (function (a, b) {
    return a + b;
})(2, 3);
console.log(result);