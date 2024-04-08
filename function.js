// function fun(){
//     console.log("hello");
// }
// fun();


// function addTwoNbr(num1, num2){             // num1 & num2 are parameters.
//     console.log(num1 + num2);
// }
// addTwoNbr(3, 4);                            // 3 & 4 are arguments.
// addTwoNbr(3, "4");
// addTwoNbr(3, "a");
// addTwoNbr(3, null);



// function addTwoNbr(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwoNbr(num1, num2) {
    // let sum = num1 + num2;
    // return sum;

    return num1 + num2;
}
const result = addTwoNbr(3, 4);
// console.log("Result:", result);



function logginUserMsg(userName){
    if(userName === undefined){
         console.log('plz enter a username.');
          return;
    }
    return `${userName} just logged in.`;
}
// console.log(logginUserMsg());



// For creating multiple parameter based on the argument we use rest/sperad operator(...).
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(100, 300, 600, 900, 1200));



// passing object in a function.
const user = {
    name: 'Sachin',
    course: 'javaScript',
    price: 2000
}

function handleObject(anyobject){
    console.log(`User name ${anyobject.name}. The course he is tutoring ${anyobject.course} & course price is ${anyobject.price}.`);
}
// handleObject(user);

// we can also direct defined the object into the function.
// handleObject({
//     name: 'jhon',
//     course: 'typeScript',
//     price: 2999
// })



// passing array in function.
const myArr = [100, 200, 300, 400, 500];
function handleArray(anyArray){
    console.log(`First price ${myArr[0]}. Second price ${myArr[1]} & third price is ${myArr[3]}.`);
}
handleArray(myArr);

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArr));
