// this is used for current context in the scope.This referse to the current context.
const user = {
    user: 'Ironman',
    price: 999,
    wlcMsg: function () {
        console.log(`hello ${this.user}, welcome to our website.`);
        // console.log(this);
    }
}
// user.wlcMsg();
// user.user = 'Hulk';
// user.wlcMsg();
// console.log(this);



// using this keyword in the function (it does't work)
// function one(){
//     let name= 'raj';
//     // console.log(this);
//     console.log(this.name);
// }
// one();


//we can also define function as shown below.
// const one = function () {
//     let name= 'raj';
//     console.log(this.name);
// }



//++++++ Arrow function +++++++

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors.

const one = () => {
    let name = 'raj';
    console.log(this.name);
    console.log(this);
}
// one();


// syntax of arrow function:-  () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//Explicit return when we use return keyword with {} curly bracket.

//Implicit return when we don't use return keyword we use () parentheses.
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);
// console.log(addTwo(3, 5));

// when we return object in it.
const addTwo = (num1, num2) =>  ({name: 'Sachin'});
console.log(addTwo());



// we can use in diffrent ways.
// const arr = [2, 4, 5, 6, 7];

// arr.forEach(function () {});            //defining function.
// arr.forEach(() => {});                  //defining arrow function.
// arr.forEach(() => ());                  //defining function Implicit.