/*Challenge link:https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
Question:
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!
*/

//***************Solution********************
//find the right string and return the corresponding arithmetic
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
    assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
    assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
    assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
  })

  function arithmeticCheck(a, b, operator){
    var operating = {
      add: a + b,
      subtract: a - b,
      divide: a / b,
      multiply: a * b
    };
    return operating[operator];
  }

  it("Random tests for 'add'", () => {
    for(let i=0;i<25;i++){
      let randomA = Math.floor(Math.random() * 1000) + 1;
      let randomB = Math.floor(Math.random() * 1000) + 1;
      assert.strictEqual(arithmetic(randomA, randomB, "add"), arithmeticCheck(randomA, randomB, "add"), `Testing for ${randomA}, ${randomB}, "add"`)
    };
  });  

  it("Random tests for 'subtract'", () => {
    for(let i=0;i<25;i++){
      let randomA = Math.floor(Math.random() * 1000) + 1;
      let randomB = Math.floor(Math.random() * 1000) + 1;
      assert.strictEqual(arithmetic(randomA, randomB, "subtract"), arithmeticCheck(randomA, randomB, "subtract"), `Testing for ${randomA}, ${randomB}, "subtract"`)
    };
  });

  it("Random tests for 'divide'", () => {
    for(let i=0;i<25;i++){
      let randomA = Math.floor(Math.random() * 1000) + 1;
      let randomB = Math.floor(Math.random() * 10) + 1;
      assert.strictEqual(arithmetic(randomA, randomB, "divide"), arithmeticCheck(randomA, randomB, "divide"), `Testing for ${randomA}, ${randomB}, "divide"`)
    };
  });

  it("Random tests for 'multiply'", () => {
    for(let i=0;i<25;i++){
      let randomA = Math.floor(Math.random() * 1000) + 1;
      let randomB = Math.floor(Math.random() * 10) + 1;
      assert.strictEqual(arithmetic(randomA, randomB, "multiply"), arithmeticCheck(randomA, randomB, "multiply"), `Testing for ${randomA}, ${randomB}, "multiply"`)
    };
  })
});
