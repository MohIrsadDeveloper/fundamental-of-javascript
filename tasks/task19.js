function variables(num)
{
    var t=false;
    if(num>0 && (num%3==0 || num%7==0))
    {
        t=true;
    }
    else{
        t=false;
    }
    return(t);
}
module.exports=variables;
