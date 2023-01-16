/*Challenge link:https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
Question:
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle


*/

//***************Solution********************
//apply algorithm
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const otherAngle = (a, b) => 180 - a - b;
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});

describe("random test", function() {
  let a_, b_, c_;
  
  it("Testing for 20 random tests", () => {
    for (let i = 0; i <= 20; i++) {
      a_ = 1 + ~~(Math.random() * 175);
      b_ = 1 + ~~(Math.random() * (180 - a_));
      c_ = 180 - a_ - b_;
      assert.strictEqual(otherAngle(a_, b_), c_, "Testing: " + a_ + ", " + b_ + "; Expecting: " + c_);
    }
  });
});
