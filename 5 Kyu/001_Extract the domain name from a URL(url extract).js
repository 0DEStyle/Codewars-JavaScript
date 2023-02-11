/*Challenge link:https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
Question:Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression for methods.
/*replace the following pattern to nothing. 
. matches any character except linebreak
+ one or more
\/\/ matches //
| or
www. matches www.
| or
\. matches .
. matches any character except linebreak
+ one or more
/g global search
*/
domainName = (url) => url.replace(/.+\/\/|www.|\..+/g, '')
//****************Sample Test*****************
const { assert } = require("chai");

describe("Basic test", () => {
  it("Should pass basic tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("https://123.net"), "123");
    assert.equal(domainName("https://hyphen-site.org"), "hyphen-site");
    assert.equal(domainName("http://codewars.com"), "codewars");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
    assert.equal(domainName("http://www.codewars.com/kata/"), "codewars");
    assert.equal(domainName("icann.org"), "icann");
  })  
})


describe("Random tests", () => {
  const prefixes = ["","http://","https://","http://www.","https://www."]
  const base = "0123456789abcdefghijklmnopqrstuvwxyz-"
  const secondlevel = [".com",".co.uk",".net",".edu",".co.za",".it",".org",".biz",".fr",".de",".jp",".br",".tv",".co",".tv",".pro",".name",".us",".info",".io"]
  const randomstuff = ["","","/","/img/","/users","/default.html","/index.php","/warez/","/error","/archive/"]
  function randint(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
  function domainSol(url){return url.replace("www.","").replace("https://","").replace("http://","").split(".")[0];}
  for (let _=0;_<40;_++){
    let domainlength = randint(5,30)
    let domain = ""
    while(domainlength){
      let nextletter = base[randint(0,36)]
      if (nextletter!="-" || (domainlength!=1 && domain!="")){
        domain += nextletter;
        domainlength--;
      }
    }
    let url=prefixes[randint(0,4)]+domain+secondlevel[randint(0,19)]+randomstuff[randint(0,9)];
    it("Testing for "+url, () => { 
      assert.equal(domainName(url),domainSol(url),"It should work for random inputs too")
    })
  }
})
