function task23(number1,number2) {
    if ((number1+number2 >= 50 && number1 + number2 <=80)) {
        return 65;
    } else {
        return 80;
    }
};
console.log(task23(25,15));
console.log(task23(25,35));
console.log(task23(25,75));