// if, else if, and else statements.
// comparison operators.
// logical operators.
// truthy vs falsy values.
// ternary operators.
// the switch statement.

var score = 70;
// if Statement
if (score >= 60) {
    console.log("Print", "Score is good");
};

// Writing If- Else
if (score >= 60) {
    console.log("Print", "Score is good");
} else {
    console.log("Print ", "Score is bad");
}

// Else if Statement
if (score >= 75) {
    console.log("Print ", "Score is Exellent");
} else if (score >= 60) {
    console.log("Print", "Score is Good");
} else {
    console.log("Print", "Score is Bad");
}

// ternary operator
(score >= 60 ? console.log("Good") : console.log("Bad"));