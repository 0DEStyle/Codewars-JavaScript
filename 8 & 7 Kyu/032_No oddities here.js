/*Challenge link:https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
Question:
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const noOdds = ( values ) =>  values.filter(n => !(n%2));

//****************Sample Test*****************
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
    })
  })
    
describe("Random tests", () => {  
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let arr = Array.from({length: randint(0, 200)}, (_, i) => randint(-200, 200))
    let expected = arr.filter(x => x % 2 == 0)
    it(`noOdds(${JSON.stringify(arr)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.deepEqual(noOdds(arr), expected);
    });
  }
})
