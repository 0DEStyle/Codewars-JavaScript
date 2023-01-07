/*Challenge link:https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript
Question:
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
*/

//***************Solution********************
//round number to 2 decimal place
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const twoDecimalPlaces = n =>  Number(n.toFixed(2));
//****************Sample Test*****************

const Test = require('@codewars/test-compat');

describe("twoDecimalPlaces", function() {
  it("works for some examples", function() {
    Test.assertEquals(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
    Test.assertEquals(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
    Test.assertEquals(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");
  });
  
  it("works for random numbers", function() {
    const solution = (number) => Math.round(number * 100) / 100;
    
    for (let i = 0; i < 100; ++i) {
      let number = Math.random() * 250.95316 - 125.47658;
      
      Test.assertEquals(twoDecimalPlaces(number), solution(number), `didn't work for ${number}`)
    }
  });
});
