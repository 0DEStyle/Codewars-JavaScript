/*Challenge link:https://www.codewars.com/kata/580ed88494291dd28c000019/train/javascript
Question:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
John learns to play poker with his uncle. His uncle told him: Poker to be in accordance with the order of "2 3 4 5 6 7 8 9 10 J Q K A". The same suit should be put together. But his uncle did not tell him the order of the four suits.

Give you John's cards and Uncle's cards(two string john and uncle). Please reference to the order of Uncle's cards, sorting John's cards.

Examples
For Python:

Suits are defined as S, D, H, C.

sort_poker("D6H2S3D5SJCQSKC7D2C5H5H10SA","S2S3S5HJHQHKC8C9C10D4D5D6D7")
should return "S3SJSKSAH2H5H10C5C7CQD2D5D6"
sort_poke("D6H2S3D5SJCQSKC7D2C5H5H10SA","C8C9C10D4D5D6D7S2S3S5HJHQHK") 
should return "C5C7CQD2D5D6S3SJSKSAH2H5H10" 
*/

//***************Solution********************/*
⠀⠀⠀⠀⢀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣀⣀⣀⡏⢱⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀
⠈⠛⢏⡉⡀⠀⠁⡔⠊⠁⠀⠀⠀⠀⠀⢀⣠⣤⡤⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣿⠔⠒⠢⣽⡄⠀⠀⠀⠀⣠⡖⣿⠃⠁⠀⣀⣀⣀⣉⣆⣀⠀⠀⠐⠀⠂
⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⣼⡽⡁⠁⢀⣻⣿⡿⠿⠋⢿⡉⠉⠉⢷⡄⠀⠀(<3)
⠀⠀⠀⠀⠀⠀⠀⢀⣖⣶⡿⣿⡯⠁⠀⢴⡿⠟⠉⠀⠀⠀⠀⠉⠉⠉⢹⣧⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⠞⠁⢠⡿⠁⠀⠀⠸⣿⣦⣄⣀⣀⣀⣀⣀⣀⣄⣺⡟⠀⠀
⠀⠀⠀⠀⠀⠀⠈⡏⠀⡴⢸⡇⠀⠀⠀⠀⠈⠙⠛⠛⠛⠓⠛⠛⠛⣻⡏⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡇⡌⠀⢸⣟⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡇⠀⠂⠀
⠀⠀⠀⠀⠀⠀⠀⣗⣇⠀⢸⣟⣧⡀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡟⡗⡱⢸⣷⣯⣇⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⢣⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠻⠾⠷⢿⡧⢟⣟⣄⠀⠀⠀⠀⠀⣀⡀⠀⢖⢿⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣒⣓⣯⡖⣄⡀⠀⣾⣿⣿⡄⠁⢸⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠷⣕⣌⣽⣺⣎⡿⠁⢹⣷⣶⣟⡝⠂⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/

function sortPoker(john,uncle){
  //fixed card order
  let cardOrder = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  let johnsSet= john.match(/[♦♥♣♠]\w+/g);
  
  //get uncle's suit order
  let suitOrder = ['♦', '♥', '♣', '♠'].sort((x, y) => uncle.indexOf(x) - uncle.indexOf(y));
  
  //sort using suitOrder, then cardOrder, then format string
  return johnsSet.sort((x, y) => 
                  suitOrder.indexOf(x[0])       - suitOrder.indexOf(y[0]) || 
                  cardOrder.indexOf(x.slice(1)) - cardOrder.indexOf(y.slice(1)))
                  .join("");

}


//****************Sample Test*****************
const Test = require('@codewars/test-compat');

function an(john,uncle){
  return john.match(/[♥♠♦♣][\dJQKA]+/g).sort((a,b)=>(uncle.indexOf(a[0])-uncle.indexOf(b[0]))*100+"2345678910JQKA".indexOf(a.slice(1))-"2345678910JQKA".indexOf(b.slice(1))).join("")
}


