/*Challenge link:https://www.codewars.com/kata/57bf7fae3b3164dcac000352/train/javascript
Question:
We are interested in collecting the sets of six prime numbers, that having a starting prime p, the following values are also primes forming the sextuplet [p, p + 4, p + 6, p + 10, p + 12, p + 16]

The first sextuplet that we find is [7, 11, 13, 17, 19, 23]

The second one is [97, 101, 103, 107, 109, 113]

Given a number sum_limit, you should give the first sextuplet which sum (of its six primes) surpasses the sum_limit value.

find_primes_sextuplet(70) == [7, 11, 13, 17, 19, 23]

find_primes_sextuplet(600) == [97, 101, 103, 107, 109, 113]
Features of the tests:

Number Of Tests = 18
10000 < sum_limit < 29700000
If you have solved this kata perhaps you will find easy to solve this one: https://www.codewars.com/kata/primes-with-two-even-and-double-even-jumps/ Enjoy it!!


*/

//***************Solution********************
/*                             `-:/+++++++/++:-.                                          
                            .odNMMMMMMMMMMMMMNmdo-`                                      
                           +mMMNmdhhhhhhhhhdmNMMMNd/`                                    
                          sMMMmhyyyyyyyyyyyyyyhmNMMMh-                                   
                         +MMMdyyyyyyyhhhhdddddddmMMMMN/                    Time: 9792ms          
                        `NMMmyyyyyymNNMMNNNmmmmmmmNNMMMy`               /                  
                        :MMMhyyyyyNMMMho+//:-.....-:omMMd-                               
                    ```:mMMNhyyyyhMMMh+::::-        `:sNMN:                              
                 -oyhdmMMMMmhyyyyhMMNyy+::::---------::yMMm                              
                +MMMMNNNMMMdhyyyyhMMNyyyso/::::::://+oshMMM`                             
                NMMNhyyyMMMhhyyyyyNMMmyyyyyyssssyyyyyyymMMd                              
                MMMdyyyhMMNhhyyyyyhNMMNdyyyyyyyyyyyhdmMMMN-                              
                MMMdhhhdMMNhhhyyyyyymMMMMNmmmmmmNNMMMMMMN.                               
                MMMhhhhdMMNhhhyyyyyyyhdmNNNMMNNNmmdhhdMMd                                
               `MMMhhhhdMMNhhhhyyyyyyyyyyyyyyyyyyyyyydMMM.                               
               .MMMhhhhdMMNhhhhyyyyyyyyyyyyyyyyyyyyyydMMM:                               
               .MMNhhhhdMMNhhhhhyyyyyyyyyyyyyyyyyyyyhhMMM+                               
               -MMNhhhhdMMNhhhhhyyyyyyyyyyyyyyyyyyyyhdMMM/                               
               -MMMhhhhdMMNhhhhhhhyyyyyyyyyyyyyyyyyhhdMMM-                               
               `MMMhhhhhMMNhhhhhhhhhhyyyyyyyyyyyhhhhhmMMN                                
                hMMmhhhhMMNhhhhhhhhhhhhhhhhhhhhhhhhhhNMMy                                
                :MMMNmddMMMhhhhhhhhhhddddhhhhhhhhhhhdMMM/                                
                 :hNMMMMMMMdhhhhhhhhdMMMMMMNNNNNdhhhNMMN`                                
                   .-/+oMMMmhhhhhhhhmMMmyhMMMddhhhhdMMMy                                 
                        hMMNhhhhhhhhmMMd :MMMhhhhhhdMMM+                                 
                        sMMNhhhhhhhhNMMm .MMMdhhhhhdMMN.                                 
                        /MMMdhhhhhhdMMM+  oNMMNNNNNMMm:                                  
                        `dMMMNmmmNNMMMh`   -syyyyhhy/`                                   
                         `/hmNNNNNmdh/`                                                  
                            `.---..`
*/
 //sextuplet format: 4+6+10+12+16 = 48
function findPrimesSextuplet(sumLimit) {
  let p1 = Math.round((sumLimit - 48) / 6);
  if(p1 % 2 == 0) 
    p1++;
  
  let sextuplet = [0,4,6,10,12,16];
  
  while(true){
    if(sextuplet.every(x => checkPrime(p1 + x)))
      return sextuplet.map(x => p1 + x);
    p1 = p1 + 2;
  }
    return sextuplet;
}

//simple method to check prime
function checkPrime(n) {
  if(n < 2) return false;
  if(n % 2 == 0 || n % 3 == 0) return n < 4;
  
  for(let i = 2; Math.sqrt(n) >=i ; i++)
      if(n % i == 0) return false;
    return true;
}
//****************Sample Test*****************
const Test = require('@codewars/test-compat');

let memoPrimes = new Set(), primesL = [], memoDict = {};
function getKeys(dict) {
    let kL = [];
    for (let key in dict) {
        kL.push(key);
    }
    return kL;
}

function summ(arr) {
    let s = 0;
    for (let i = 0; i <= arr.length - 1; i++){
        s += arr[i];
    }
    return s;
}

function eratosthenes(n) {
    let array = [], upperLimit = Math.sqrt(n), output = [];
    for (let i = 0; i <= n; i++) {
        array.push(true);
    }
    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (let j = i * i; j <= n; j += i) {
                array[j] = false;
            }
        }
    }
    for (let i = 2; i <= n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
};

function buildPrimesData(limit) {
    primesL = eratosthenes(limit);
    memoPrimes = new Set(primesL);
}

function findPrimesSextupletRandom(sumLimit) {
    let steps = [0, 4, 6, 10, 12, 16];
    if (memoPrimes.size === 0) {
        buildPrimesData(7500000);
        for (let i = 0; i <= primesL.length - 1; i++) {
            let p = primesL[i];
            let pS = [];
            for (let j = 0; j <= steps.length - 1; j++) {
                let s = steps[j];
                if (!memoPrimes.has(p + s)) break;
                pS.push(p + s);
            }
            if (pS.length == 6) memoDict[summ(pS)] = (pS);
        }
    }
    let keysL = getKeys(memoDict);
    for (let k = 0; k <= keysL.length - 1; k++) {
        let sum = keysL[k];
        if (sumLimit < sum) return memoDict[sum];
    }
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("Basic Tests", function(){
  it("Some Cases", function(){
    Test.assertSimilar(findPrimesSextuplet(70),
    [7, 11, 13, 17, 19, 23]);
    
    Test.assertSimilar(findPrimesSextuplet(600),
    [97, 101, 103, 107, 109, 113]);
    
    Test.assertSimilar(findPrimesSextuplet(2000000),
    [1091257, 1091261, 1091263, 1091267, 1091269, 
    1091273]);
  });
});

describe("Random Tests", function(){
  it("Challenging Cases", function(){
      for (let h = 0; h <= 15; h++) {
          let sumLimit = randint(10000, 29700000);
          console.log("<font color='#fuchsia'>Test for SumLimit = "+ sumLimit+"</font>","")
          console.log(' ');
          let result = findPrimesSextupletRandom(sumLimit);
          let res = findPrimesSextuplet(sumLimit);
          Test.assertSimilar(res, result);
      }
  })
})
 
