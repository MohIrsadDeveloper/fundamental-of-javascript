function variables(num)
{
    var t=false;
    if((num>=80 && num<=120) || (num>=380 && num<=420))
    {
        t=true;
    }
    else{
        t=false;
    }
    return(t);
}
module.exports=variables;
