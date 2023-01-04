/*Challenge link:https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
Question:
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

//***************Solution********************
//print array index using Spread syntax (...)
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const arr = (n = 0) => [...Array(n).keys()];

//****************Sample Test*****************
const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('#arr creates a new array with the numbers 0 to N-1',() => {
  it('should return an array',() => assert.isArray(arr()));
  it('should return a blank array when called with no argument', () => assert.sameMembers(arr(), []));
  it('should return 0 to 3 when called with 4', () => assert.sameMembers(arr(4), [0,1,2,3]));
  it('should return 0 to 9 when called with 10',() => assert.sameMembers(arr(10), [0,1,2,3,4,5,6,7,8,9]));
  
  it('should return 0 to N-1 where N is a random number',() =>{
    const ref = Array.from({length: 30}, (_,i)=>i);
    
    for(let i=0; i<10; ++i) {
      let N = Math.random() * ref.length | 0;
      assert.sameMembers(arr(N), ref.slice(0,N), `Incorrect answerfor N=${N}`);
    }
  });
});
