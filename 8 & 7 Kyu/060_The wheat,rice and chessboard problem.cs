/*Challenge link:https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript
Question:
I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.

As usual, a few examples might be way better than thousands of words from me:

0 grains need 0 cells
1 grain needs 1 cell
2 grains need 2 cells
3 grains need 2 cells
4 grains need 3 cells
and etc.
Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!


*/

//***************Solution********************
//if grains is less than 1, return cells
//else recursively call squaresNeeded(grains - Math.pow(2, cells)), increase cells by 1 each iteration
function squaresNeeded(grains, cells = 0){
  return grains < 1 ? cells : 
  squaresNeeded(grains - Math.pow(2, cells), cells + 1);
}

//solution 2
function squaresNeeded(grains){
  return Math.ceil(Math.log2(grains+1))
}

//solution 3
squaresNeeded=g=>g?g.toString(2).length:0
//****************Sample Test*****************
  const { assert } = require("chai");
const { random } = require("lodash");

describe("Tests", () => {
  it("Basic tests", () => {
    assert.strictEqual(squaresNeeded(0), 0, 'n=0');
    assert.strictEqual(squaresNeeded(1), 1, 'n=1');
    assert.strictEqual(squaresNeeded(2), 2, 'n=2');
    assert.strictEqual(squaresNeeded(3), 2, 'n=3');
    assert.strictEqual(squaresNeeded(4), 3, 'n=4');
  });

  it("Random tests",() => {
    const sol = n => n ? Math.floor(Math.log(n)/Math.log(2)) + 1 : n;
    for (let i = 0; i < 100; i++) {
      const n = random(1, 10 ** random(1, 15));
      assert.strictEqual(squaresNeeded(n), sol(n), `n=${n}`);
    }
  });
});
