print
console.log(x)

//check if a variable is Plural using less line.
function  calculateAge(a,b) =>
         a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
         `You were born this very year!`;
variable
//check type, if input is string, output Zach, if input is a number, output Monica, else output the dog.
const cookie = (x) => `Who ate the last cookie? It was ${{string:`Zach`,number:`Monica`}[typeof x] || 'the dog'}!`

//how to shorten long list of arguments
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}
//alternative using Spread syntax (...)
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

bigInt 
//for high decimal place.
function division(t, a, b) {
  //1n convert 1 to big integer
  var n = ((BigInt(t) ** BigInt(a) - 1n) / (BigInt(t) ** BigInt(b) - 1n)).toString();
  //check if there is remainder between a and b, also n length is less than 100
  return a % b === 0 && n.length < 100 ? n : "Not an integer with less than 100 digits";
}

Convertion
//convert int to binary
const toBinary = (n) => parseInt((n >>> 0).toString(2),10);
//alternative 1
//Unary plus (+) converts a number representation into a number:
let toBinary = n => +n.toString(2)
//alternative 2
const toBinary = n => Number(n.toString(2)) ;

//get Char ASCII value
console.log('a'.charCodeAt()); //where you can enter index > 'bbba'.charCodeAt(Index_HERE));

Math

//The Math.hypot() static method returns the square root of the sum of squares of its arguments. 
//| 0 floor the answer
//It's a bitwise OR. Almost all bitwise operations automatically convert the operands to integers.
//Performing a bitwise OR with a zero shouldn't change the input except for the fact that it also 
//will be converted to an integer by truncating the decimal part.
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

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
  
//split the string s into character, for each character within s, if index is even, convert to uppercase
//for the second parameter, for each character within s, if index is not even, convert to uppercase
  const capitalize = (s) => 
[s.split('').map((c,i) => i % 2 == 0 ? c.toUpperCase(): c).join(''),
 s.split('').map((c,i) => i % 2 != 0 ? c.toUpperCase(): c).join('')];
//or clever solution
//[0,1] : using r that is first 0 and then 1 to upperCase first even and then odd indexes.
function capitalize(s) => [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));

  
//by returning name in array format, use [name] instead of name.
const whoIsPaying = (name) => name.length <= 2 ?  [name] : [name, name.slice(0, 2)];
  
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
//join 2 strings.
const combineNames = (a,b) => `${a} ${b}`;

//join + substring method ,example input (123) 456-7890
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}
//continue with replace method ,example input (123) 456-7890
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
    format = format.replace('x', numbers[i]);
  
  return format;
}


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


//print out/loop throught the entire array
[...x]
...a.Split(/[aieuo]/g)      

//map, iterate through the array, like Select/Where in C#
.map(x => x)

//reduce, iterate through the array, and reduce, 0 means index start at 0
//accumulate the character ASCII 
[...x].reduce((a,b) => a + b.charCodeAt() - 96,0))



Regex expression

/*replace the following pattern to nothing. 
. matches any character except linebreak
+ one or more
\/\/ matches //
| or
www. matches www.
| or
\. matches .
. matches any character except linebreak
+ one or more
/g global search
*/
domainName = (url) => url.replace(/.+\/\/|www.|\..+/g, '')

/*RegexPattern.test(str)
^ begin $ end
\d check if character is a single digit

or
[1-9]/d between 1 to 9, meaning no 0, because 01 is considered invalid, then follow by 1 extra digit

or
1/d/d check character starts with 1 follow by 2 extra digits

or
2([0-4]\d|5[0-5])  2 follow by 
digit between 0 to 4 follow by a digit, meaning 200-249 or!!! 
5 follow by digit 0-5, meaning 250-255

(\.(?!$)|$)
check if pattern start with . 
?! negative lookahead next character can not match $ ending
or $ ending.

{4} match preceding token/pattern 4 times
*/
isValidIP = (str) => /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
