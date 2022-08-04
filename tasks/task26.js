function variables(var1,var2)
{
    var result=false;
    if(var1===8 || var2===8)
    {
        result=true;
    }
    else if((var1+var2)===8)
    {
        result=true;
    }
    else{
        result=false;
    }
    return(result);
}
module.exports=variables;
