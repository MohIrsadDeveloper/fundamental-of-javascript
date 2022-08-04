// Variable Scope in Functions
// 1. Local Scope
// 2. Global Scope

var global = 10;
function fun() {
    var local = 5;
};

var myname = "Abdul";
function scope() {
    var myname = "Asma";
    console.log("Print ", "Hello " + myname);
};
scope();
// Hint
/* 
1. Declare global variable and assign value
2. Declare a function with name hello
3. Create a local Variable and write code inside the function
4. Call function to print the value of the local variable
5. Print value of a global variable using console.log()
*/

var myname = "Abdul";
function hello() {
    var myname = "Asma";
    console.log("Print ", "Hello " + myname);
}
hello();
console.log("Print " + "Hello " + myname);