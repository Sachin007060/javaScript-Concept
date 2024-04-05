// ++++++++++++++++ DATES ++++++++++++++++++

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());


//const myCreatedDate = new Date(2023, 0, 14);    // month start from 0(jan), 14(date), 2023(year).
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

// const myCreatedDate = new Date(2023, 0, 14, 3, 5);   // in this 3(hours), 5(minutes) 
// const myCreatedDate = new Date("2023-02-14");    // (yy/mm/dd)
const myCreatedDate = new Date("01-14-2023");       // (mm/dd/yy) we can also declare date my ourself.
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());



const myTimeStemp = Date.now();     //it is the exact date of right now :- use for like:- who does the quizz, poll, booking first or choosing the winner.
// console.log(myTimeStemp);           // output will be milli seconds.
// console.log(myCreatedDate.getTime());         // for camparing with date.
console.log(Math.floor(Date.now()/1000));        // for converting date into seconds.

const newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);



// toLocaleString can also use like this with more features with exactly how you want to show the time and date.
// short cut use (ctrl + sapce) for suggestions.
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));