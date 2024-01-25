/*Challenge link:https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
Question:
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


*/

//***************Solution********************
//if b is equal to 0, reurn 0
//else recursively pass b and a mod b
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
function mygcd(a,b){
  return b == 0 ? a :mygcd(b, a % b);
}

//****************Sample Test*****************
const { assert } = require("chai");
const _ = require("lodash");

describe("Submission tests", () => {
  
  function refgcd(x, y) {
    return x % y ? refgcd(y, x % y) : y;
  }
  
  function dotest(x, y, expected) {
    assert.strictEqual(mygcd(x, y), expected, `Incorrect answer for\n  x = ${x}\n  y = ${y}\n`);
  }
  
  describe("Fixed tests", () => {
    
    it("GCD greater than 1", () => {
      dotest(30,  12,  6) // x < y
      dotest(96, 360, 24) // x > y
    })
    
    it("GCD equal to one of arguments", () => {
      dotest(10, 20, 10) // x < y
      dotest(20, 10, 10) // y < x
    })
    
    it("One or both of arguments are 1", () => {
      dotest( 1, 20, 1) // x == 1
      dotest(20,  1, 1) // y == 1
      dotest( 1,  1, 1) // x == y == 1
    })
    
  it("Arguments are equal", () => {
      dotest(20, 20, 20) // composite
      dotest(13, 13, 13) // prime
    })  
  
    it("Arguments are relatively prime", () => {
      dotest(8, 9, 1) // x < y
      dotest(9, 8, 1) // x > y
    })   
  });
  
  it("Random tests", () => {
    
    let cases = []
    
    // GCD greater than 1
    for(let i=0; i < 50; ++i) {
      let mingcd = _.random(1, 1e7)
      let x = _.random(1, 1e7) * mingcd
      let y = _.random(1, 1e7) * mingcd
      let expected = refgcd(x, y)
      cases.push({x: x, y: y, exp: expected})
    }
    
    // GCD equal to one of arguments
    for(let i=0; i < 5; ++i) {
      let n1 = _.random(1, 1e7)
      let n2 = _.random(1, 1e7) * n1
      cases.push({x: n1, y: n2, exp: n1})
      cases.push({x: n2, y: n1, exp: n1})
    }
    
    // One of arguments is 1
    for(let i=0; i < 5; ++i) {
      let n = _.random(1, 1e7)
      cases.push({x: n, y: 1, exp: 1})
      cases.push({x: 1, y: n, exp: 1})
    }
    
    // Arguments are equal
    for(let i=0; i < 5; ++i) {
      let n = _.random(1, 1e7)
      cases.push({x: n, y: n, exp: n})
    }
    
    // Arguments are relatively prime
    for(let i=0; i < 50; ++i) {
      let x = _.random(1, 1e7)
      let y = _.random(1, 1e7)
      let gcd = refgcd(x, y)
      cases.push({x: x/gcd, y: y/gcd, exp: 1})
    }
    
    for(let { x, y, exp } of _.shuffle(cases)) {
      dotest(x, y, exp);
    }
  });
});
