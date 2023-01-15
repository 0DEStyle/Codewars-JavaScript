/*Challenge link:codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
Question:
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
*/

//***************Solution********************
//fixed bug. Used tenary.
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const rainAmount = (mm) => mm < 40 ? "You need to give your plant " + Math.abs(mm-40) + "mm of water" :"Your plant has had more than enough water for today!";
//****************Sample Test*****************
describe("rainAmount(mm)", () => {
  it("should work for fixed tests", () => {
    Test.assertEquals(rainAmount(100), "Your plant has had more than enough water for today!");
    Test.assertEquals(rainAmount(40), "Your plant has had more than enough water for today!");
    Test.assertEquals(rainAmount(39), "You need to give your plant 1mm of water");
    Test.assertEquals(rainAmount(5), "You need to give your plant 35mm of water");
    Test.assertEquals(rainAmount(0), "You need to give your plant 40mm of water");
  });
  it("should work for random tests as well", () => {
    function solution(mm) {
      if (mm <= 39) {
         return "You need to give your plant " + (40 - mm) + "mm of water"
      }
      else {
         return "Your plant has had more than enough water for today!"
      }
    }
    var mm, actual, expected;
    for (let i = 0; i < 100; i++) {
      mm = Test.randomNumber();
      expected = solution(mm);
      actual = rainAmount(mm);
      Test.assertEquals(actual, expected);
    }
  });
});
