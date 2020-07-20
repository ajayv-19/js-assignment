var sales=prompt("Enter the value of sales  ")
var reward
 if (sales<=5000)
    {
        reward=(sales*2)/100
    }
else if(sales>5000 && sales<=10000) 
{
    reward=100+((sales-5000)*5)/100
}   
else if(sales>10000&&sales<=20000)
{
    reward=350+((sales-10000)*7)/100
}
else if(sales>20000)
{
    reward=1050+((sales-20000)*10)/100

}

console.log(reward)