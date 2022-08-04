// Comparing with (===)
// = is for assign value
// == is for variable comparison
// === is for varibale and datatype comparison

var s1 = 5, s2 = "World";
console.log("Compare", s1 === "5");

console.log("Compare", s1 === 46);

console.log("Compare", s1 === 5);

console.log("Compare", s2 === "apple");

console.log("Compare", s2 === "World");

// Comparison with (!= And !==)
var s = 10;
console.log("Compare", s2 != 10);
console.log("Compare", s2 != "10");
console.log("Compare", s2 !== "10");
console.log("Compare", s2 !== 5);

// More Comparison Operators
var s2 = 10;
console.log("Compare", s2 > 10);
console.log("Compare", s2 >= 10);
console.log("Compare", s2 < 10);
console.log("Compare", s2 <= 10);
console.log("Compare", s2 > 5);

// Logical And (&&) Operators
var s2 = 10;
console.log("Return", s2 > 5 && s2 < 35);
console.log("Return", s2 <= 10 && s2 > 35);
console.log("Return", s2 > 11 && s2 < 8);
console.log("Return", s2 = 10 && s2 > 4 && s2 < 16);

// Logical OR (||) Operator
var s2 = 10;
console.log(s2 > 8 || s2 < 18);
console.log(s2 > 18 || s2 < 20);
console.log(s2 > 18 || s2 < 2);
console.log(s2 > 11 || s2 < 8 || s2 != 5);