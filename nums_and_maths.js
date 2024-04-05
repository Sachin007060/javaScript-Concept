// +++++++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++++++++++
const score = 100;
// console.log(score);

const marks = new Number(80);
console.log(marks);

// console.log(marks.toString());
// console.log(marks.toString().length);

// console.log(marks.toFixed(2));

const otherNumber = 123.252345;
// console.log(otherNumber.toPrecision(4));

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('eng-IN'));

//     +++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-23));     // gives positive value
// console.log(Math.round(2.5));   // gives exact round value
// console.log(Math.ceil(2.5));    // gives upper value
// console.log(Math.floor(2.5));   // gives lower value
// console.log(Math.min(3, 4, 5, 7, 6, 2));
// console.log(Math.max(3, 4, 5, 7, 6, 2));

console.log(Math.random());     // gives random value from 0 to 1.
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)));
console.log(Math.floor(Math.random()*(max - min + 1))+ min);
console.log(Math.min(9, 4, 6, 3, 7, 8));


