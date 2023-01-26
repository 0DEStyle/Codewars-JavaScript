/*Challenge link:https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
Question:
Task Overview
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */
Example:

toBinary(1)  /* should return 1 */
toBinary(5)  /* should return 101 */
toBinary(11) /* should return 1011 */
*/

//***************Solution********************
//convert number to binary, then convert string format back to base 10 int
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const toBinary = (n) => parseInt((n >>> 0).toString(2),10);

//solution 2
//Unary plus (+) converts a number representation into a number:
let toBinary = n => +n.toString(2)


//solution 3
const toBinary = n => Number(n.toString(2)) ;
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);  
  });
})

describe("Random Tests", function(){
 
  it("Testing for 100 random tests", () => {
    for(let i = 0;i<100;i++){
      let a = Math.floor(Math.random()*100);
      assert.strictEqual(toBinary(a), parseInt(a.toString(2)), `Testing for n = ${a}`);      
    }
  })  
});
