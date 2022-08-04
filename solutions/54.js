// Switch Statement

// switch(expression){
//     //Run the case whose value matches with the expression value
//     case value1:
//         //Run this code
//         break;
//     case value2:
//         .
//         .
//         .
//     default:    //(Run default case if no value matches)
//         //Run this code
// }

var i = 0;
switch (i) {
    case 0:
        console.log("You have entered 0");
    //Break not applied
    //Program continues to next case
    case 1:
        console.log("You have entered 1");
        break;
    case 2:
        console.log("You have entered 2");
        break;
    default:
        console.log("You have entered is greater than 2");
};

var i = 0;

switch (i) {
  case 0:
    console.log("You have entered 0");
    break;
  case 1:
    console.log("You have entered 1");
    break;
  case 2:
    console.log("You have entered 2");
    break;
  default:
    console.log("Your number is greater than 2");
}