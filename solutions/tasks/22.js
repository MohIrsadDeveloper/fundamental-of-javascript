function task22(number1,number2,number3) {
    if ((number1%10) === (number2%10) === (number3%10)) {
        return true;
    }else {
        return false;
    }
};
console.log(task22(12,14,1));
console.log(task22(12,12,1));
console.log(task22(12,12,12));