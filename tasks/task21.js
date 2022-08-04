function largest(num1,num2,num3)
{
    var lar=0;
    if((num1>=num2) && (num1>=num3))
    {
        lar=num1;
    }
    else if((num2>=num1) && (num2>=num3))
    {
        lar=num2;
    }
    else
    {
        lar=num3;
    }
    return(lar);
}
module.exports=largest;
