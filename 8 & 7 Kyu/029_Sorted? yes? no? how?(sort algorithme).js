/*Challenge link:https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
Question:
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.


*/

//***************Solution********************
//check each element to see if the array is in order.
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const isSortedAndHow =(array)  =>
array.reduce((n, item) => n !== false && item >= n && item) ? "yes, ascending" :
array.reduce((n, item) => n !== false && item <= n && item) ? "yes, descending" : "no";
//****************Sample Test*****************

const Test = require('@codewars/test-compat');

describe("isSortedAndHow", function() {

  it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  });
  
  it("random array 1", function() {
    let array = randomArray(7);
    let actual = isSortedAndHow(Array.from(array));
    let expected = isSortedAndHowSol(array);
    Test.assertEquals(actual, expected);
  });
  
  it("random array 2", function() {
    let array = randomArray(57);
    let actual = isSortedAndHow(Array.from(array));
    let expected = isSortedAndHowSol(array);
    Test.assertEquals(actual, expected);
  });
  
  it("random array 3", function() {
    let array = randomArray(184);
    let actual = isSortedAndHow(Array.from(array));
    let expected = isSortedAndHowSol(array);
    Test.assertEquals(actual, expected);
  });
  
  it("random array 4", function() {
    let array = randomArray(7392);
    let actual = isSortedAndHow(Array.from(array));
    let expected = isSortedAndHowSol(array);
    Test.assertEquals(actual, expected);
  });
  
  it("random array 5", function() {
    let array = randomArray(12345);
    let actual = isSortedAndHow(Array.from(array));
    let expected = isSortedAndHowSol(array);
    Test.assertEquals(actual, expected);
  });
  
  function randomArray(size) {
    let array = []; for (let i = 0; i < size; i++) array.push(randomInt());
    let x = randomInt(0, 5);
    if (x === 1 || x === 2) array.sort((a, b) => a - b);
    else if (x === 3 || x === 4) array.sort((a, b) => b - a);
    return array;
  }
  
  function randomInt(min = -10000, max = 20001) {
    return Math.floor(min + Math.random() * max);
  };
  
  function isSortedAndHowSol(array) {
    let asc = array.slice(); asc.sort((a, b) => a - b);
    let desc = array.slice(); desc.sort((a, b) => b - a);
    return shallowEquals(array, asc) ? 'yes, ascending' : shallowEquals(array, desc) ? 'yes, descending' : 'no';
  };
  
  function shallowEquals(a1, a2) {
    return a1 === a2 || (a1.length === a2.length && a1.every((e, i) => e === a2[i])); 
  };
});
