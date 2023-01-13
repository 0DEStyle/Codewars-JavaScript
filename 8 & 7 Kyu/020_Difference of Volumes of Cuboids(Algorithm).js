/*Challenge link:https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
Question:
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.


*/

//***************Solution********************
//find the product of each list, then find the difference using absolute value.
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const findDifference = (a, b) => Math.abs((a.reduce((x, y)=> x*y, 1) - b.reduce((x, y)=> x*y, 1)));
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const funcToBeTested = (typeof findDifference === "function") ? findDifference : find_difference;

describe("Tests", function(){
  it("Basic tests", function(){
    assert.strictEqual(funcToBeTested([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(funcToBeTested([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(funcToBeTested([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(funcToBeTested([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(funcToBeTested([15, 20, 25], [10, 30, 25]), 0);
  });
  
  it("Random tests", function(){
    
    function randint(low, up) {
      return Math.floor(Math.random()*(up-low+1)+low);
    }
    
    for(let i = 0; i < 100; i++) {
      let a = [randint(1, 30), randint(1, 30), randint(1, 30)];
      let b = [randint(1, 30), randint(1, 30), randint(1, 30)];
      let correct = Math.abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]));
      assert.strictEqual(funcToBeTested(a, b), correct, `Testing for a = ${JSON.stringify(a)}, b = ${JSON.stringify(b)}`);
    }
  });  
});
