/*Challenge link:https://www.codewars.com/kata/59b81886460387d8fc000043/train/javascript
Question:
No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

You have 30 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1]

And this time you won't be able to do the thing from that kata.

require isn't allowed as well.
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
reverse=x=>x.map(x.pop,[...x])

//solution 2
reverse=a=>[...a].map(a.pop,a)

//solution 3
reverse=_=>_.map(_.pop,[..._])
//****************Sample Test*****************
const {assert, config, util: {inspect}} = require('chai');
config.truncateThreshold = 0;

const withoutReverse = f => {
  const reverse = Array.prototype.reverse;
  Array.prototype.reverse = () => {
    throw new Error('this function is currently unavailable')
  };
  const result = f();
  Array.prototype.reverse = reverse;
  return result;
};

console.log('<LOG::Code size>', _codeSize);

describe('reverse', () => {
  it('should reverse arrays', () => {
    const staticTests = [
      [[1, 2, 3], [3, 2, 1]],
      [[1, 1, 1], [1, 1, 1]],
      [[1], [1]],
      [[0, 0, 0], [0, 0, 0]],
      [[0], [0]],
      [[], []],
      [[undefined], [undefined]],
      [[0, undefined], [undefined, 0]],
      [[0, null, undefined], [undefined, null, 0]],
      [['x', 'y'], ['y', 'x']],
      [[...'01234567890123456789'], [...'98765432109876543210']],
    ];
    
    for (const [input, expected] of staticTests) {
      const actual = withoutReverse(() => reverse(input.slice()));
      assert.deepEqual(actual, expected, inspect(input));
    }
    
    for (let length = 0; length < 200; length += 10) {
      const input = Array.from({length}, () => Math.random() * 100 | 0);
      const actual = withoutReverse(() => reverse(input.slice()));
      const expected = input.slice().reverse();
      assert.deepEqual(actual, expected, inspect(input));
      if (JSON.stringify(actual) != JSON.stringify(expected))
        break; // spam filter for Node 8
    }
  });
});

describe('Code', () => {
  it('should be short enough', () => {
    assert(_codeSize <= 30, 'Code is too long');
  });
  it('should not use `require`', () => {
    assert(!_code.includes('require'), 'Code uses `require`');
  });
});

// this shouldn't throw now, just in case something changes in the future
for (const f of [() => 1, () => -1])
  if ([0, undefined].sort(f).join(',') == ',0')
    throw new Error('This version is disabled intentionally');
