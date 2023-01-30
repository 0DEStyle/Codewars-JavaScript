/*Challenge link:https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript
Question:
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.
*/

//***************Solution********************
//loop 1000 times and add "codewars" into the array
// add the value "codewars" to the websites array 1,000 times
var websites = []
for(var i = 0; i < 1000; i ++)
  websites.push("codewars");

//solution 2
var websites = new Array(1000).fill("codewars");

//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.expect(websites.length > 0, 'The array is still empty')
Test.expect(websites.length == 1000, 'The array does not equal 1,000')
Test.expect(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
  });
});