function rndc(){
  let allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length*Math.random())]; 
}
function rndc1(){
  let allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/";
  return allc[~~(allc.length*Math.random())]; 
}
function rndclo(){
  let allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+";
  return allc[~~(allc.length*Math.random())]; 
}
function rndcn(){
  let allc="1234567890";
  return allc[~~(allc.length*Math.random())]; 
}
function rndcl(){
  let allc="abcdefghijklmnopqrstuvwxyz";
  return allc[~~(allc.length*Math.random())]; 
}
function rndcno(){
  let allc="1234567890_ !@#$%^&*_(),.?|{}[]-=+";
  return allc[~~(allc.length*Math.random())]; 
}
function rndch(){
  let allc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length*Math.random())]; 
}
function rnd9(){
  let allc="123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnd10(){
  let allc="0123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnds(n){
  let len= n||rand(3,7);
  for (let i=0, rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
function rndss(n){
  let len= n||rand(3,7);
  for (let i=0, rs=[];i<len;i++) rs[i]=rand(0,1000)%2?rndcl():rndch();
  return rs.join("")
}
function rndsss(n){
  let len= n||rand(5,15);
  for (let i=0, rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}
function rndname(){
  return rndch()+rnds()
}
function shuff(arr){
  for(let i=0;i<20;i++){
    let idx1=rand(0,arr.length-1), idx2=rand(0,arr.length-1);
    let t=arr[idx1];
    arr[idx1]=arr[idx2]
    arr[idx2]=t
  }
}
function rnds2(n){
  let len= n||~~(15*Math.random())+4;
  for (let i=0, rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rand(from,to){
  return Math.floor((to-from+1)*Math.random()+from)
}
/*
♠K", "♠Q", "♠J", "♠10", "♠9", "♠8", "♠7",
      "♥A", "♥K", "♥Q", "♥J", "♥10", "♥9", "♥8", "♥7",
      "♦A", "♦K", "♦Q", "♦J", "♦10", "♦9", "♦8", "♦7",
      "♣A", "♣K", "♣Q", "♣J", "♣10", "♣9", "♣8", "♣7"
      */
let allcard=[];
allcard[0]="2,3,4,5,6,7,8,9,10,J,Q,K,A".split(",").map(x=>"♠"+x)
allcard[1]="2,3,4,5,6,7,8,9,10,J,Q,K,A".split(",").map(x=>"♥"+x)
allcard[2]="2,3,4,5,6,7,8,9,10,J,Q,K,A".split(",").map(x=>"♣"+x)
allcard[3]="2,3,4,5,6,7,8,9,10,J,Q,K,A".split(",").map(x=>"♦"+x)
function rndtest(bs){
  let order=["♥","♠","♦","♣"];
  shuff(order)
  return [rndpoker(),an(rndpoker(),order)]  
}
function rndpoker(){
  let l1=rand(2,4), l2=rand(2,4), l3=rand(2,4), l4=13-l1-l2-l3, r=[];
  for(let i=0;i<l1;i++) r.push(allcard[0][rand(0,12)])
  for(let i=0;i<l2;i++) r.push(allcard[1][rand(0,12)])
  for(let i=0;i<l3;i++) r.push(allcard[2][rand(0,12)])
  for(let i=0;i<l4;i++) r.push(allcard[3][rand(0,12)])
  shuff(r)
  return r.join("")
}
describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(sortPoker("♦6♥2♠3♦5♠J♣Q♠K♣7♦2♣5♥5♥10♠A",
                             "♠2♠3♠5♥J♥Q♥K♣8♣9♣10♦4♦5♦6♦7"),
                             "♠3♠J♠K♠A♥2♥5♥10♣5♣7♣Q♦2♦5♦6")

Test.assertSimilar(sortPoker("♦6♥2♠3♦5♠J♣Q♠K♣7♦2♣5♥5♥10♠A",
                             "♣8♣9♣10♦4♦5♦6♦7♠2♠3♠5♥J♥Q♥K"),
                             "♣5♣7♣Q♦2♦5♦6♠3♠J♠K♠A♥2♥5♥10")

})})

describe("100 Random Tests", function(){
  it("It should works for random tests too", function(){
    console.log("<font face='sans-serif' color='#cccccc'>")
    for(let iii=0;iii<100;iii++){
      let [mmm,nnn]=rndtest(), ans=an(mmm,nnn);
      console.log("</font>")
      console.log("<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#cccc00' size=3>"+
      "\njohn = \""+mmm+"\"\nuncle= \""+nnn+"\"</font>","")
      let useran=sortPoker(mmm,nnn);
      
      //extra show for result
      if(ans==useran){
        console.log("<font face='sans-serif' color='#00cc00' size=3><b>Your result is:</b></font><font face='sans-serif' color='#00aa00' size=3>\n"+
        useran+"</font>","<font face='sans-serif' color='#000000'>")
      }
      else{
        console.log("<font face='sans-serif' color='#00cc00' size=3><b>Correct result:</b></font><font face='sans-serif' color='#00aa00' size=3>\n"+
        ans+"</font>","")
        console.log("<font face='sans-serif' color='#cc0000' size=3><b>Your result is:</b></font><font face='sans-serif' color='#aa0000' size=3>\n"+
        useran+"</font>","<font face='sans-serif' color='#cc0000'>")
      }
      console.log("</font>")
      Test.assertSimilar(useran,ans)
    }
    console.log("</font>")
  });
});

/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
