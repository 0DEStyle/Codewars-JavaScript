/*Challenge link:https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
Question:Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!
*/

//***************Solution********************
//check conditions, return the corresponding result.
//Then simiplfied into one line by using an Lambda expression for methods.
const calculateAge = (x,y) => y - x == 0 ? 
      'You were born this very year!' : y - x == 1?
      `You are 1 year old.`: y - x == -1 ?
      `You will be born in 1 year.` : y - x > 0?
      `You are ${y-x} years old.` : `You will be born in ${(y-x)*-1} years.`;

//solution 2
function  calculateAge(a,b) {
  return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
         `You were born this very year!`
}

//****************Sample Test*****************
describe("Random test cases", function() {
Test.assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
Test.assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
Test.assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!"); 
Test.assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
Test.assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
Test.assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
Test.assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
})

describe("Random test cases", function() {
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const  solution=(b, y)=>(d=>d>0 ? `You are ${d} year${d-1 ? "s" : ""} old.` : d<0 ? `You will be born in ${-d} year${d+1 ? "s" : ""}.` : "You were born this very year!")(y-b);

for (i=0;i<40;i++){
  var yob=randint(0,2000), year=randint(0,2000);
  it (`Testing for calculateAge(${yob},${year})`, function(){
    Test.assertEquals(calculateAge(yob,year), solution(yob,year), "It should work for random inputs too");
  })
}
})
