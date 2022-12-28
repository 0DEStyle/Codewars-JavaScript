/*Challenge link:https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
Question:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

//***************Solution********************
//map: creates a new array from calling a function for every array element.
//split the string, map each character and duplicate it, then join and return the result.
var doubleChar = (str) => str.split("").map(c => c + c).join("");


//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
  
  it("works for random strings", function() {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a
    const randstr = (l) =>
      [...Array(l)].map(_=>String.fromCharCode(randint(65, 127))).join("")
    
    const solution = (str) => str.split("").map((c) => c + c).join("");
    
    for (let i = 0; i < 40; ++i) {
      let str = randstr(randint(5, 20));
      Test.assertEquals(doubleChar(str), solution(str), `Failed when str='${str}'`);
    }
  });
});
