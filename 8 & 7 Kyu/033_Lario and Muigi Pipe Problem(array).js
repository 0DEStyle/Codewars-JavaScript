/*Challenge link:https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
Question:
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

//***************Solution********************
/*

from length to  last index of array - first index of array + 1
add new elements by i + first index of array
*/
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.

const pipeFix = nums => Array.from({ length: nums.slice(-1) - nums[0] + 1 }, (v, i) => i + nums[0]);
//****************Sample Test*****************
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9],'You must return an array from 1-9');
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12],'You must return an array from 1-12');
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9],'You must return an array from 6-9');
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4],'You must return an array from -1-4');
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3],'You must return an array from 1-3');
    assert.deepEqual(pipeFix([2]),[2]);
  });
});

describe('Random Tests', () => {
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function sol(a){
    return Array.from({length: Math.max(...a) - Math.min(...a) + 1}, (_, i) => i + Math.min(...a))
  }
  
  it("Testing for 100 random tests", () => {   
    
    for(let i = 0; i < 100; i++){
      let arr = [...new Set(Array.from({length: randint(1, 1000)}, _=>randint(-100, 1000)))].sort((a,b)=>a-b)
      assert.deepEqual(pipeFix(arr.slice()), sol(arr.slice()), `Testing for numbers = ${JSON.stringify(arr)}`);
    }      
  });
});
