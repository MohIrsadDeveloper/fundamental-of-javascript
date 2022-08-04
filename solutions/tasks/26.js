function task26(number1,number2) {
    if (number1 === 8 || number2 === 8 || number1 + number2 === 8) {
        return true;
    } else {
        return false;
    }
};
console.log(task26(4,4));
console.log(task26(4,8));
console.log(task26(8,28));
console.log(task26(2,28));