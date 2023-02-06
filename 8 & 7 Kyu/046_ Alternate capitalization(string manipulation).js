/*Challenge link:https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
Question:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity


*/

//***************Solution********************
//split the string s into character, for each character within s, if index is even, convert to uppercase
//for the second parameter, for each character within s, if index is not even, convert to uppercase
//return the result.
//Then simiplfied into one line by using an Lambda expression for methods.

const capitalize = (s) => 
[s.split('').map((c,i) => i % 2 == 0 ? c.toUpperCase(): c).join(''),
 s.split('').map((c,i) => i % 2 != 0 ? c.toUpperCase(): c).join('')];
 
 //solution 2
 function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};


//****************Sample Test*****************
describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
Test.assertDeepEquals(capitalize("indexinglessons"),['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']);
Test.assertDeepEquals(capitalize("codingisafunactivity"),['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']);
});

describe("Random tests", function(){
 var letters = "abcdefghijklmnopqrstuvwxyz"
for (let i=0;i<100;i++){
  r  = Math.floor((Math.random() * 10) + 10);  
  if (r > 25){
  letters += letters;
  };
  s = letters.slice(1,r)  
  Test.assertDeepEquals(capitalize(s),capitalize521R(s),"It should work for random inputs too"); 
}
});

function capitalize521R(s){
  a = s.split('').map(function(c,i) {
    return !(i & 1) ? c.toUpperCase() : c.toLowerCase();
  }).join('');
  b = s.split('').map(function(c,i) {
    return i & 1 ? c.toUpperCase() : c.toLowerCase();
  }).join('');
  
  return [a,b];
};
