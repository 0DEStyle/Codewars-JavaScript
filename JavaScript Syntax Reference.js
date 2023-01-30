print
console.log(x)

Convertion
//convert int to binary
const toBinary = (n) => parseInt((n >>> 0).toString(2),10);
//alternative 1
//Unary plus (+) converts a number representation into a number:
let toBinary = n => +n.toString(2)
//alternative 2
const toBinary = n => Number(n.toString(2)) ;

Math

//finding sum of elements without using for loop 
//using sum of an Arithmetic Series Formula 
//https://www.youtube.com/watch?v=SXRQcxt6jsk
const getSum = (a, b)=> (Math.abs(a - b) + 1) * (a+b) / 2;

//filter non odd numbers
var noOdds = values => values.filter(x => x % 2 === 0);

//round number to 2 decimal place
const twoDecimalPlaces = n =>  Number(n.toFixed(2)); 
//note the alternative below will show different result, because of rounding error
const twoDecimalPlaces = n =>  n.toFixed(2);
//Difference between 2 Array a & b
Math.abs(a - b);
//product of list "a".
//x and y meaning a.reduce((previous, current) => previous * current)
a.reduce((x, y)=> x*y, 1);

//simple calculator
//try catch for error
//eval: evaluates JavaScript code represented as a string and returns its completion value. 
//else return "unknown value"
function calculator(a,b,sign) {
  try
    { return eval(a+sign+b); }
  catch(e)
    { return "unknown value"; }
}

Lambda 
const goals = (a,b,c) => a + b + c;


- String Manipulation -
  
//remove a specific letter in string s by n amount of time using recurssion method.
const remove = (s,n) => n>0 ? remove(s.replace('!', ''), n-1) : s;

//join string together with something in between
  const printArray=array=>array.join();
  
//split string with a space, then add element itself and its length
var addLength = str => str.split(' ').map(x => x + ' ' + x.length);

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
//note!!!!! don't use ' apostrophe , use ` grave accent, or it won't work

//Regex replace end of sentence !!! to nothing
//+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
//$ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)

const remove = s => s.replace(/!+$/, '');

- Array -

//fill/push/add elements to the array x amount of time
  var websites = new Array(1000).fill("codewars");
/*

from length to  last index of array - first index of array + 1
add new elements by i + first index of array
*/
//this array function connect broken sequence back into normal, i.e. Input:  1,3,5,6,7,8 to Output: 1,2,3,4,5,6,7,8
const pipeFix = nums => Array.from({ length: nums.slice(-1) - nums[0] + 1 }, (v, i) => i + nums[0]);

//Check if array is in ascending or descending order.
const isSortedAndHow =(array)  =>
array.reduce((n, item) => n !== false && item >= n && item) ? "yes, ascending" :
array.reduce((n, item) => n !== false && item <= n && item) ? "yes, descending" : "no";
 
//compare 2 arrays and remove duplicates
array1 = array1.filter(val => !array2.includes(val));

//Count the occurrence of a letter, split the string whenever it reaches the "letter", then count the elements.
const strCount = (str, letter)=>str.split(letter).length-1;

//find array length
const getLength = array => array.length;

//last element of array
const getLast = array => array[array.length - 1];

//add something into array
pushElement = a => {a.push(4); return a};
//or
const pushElement = array => array.concat(0);

//remove last element
popElement = a => {a.pop(); return a};
//or
const popElement = array => array.splice(0, array.length - 1);


//create an array
let result = []

//push i into result, store in array
for (let i = int; i<=limit ; i+=int) 
    result.push(i)

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
