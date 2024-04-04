// if else you know already so skip it.

// const isLoggedIn = false;
// if(isLoggedIn){
//     console.log('you are logged in.');
// }else{
//     console.log('you are not logged in.');
// }

// const score = 100;
// if(score> 75){
//     const power = "fly";
//     console.log(`Your power: ${power}`);
// }else {
//     console.log("you don't have any power");
// }

const isLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
// if(isLoggedIn && debitCard){
//     console.log("Allow to by course.");
// }

// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("user logged in");
// }



// ++++++++++++++++ switch case ++++++++++++++++++++++
/*  syntax:-
    switch (key) {
        case value:
            
            break;

        default:
            break;
}   */


// const month = 4;
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Fab");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("Jun");
//         break;
//     default:
//         console.log("Invalid key");
//         break;
// }



// +++++++++++++++++++++++++ Truthy and Falsy values ++++++++++++++++++++++++++

// const email = 'some@gmail.ai';
// const email = '';
const email = [];

// if(email){
//     console.log(`Got the user email:- ${email}`);
// }else{
//     console.log("Don't have user email..");
// }

// Falsy values are:-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN.
// Some of the truthy vaules are:-
//  "0", "false", " ", [], {}, Function(){}.

// For checking the array is empty.
const arr = [];
if(arr.length === 0){
    // console.log("Array is empty.");
}

// For checking the object is empty.
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty.");
}


// +++++++++++++++++ Nullish coalescing operator(??):- null undefined++++++++++++++++++++
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 

let val;
// val = 5 ?? 10;
// val = null ?? 24;
// val = undefined ?? 7;
val = undefined ?? 9 ?? 15;
console.log(val);