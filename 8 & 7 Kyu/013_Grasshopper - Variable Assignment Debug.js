/*Challenge link:https://www.codewars.com/kata/5612e743cab69fec6d000077/train/javascript
Question:
Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
*/

//***************Solution********************
//fix syntex
var a = "dev", b = "Lab";
var name = a + b;
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe('variable assignment', () => {
  it('should set variable a', () => {
    Test.assertEquals(a, 'dev')
  })
  it('should set variable b', () => {
    Test.assertEquals(b, 'Lab')
  })
  it('should set variable name', () => {
    Test.assertEquals(name, 'devLab')
  })
})
