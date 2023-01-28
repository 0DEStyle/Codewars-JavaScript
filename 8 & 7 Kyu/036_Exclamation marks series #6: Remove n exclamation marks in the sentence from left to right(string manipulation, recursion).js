/*Challenge link:https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
Question:
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/

//***************Solution********************
//if n(number of times) is greater than 0, replace ! with nothing, then go into recursion by calling the function itself, n - 1 until n is 0.
//else return s itself
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
const remove = (s,n) => n>0 ? remove(s.replace('!', ''), n-1) : s;
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

function an(s,n){
  for(var r="",i=0;i<s.length;i++) r+=s[i]!="!"?s[i]:(n--)>0?"":"!"
  return r
}
function rndc(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())]; 
}
function rndc1(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length*Math.random())]; 
}
function rndclo(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length*Math.random())]; 
}
function rndcn(){
  var allc="1234567890"
  return allc[~~(allc.length*Math.random())]; 
}
function rndcl(){
  var allc="abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length*Math.random())]; 
}
function rndcno(){
  var allc="1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length*Math.random())]; 
}
function rndch(){
  var allc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())]; 
}
function rnd9(){
  var allc="123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnd10(){
  var allc="0123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnds(n){
  var len= n||rand(3,7)
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rndss(n){
  var len= n||rand(2,5)
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}
function rndsss(n){
  var len= n||rand(5,15)
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}
function rndname(){
  return rndch()+rnds()
}
function shuff(arr){
  for(var i=0;i<20;i++){
    var idx1=rand(0,arr.length-1),idx2=rand(0,arr.length-1)
    var t=arr[idx1]
    arr[idx1]=arr[idx2]
    arr[idx2]=t
  }
}
function rnds2(n){
  var len= n||~~(15*Math.random())+4;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rand(from,to){
  return Math.floor((to-from+1)*Math.random()+from)
}
function rndmark(){
  var len=rand(1,6),r=[]
  for(var i=0;i<len;i++) r[i]="!".repeat(Math.max(0,rand(-2,3)))+rnds()+"!".repeat(Math.max(0,rand(-2,3)))
  return r.join(" ")
}

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(remove("Hi!",1) , "Hi")
Test.assertSimilar(remove("Hi!",100) , "Hi")
Test.assertSimilar(remove("Hi!!!",1) , "Hi!!")
Test.assertSimilar(remove("Hi!!!",100) , "Hi")
Test.assertSimilar(remove("!Hi",1) , "Hi")
Test.assertSimilar(remove("!Hi!",1) , "Hi!")
Test.assertSimilar(remove("!Hi!",100) , "Hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
})})
describe("100 Random Tests", function(){
  it("It should works for random tests too", function(){
    for(var iii=0;iii<100;iii++){
      var lll=rndmark(),nnn=rand(1,lll.split("!").length+1),ans=an(lll,nnn)
      console.log("<font face='sans-serif' color='#00cc00'><b>Testing for:</b></font><font face='sans-serif' color='#cccc00'>"+
      "s = \""+lll+"\"  n = "+nnn+"</font>","")
      var useran=remove(lll,nnn)
      Test.assertSimilar(useran,ans)
    }
  });
});

/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
