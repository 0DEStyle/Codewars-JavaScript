/*Challenge link:https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript
Question:
In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I''ve written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

//***************Solution********************
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v4, //set number value to a
      b = v2; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1, //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4, //set number value to a
      b = v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6, //set number value to a
      b = v3; //set number value to b
  return a % b;
}
//****************Sample Test*****************
const { assert } = require('chai');
process.reallyExit=bak;

describe("Tests", () => {
  
  it("test", () => {

    assert.strictEqual(equal1(), 100, "value of a+b is not equal to 100");
    assert.strictEqual(equal2(), 100, "value of a-b is not equal to 100");
    assert.strictEqual(equal3(), 100, "value of a*b is not equal to 100");
    assert.strictEqual(equal4(), 100, "value of a/b is not equal to 100");
    assert.strictEqual(equal5(), 100, "value of a%b is not equal to 100");
    
  });
});

describe("When v1-v6 values is changed, function's return value should be changed too", () => {

    function an1(){
      let a=v1;   //set number value to a
      let b=v1;   //set number value to b
      return a+b;
    }
    function an21(){
      let a=v3;   //set number value to a
      let b=v1;   //set number value to b
      return a-b;
    }
    function an22(){
      let a=v4;   //set number value to a
      let b=v2;   //set number value to b
      return a-b;
    }
    function an23(){
      let a=v6;   //set number value to a
      let b=v3;   //set number value to b
      return a-b;
    }
    function an3(){
      let a=v1;   //set number value to a
      let b=v5;   //set number value to b
      return a*b;
    }
    function an4(){
      let a=v4;   //set number value to a
      let b=v5;     //set number value to b
      return a/b;
    }
    function an51(){
      let a=v6;   //set number value to a
      let b=v3;   //set number value to b
      return a%b;
    }
    function an52(){
      let a=v2;   //set number value to a
      let b=v3;   //set number value to b
      return a%b;
    }
    function an53(){
      let a=v2;   //set number value to a
      let b=v4;   //set number value to b
      return a%b;
    }
    function an54(){
      let a=v2;   //set number value to a
      let b=v6;   //set number value to b
      return a%b;
    }

  it("100 Random Test", () => {

    for (let myjinxini=0;myjinxini<25;myjinxini++){
      
      v1=~~(100*Math.random())+1,v2=~~(100*Math.random())+1,v3=~~(100*Math.random())+1,
      v4=~~(100*Math.random())+1,v5=~~(100*Math.random())+1,v6=~~(100*Math.random())+1
      
      let ans21=an21(), ans22=an22(), ans23=an23(), ans3=an3(), ans4=an4(), ans51=an51(), ans52=an52(), ans53=an53(), ans54=an54();
      
      const ans2 = equal2();
      assert.isOk(ans2==ans21||ans2==ans22||ans2==ans23, "Your function equal2 got a wrong answer, you should solve kata by use v1-v6");
      assert.strictEqual(equal3(), ans3, "Your function equal3 got a wrong answer, you should solve kata by use v1-v6");
      assert.strictEqual(equal4(), ans4, "Your function equal4 got a wrong answer, you should solve kata by use v1-v6");
      const ans5 = equal5();
      assert.isOk(ans5==ans51||ans5==ans52||ans5==ans53||ans5==ans54, "Your function equal5 got a wrong answer, you should solve kata by use v1-v6");
    }
  });
});
