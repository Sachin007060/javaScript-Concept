// for of loop
// ["", "", ""];
// [{}, {}, {}];

// printing array using forof loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}



// printing a table using for loop.
for (let i = 1; i <= 10; i++) {
    // console.log("Table of "+ i);
     for(let j=1; j<= 10; j++){
        // console.log(i + "*" + j + "=" + (i*j) );
     }
}



// forof loop for string.
const greeting = "hello world";
for (const i of greeting) {
    // console.log('Each char is:-'+ i);
}



// Maps:-The Map object holds key-value pairs and remembers the original insertion order of the keys. It is unique in the Map's collection
const map = new Map();
// adding values in Map.
map.set('IN', 'INDIA');
map.set('RU', 'RUSSIA');
map.set('FR', 'FRANCE');
//what happen if we add same set in map.
map.set('IN', 'INDIA');             // it will not include in map because map store only uniqe key value.


// console.log(map);

// accessing the map value using forof loop
for (const i of map) {
    // console.log(i);    
}
for (const [key, value] of map) {
    // console.log(key+ ":-"+ value);    
}


// [note] :- by using forof loop and it's structure are not used for object iteration. for object iteration we can use forin loop.

const obj = {
    js: "javascript",
    cpp: "C++",
    DSA: "Data Structure and Alogrithem",
    HTML: "HyperText Markup language"
}
for (const key in obj) {
    // console.log(`(${key}):- is a shortcut of (${obj[key]}) `);
}

// forin using for array.
const prog_lang = ['JS', 'CPP', 'DSA', 'HTML'];
for (const key in prog_lang) {
    // console.log(prog_lang[key]);
}


// using foreach loop.
const progLang = ['JS', 'CPP', 'DSA', 'HTML', 'python'];
progLang.forEach( function (i){
    // console.log(i);
})

// we can use foreach loop  by arrow function.
progLang.forEach( (i) =>{
    // console.log(i);
})

const pgLang = ['JS', 'CPP', 'DSA', 'HTML', 'python', 'CSS'];
pgLang.forEach(function (key, index, arr){
    // console.log(key + " , " + index + " , " + arr);
})



// using abjects as element of array.
const myCoding = [
    {
        langName: 'javaScript',
        langFileName: 'js'
    },
    {
        langName: 'java',
        langFileName: 'java'
    },
    {
        langName: 'python',
        langFileName: 'py'
    }
];

myCoding.forEach(function (key){
    console.log(key.langName + " Extension:- " + key.langFileName);
})