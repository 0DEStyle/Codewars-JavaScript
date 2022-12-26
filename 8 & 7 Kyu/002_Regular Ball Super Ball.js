/*Challenge link:https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
Question:
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

//***************Solution********************
//some comment here
var Ball = function(ballType = "regular"){
  this.ballType = ballType;
  }
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("Ball", function() {
  it("should have a ballType of 'regular' if no arguments are given", function() {
    Test.assertEquals(new Ball().ballType, "regular");
  });
  it("should have a ballType of 'super' if 'super' is given as an argument", function() {
    Test.assertEquals(new Ball('super').ballType, "super");
  });
});
