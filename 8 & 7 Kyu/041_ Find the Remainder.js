/*Challenge link:https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
Question:
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
const remainder = (n, m)=> n > m ? n% m : m % n ;

//****************Sample Test*****************
const assert = require('chai').assert;
describe('Remainder Function', function(){
  it('Should handle arguments and math as defined in specificaitons', function(){
    assert.strictEqual(remainder(17,5), 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
    assert.strictEqual(remainder(13, 72), remainder(72, 13), 'The order the arguments are passed should not matter.');
    assert.isNaN(remainder(1, 0), 'Divide by zero should return NaN');
    assert.isNaN(remainder(0, 0), 'Divide by zero should return NaN');
    assert.isNaN(remainder(0, 1), 'Divide by zero should return NaN');
    assert.strictEqual(remainder(-13, -13), 0, 'Should handle negative numbers. For input n = -13, m = -13');
    assert.strictEqual(remainder(-60, 340), 40, 'Should handle negative numbers. For input n = -60, m = 340');
    assert.strictEqual(remainder(0, -1), 0, 'Should handle negative numbers. For input n = 0, m = -1');
  });
});

describe('Random tests', function(){
  const rnd = () => Math.random() < 0.05 ? 0 : Math.floor(Math.random() * 2000 - 1000);
  it('Should work with random integer inputs', function(){
    for(let run = 0; run < 200; ++run) {
      let n = rnd();
      let m = rnd();
      let expected = n > m ? n % m : m % n;
      if(Number.isNaN(expected))
        assert.isNaN(remainder(n, m), `Divide by zero should return NaN for input n = ${n}, m = ${m}`);
      else assert.strictEqual(remainder(n,m), expected, `For input n = ${n}, m = ${m}`);
    }
  });
});
