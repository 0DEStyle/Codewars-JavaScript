/*Challenge link:https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
Question:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
createPhoneNumber = n =>`(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;

//alternative
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

//Solution 2 replace method
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
    format = format.replace('x', numbers[i]);
  
  return format;
}


//solution 3 join + substring method
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });

  it("Random tests", () => {
    const sol = a => `(${a.slice(0, 3).join('')}) ${a.slice(3, 6).join('')}-${a.slice(6).join('')}`;
    for (let i = 0; i < 100; i++) {
      const a = Array.from({ length: 10 }, _ => Math.floor(Math.random() * 10)),
            exp = sol(a);
      assert.strictEqual(createPhoneNumber(a), exp, `Testing for numbers = ${JSON.stringify(a)}`);
    }
  })
});
