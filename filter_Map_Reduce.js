// +++++++++++++++++ filter function +++++++++++++++++++

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const values = myNum.filter((num) => (num > 5));
// console.log(values);


const books = [ 
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter((bk) => (bk.genre === "History"));
userBooks = books.filter((bk) => {
    return bk.publish >= 1990 && bk.genre === "History"
});
// console.log(userBooks);



// +++++++++++++++++ Map function +++++++++++++++++++

const mynumArr = [1, 2, 3, 4, 5];
// const number = mynumArr.map( (num)=> (num + 10));
// console.log(number);

// map chaining ex:- mynumarr.map().map().map() we can use map() function multiple times.
const chaining = mynumArr
                .map( (num) => (num * 10))
                .map((num) => (num + 1))
                .filter( (num) => (num >30));
// console.log(chaining);

// +++++++++++++++++++++++++ reduce function +++++++++++++++++++++++++++

// syntax of reduce function using loop 
// array1.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, initialValue);

//reduce funtion using normal function.
const newArr = [1, 2, 3, 4];


// const total = newArr.reduce(function (acc, currVal){
    //     console.log(`acc: ${acc} and currVal ${currVal}`);
    //     return acc + currVal;
    // }, 0 );
    // console.log(total);

    
    //reduce funtion using arrow function.
// const total = newArr.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal ${currVal}`);
//     return acc + currVal;
// }, 0 );
// console.log(total);


const total = newArr.reduce( (acc, currVal) => (acc + currVal),0);
// console.log(total);

// more example 
const shoppingCart = [
    {
        itemName: 'js course',
        price: 1999
    },
    {
        itemName: 'java course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 3999
    },
    {
        itemName: 'cpp course',
        price: 999
    }
];

const shoppingPriceTotal = shoppingCart.reduce( (acc, currVal) => (acc + currVal.price), 0);
console.log(shoppingPriceTotal);