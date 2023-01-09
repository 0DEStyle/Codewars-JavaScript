/*Challenge link:https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
Question:
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!


*/

//***************Solution********************
//try catch for error
//eval: evaluates JavaScript code represented as a string and returns its completion value. 
//else return "unknown value"
function calculator(a,b,sign) {
  try
    { return eval(a+sign+b); }
  catch(e)
    { return "unknown value"; }
}
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var calculate = function(a,b,sign){
var c = 0;

if(isNaN(a) || isNaN(b)){
   c= "unknown value";
}else{

    switch(sign) {
        case '+':  c= a+b;
        break;
        case  '-':c= a-b;
        break;
        case  '*':c= a*b;
        break;
        case  '/':c= a/b;
        break;
        default:
        c= "unknown value";
  }
}

return c;

}
for(i = 0 ; i <100 ; i ++){
var a = Test.randomNumber();
var b = Test.randomNumber();
var table = ["*","+","-","/","$","@"];
var sign =  table[Math.floor(Math.random() * table.length)];
Test.assertEquals(calculator(a,b,sign), calculate(a,b,sign), "calculate");


}
  });
});
