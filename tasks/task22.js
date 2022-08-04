function variables(num1,num2,num3)
{
    var store=false;
    if(num1>0 && num2>0 && num3>0)
    {
        if(((num1%10)===(num2%10)) && ((num2%10)===(num3%10)))
        {
            store=true;
        }
        else{
            store=false;
        }
    }
    else{
        store=false;
    }
    return(store);
}
module.exports=variables;
