/*Challenge link:https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
Question:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
//using sum of an Arithmetic Series Formula 
//https://www.youtube.com/watch?v=SXRQcxt6jsk
const getSum = (a, b)=> (Math.abs(a - b) + 1) * (a+b) / 2;
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;

const _ = require('lodash');

if (typeof GetSum === "function") {
  getSum = GetSum;
}

describe("Basic tests", () => {

  function dotest(a, b, expected) {
    assert.strictEqual(getSum(a, b), expected, `Incorrect answer for a=${a}, b=${b}`);
  }

  it("Testing for fixed tests", () => {       
    dotest(   5, -1 ,      14);
    dotest( 505,   4,  127759);
    dotest( 321, 123,   44178);
    dotest( -50,   0,   -1275);
    dotest(  -1,  -5,     -15);
    dotest(  -5,  -5,      -5);
    dotest(-505,   4, -127755);
    dotest(-321, 123,  -44055);
    dotest(   0,   0,       0);
    dotest(  -5,  -1,     -15);
    dotest(   5,   1,      15);
    dotest( -17, -17,     -17);
    dotest(  17,  17,      17);
  });
    
  function Get_Sum( a,b )
  {
    if(a==b) return a;
    if(a>b)
    {
      [a,b] = [b,a];
    }
    
    let sum=0;
    for( let i=a; i<=b; i++ ) sum+=i;
    return sum;
  }

  it("Testing for 100 random tests", () => {
    
    let lohi = Array.from({length: 40}).map(e => {
      let a = _.random(-600, 599);
      let b = _.random(a, 600);
      return [a, b];
    });
    let hilo = Array.from({length: 40}).map(e => {
      let a = _.random(-600, 599);
      let b = _.random(a, 600);
      return [b, a];
    });
    let eq = Array.from({length: 20}).map(e => {
      let a = _.random(-600, 600);
      return [a, a];
    });
    let cases = [...lohi, ...hilo, ...eq];
    for(let [a,b] of _.shuffle(cases)) {
      dotest(a, b, Get_Sum(a,b));
    }
  });
});
