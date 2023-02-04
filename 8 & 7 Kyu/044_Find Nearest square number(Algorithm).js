/*Challenge link:https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
Question:
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers
*/

//***************Solution********************
//square root n, round it to the nearest whole number, then n to the power of 2.
//Then simiplfied into one line by using an Lambda expression for methods.
const nearestSq = (n) => Math.pow(Math.round(Math.sqrt(n)), 2);
//****************Sample Test*****************
const chai = require('chai');
const assert = chai.assert;

describe("Find Nearest square number",() => {
  it("Fixed tests", () => {
    assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
    assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
    assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
    assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
    assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
  });
  
  it("Small random tests (n <= 200000)", () => {
    for (i = 0; i < 100; i++) {
      var num = Math.floor(Math.random() * 200000);
      var sol = Math.round(num**0.5)**2;
      assert.strictEqual(nearestSq(num), sol, `nearestSq(${num}) = ${sol}`);
    }
  });
  
  it("Big random tests (n <= 2000000)", () => {
    for (i = 0; i < 100; i++) {
      var num = Math.floor(Math.random() * 2000000);
      var sol = Math.pow(Math.round(Math.pow(num,0.5)),2);
      assert.strictEqual(nearestSq(num), sol, `nearestSq(${num}) = ${sol}`);
    }
  });
});
