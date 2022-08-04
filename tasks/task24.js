function variables(choice)
{
var i;
i=choice;
var result;
switch(i)
{
    case 1:
        console.log("East");
        result="East";
        break;
    case 2:
        console.log("West");
        result="West";
        break;
    case 3:
        console.log("North");
        result="North";
        break;
    case 4:
        console.log("South");
        result="South";
        break;
    default:
        console.log("Wrong Input")
        result="Wrong Input"
}
return(result);
}
module.exports=variables;
