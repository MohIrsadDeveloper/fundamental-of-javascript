function task18(number1, number2) {
    if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) {
        return true;
    } else {
        return false;
    }
};
console.log(task18(-1,120));
console.log(task18(01,-120));
console.log(task18(01,120));
console.log(task18(-01,-120));