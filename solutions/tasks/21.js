function task21(number1, number2, number3) {
    if ((number1 >= number2 && number1 >= number3)) {
        return number1;
    } else if (number2 >= number1 && number2 >= number3) {
        return number2
    } else {
        return number3;
    }
};
console.log(task21(1,2,3));
console.log(task21(1,5,3));
console.log(task21(12,5,3));
console.log(task21(12,12,3));