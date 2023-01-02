/*Challenge link:https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript
Question:
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.


*/

//***************Solution********************
//check if array include item
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const include = (arr, item) => arr.includes(item);

//****************Sample Test*****************
const { assert } = require('chai');

describe("Tests", () => {
  
  function doTest(arr, item, expected, additional="") {
    assert.strictEqual(include(arr, item), expected, `Incorrect answer for:\narr=[${arr}]\nitem=${item}\n${additional}`);
  }
  
  
  it("Fixed tests", () => {
    doTest([1,2,3,4], 3, true )
    doTest([1,2,4,5], 3, false)
    
    let list = [0,1,2,3,5,8,13,2,2,2,11];

    doTest(list,  13,  true, "list includes 13")
    doTest(list,   0,  true, "list includes 0")
    doTest(list, 100, false, "list does not include 100")
    doTest(list,   2,  true, "list includes 2 multiple times")
    doTest(list,  11,  true, "list includes 11")
    doTest(list, "2", false, "list includes 2 (integer), not ''2'' (string)")
    doTest(  [],   0, false, "empty list doesn't include anything")
  });
  
  it("Random tests", () => {
    
    let cases = [];
    for(let i=0; i<50; ++i) {
      let arr = Array.from({length: Math.random() * 20 + 20 | 0}, () => Math.random() * 1000 - 500 | 0);
      let item = arr[Math.random() * arr.length | 0];
      cases.push([arr, item, true, Math.random()]);
      arr = arr.filter(e => e != item);
      cases.push([arr, item, false, Math.random()]);
    }
    cases = cases.sort((e1, e2) => e1[3] - e2[3]);
    for(let [arr, item, expected] of cases) {
      doTest(arr, item, expected);
    }
  });
  
  
});
