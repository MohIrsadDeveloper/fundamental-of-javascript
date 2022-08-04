function task25(number1, number2, choice) {
    switch (choice) {
        case 1:
            return number1 + number2;
        case 2:
            return number2 - number2;
        case 3:
            return number1 * number2;
        case 4:
            return number1 / number2;
    }
};
console.log(task25(12,12,1));
console.log(task25(12,12,2));
console.log(task25(12,12,3));
console.log(task25(12,12,4));