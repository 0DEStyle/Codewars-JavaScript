/*Challenge link:https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
Question:
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock

*/

//***************Solution********************
//string interpolation
const sayHello = name => `Hello, ${name}`;

//****************Sample Test*****************
const { assert } = require('chai');

describe('say hello', () => {
  
  function dotest(input, expected) {
    assert.strictEqual(sayHello(input), expected, `Incorrect answer for name='${input}'`)
  }
  
  it('fixed tests', () => {
    dotest('Mr. Spock', 'Hello, Mr. Spock')
    dotest('Captain Kirk', 'Hello, Captain Kirk')
    dotest('Liutenant Uhura', 'Hello, Liutenant Uhura')
    dotest('Dr. McCoy', 'Hello, Dr. McCoy')
  })
  it('random tests', () => {
    const solution = name => 'Hello, ' + name
    let alph = 'abcdefghijklmnopqrstuvwxyz'
    const createName = length => Array.from({length: length}, () => {
      let idx = Math.floor(Math.random()*25) + 1
      return alph[idx]
    }).join('')
    for (let i = 0; i < 50; i++) {
      let length = Math.floor(Math.random()*10) + 1
      let name = createName(length)      
      dotest(name, solution(name))
    }
  })
})
