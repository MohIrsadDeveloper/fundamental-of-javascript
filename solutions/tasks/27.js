function task27(number1,number2,number3) {
    if (number1 === number2 && number1 === number3 && number2 === number3) {
        return 30;
    } else if (number1 === number2 || number1 === number3 || number2 === number3) {
        return 20;
    } else {
        return 40;
    }
};
console.log(task27(8,8,8));
console.log(task27(8,8,2));
console.log(task27(1,3,2));