/*Challenge link:https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
Question:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
/*RegexPattern.test(str)
^ begin $ end
\d check if character is a single digit

or
[1-9]/d between 1 to 9, meaning no 0, because 01 is considered invalid, then follow by 1 extra digit

or
1/d/d check character starts with 1 follow by 2 extra digits

or
2([0-4]\d|5[0-5])  2 follow by 
digit between 0 to 4 follow by a digit, meaning 200-249 or!!! 
5 follow by digit 0-5, meaning 250-255

*/
isValidIP = (str) => /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(str);


//solution 2, simplified version {4} check if pattern match for 4 times

isValidIP = (str) => /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);

//****************Sample Test*****************
const {assert} = require('chai');

describe("Sample tests", () => {
  
  function doTest(input, expected) {
    assert.strictEqual(isValidIP(input), expected, `Incorrect answer for input="${input}"`)
  }
  
  it("Examples", () => {
    doTest('', false);
    doTest('abc.def.ghi.jkl', false);
    doTest('123.456.789.0', false);
    doTest('12.34.56', false);
    doTest('01.02.03.04', false);
    doTest('256.1.2.3', false);
    doTest('1.2.3.4.5', false);
    doTest('123,45,67,89', false);
    doTest('1e0.1e1.1e2.2e2', false);
    doTest(' 1.2.3.4', false);
    doTest('1.2.3.4 ', false);
    doTest('12.34.56.-7', false);
    doTest('1.2.3.4\n', false);
    doTest('\n1.2.3.4', false);

    doTest('0.0.0.0', true);
    doTest('123.45.67.89', true);
    doTest('255.255.255.255', true);
    doTest('1.2.3.4', true);
    doTest('31.41.59.26', true);
    doTest('53.58.97.93', true);
    doTest('238.46.26.43', true);
    doTest('38.32.79.50', true);
    doTest('28.84.197.169', true);
    doTest('39.93.75.105', true);
    doTest('82.0.97.49', true);
    doTest('44.59.230.78', true);
    doTest('164.0.62.86', true);
    doTest('208.99.86.28', true);
    doTest('0.34.82.53', true);
    doTest('42.117.0.67', true);
    doTest('98.214.80.86', true);
    doTest('51.32.82.30', true);
    doTest('66.47.0.93', true);
    doTest('84.46.0.95', true);
    doTest('50.58.22.31', true);
    doTest('72.53.59.40', true);
    doTest('81.28.48.1', true);
  });
});



describe("Random tests", () => {
  
  it('Random tests', () => {

    let letters = "abcdefghijklm";
    let rnd = function(n) { return (Math.random() * n) | 0; };

    for (let test = 0; test < 300; ++test) {

        let parts = [];
        for (let i = 0; i < 4; ++i)
            parts.push('' + rnd(256));

        let pos = rnd(4);
        let i = rnd(4);
        let someLetters = letters.substring(i, i + rnd(2) + 1);
        let valid = false;
        let route = rnd(12);
        switch (route)
        {
            case 0: valid = true; break;
            case 1: parts[pos] = ''; break;
            case 2: parts[pos] = someLetters; break;
            case 3: parts[pos] = rnd(44) + 256; break;
            case 4: parts.splice(pos, 1); break;
            case 5: parts.push('' + rnd(256)); break;
            case 6: parts[0] = someLetters + parts[0]; break;
            case 7: parts[3] += someLetters; break;
            case 8: parts[rnd(2) + 1] += " "; break;
            case 9: parts[pos] = "-" + parts[pos]; break;
            case 10: parts[pos] = "0" + rnd(100); break;
            case 11: parts[pos] = "00"; break;
        }

        let ip = parts.join('.');
        assert.strictEqual(!!isValidIP(ip), valid, `Incorrect answer for IP="${ip}"`);
      }
  });
});
