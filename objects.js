// objects can be singleton and literals

//Singleton:- when we create object using constructor that are singleton objects.
// Object.create



//Object literals

const sym = Symbol('key1');

const obj = {
    name: 'sachin',
    'full name': 'Sachin Baskandi',
    age: 22,
    location: 'Uttarakhand',
    [sym]: 'mykey1',
    gmail: 'some@gmail.com',
    isLoggedIn: false,
    lastLoggedIn: ['monday', 'saturday']
}

// console.log(obj);
// console.log(obj.name);
// console.log(obj['gmail']);
// console.log(obj['full name']);
// console.log(obj[sym]);
// console.log(typeof obj[sym]);

// Object.freeze(obj);         // freeze function is use in object for so that the key's vaule can't be override.
// obj.name = 'nihcas';
// console.log(obj.name);

obj.greet = function() {
    console.log(`Hello JS user ${this["full name"]}!`);
}
console.log(obj.greet());