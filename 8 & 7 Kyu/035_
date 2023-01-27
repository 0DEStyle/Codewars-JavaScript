/*Challenge link:https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
Question:
Task
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4.
*/

//***************Solution********************
//use for loop to find even or odd number, store in separate arrays and present it in the right data structure.
function pickIt(arr){
  var odd=[],even=[];
  for(var i=0; i < arr.length; i++){  //🔥 spicy for loop 🔥🤯
    arr[i] % 2 == 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
  return [odd,even];
}
//****************Sample Test*****************
/*
function an(ex){
  var st="2";
  for (var i=0;i<ex.length;i++){
    var tmp=ex[i].replace(st,"").replace("-","")
    if (tmp.length==1) st=tmp
  }
  return st;
}
*/


process.reallyExit=bak;

const fcode=function(str){
  const isChar = function(a) {
    if(a){
      let code = a.toLowerCase().charCodeAt(0);
      return code >= 97 && code <= 122;
    }
    return false;
  }
  return str.replace(/\r?\n|\r/g, '').split('').filter((a,i,x) => {
    return a===' '?isChar(x[i-1])&&isChar(x[i+1])?true:false:true;
  }).join('');
}


function an(arr){
  let odd=[], even=[];
  //coding here
  for (let i=0;i<arr.length;i++){
    if (arr[i]%2==1) odd.push(arr[i]);
    else            even.push(arr[i]);
  }
  return [odd,even];
}

function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  let len= ~~(10*Math.random())+1;
  for (let i=0, rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndarr(){
  let len= ~~(20*Math.random())+1, rs=[];
  for (let i=0;i<len;i++) rs[i]= ~~(100*Math.random())+1;
  return rs;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    
//test for equations and inequalities
    
    Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
    Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
    Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
    Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
    Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
    Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
    
console.log("<br><font size=4><b>---should coding with 'for'---</b></font>")
console.log("")
let code=pickIt+"";
//console.log(code)
let passswitch=/for *\(/.test(code) ? "Passed":"Your solution should contains keyword \"for\"";
Test.assertSimilar(passswitch,"Passed");
/*
//anti-cheat and calc the code length
console.log("<br><font size=4><b>--------Code length check --------</b></font>")
var catchcode;
describe("", function() {
  var dump = arguments.callee.caller.caller.caller.toString();
  const FIXED = arguments.callee.caller.caller.toString().length;
  var idx1=dump.indexOf("myjinxin code")+17,
      idx2=dump.indexOf("var Test = global.Test")-";\n ;\n (function () {\n var ".length-1
  catchcode = dump.slice(idx1,idx2)
});
var allcode=catchcode.replace(/\/\/.*?(\n|$)/g,"").replace(/(\n)+/g,"\n"); 
var code=fcode(allcode);
var codelen=code.length, limit=0;
if (codelen<=limit) Test.assertSimilar("code length<="+limit,"code length>"+limit,  "your code length = "+codelen+", please try this code in challage version.\n the simple version only accept the solution which length>"+limit);
else Test.assertSimilar("PASS", "PASS", ";-)");

//end of anti-cheat
*/
/*
console.log("<br><font size=4><b>---should not modify the original array---</b></font>")
console.log("")
for (var myjinxini=0;myjinxini<3;myjinxini++){
  var ee= rndexcel(), ww= ~~(10*Math.random()), oarr="["+ee+"]",
      answer=an(ee,ww), uan=solveIt(ee,ww);
  //Test.assertSimilar(uan, answer);
  Test.assertSimilar("["+ee+"]",oarr);
}
*/
console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")

for (let myjinxini=0;myjinxini<100;myjinxini++){
  let ar= rndarr(), answer=an(ar);
  console.log("<font color='#CD7F32'>Test for: arr=["+ar+"]</font>","")
  Test.assertSimilar(pickIt(ar), answer);
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")
