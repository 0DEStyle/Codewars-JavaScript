/*Challenge link:https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
Question:
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!


*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
const cookie = (x) => `Who ate the last cookie? It was ${{string:`Zach`,number:`Monica`}[typeof x] || 'the dog'}!`
//****************Sample Test*****************
Test.assertEquals(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
Test.assertEquals(cookie(2.3), "Who ate the last cookie? It was Monica!")
Test.assertEquals(cookie(26), "Who ate the last cookie? It was Monica!")
Test.assertEquals(cookie(true), "Who ate the last cookie? It was the dog!")
Test.assertEquals(cookie("true"), "Who ate the last cookie? It was Zach!")
Test.assertEquals(cookie(false), "Who ate the last cookie? It was the dog!")
Test.assertEquals(cookie(1.98528462),"Who ate the last cookie? It was Monica!")

describe( "Random tests", function(){

  let strs = ["Zach","Monica","the dog","Ryan","true","false"],
      others = [ function(){}, {}, [1,2,3], [1], new Date(), ["Monica"], !!0 ];

  let rnd = Math.random,
      choice = (arr) => arr[~~(rnd()*arr.length)];
  
  function rndTst(){
    let x = ~~(rnd()*3), exp;
    switch(x){
      case 0:
        x = choice(strs);
        exp = "Zach";
      break;
      case 1:
        x = rnd()*1e4;
        x = [x, ~~x][+(rnd()>.5)];
        exp = "Monica";
      break;
      default:
        x = choice(others);
        exp = "the dog"
    }
    exp = `Who ate the last cookie? It was ${exp}!`;
    it( "should work for "+Test.inspect(x.big?'"'+x+'"':x) , () => Test.assertEquals(cookie(x),exp) )
  }
  
  for( let x=0; x<12; x++ ) rndTst()
  
});
