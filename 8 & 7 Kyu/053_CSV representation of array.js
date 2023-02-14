/*Challenge link:https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
Question:
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

//***************Solution********************
//join things together
//Then simiplfied into one line by using an Lambda expression for methods.
toCsvText = a => a.join('\n');
//****************Sample Test*****************
const { assert } = require('chai');

describe("Full tests", () => {

  it("Basic tests",() => {

    function dotest(input, expected) {
      const msg = `Incorrect answer for input=[\n${input.map(r=>`    [${r}]`).join(',\n')}\n]`
      assert.strictEqual(toCsvText(input), expected, msg);
    }

    dotest([
            [ 0, 1, 2, 3, 45 ],
            [ 10,11,12,13,14 ],
            [ 20,21,22,23,24 ],
            [ 30,31,32,33,34 ]
           ], '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

    dotest([
            [ -25, 21, 2, -33, 48 ],
            [ 30,31,-32,33,-34 ]
           ], '-25,21,2,-33,48\n30,31,-32,33,-34');

    dotest([
            [ 5,55,5,5,55 ],
            [ 6,6,66,23,24 ],
            [ 666,31,66,33,7 ]
           ], '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');

  });

  it("Random Tests", () => {

    const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

    const check = (array) => {
       return array.join('\n');
    }

    function dotest(input) {
      const expected = check(input);
      const msg = `Incorrect answer for input=[\n${input.map(r=>`    [${r}]`).join(',\n')}\n]`
      assert.strictEqual(toCsvText(input), expected, msg);
    }

    for (let i = 1; i <= 97; i++){
      const array = [];
      const lengthArray = randomInteger(2, 10);

      for (let i = 1; i <= lengthArray; i++){
        const element = [];
        const lengthElement = randomInteger(2, 10); 

        for (let i = 1; i <= lengthElement; i++){
          element.push(randomInteger(-100, 100));
        }
        array.push(element);
      }    
      dotest(array);
    };
  });
});
