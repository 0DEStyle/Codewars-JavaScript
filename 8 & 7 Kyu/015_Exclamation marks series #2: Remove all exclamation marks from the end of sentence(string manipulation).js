/*Challenge link:https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
Question:
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

//***************Solution********************
//Then simiplfied into one line by using an Lambda expression with Enumerable methods.
//replace end of sentence !!! to nothing
//+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
//$ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)

const remove = s => s.replace(/!+$/, '');
//****************Sample Test*****************
const strictEqual = require("chai").assert.strictEqual;

function doTest (input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

it("It should works for basic tests", function () {
	doTest("Hi!", "Hi")
	doTest("Hi!!!", "Hi")
	doTest("!Hi", "!Hi")
	doTest("!Hi!", "!Hi")
	doTest("Hi! Hi!", "Hi! Hi")
	doTest("Hi", "Hi")
});

function solution (string) {
	return string.replace(/\!+$/, "")
}

function randLetter () {
	const letters = "abcdefghijklmnopqrstuvwxyz"
	return letters[~~(letters.length * Math.random())];
}

function randString (n) {
	const len = n || rand(3, 7);
	const array = [];
	for (let i = 0; i < len; i++)
		array[i] = randLetter();
	return array.join("");
}

function rand (from, to) {
	return Math.floor((to - from + 1) * Math.random() + from)
}

function randomMarksString () {
	const len = rand(1, 6);
	const array = [];

	for (let i = 0; i < len; i++)
		array[i] = randString() + (rand(0, 1000) % 4 == 0 ? "!" : "");

	return array.join(" ") + "!".repeat(Math.max(0, rand(-2, 5)))
}

it("It should works for random tests too", function () {
	for (let i = 0; i < 100; i++) {
		const input = randomMarksString(), expected = solution(input);
		doTest(input, expected);
	}
});
