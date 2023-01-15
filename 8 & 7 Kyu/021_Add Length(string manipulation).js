/*Challenge link:https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
Question:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

//***************Solution********************
//split string with a space, then add element itself and its length
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
var addLength = str => str.split(' ').map(x => x + ' ' + x.length);

//****************Sample Test*****************
describe("Basic tests",function(){
Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);
Test.assertSimilar(addLength('you'),["you 3"]);
Test.assertSimilar(addLength('y'),["y 1"]);
Test.assertSimilar(addLength('x y z'),["x 1", "y 1", "z 1"]);
Test.assertSimilar(addLength('xyz'),["xyz 3"]);
Test.assertSimilar(addLength('xyz x y z xyz'),["xyz 3", "x 1", "y 1", "z 1", "xyz 3"]);
Test.assertSimilar(addLength('a bc cde'),["a 1", "bc 2", "cde 3"]);
Test.assertSimilar(addLength('a ab abc'),["a 1", "ab 2", "abc 3"]);
Test.assertSimilar(addLength('a ab abc ab a'),["a 1", "ab 2", "abc 3", "ab 2", "a 1"]);
})

describe("Random tests",function(){
function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}
base="    abcdefghijklmnopqrstuvwxyz    ABCDEFGHIJKLMNOPQRSTUVWXYZ    "
function add_sol(str){return str.split(" ").map(function(a){return [a,a.length].join(" ")});}

for (let _=0;_<40;_++){
    let s=[], len=randint(1,60);
    for (let j=0;j<len;j++){
      s.push(base[randint(0,base.length-1)])
    }
    s=s.join("").trim().replace(/\s{2,100}/g," ");
    if (s=="") s="CodeWars";
    it("Testing for "+JSON.stringify(s),function(){
    Test.assertSimilar(addLength(s), add_sol(s), "It should work for random inputs too")
    })
}
})
