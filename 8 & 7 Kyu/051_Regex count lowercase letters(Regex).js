/*Challenge link:https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
Question:
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

//***************Solution********************

//Then simiplfied into one line by using an Lambda expression for methods.
//check if str contains letter a-z, /g  global search, || [] check null, .length is Count()
const lowercaseCount = (str) => (str.match(/[a-z]/g) || []).length;

//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("Lowercase count", function() {
it("Basic tests", function() {
    Test.assertEquals(lowercaseCount("abc"), 3);
    Test.assertEquals(lowercaseCount("abcABC123"), 3);
    Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
    Test.assertEquals(lowercaseCount(""), 0)
    Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
    Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
})});

function lowercaseCountCheck(str){
    return str.replace(/[^a-z]/g, "").length;
}

let characters = "abcdefghijklmnopqrstuvwqyzqwertyuiopasdfghjklzxcvbnmABC0123456789!@#$%^&*()-_+={}[]|\:;?/>.<,)";

describe("Random tests", function() {
it("Random short strings", function() {
  for(let i = 0; i < 50; i++) {
    let random = "";
    for(let j = 0; j < Math.round(Math.random() * 7); j++) {
      random += characters[Math.round(Math.random() * 94)]
      }
     Test.assertEquals(lowercaseCount(random), lowercaseCountCheck(random));
     }
})});

describe("Random tests", function() {
it("Random medium strings", function() {
  for(let i = 0; i < 50; i++) {
    let random = "";
    for(let j = 0; j < Math.round(Math.random() * 20); j++) {
      random += characters[Math.round(Math.random() * 94)]
      }
     Test.assertEquals(lowercaseCount(random), lowercaseCountCheck(random));
     }
})});

describe("Random tests", function() {
it("Random long strings", function() {
  for(let i = 0; i < 50; i++) {
    let random = "";
    for(let j = 0; j < Math.round(Math.random() * 300); j++) {
      random += characters[Math.round(Math.random() * 94)]
      }
     Test.assertEquals(lowercaseCount(random), lowercaseCountCheck(random));
     }
})});
