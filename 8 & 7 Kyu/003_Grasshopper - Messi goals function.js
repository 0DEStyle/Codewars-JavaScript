/*Challenge link:https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript
Question:
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

//***************Solution********************
//solution 1
//sum all arguments, return the sum.
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


//solution 2
const goals = (a,b,c) => a + b + c;
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

describe('goals test', function () {
  it('should be 0', function () {
    Test.assertEquals(goals(0,0,0), 0)
  })
  it('should be 58', function () {
    Test.assertEquals(goals(43, 10, 5), 58)
  })
  it('should work for random numbers', function () {
    let solution = (ll, cl, cdr) => ll + cl + cdr
    for (let i = 0; i < 100; i++) {
      let l = Math.floor(Math.random()*50);
      let c = Math.floor(Math.random()*20);
      let r = Math.floor(Math.random()*10);
      Test.assertEquals(solution(l, c, r), goals(l, c, r))
    }
  })
})
