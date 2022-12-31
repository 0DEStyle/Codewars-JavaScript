/*Challenge link:https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
Question:
Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code and pass this kata.
*/

//***************Solution********************
//solution 1
//apply condition
const saleHotdogs = n => n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;

//solution 2
const saleHotdogs = n =>n*( n < 5 ? 100 : n < 10 ? 95 : 90);
//****************Sample Test*****************
const { assert } = require('chai');
const _ = require('lodash');

describe("Tests", () => {

  before("Do not modify funcitons", () => {
    
    let da = "Function,Array,String,String,String".split(",");
    let db = "toString,filter,slice,indexOf,replace".split(",");
    
    for (var i=0;i<da.length;i++){
      eval('Object.defineProperty('+da[i]+'.prototype, "'+db[i]+'", { writable: false });')
      eval('Object.defineProperty('+da[i]+'.prototype, "'+db[i]+'", { configurable: false });')
    }
  });
  
  
  function an(n){
    return n*(n<5?100:n<10?95:90);
  }
  
  function dotest(n) {
    assert.strictEqual(saleHotdogs(n), an(n), `Incorrect answer for n=${n}`);
  }
  
  it("Fixed test", () => {
    dotest(  1);
    dotest(  4);
    dotest(  5);
    dotest(  9);
    dotest( 10);
    dotest(100);
  });

  it("Random tests", () => {    
    let tests = _.shuffle(Array.from({length: 30}, (_,i) => i+1));    
    for (let input of tests){
      dotest(input);
    }
  });
});
