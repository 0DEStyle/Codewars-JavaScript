/*Challenge link:https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
Question:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

//***************Solution********************
//apply condition and multiply accordingly
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.

const simpleMultiplication = (number) => number % 2 == 0 ? number * 8 : number * 9;

//solution 2

const simpleMultiplication = (n) => (n % 2 ? 9 : 8);
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
    assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
    assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
  });
});

describe("Random Tests",function(){
  
  function theAnswer(number){
    if(number % 2 == 0){
       return number * 8;
    }else{
       return number * 9;
   }
  }
  
  it("Testing for 40 random tests", () => {
    for(let i = 0; i < 40; i++){
      let num = Math.floor(Math.random() *(5-0)+0);
      assert.strictEqual(simpleMultiplication(num),theAnswer(num),`Testing for number = ${num}`)
    }
  });
});
