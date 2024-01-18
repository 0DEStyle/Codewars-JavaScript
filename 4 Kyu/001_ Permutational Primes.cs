/*Challenge link:https://www.codewars.com/kata/55eec0ee00ae4a8fa0000075/train/javascript
Question:
The prime 149 has 3 permutations which are also primes: 419, 491 and 941.

There are 3 primes below 1000 with three prime permutations:

149 ==> 419 ==> 491 ==> 941
179 ==> 197 ==> 719 ==> 971
379 ==> 397 ==> 739 ==> 937
But there are 9 primes below 1000 with two prime permutations:

113 ==> 131 ==> 311
137 ==> 173 ==> 317
157 ==> 571 ==> 751
163 ==> 613 ==> 631
167 ==> 617 ==> 761
199 ==> 919 ==> 991
337 ==> 373 ==> 733
359 ==> 593 ==> 953
389 ==> 839 ==> 983
Finally, we can find 34 primes below 1000 with only one prime permutation:

[13, 17, 37, 79, 107, 127, 139, 181, 191, 239, 241, 251, 277, 281, 283, 313, 347, 349, 367, 457, 461, 463, 467, 479, 563, 569, 577, 587, 619, 683, 709, 769, 787, 797]
Each set of permuted primes are represented by its smallest value, for example the set 149, 419, 491, 941 is represented by 149, and the set has 3 permutations.

Notes

the original number (149 in the above example) is not counted as a permutation;
permutations with leading zeros are not valid
Your Task
Your task is to create a function that takes two arguments:

an upper limit (n_max) and
the number of prime permutations (k_perms) that the primes should generate below n_max
The function should return the following three values as a list:

the number of permutational primes below the given limit,
the smallest prime such prime,
and the largest such prime
If no eligible primes were found below the limit, the output should be [0, 0, 0]

Examples
Let's see how it would be with the previous cases:

permutational_primes(1000, 3)  ==> [3, 149, 379]
// 3 primes with 3 permutations below 1000, smallest: 149, largest: 379

permutational_primes(1000, 2)  ==> [9, 113, 389]
// 9 primes with 2 permutations below 1000, smallest: 113, largest: 389

permutational_primes(1000, 1)  ==> [34, 13, 797]
// 34 primes with 1 permutation below 1000, smallest: 13, largest: 797
Happy coding!!
*/

//***************Solution********************
//method to get prime numbers up to n, store in stack
const getPrime = (n) => {
    const filter = [];
    const primeNums = [];

    for (let i = 2; i <= n; i++) {
	//if filter is false
        if (!filter[i]) {
            primeNums.push(i);
	    //set bool value to filter
            for (let j = i * i; j <= n; j += i)
                filter[j] = true;
        }
    }
    return primeNums;
}

function permutational_primes(n, cap){
  const primeStack = getPrime(n); const hashMap = new Map();

    for (let i = 0; i < primeStack.length; i++) {
      //sort digits of prime inside primeStack
        const hashVal = primeStack[i].toString()
                                  .split('')
                                  .sort()
                                  .join('');

      //check if hashMap contains hash values
      //set values into hashMap
        if (hashMap.has(hashVal))
          hashMap.set(hashVal, [...hashMap.get(hashVal), primeStack[i]]);
        else 
          hashMap.set(hashVal, [primeStack[i]]);
    }

  //grouping permutation by cap limit
    const arr = Array.from(hashMap)
                     .filter(([hashVal, val]) => val.length === cap + 1);
  
  //if arr is not empty, format and return result, else return empty 
  return arr.length ?  [arr.length, arr[0][1][0], arr[arr.length-1][1][0]] : [0,0,0] ;
}

//****************Sample Test*****************
try {
    permutational_primes = find_prime_kPerm
} catch(e){}

const rand = (frm=0, to=frm)=>
    ~~(Math.random()*(to-frm))+frm;

describe("Initial Tests", () =>{
    let listnMaxI = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
    let listkPermI = [1, 2, 3, 4, 5];

    let results = [
        [[34, 13, 797], [9, 113, 389], [3, 149, 379], [0, 0, 0], [0, 0, 0]], [[64, 13, 1979], [14, 113, 1789], [7, 149, 1193], [0, 0, 0], [0, 0, 0]], [[86, 13, 2699], [24, 113, 2789],
        [7, 149, 1523], [0, 0, 0], [0, 0, 0]], [[90, 13, 3779], [38, 113, 3697], [13, 149, 3163], [3, 1013, 2539], [1, 1367, 1367]], [[99, 13, 4789], [49, 113, 4597], [19, 149, 3449],
        [5, 1013, 3947], [4, 1367, 2347]], [[113, 13, 5689], [56, 113, 5879], [21, 149, 3449], [5, 1013, 4597], [8, 1367, 3457]], [[125, 13, 6779], [65, 113, 6079], [31, 149, 6367],
        [9, 1013, 4597], [10, 1163, 3697]], [[124, 13, 7789], [64, 113, 6679], [45, 149, 6367], [10, 1013, 3637], [11, 1097, 3947]], [[127, 13, 8681], [67, 113, 7789], [56, 149, 7883],
        [14, 1013, 6389], [15, 1097, 3947]], [[121, 13, 8929], [60, 113, 9091], [53, 149, 7993], [31, 1013, 6389], [18, 1039, 6997]]
    ];

    for (let i=0; i < listnMaxI.length; i+=1){
        for (let j=0; j < listkPermI.length; j+=1){
            it(`limit: ${listnMaxI[i]}, permutations: ${listkPermI[j]}`, () =>{
                Test.assertDeepEquals(permutational_primes(listnMaxI[i], listkPermI[j]), results[i][j]);
            });
        }
    }
});


describe("Random Tests", () =>{
    for (let i=0; i<20; i+=1){
        let n = rand(5000, 50000);
        let k = rand(1, 10);

        it(`limit: ${n}, permutations: ${k}`, () =>{
            Test.assertDeepEquals(permutational_primes(n, k), perm_primes_soln(n, k));
        });
    }
});

// SOLUTION

function is_prime(n,i){
  if ((n&1)==0) return false;
  for (i=3;i<=(n**0.5)+1;i+=2) if(n%i==0)
    return false;
  return true;
}
function perm_primes_soln(n, k){
    let prms = {}, keys = {}, c = 0;
    let min = n+1, max = -1;
    for (let i=1,ki; i<n; i+=1)
        if (is_prime(i)){
            ki = Array.from(i+'').sort().join('')
            if (!(ki in keys)) keys[ki] = i; ki=keys[ki]
            if (i!==ki) prms[ki] = (prms[ki]||[]).concat(i)
        }
    for (let i in prms)
        if (prms[i].length === k)
            min=Math.min(min, i), max=Math.max(max,i),c+=1;
    return c ? [c,min,max] : [0,0,0];
}
