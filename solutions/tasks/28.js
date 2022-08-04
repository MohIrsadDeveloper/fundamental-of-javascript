function task28(base, perpendicular) {
    let triangleArea = (0.5*base*perpendicular);
    let squareArea = base*base;
    if (squareArea > triangleArea) {
        return "Square Area is " + squareArea;
    } else {
        return "Triangle Area is "+triangleArea;
    }
};
console.log(task28(4,5));
console.log(task28(4,15));