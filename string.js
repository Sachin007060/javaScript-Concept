const str1 = 'Ritesh';
const no = 9876543210;
console.log(str1 + no + " value");

console.log(`Hello i'm ${str1} and my number is ${no}!`);

// string also can be created like this
const myGameName = new String('Rakchas');
console.log(myGameName);
console.log(myGameName[2]);

console.log(myGameName.__proto__);
console.log(myGameName.length);
console.log(myGameName.toUpperCase()); //for uppercase
console.log(myGameName.charAt('2'));   //index is in which character.
console.log(myGameName.indexOf('h'));  //character is in which index.

// const newString = myGameName.substring(0, 4);
// console.log(newString);

const anotherString = myGameName.slice(0, 4);
// const anotherString = myGameName.slice(-6, 4);
console.log(anotherString);

/*
    const greet ='    hello    ';
    console.log(greet);
    console.log(greet.trim());    //remove the space only of start and end.
*/
// console.log(greet.trimStart());  //remove space only form start.
// console.log(greet.trimEnd());    //remove space only form end.


const url = "https//:sachin.com/sachin%20Baskandi";
console.log(url);
console.log(url.replace('%20', '-'));  // it replace '%20' to '-' in url string variable.
console.log(url);      //the actual url does't change remember these function does't change the actual string variable.

console.log(url.includes('%20'));   // it is use for checking the character in the string.
console.log(url.includes('hero'));   // it is use for checking the character in the string.