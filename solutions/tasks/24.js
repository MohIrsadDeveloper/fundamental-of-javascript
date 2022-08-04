function task24(number) {
    switch (number) {
        case 1:
            return "East";
        case 2 :
            return "West";
        case 3 :
            return "North";
        case 4 :
            return "South";
        default:
            return "Wrong Input"
    }
};
console.log(task24(1));
console.log(task24(2));
console.log(task24(3));
console.log(task24(4));
console.log(task24(5));