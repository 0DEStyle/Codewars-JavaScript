/*Challenge link:https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript
Question:
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

//***************Solution********************
//apply algorithm
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const angle = (n) =>  (n-2) * 180;
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  });
})

describe("Random tests",() =>{
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const sol=n=>(n-2)*180;

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      const n=randint(3,Math.pow(10,randint(1,2)));
      assert.strictEqual(angle(n),sol(n),`Testing for ${n}`);
    }
  })
});
