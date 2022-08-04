function variables(var1,var2,choice)
{
    var result=0;
    switch(choice)
    {
        case 1:
            result=var1+var2;
            break;
        case 2:
            result=(var1-var2);
            break;
        case 3:
            result=(var1*var2);
            break;
        case 4:
            result=(var1/var2);
            break;
        default:
            result=0;


    }
    return(result);
}
module.exports=variables;
