/*Challenge link:https://www.codewars.com/kata/57fa92b25c9910e7bc0001df/train/javascript
Question:
The code is a recursive attempt in calculating the result of a factorial function.
I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

The goal is to find the bugs in the sourcecode and fix them (play a little pest control).
*/

//***************Solution********************
//if n is less than 0, return 0
//if n is less than or equal to 1, return 1
//else recursively pass n-1 into facRecursion, then times n
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
function facRecursion(n){
  return n < 0 ? 0 : n <= 1 ? 1 : n * facRecursion(n - 1);
}

//****************Sample Test*****************
Test.assertEquals(facRecursion(0), 1, "Should return 1");
Test.assertEquals(facRecursion(1), 1, "Should return 1");
Test.assertEquals(facRecursion(2), 2, "Should return 2");
Test.assertEquals(facRecursion(3), 6, "Should return 6");
Test.assertEquals(facRecursion(4), 24, "Should return 24");
Test.assertEquals(facRecursion(5), 120, "Should return 120");
Test.assertEquals(facRecursion(6), 720, "Should return 720");
Test.assertEquals(facRecursion(-1), 0, "Should return 0");


let number;

for(let i = 0;i<100;++i){
  number = Math.floor((Math.random() * 35) -10); 
  Test.assertEquals(facRecursion(number), factorial(number), "Result is wrong");
}


describe('enforcement tests', () => {
  Sloth.isRecursive(facRecursion);
});
