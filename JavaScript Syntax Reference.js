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

//Generate a sequence of number
const arr = n => Array.from({length: n}, (_, i) => i); // 0 , .... , n-1 // underscore _ is just a valid variable number
//or, store digits using arr.push(i)
var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }

//print array index
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) 
  console.log(key);
//> 0,1,2

//print array index using Spread syntax (...)
const arr = (n = 0) => [...Array(n).keys()]
console.log(arr(5));
//> Array [0, 1, 2, 3, 4]

//print array
const array1 = ['a', 'b', 'c'];
for (const item of array1) {
  console.log(item);
}
