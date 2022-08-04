function task19(number) {
    if (number % 3 === 0 || number%7===0) {
        return true;
    } else {
        return false;
    }
};
console.log(task19(3));
console.log(task19(21));
console.log(task19(7));
console.log(task19(8));
console.log(task19(13));