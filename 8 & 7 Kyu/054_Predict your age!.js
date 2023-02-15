/*Challenge link:https://codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
Question:
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
predictAge = (age1,age2,age3,age4,age5,age6,age7,age8) => 
Math.floor(Math.sqrt((age1* age1) + (age2* age2) + (age3* age3) + (age4* age4) + (age5* age5) + (age6* age6) +(age7* age7) +(age8* age8))/2);


//Solution 2
//The Math.hypot() static method returns the square root of the sum of squares of its arguments. 
//| 0 floor the answer
//It's a bitwise OR. Almost all bitwise operations automatically convert the operands to integers.
//Performing a bitwise OR with a zero shouldn't change the input except for the fact that it also 
//will be converted to an integer by truncating the decimal part.
const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

/Solution 3
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(predictAge(65,60,75,55,60,63,64,45), 86);
    assert.strictEqual(predictAge(32,54,76,65,34,63,64,45), 79);
  });
})

describe("Random tests", function() {
  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++){
      let arr = Array.from("12345678", _ => 40 + Math.random() * 51 | 0);
      assert.strictEqual(predictAge(...arr), Math.hypot(...arr)>>1);
    }
  })
});
