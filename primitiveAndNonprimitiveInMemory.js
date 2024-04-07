// Memory store in primitive and non-primitive
// stack(primitive) & heap(non-primitive/reference)

//when stack memory used we get the copy of the memory(value) we did't get the actual memory(value).
// In heap memory we get the reference or orignal memory(value).

let firstChannel = "startFromAnsh";
let secondChannel = firstChannel;
secondChannel = "EveryThingAgeeb";

console.log(secondChannel);
console.log(firstChannel);

let userOne ={
    name: 'sachin',
    age: 22,
    email: 'you@hify.com'
}

let userTwo = userOne;
userTwo.name = "Baskandi";

console.log(userOne.name);
console.log(userTwo.name);