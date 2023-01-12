/*Challenge link:https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
Question:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

//***************Solution********************
function findMultiples(int,limit){
  let result = [] //create an array
  
  for (let i = int; i<=limit ; i+=int) //push i into result
    result.push(i)
    
  return result //return result
}
//****************Sample Test*****************
const { assert, config } = require('chai');

config.truncateThreshold = 0;

describe("Tests", () => {
  it("Basic Tests",() =>{
    assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
    assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
    assert.sameOrderedMembers(findMultiples(5, 7), [5])
    assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
  });

  it("Random Tests",() =>{
    
    const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
    const sol=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);

    for (let i=0;i<40;i++){
      const n = randint(1,20);
      const l = n * randint(1,100) + randint(1, n);
      assert.sameOrderedMembers(findMultiples(n,l),sol(n,l), `Testing for integer=${n} and limit=${l}`);
    }
  });
});
