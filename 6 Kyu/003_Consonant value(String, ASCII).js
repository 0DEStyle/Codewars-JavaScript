/*Challenge link:https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
Question:
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:

Word values

Vowel-consonant lexicon


*/

//***************Solution********************
//split the string by aiueo
//map each split, accumulate the ASCII value,
//subtract by 96 to offse range to 1-26
//find the max sum of each split, return the result.
//Then simiplfied into one line by using an Lambda expression for methods.
solve = s => Math.max(...s.split(/[aieuo]/g).map(x => [...x].reduce((a,b) => a + b.charCodeAt() - 96,0)));
//****************Sample Test*****************
const _ = require('lodash')

describe("Basic tests", function(){
Test.assertEquals(solve("zodiac"),26);
Test.assertEquals(solve("chruschtschov"),80);
Test.assertEquals(solve("khrushchev"),38);
Test.assertEquals(solve("strength"),57);
Test.assertEquals(solve("catchphrase"),73);
Test.assertEquals(solve("twelfthstreet"),103);
Test.assertEquals(solve("mischtschenkoana"),80);
Test.assertEquals(solve("az"),26);
});

describe("Random tests", function(){
for (let i=0;i<100;i++){
  let r  = _.random(300,1000);
  let s = randomWord(r);
  Test.assertEquals(solve(s), solve51_YxM(s), "It should work for random inputs too"); 
}
});

function solve51_YxM(s){
    return Math.max(...s.split(/[aeiou]+/).filter(e=>e!="").map(e=> e.split('')).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
}

    
function randomWord(r) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let vowels = "aeiou", v = '', abc =''
    for (let i = 0; i <= r; i++) {
        v += vowels[_.random(0,vowels.length-1)];      
        abc += letters[_.random(0,letters.length-1)];
    }   
    return (v + abc).split('').sort(function () {
        return 0.5 - Math.random()
    }).join('');}
