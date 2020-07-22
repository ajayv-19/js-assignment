console.log("6th day assinment 3")
const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}setInterval(clock,1000);
const name=prompt("enter the name");
title.innerText+=`welcome to the web page ${name}`;
const button=document.getElementById('btm')
button.onclick=
function changeColor()
{
     setTimeout(() => {
         document.body.style.backgroundColor='black';
        document.body.style.color='white'
     },3000);
 }