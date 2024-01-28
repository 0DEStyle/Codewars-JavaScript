/*Challenge link:https://www.codewars.com/kata/582c5382f000e535100001a7/train/javascript
Question:
Parse a linked list from a string
Related Kata
Although this Kata is not part of an official Series, you may want to complete this Kata before attempting this one as these two Kata are deeply related.

Preloaded
Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
Prerequisites
This Kata assumes that you are already familiar with the idea of a linked list. If you do not know what that is, you may want to read up on this article on Wikipedia. Specifically, the linked lists this Kata is referring to are singly linked lists, where the value of a specific node is stored in its data / $data/Data property, the reference to the next node is stored in its next / $next / Next property and the terminator for a list is null / NULL / nil / nullptr / null() / [].

Additionally, this Kata assumes that you have basic knowledge of Object-Oriented Programming ( or a similar concept ) in the programming language you are undertaking. If you have not come across Object-Oriented Programming in your selected language, you may want to try out an online course or read up on some code examples of OOP in your selected language up to ( but not necessarily including ) Classical Inheritance.

Specifically, if you are attempting this Kata in PHP and haven't come across OOP, you may want to try out the first 4 Kata in this Series.

Task
Create a function parse which accepts exactly one argument string / $string / s / strrep ( or similar, depending on the language ) which is a string representation of a linked list. Your function must return the corresponding linked list, constructed from instances of the Node class/struct/type. The string representation of a list has the following format: the value of the node, followed by a whitespace, an arrow and another whitespace (" -> "), followed by the rest of the linked list. Each string representation of a linked list will end in "null" / "NULL" / "nil" / "nullptr" / "null()" depending on the language you are undertaking this Kata in. For example, given the following string representation of a linked list:

"1 -> 2 -> 3 -> null"
... your function should return:

new Node(1, new Node(2, new Node(3)))
Note that due to the way the constructor for Node is defined, if a second argument is not provided, the next / $next / Next field is automatically set to null / NULL / nil / nullptr ( or equivalent in your language ). That means your function could also return the following ( if it helps you better visualise what is actually going on ):

new Node(1, new Node(2, new Node(3, null)))
Another example: given the following string input:

"0 -> 1 -> 4 -> 9 -> 16 -> null"
... your function should return:

new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
If the input string is just "null" / "NULL" / "nil" / "nullptr" / "null()", return null / NULL / nil / nullptr / null() / [] ( or equivalent ).

For the simplicity of this Kata, the values of the nodes in the string representation will always ever be non-negative integers, so the following would not occur: "Hello World -> Goodbye World -> 123 -> null" / "Hello World -> Goodbye World -> 123 -> NULL" / "Hello World -> Goodbye World -> 123 -> nil" / "Hello World -> Goodbye World -> 123 -> nullptr" ( depending on the language ). This also means that the values of each Node must also be non-negative integers so keep that in mind when you are parsing the list from the string.

Enjoy, and don't forget to check out my other Kata Series :D
*/

//***************Solution********************
function parse(string) {
  //check null
  if(string == "null") return null;
  
  //split by " -> " and store in array
  var nodesArr = string.split(" -> ").map(x => +x);
  
  //set the first element in nodesArr as the head node
  //store the head in current node  
  var head = new Node(nodesArr[0]);
  var currNode = head;
  
  //iterate throught each nodes, starting from 1
  //create new Node, store element i in nodesArr as next current node
  //then set next node as current node.
  for(let i = 1; i < nodesArr.length - 1; i++){
    currNode.next = new Node(nodesArr[i]);
    currNode = currNode.next;
  }
  return head;
}

//****************Sample Test*****************
describe("parse()", () => {
  it("should pass the example tests provided in the Description", () => {
    Test.assertDeepEquals(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));
    Test.assertDeepEquals(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
    Test.assertDeepEquals(parse("null"), null);
  });
  it("should pass all of the fixed tests provided", () => {
    Test.assertDeepEquals(parse("16 -> null"), new Node(16));
    Test.assertDeepEquals(parse("125 -> 64 -> 27 -> 8 -> 1 -> null"), new Node(125, new Node(64, new Node(27, new Node(8, new Node(1))))));
    Test.assertDeepEquals(parse("55 -> 45 -> 36 -> 28 -> 21 -> 15 -> 10 -> 6 -> 3 -> 1 -> 0 -> null"), new Node(55, new Node(45, new Node(36, new Node(28, new Node(21, new Node(15, new Node(10, new Node(6, new Node(3, new Node(1, new Node(0))))))))))));
    Test.assertDeepEquals(parse("1 -> 1 -> 2 -> 3 -> 5 -> 8 -> 13 -> null"), new Node(1, new Node(1, new Node(2, new Node(3, new Node(5, new Node(8, new Node(13))))))));
    Test.assertDeepEquals(parse("0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8 -> 13 -> 21 -> 34 -> 55 -> 89 -> 144 -> 233 -> 377 -> 610 -> 987 -> 1597 -> null"), new Node(0, new Node(1, new Node(1, new Node(2, new Node(3, new Node(5, new Node(8, new Node(13, new Node(21, new Node(34, new Node(55, new Node(89, new Node(144, new Node(233, new Node(377, new Node(610, new Node(987, new Node(1597)))))))))))))))))));
  });
  it("should return actual instances of Node and not simply return objects of a similar structure", () => {
    let oneTwoThree = parse("1 -> 2 -> 3 -> null");
    // Double check the returned linked list has the correct structure
    Test.assertDeepEquals(oneTwoThree, new Node(1, new Node(2, new Node(3))));
    // Now check if they are actually instances of Node
    Test.expect(oneTwoThree instanceof Node, "The top node of the linked list \"1 -> 2 -> 3 -> null\" must be an actual instance of Node!");
    Test.expect(oneTwoThree.next instanceof Node, "The second node of the linked list \"1 -> 2 -> 3 -> null\" must also be an actual instance of Node!");
    Test.expect(oneTwoThree.next.next instanceof Node, "The final node of the linked list \"1 -> 2 -> 3 -> null\" must also be an actual instance of Node!");
    Test.expect(oneTwoThree.next.next.next === null);
  });
  it("should contain Nodes whose \"data\" property contains actual integers and not strings", () => {
    let oneTwoThree = parse("1 -> 2 -> 3 -> null");
    // Double check the returned linked list has the correct structure
    Test.assertDeepEquals(oneTwoThree, new Node(1, new Node(2, new Node(3))));
    // Now check that each entry is actually a non-negative integer
    Test.expect(typeof oneTwoThree.data === "number", "The \"data\" field of the top Node in the linked list \"1 -> 2 -> 3 -> null\" should be an actual integer!");
    Test.expect(typeof oneTwoThree.next.data === "number", "The \"data\" field of the second Node in the linked list \"1 -> 2 -> 3 -> null\" should be an actual integer!");
    Test.expect(typeof oneTwoThree.next.next.data === "number", "The \"data\" field of the final Node in the linked list \"1 -> 2 -> 3 -> null\" should be an actual integer!");
  });
  it("should pass all 100 random tests provided", () => {
    function solution(string) {
      return string === "null" ? null : new Node(parseInt(string.split(" -> ")[0]), solution(string.split(" -> ").filter((e, i) => i !== 0).join(" -> ")));
    }
    function randomString() {
      return Array(1 + ~~(25 * Math.random())).fill(0).map(_ => ~~(101 * Math.random())).join(" -> ") + " -> null";
    }
    for (let i = 0; i < 100; i++) {
      let string = randomString();
      let expected = solution(string);
      let actual = parse(string);
      Test.assertDeepEquals(actual, expected);
    }
  });
});
