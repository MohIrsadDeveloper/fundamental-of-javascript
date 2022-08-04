function variables(year)
{
    var result=0;
    if(year%4===0 && year%100!==0)
    {
        result=1;
    }
    else if(year%100===0 && year%400===0)
    {
        result=1;
    }
    else{
        result=0;
    }
    return(result);
}
module.exports=variables;
