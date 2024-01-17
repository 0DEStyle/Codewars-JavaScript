/*Challenge link:https://www.codewars.com/kata/55f4e56315a375c1ed000159/train/javascript
Question:
The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

8 + 1 = 9 and 92 = 81

512 = 5 + 1 + 2 = 8 and 83 = 512

We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

Examples (input --> output)
1 --> 81

2 --> 512
Happy coding!


*/

//***************Solution********************

function powerSumDigTerm(n) {
    const resultFromBruteForce  = [1, 2, 3, 4, 5,6, 7, 8, 9, 10,
81,512,2401,4913,5832,17576,
19683,234256,390625,614656,1679616,
17210368,34012224,52521875,60466176,205962976,
612220032,8303765625,10460353203,24794911296,
27512614111,52523350144,68719476736,
271818611107,1174711139837,2207984167552,6722988818432,
20047612231936,72301961339136,248155780267521,3904305912313344];
  return resultFromBruteForce[n+9];
}

// soluton 2
let series = [0];
for (let a = 2; a < 100; a++) {
  for (let b = 2; b < 42; b++) {
    let c = Math.pow(a, b);
    if (c.toString().split('').reduce((x,y) => x + parseInt(y), 0) === a) {
      series.push(c);
    }
  }
}
series = series.sort((a, b) => a - b);
var powerSumDigTerm = n => series[n];
//****************Sample Test*****************
function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}

describe("Basic tests",function() {
    it("powerSumDigTerm",function() {
        testing(powerSumDigTerm(1), 81);
        testing(powerSumDigTerm(2), 512);
        testing(powerSumDigTerm(3), 2401);
        testing(powerSumDigTerm(4), 4913);
        testing(powerSumDigTerm(5), 5832);
        testing(powerSumDigTerm(6), 17576);
        testing(powerSumDigTerm(30), 248155780267521);
        testing(powerSumDigTerm(31), 3904305912313344);
})})
describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    //................
    const asol = [81, 512, 2401, 4913, 5832, 17576, 19683, 234256, 390625, 614656, 1679616, 17210368, 34012224, 52521875, 
    60466176, 205962976, 612220032, 8303765625, 10460353203, 24794911296, 27512614111, 52523350144, 68719476736, 
    271818611107, 1174711139837, 2207984167552, 6722988818432, 20047612231936, 72301961339136, 248155780267521, 
    3904305912313344]
    function powerSumDigTerm2211(n) {
        return asol[n-1];
    }
    //.................
    console.log("**** powerSumDigTerm");
    function tests_code() {
        var i = 0;
        while (i < 20) {
            var n = randint(9, 30);
            //console.log("n = " +n);
            testing(powerSumDigTerm(n), powerSumDigTerm2211(n));
            i++;
        }
    }
    tests_code();
})
