function variable(a,b)
{
    var sum=0;
    var result;
    if(a===b)
    {
        sum=(a+b);
        result=3*sum;
    }
    else
    {
        sum=a+b;
        result=sum;
    }
    return(result);
}
module.exports=variable;
