/*Challenge link:https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
Question:
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/

//***************Solution********************
//checking bit wise, method: https://stackoverflow.com/questions/30924280/what-is-the-best-way-to-determine-if-a-given-number-is-a-power-of-two
//Then simiplfied into one line by using an Lambda expression for methods.
const isPowerOfTwo = (x) => x != 0 && !(x & (x - 1));
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("isPowerOfTwo", () => {
  const rnd = () => Math.pow(2, 6+~~(Math.random()*15));

  it("Powers of 2", () => {
    const ns = [1, 2, 4096, 536870912, rnd(), rnd()];
    for (const n of ns)
      Test.assertEquals(isPowerOfTwo(n), true, n + " is a power of 2");
  });
  it("Non-powers of 2", () => {
    const ns = [0, 3, 5, 7, 127, 234, rnd()+4, rnd()+3, rnd()-4, rnd()-5];
    for (const n of ns)
      Test.assertEquals(isPowerOfTwo(n), false, n + " is NOT a power of 2");
  });
  it("Random tests", () => {
    for (let i = 0; i < 50; i++) {
      const r = Math.random() < 0.5, n = rnd() + !r;
      Test.assertEquals(isPowerOfTwo(n), r, `${n} is${r ? '' : ' NOT'} a power of 2`);
    }
  });
});
