function task13(year) {
    if (year % 4 === 0) {
        return 1;
    } else if ((year % 100 && year % 400) === 0) {
        return 1;
    } else {
        return 0;
    }
};
console.log(task13(1992));
console.log(task13(2001));
console.log(task13(2000));