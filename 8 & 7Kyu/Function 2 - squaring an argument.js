/*Challenge link:https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript
Question:
Now you have to write a function that takes an argument and returns the square of it.
*/

//***************Solution********************
//solution 1
//square the number, return the result
function square(num) {
  return num * num;
}

//solution 2
const square = (n) => n * n;

//solution 3
var square = function(a){
  return a*a;
}

//****************Sample Test*****************
const { assert } = require('chai');
const _ = require('lodash');

describe( "Testing square", function(){
  it( "Should return 10 squares correctly", function(){
    for ( let i=0; i<10; i++ ){
      let x = _.random(1, 100);
      assert.strictEqual( square( x ), x * x, `Incorrect answer for x=${x}` );
    }
  });
});
