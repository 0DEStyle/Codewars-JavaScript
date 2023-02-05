/*Challenge link:https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
Question:
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0

*/

//***************Solution********************
//apply algorithm
//Then simiplfied into one line by using an Lambda expression for methods.
const derive = (coefficient,exponent) => `${coefficient*exponent}x^${exponent-1}`;
//****************Sample Test*****************
const randNum = require("lodash/random");

function testDerive(coefficient,exponent) {
  return (coefficient*exponent).toString().concat("x^").concat((exponent-1).toString());
}

describe("Tests the example test cases", function() {
  Test.assertEquals(derive(7,8), "56x^7");
  Test.assertEquals(derive(5,9), "45x^8");
});

describe("Tests exponent 1 is not truncated", function() {
  Test.assertEquals(derive(9,2), "18x^1");
});

describe("Tests for random test cases", function() {
  for(let i = 0; i < 100; i++) {
    let coe = randNum(1,500);
    let exp = randNum(2, 500);
    Test.assertEquals(derive(coe,exp), testDerive(coe,exp));
  }
});
