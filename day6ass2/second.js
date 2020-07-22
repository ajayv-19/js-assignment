console.log("6th day assingment 2")
let n=prompt("enter a number");
const tables=document.getElementById('table');

for(let i=1;i<11;i++)
{
    // to display in web page
    tables.innerHTML+=`<ol>${n} x ${i} =${n*i}</ol>`
    // to print in console also
    console.log(`${n} x ${i} =${n*i}`)
}