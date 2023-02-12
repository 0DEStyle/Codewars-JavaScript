/*Challenge link:https://www.codewars.com/kata/5a125226ffe75ff829000040/train/javascript
Question:
Task
You are given three positive integers t, a, b. Your task is to establish whether (t^a - 1)/(t^b -1) is an integer with less than 100 digits.

Return the result of (t^a - 1)/(t^b -1) in string format, if the result is an integer with less than 100 digits. Otherwise, return "Not an integer with less than 100 digits".

Still not understand the task? Look at the following example ;-)

Example
For t = 2, a = 9, b = 3, the output should be "73". Because:

(2^9-1)/(2^3-1) = 511/7 = 73
For t = 2, a = 3, b = 2, the output should be "Not an integer with less than 100 digits". Because:

(2^3-1)/(2^2-1) = 7/3 = 2.33333333...
For t = 123, a = 911, b = 1, the output should be "Not an integer with less than 100 digits". Because the result of (123^911 - 1)/(123^1 -1) is more than 100 digits.

Note
1 < t <= 100

1 < a <= 10000

1 < b <= 100

Because of obvious reasons, something like require("xxxx") was disabled. ;-)

Happy Coding ^_^


*/

//***************Solution********************

//Then simiplfied into one line by using an Lambda expression for methods.
function division(t, a, b) {
  //1n convert 1 to big integer
  var n = ((BigInt(t) ** BigInt(a) - 1n) / (BigInt(t) ** BigInt(b) - 1n)).toString();
  //check if there is remainder between a and b, also n length is less than 100
  return a % b === 0 && n.length < 100 ? n : "Not an integer with less than 100 digits";
}
//****************Sample Test*****************
const fnname="division"
/*
BigNumber = require("bignumber.js")
BigNumber.config({ EXPONENTIAL_AT: 1e+9 })
function an(t,a,b){ //if enabled require, kata is too easy to solve..
  var x=new BigNumber(t).pow(a).sub(1),y=new BigNumber(t).pow(b).sub(1),z=x.div(y).toString()
  return x.mod(y)==0&&z.length<100?z:"Not an integer with less than 100 digits"
}*/
function an(t,a,b){
  var not="Not an integer with less than 100 digits"
  if(a%b) return not
  for(var i=0,x="1",r="0",p=pow(t,b);i<a&&r.length<100;i+=b,x=mul(x,p)) r=add(r,x)
  return r.length<100?r:not
  
  function add(a,b){
    a+="", b+=""
    if(b.length>a.length) return add(b,a)
    b="0".repeat(a.length-b.length+1)+b, a="0"+a
    for(var r="",ad=0,t,i=a.length-1;i>=0;i--)
      t=+a[i]+ +b[i]+ad, r=(t%10)+r,ad=t>9?1:0
    return r.replace(/^0+/,"")
  }
  function mul(a,b){
    a+="",b+=""
    if(b.length>a.length) return mul(b,a)
    b="0".repeat(a.length-b.length)+b
    var x=a+"",y=b+"",r=Array(x.length+y.length+3).fill(0).join``
    for(var i=y.length-1,k=r.length-1;i>=0;i--,k--){
      var t=Array(x.length+y.length+3).fill(0)
      for(var j=x.length-1,l=k;j>=0;j--,l--){
        var t1= +t[l]+x[i]*y[j]
        t[l]=t1%10
        t[l-1]=~~(t1/10)
      }
      r=add(r,t.join``)
    }
    return r.replace(/^0+/,"")
  }
  function pow(x,y){
    var r="1"
    while(y--) r=mul(r,x)
    return r
  }
}





