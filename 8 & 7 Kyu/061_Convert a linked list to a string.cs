/*Challenge link:https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript
Question:
Convert a linked list to a string
Related Kata
Although this Kata is not part of an official Series, you may also want to try out Parse a linked list from a string if you enjoyed this Kata.

Preloaded
Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
Prerequisites
This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data / $data / Data property, the reference to the next node is stored in its next / $next / Next / next_node property and the terminator for a list is null / NULL / None / nil / nullptr / null().

Task
Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:

new Node(1, new Node(2, new Node(3)))
... its string representation would be:

"1 -> 2 -> 3 -> null"
And given the following linked list:

new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
... its string representation would be:

"0 -> 1 -> 4 -> 9 -> 16 -> null"
Note that null / NULL / None / nil / nullptr / null() itself is also considered a valid linked list. In that case, its string representation would simply be "null" / "NULL" / "None" / "nil" / "nullptr" / @"NULL" / "null()" ( again, depending on the language ).

For the simplicity of this Kata, you may assume that any Node in this Kata may only contain non-negative integer values. For example, you will not encounter a Node whose data / $data / Data property is "Hello World".

Enjoy, and don't forget to check out my other Kata Series :D
*/

//***************Solution********************
function stringify(list) {
  if(list == null) return "null";
  return list.data + " -> " + stringify(list.next);
}
//****************Sample Test*****************
const {assert} = require("chai");

describe("stringify()", () => {
  it("should pass the example tests as shown in the Description", () => {
    assert.strictEqual(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
    assert.strictEqual(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
    assert.strictEqual(stringify(null), "null");
  });
  it("should pass the fixed tests provided", () => {
    assert.strictEqual(stringify(new Node(23)), "23 -> null");
    assert.strictEqual(stringify(new Node(4, new Node(25))), "4 -> 25 -> null");
    assert.strictEqual(stringify(new Node(1, new Node(3, new Node(6, new Node(10, new Node(15, new Node(21, new Node(28, new Node(36, new Node(45, new Node(55))))))))))), "1 -> 3 -> 6 -> 10 -> 15 -> 21 -> 28 -> 36 -> 45 -> 55 -> null");
    assert.strictEqual(stringify(new Node(1, new Node(1, new Node(2, new Node(3, new Node(5, new Node(8, new Node(13)))))))), "1 -> 1 -> 2 -> 3 -> 5 -> 8 -> 13 -> null");
    assert.strictEqual(stringify(new Node(0, new Node(1, new Node(1, new Node(2, new Node(3, new Node(5, new Node(8, new Node(13, new Node(21, new Node(34, new Node(55, new Node(89, new Node(144, new Node(233, new Node(377, new Node(610, new Node(987, new Node(1597))))))))))))))))))), "0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8 -> 13 -> 21 -> 34 -> 55 -> 89 -> 144 -> 233 -> 377 -> 610 -> 987 -> 1597 -> null");
  });
  it("should pass all 100 random tests provided", () => {
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    const rndList = i => function go(n) { return n ? new Node( rnd(100), go(n-1) ) : null } ( rnd(i) ) ;
    const refStringify = list => list ? `${list.data} -> ${refStringify(list.next)}` : "null" ;
    for ( let i=1; i<=100; i++ ) {
      const list = rndList(i);
      const expected = refStringify(list);
      const actual = stringify(list);
      assert.strictEqual(actual,expected,`after ${ i } test(s)`);
    }
  });
});
