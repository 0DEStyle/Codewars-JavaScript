print
console.log(x)


Lambda 
const goals = (a,b,c) => a + b + c;


- String Manipulation -
//reverse string
const str =  str.split("").reverse().join("");

//to lower case
const str = str.toLowerCase() == str.toLowerCase();

//map: creates a new array from calling a function for every array element.
//split the string, map each character and duplicate it, then join and return the result.
var doubleChar = (str) => str.split("").map(c => c + c).join("");

//return sentence with name.
const greet = (name) => 'Hello, ' + name + ' how are you doing today?'

//string interpolation
const greet = name => `Hello, ${name} how are you doing today?`;
note!!!!! don't use ' apostrophe , use ` grave accent, or it won't work

- Array -
//check array include element
const include = (arr, item) => arr.includes(item);
