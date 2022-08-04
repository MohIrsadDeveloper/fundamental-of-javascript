function variables(base,height)
{
    var area1,area2;
    area1=(0.5*base*height);
    area2=(base*base);
    if(area1>=area2)
    {
        return(area1);
    }
    else{
        return(area2);
    }
}
module.exports=variables;
