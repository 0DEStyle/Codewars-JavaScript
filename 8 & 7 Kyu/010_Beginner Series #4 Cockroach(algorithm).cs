/*Challenge link:https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
Question:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

//***************Solution********************
//apply algorithm
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const cockroachSpeed = s => Math.floor((s/3600)*100000);

//or
const cockroachSpeed = s => Math.floor(s / 0.036);

//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function() {
  it("Testing for fixed tests", () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});

describe("Random Tests", function() {
  
  let ans = (x) => parseInt(x / 0.036);
  
  it("Testing for 500 random tests", () => {
    for (let i = 0; i < 500; ++i) {
      let s = Math.random() + parseInt(Math.random()*4);
      assert.strictEqual(cockroachSpeed(s), ans(s), `Testing for s = ${s}`);
    }
  });
});
