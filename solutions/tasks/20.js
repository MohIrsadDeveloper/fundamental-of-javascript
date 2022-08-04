function task20(number1, number2, number3) {
    if ((number1 >= 50 && number1 <=99) || (number2 >= 50 && number2 <= 99) || (number3 >= 50 && number3 <= 99)) {
        return true;
    } else {
        return false;
    }
};
console.log(task20(51,100,120));
console.log(task20(51,99,120));
console.log(task20(51,99,88));
console.log(task20(41,121,120));