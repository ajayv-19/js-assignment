let num=prompt("enter the value")
var ar=[];
for(i=1;i<=num;i++)
{
    ar.push(i)
}
console.log(ar)

let evennum=ar.filter(function(n){
    

        return(n%2==0);
    
});
  

let cubes=evennum.map(s=>{
    return s*s*s;
});


console.log(cubes)
