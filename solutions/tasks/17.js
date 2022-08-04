function task17(number) {
    if ((number >= 80 && number <=120) || (number >= 380 && number <= 420)) {
        return true;
    } else {
        return false;
    }
};
console.log(task17(80));
console.log(task17(92));
console.log(task17(120));
console.log(task17(312));
console.log(task17(380));
console.log(task17(392));
console.log(task17(420));
console.log(task17(440));