Lambda 
const goals = (a,b,c) => a + b + c;


String Manipulation
//map: creates a new array from calling a function for every array element.
//split the string, map each character and duplicate it, then join and return the result.
var doubleChar = (str) => str.split("").map(c => c + c).join("");
