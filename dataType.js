let type; //type is now a undefined.
console.log(typeof type);
type = 42; // type is now a number
type = "bar"; // type is now a string
type = true; // type is now a boolean
console.log(typeof type);


// Number: Number values represent floating-point numbers like 37 or -9.25.
// String: It is a sequence of characters
// BigInt: BigInt values represent numeric values which are too large 
// Boolean: The Boolean object represents a truth value: true or false.
// null:
// undefined: when the value of data type is not defined.
// Symbol: used when there are lot of component and we have to identify the uniqe component we use sybol dataType.