function variables(num1,num2)
{
    var var1=false;
    if(num1===50 || num2===50 || (num1+num2)===50)
    {
        var1=true;
    }
    else
    {
        var1=false;
    }
    return(var1);
}
module.exports=variables;
