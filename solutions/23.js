// function ret(var a, var b, var c) {
//     return(a+b);
// }

function multiply(a,b) {
    var product = a*b;
    return product;
    // Function stop after return

    console.log(a+b);
    // Above code is not executed
}

var output = multiply(10,15);
console.log("Output is", output);