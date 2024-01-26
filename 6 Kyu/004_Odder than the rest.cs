/*Challenge link:https://www.codewars.com/kata/5d6ee508aa004c0019723c1c/train/javascript
Question:
Integral numbers can be even or odd.

Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1.
Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
Even numbers are just not odd.

Task
Given a finite list of integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest.
If there is no single such number, no number is odder than the rest; return Nothing, null or a similar empty value.

Examples
oddest([1,2]) => 1
oddest([1,3]) => 3
oddest([1,5]) => null
Hint
Click here.
How odd is -1 ?
*/

//***************Solution********************
function oddest(a) {
  //validation check
  if(a.length == 0) return null;
  if(a.length == 1) return a[0];
  if(a.every(x => x == -1)) return null;
  else{
    //collect odds and evens into arrays
    const oddNums = a.filter(x => x & 1);
    const evenNums = a.filter(x => !(x & 1));
    
    //if odds is nothing return null, 
    //else select all x element, right shift 1, store in array
    //pass the array into Oddest recursively
    if(oddNums.length == 0) return null;
    else if(evenNums.length == 0){
      const m = oddest(a.map(x => x >> 1));
      return m == null ? null : (2 * m) + 1;
    }
    //pass oddNums into Oddest recursively
    return oddest(oddNums);
  }
}

//solution 2
const oddest = (a) => {
  if (a.length === 0) return null;

  const oddness = (a) => a ^ (a + 1);
  const maxodd = a.map(oddness).reduce((x, y) => x | y);
  const sel = a.filter((x) => oddness(x) === maxodd);

  return sel.length > 1 ? null : sel[0];
}
//****************Sample Test*****************
const range = (m,n) => Array.from( { length: n-m+1 }, (_,i) => i+m ) ;
const rnd = (m,n) => Math.floor( Math.random() * (n-m+1) ) + m ;
const odd = n => Boolean(n&1) , even = n => ! (n&1) ;
function refOddest(a) {
  if ( a.length===0 )
    return null;
  else if ( a.length===1 )
    return a[0];
  else if ( a.every( n => n===-1 ) )
    return null;
  else {
    const odds = a.filter(odd), evens = a.filter(even);
    if ( odds.length===0 )
      return null;
    else if ( evens.length===0 )
      { const r = refOddest(a.map( n => n>>1 )); return r===null ? null : r * 2 + 1 ; }
    else
      return refOddest(odds);
  }
}
describe("Odder than the rest",()=>{
  it("example tests",()=>{
    assert.strictEqual( oddest([1,2]), 1 );
    assert.strictEqual( oddest([1,3]), 3 );
    assert.strictEqual( oddest([1,5]), null );
  });
  it("fixed tests",()=>{
    assert.strictEqual( oddest([]), null );
    assert.strictEqual( oddest([0]), 0 );
    assert.strictEqual( oddest([0,1]), 1 );
    assert.strictEqual( oddest([1,3,5,7]), 7 );
    assert.strictEqual( oddest([2,4]), null );
    assert.strictEqual( oddest([-1]), -1 );
    assert.strictEqual( oddest([-1,-1]), null );
    assert.strictEqual( oddest([-1,0,1]), -1 );
    assert.strictEqual( oddest([-3,3]), 3 );
    assert.strictEqual( oddest([-5,3]), null );
    assert.strictEqual( oddest(range(0,42)), 31 );
    assert.strictEqual( oddest(range(-42,42)), -1 );
  });
  it("random tests",()=>{
    for ( let i=200; i--; ) {
      const xs = Array.from( { length: rnd(0,50) }, () => rnd(-100,100) ) ;
      assert.strictEqual( oddest([...xs]), refOddest(xs) );
    }
  });
});
