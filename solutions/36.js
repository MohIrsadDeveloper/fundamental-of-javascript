var s2 = 10;

console.log("Return", s2 > 5 && s2 < 35);
//Prints true if both true

console.log("Return", s2>= 10 && s2 >35);
//Prints false if one is false

console.log("Return", s2 >= 20 && s2 < 5);
//Prints false if both false

console.log("Return", s2 < 15 && s2 < 35 && s2==10);
//Prints true if all true