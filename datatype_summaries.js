
// javascript is dynamically typed or a static type.?
/* Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time. */



/* 
    Return type of variables in JavaScript
    1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        null  => object
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint
*/

/*
    2) Non-primitive Datatypes
        Arrays  =>  object
        Function  =>  function(object funtion.)
        Object  =>  object 
*/



// Primitive datatype
// 7 types: number, String, Boolean, null, undefined, BigInt, Symbol.


const score = 99;     //means this score variable is number type we do not have to specify that the score is a number value like we did in typeScript.

const isLoggedIn = false;  // means isLoggedIn is a boolean.
let variable;              // means it is a undefined type.


// Symbol(symbol are always be unique) datatype example:-
const id = Symbol('001');
const anotherId = Symbol('001');
console.log(id === anotherId);
console.log(id);
console.log(anotherId);

// Reference(non-primitive) Type
// Array, Object, function


// Array:-
const heros = ["Saktiman", "Parmanu", "Naagraj"]; // it is an array.
console.log(heros);

// object:-
let obj = {
    name: "Sachin",
    age: 22,
    email: "sachin@google.com"
}
console.log(obj.email);

// function
function fun() {
    console.log("hello world!");
}
fun();

