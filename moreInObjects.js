// const olla = new Object();       // This is a singleton object!
const olla = {};                    // This is a literals object
// console.log(olla);

olla.id = '123abc';
olla.name = "olla";
olla.isLoggedIn = false;
// console.log(olla);



// Nested objects..
const regularUser = {
    gmail: "someUser@gmail.com",
    name: {
        firstName: "Sachin",
        lastName: {
            lastN: "Baskandi"
        }
    }
}

// console.log(regularUser.gmail);
// console.log(regularUser.name);
// console.log(regularUser.name.firstName);
// console.log(regularUser.name?.lastName.lastN);



// Adding two objects
const obj1 = {1:'A', 2:'B'};
const obj2 = {3:'C', 4:'D'};
const obj3 = {5:'E', 6:'F'}
// const obj4 = {obj1, obj2}           // In this it push the obj1 into a obj3 as a single element and same for obj2.
// const obj4 = Object.assign({}, obj1, obj2, obj3);        // we don't use offen to adding like this.
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);                  



// For objects keys in the form of array.
// console.log(olla);
// console.log(Object.keys(olla));
// console.log(Object.values(olla));
// console.log(Object.entries(olla));



// More in objects (de-structuring objects).

const course = {
    course: 'JavaScript',
    price: '999',
    courseInstructor: 'Sachin'
}
console.log(course.course);
console.log(course.courseInstructor);       //when we have to access any key in the object so we have to write same line many time for saving the time or complexcity we use de-structuring.
const {courseInstructor} = course;
console.log(courseInstructor);
const {courseInstructor: instructor} = course;      // we can also change the name of the keys.
console.log(instructor);



// discussion about API and JSON files.

