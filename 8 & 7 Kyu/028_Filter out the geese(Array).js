/*Challenge link:https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
Question:Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/

//***************Solution********************
//compare 2 arrays, and remove duplicates

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(val => !geese.includes(val));
};
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

function generateTestArray(){
  let arrayLength = Math.floor(Math.random() * 80);
  let birds = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested", "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];
  for (let i = 0; i < arrayLength; i++) {
    result.push(birds[Math.floor(Math.random() * birds.length)]);
  }
  return result;
};

describe("Random tests",function(){
  let gooseFilterCheck = a => a.filter(x => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].indexOf(x) === -1);
  for (let i = 1; i <= 100; i++) {
    it("Random test " + i, function(){
      let testArray = generateTestArray();
      Test.assertDeepEquals(gooseFilter(testArray.slice()), gooseFilterCheck(testArray));
    });
  };
});
