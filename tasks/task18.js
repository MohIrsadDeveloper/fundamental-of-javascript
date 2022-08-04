function variables(num1,num2)
{
    var t=false;
    if((num1>0 && num2<0) || (num1<0 && num2>0))
    {
        t=true;
    }
    else{
        t=false;
    }
    return(t);
}
module.exports=variables;