function rndc(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*RN())]; 
}
function rndc1(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length*RN())]; 
}
function rndclo(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*RN())]; 
}
function rndcn(){
  var allc="1234567890"
  return allc[~~(allc.length*RN())]; 
}
function rndcl(){
  var allc="abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length*RN())]; 
}
function rndcno(){
  var allc="1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length*RN())]; 
}
function rndch(){
  var allc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*RN())]; 
}
function rnd9(){
  var allc="123456789";
  return allc[~~(allc.length*RN())]; 
}
function rnd10(){
  var allc="0123456789";
  return allc[~~(allc.length*RN())]; 
}
function rnds(n){
  var len= n||rand(3,8)
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rndsx(n){
  var len= n||rand(4,10)
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc1();
  return rs.join("");
}
function rndss(n){
  var len= n||rand(2,20)
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rs.join(" ")
}
function rndsss(n){
  var len= n||rand(5,15)
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}

function shuff(arr){
  if(arr.length<2) return;
  for(var i=0;i<100;i++){
    var idx1=rand(0,arr.length-1),idx2=rand(0,arr.length-1)
    var t=arr[idx1]
    arr[idx1]=arr[idx2]
    arr[idx2]=t
  }
}
function rnds2(n){
  var len= n||~~(15*RN())+4;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rand(from,to){
  return Math.floor((to-from+1)*RN()+from)
}




function rndtest(big){
  var jl=rand(0,3),t,a,b
  //console.log(jl)
  if(jl==0) t=rand(2,9),b=rand(1,50),a=rand(0,3)?b+rand(1,500):b*rand(2,20)
  else if(jl==1) t=rand(10,99),b=rand(1,10),a=rand(0,3)?b+rand(1,30):b*rand(2,6)
  else t=rand(2,30),b=rand(1,20),a=rand(0,3)?b+rand(1,50):b*rand(2,10)
  return [t,a,b]
}





function showResult(s,color="00cc00",who="Your"){
  console.log("<font face='sans-serif' color='#"+color+"' size=3><b>"+who+" result is:</b></font><font face='sans-serif' color='#cccc00' size=3>"+
      "\n"+s+"</font>","")
}

describe("Basic Tests", function(){ 
it("It should works for basic tests.", function(){

assert.strictEqual(division(2,9,3),"73")

assert.strictEqual(division(2,3,2),"Not an integer with less than 100 digits")

assert.strictEqual(division(21,42,7),"18952884496956715554550978627384117011154680106")

assert.strictEqual(division(123,911,1),"Not an integer with less than 100 digits")

assert.strictEqual(division(26,72,12),"7914088058189701698257980774208334029257966300557096880872877892964775528040930938881")

assert.strictEqual(division(3,52,2),"807635236153334162366530")

assert.strictEqual(division(5,37,1),"18189894035458564758300781")

})})

var passed=0,failed=0,recfailed=[]

describe("100 Random Tests --- Testing for correctness of solution", function(){
  it("It should works for random tests.", function(){


    for(var iii=0;iii<100;iii++){
      var [ddd,eee,fff]=rndtest(iii>49)
      //eee=rand(1,50)*2,
      //fff=rand(0,5),
      //ggg=rand(2,30),hhh=rand(1,50),
      //var ans=an(ddd,eee)
      //var useran=show(ddd,eee)
      
      console.log("<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>"+
       
       "\nt = "+JSON.stringify(ddd)
      +", a = "+JSON.stringify(eee)
      +", b = "+JSON.stringify(fff)
      //+"\npaidBack = "+JSON.stringify(ggg)
      //+",  maxW = "+JSON.stringify(hhh)
      +"</font>","")
      var ans=an(ddd,eee,fff)
      var useran=division(ddd,eee,fff)
      
      var thisispassed="Passed!"
      if(JSON.stringify(useran)!=JSON.stringify(ans)) {
        failed++
        recfailed.push([[ddd,eee,fff],ans])
        thisispassed=JSON.stringify(useran)
      }
      else{
        passed++
      }
      //if(ans.length<1000) 
      assert.strictEqual(useran,ans)
      //else Test.assertEquals(thisispassed.slice(0,100),"Passed!","[Output array is too large, some parts was omitted]")
    }
  });  
});

/*
describe("100 Random Tests --- Testing for performance of solution", function(){
  it("It should works for random tests.", function(){


    for(var iii=0;iii<100;iii++){
      var ddd=rndtest(1)
      //eee=rand(1,50)*2,
      //fff=rand(0,5),
      //ggg=rand(2,30),hhh=rand(1,50),
      //var ans=an(ddd,eee)
      //var useran=show(ddd,eee)
      
      console.log("<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>"+
       
       "\nposters = "+JSON.stringify(ddd)
      //+"\nscoreOfTom = "+JSON.stringify(eee)
      //+"\nanswerOfJohn = "+JSON.stringify(fff)
      //+"\npaidBack = "+JSON.stringify(ggg)
      //+",  maxW = "+JSON.stringify(hhh)
      +"</font>","")
      var ans=an(ddd)
      var useran=countVisible(ddd)
      
      var thisispassed="Passed!"
      if(JSON.stringify(useran)!=JSON.stringify(ans)) {
        failed++
        recfailed.push([[ddd],ans])
        thisispassed=JSON.stringify(useran)
      }
      else{
        passed++
      }
      //if(ans.length<1000) 
      Test.assertEquals(useran,ans)
      //else Test.assertEquals(thisispassed.slice(0,100),"Passed!","[Output array is too large, some parts was omitted]")
    }
  });  
});

*/
if(recfailed.length) console.log("Your code failed with the following testcases:\n"+recfailed.slice(0,10).map(x=>`Test.assertEquals(${fnname}(${JSON.stringify(x[0]).slice(1,-1)}),${JSON.stringify(x[1])})`).join`\n`+"\nYou can add these cases to the example tests block and try it again;-)")
else{
/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
}
