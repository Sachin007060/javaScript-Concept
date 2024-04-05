// ++++++++ Arrays ++++++++++

const arr = [23, 21, 34, 45, 22];
// console.log(arr);
// console.log(arr[3]);



// ++++++ Array Methods +++++++

// arr.push(6);
// arr.push(14);
// arr.push(11);                   // push is use for adding element into the array.
// console.log(arr);
// arr.pop();                      // it is use for removing the last element in the array.
// console.log(arr);

// console.log(arr.includes(7));       // it is use for when we want question's answer in true and false.
// console.log(arr.includes(23));       // it is use for when we want question's answer in true and false.

// console.log(arr.indexOf(21));       // gives the element's index.  If element is not present in the array it gives output (-1).

// const newArr = arr.join();          //  join convert array into string.
// console.log(typeof newArr);


// ++++++++++++++++++++++++++++ slice and splice ++++++++++++++++++++++++++++++++++

console.log("A:- ", arr);

const myNew1 = arr.slice(1,3);
console.log("slice part(1, 3):- ",myNew1);
console.log("The acutal array B:- ", arr);

//  splice method lets you change the content of your array by removing or replacing existing elements with new ones. This method modifies the original array and returns the removed elements as a new array.
const myNew2 = arr.splice(1,3);
console.log("splice part(1, 3):- ",myNew2);
console.log("The acutal array C:- ", arr);
