function variables(a,b)
{
    var sum=0;
    sum=a+b;
    if(sum>=50 && sum<=80)
    {
        sum=65;
    }
    else{
        sum=80;
    }
    return(sum);
}
module.exports=variables;
