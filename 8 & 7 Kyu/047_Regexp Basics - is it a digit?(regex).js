/*Challenge link:https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript
Question:Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


*/

//***************Solution********************
//check if character is digit
//Then simiplfied into one line by using an Lambda expression for methods.
String.prototype.digit = function() {
  return /^\d$/.test(this);
};
//****************Sample Test*****************
describe('hex number', () => {
  it('Basic tests', () => {
    Test.assertEquals(''.digit(), false);
    Test.assertEquals('7'.digit(), true);
    Test.assertEquals(' '.digit(), false);
    Test.assertEquals('a'.digit(), false);
    Test.assertEquals('a5'.digit(), false);
    Test.assertEquals('14'.digit(), false);
  });
  
  it('More tests', () => {
    Test.assertEquals(' '.digit(), false);
    Test.assertEquals('!'.digit(), false);
    Test.assertEquals('"'.digit(), false);
    Test.assertEquals('#'.digit(), false);
    Test.assertEquals('$'.digit(), false);
    Test.assertEquals('%'.digit(), false);
    Test.assertEquals('&'.digit(), false);
    Test.assertEquals('\''.digit(), false);
    Test.assertEquals('('.digit(), false);
    Test.assertEquals(')'.digit(), false);
    Test.assertEquals('*'.digit(), false);
    Test.assertEquals('+'.digit(), false);
    Test.assertEquals(','.digit(), false);
    Test.assertEquals('-'.digit(), false);
    Test.assertEquals('.'.digit(), false);
    Test.assertEquals('/'.digit(), false);
    Test.assertEquals('0'.digit(), true);
    Test.assertEquals('1'.digit(), true);
    Test.assertEquals('2'.digit(), true);
    Test.assertEquals('3'.digit(), true);
    Test.assertEquals('4'.digit(), true);
    Test.assertEquals('5'.digit(), true);
    Test.assertEquals('6'.digit(), true);
    Test.assertEquals('7'.digit(), true);
    Test.assertEquals('8'.digit(), true);
    Test.assertEquals('9'.digit(), true);
    Test.assertEquals(':'.digit(), false);
    Test.assertEquals(';'.digit(), false);
    Test.assertEquals('<'.digit(), false);
    Test.assertEquals('='.digit(), false);
    Test.assertEquals('>'.digit(), false);
    Test.assertEquals('?'.digit(), false);
    Test.assertEquals('@'.digit(), false);
    Test.assertEquals('A'.digit(), false);
    Test.assertEquals('B'.digit(), false);
    Test.assertEquals('C'.digit(), false);
    Test.assertEquals('D'.digit(), false);
    Test.assertEquals('E'.digit(), false);
    Test.assertEquals('F'.digit(), false);
    Test.assertEquals('G'.digit(), false);
    Test.assertEquals('H'.digit(), false);
    Test.assertEquals('I'.digit(), false);
    Test.assertEquals('J'.digit(), false);
    Test.assertEquals('K'.digit(), false);
    Test.assertEquals('L'.digit(), false);
    Test.assertEquals('M'.digit(), false);
    Test.assertEquals('N'.digit(), false);
    Test.assertEquals('O'.digit(), false);
    Test.assertEquals('P'.digit(), false);
    Test.assertEquals('Q'.digit(), false);
    Test.assertEquals('R'.digit(), false);
    Test.assertEquals('S'.digit(), false);
    Test.assertEquals('T'.digit(), false);
    Test.assertEquals('U'.digit(), false);
    Test.assertEquals('V'.digit(), false);
    Test.assertEquals('W'.digit(), false);
    Test.assertEquals('X'.digit(), false);
    Test.assertEquals('Y'.digit(), false);
    Test.assertEquals('Z'.digit(), false);
    Test.assertEquals('['.digit(), false);
    Test.assertEquals('\\'.digit(), false);
    Test.assertEquals(']'.digit(), false);
    Test.assertEquals('^'.digit(), false);
    Test.assertEquals('_'.digit(), false);
    Test.assertEquals('`'.digit(), false);
    Test.assertEquals('a'.digit(), false);
    Test.assertEquals('b'.digit(), false);
    Test.assertEquals('c'.digit(), false);
    Test.assertEquals('d'.digit(), false);
    Test.assertEquals('e'.digit(), false);
    Test.assertEquals('f'.digit(), false);
    Test.assertEquals('g'.digit(), false);
    Test.assertEquals('h'.digit(), false);
    Test.assertEquals('i'.digit(), false);
    Test.assertEquals('j'.digit(), false);
    Test.assertEquals('k'.digit(), false);
    Test.assertEquals('l'.digit(), false);
    Test.assertEquals('m'.digit(), false);
    Test.assertEquals('n'.digit(), false);
    Test.assertEquals('o'.digit(), false);
    Test.assertEquals('p'.digit(), false);
    Test.assertEquals('q'.digit(), false);
    Test.assertEquals('r'.digit(), false);
    Test.assertEquals('s'.digit(), false);
    Test.assertEquals('t'.digit(), false);
    Test.assertEquals('u'.digit(), false);
    Test.assertEquals('v'.digit(), false);
    Test.assertEquals('w'.digit(), false);
    Test.assertEquals('x'.digit(), false);
    Test.assertEquals('y'.digit(), false);
    Test.assertEquals('z'.digit(), false);
    Test.assertEquals('{'.digit(), false);
    Test.assertEquals('|'.digit(), false);
    Test.assertEquals('}'.digit(), false);
    Test.assertEquals('~'.digit(), false);
    
    Test.assertEquals('1\n0'.digit(), false);
    Test.assertEquals('1\n'.digit(), false);
    Test.assertEquals('1 '.digit(), false);
    Test.assertEquals(' 1'.digit(), false);
  });
});
