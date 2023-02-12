/*Challenge link:https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
Question:
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

//***************Solution********************
// repeat "+" i amount of time
// then repeat the function above i amount of time
// trim the last \n (newline) and return the result
//Then simiplfied into one line by using an Lambda expression for methods.
generateShape = i => ("+".repeat(i) + "\n").repeat(i).trim()
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
function checkSolution(num) {
    let string = '';

    for (let i = 0; i < num * num; i++) {
        if (i % num === 0 && i !== 0) {
            string += '\n';
        }
        string += '+';
    }

    return string;
}

for(let i = 0; i < 25; i ++){
  let num = Math.floor(Math.random() * 50) + 0;
  Test.assertEquals( generateShape(num) , checkSolution(num) );
}



  });
});
//
