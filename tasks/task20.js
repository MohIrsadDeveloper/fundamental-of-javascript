function variables(num1,num2,num3)
{
    var t=false;
    if((num1>=50 && num1<=99)||(num2>=50 && num2<=99) || (num3>=50 && num3<=99))
    {
        t=true;
    }
    else{
        t=false;
    }
    return(t);
}
module.exports=variables;
