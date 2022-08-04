function variables(num1,num2,num3)
{
    var result=0;
    if((num1===num2) && (num2===num3))
    {
        result=30;
    }
    else if((num1===num2 && num1!==num3) || (num1===num3 && num1!==num2) || (num2===num3 && num3!==num1))
    {
        result=20;
    }
    else{
        result=40;
    }
    return(result);
}
module.exports=variables;
