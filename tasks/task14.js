function variables(number)
{
    var diff;
    if(number<13)
    {
        diff=(13-number);
    }
    else{
        diff=((number-13)*2);
    }
    return diff;
}
module.exports=variables;
