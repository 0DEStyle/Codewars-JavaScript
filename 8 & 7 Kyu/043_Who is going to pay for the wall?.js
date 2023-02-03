/*Challenge link:https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript
Question:
Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"


*/

//***************Solution********************
//if length of name is less than or equal to 2 , return name in array format, else splice the first 2 letters of the name and return result in array format.
//Then simiplfied into one line by using an Lambda expression for methods.
const whoIsPaying = (name) => name.length <= 2 ?  [name] : [name, name.slice(0, 2)];
//****************Sample Test*****************
describe("Basic tests",() =>{
Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
Test.assertSimilar(whoIsPaying("Melania"),["Melania", "Me"]);
Test.assertSimilar(whoIsPaying("Melissa"),["Melissa", "Me"]);
Test.assertSimilar(whoIsPaying("Me"),["Me"]);
Test.assertSimilar(whoIsPaying(""), [""]);
Test.assertSimilar(whoIsPaying("I"), ["I"]);
});


describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=s=>s.length>2 ? [s,s.slice(0,2)] : [s];
const base="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i=0;i<40;i++){
  const s=[...Array(randint(1,20))].map(_=>base[randint(0,base.length-1)]).join("");
  it(`Testing for '${s}'`,() =>{
  Test.assertSimilar(whoIsPaying(s),sol(s),"It should work for random inputs too");
  })
}
})
