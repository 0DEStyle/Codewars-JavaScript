/*Challenge link:https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
Question:
In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]

Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

Each element in the array has an index, use arr[index] to get the value of element.

index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

var arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]
Task
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

//***************Solution********************

//Then simiplfied into one line by using an Lambda expression with Enumerable methods.

const getLength = array => array.length;

const getFirst = array => array[0];

const getLast = array => array[array.length - 1];

pushElement = a => {a.push(4); return a};

popElement = a => {a.pop(); return a};

/*
const pushElement = array => array.concat(0);

const popElement = array => array.splice(0, array.length - 1);
*/

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
      var code = a.toLowerCase().charCodeAt(0)
      return code >= 97 && code <= 122;
    }
    return false;
  }
  return str.replace(/\r?\n|\r/g, '').split('').filter((a,i,x) => {
    return a===' '?isChar(x[i-1])&&isChar(x[i+1])?true:false:true;
  }).join('');
}


function an1(arr){
  return arr.length;
}
function an2(arr){
  return arr[0];
}
function an3(arr){
  return arr[arr.length-1];
}
function an4(arr){
  arr.push(1);
  return arr;
}
function an5(arr){
  arr.pop()
  return arr;
}


function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  var len= ~~(8*Math.random())+1;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndarr(){
  var len=~~(20*Math.random())+3;
  for (var i=0,rs=[];i<len;i++)  rs[i]=~~(20*Math.random());
  return rs;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    
    Test.assertSimilar(getLength([1,2,3]),3);
    Test.assertSimilar(getFirst([1,2,3]),1);
    Test.assertSimilar(getLast([1,2,3]),3);
    Test.assertSimilar(pushElement([1,2,3]).length,4);
    Test.assertSimilar(popElement([1,2,3]),[1,2]);
    
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

for (var myjinxini=0;myjinxini<20;myjinxini++){
  var aa= rndarr(), answer1=an1(aa.slice()),answer2=an2(aa.slice()),answer3=an3(aa.slice()),answer4=an4(aa.slice()),answer5=an5(aa.slice())
  console.log("<font color='#CD7F32'>Test for: arr=["+aa+"]</font>","")
    Test.assertSimilar(getLength(aa.slice()),answer1);
    Test.assertSimilar(getFirst(aa.slice()),answer2);
    Test.assertSimilar(getLast(aa.slice()),answer3);
    Test.assertSimilar(pushElement(aa.slice()).length,answer4.length);
    Test.assertSimilar(popElement(aa.slice()),answer5);

}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")
