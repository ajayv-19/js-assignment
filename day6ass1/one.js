console.log("day 6 1st assingment 1")
var i=0

var bgcolor=["red","blue","purple","yellow","orange"]
function divchange()
{
  var divtag=document.getElementById("div1");
  
  divtag.style.backgroundColor=bgcolor[i]
 
  i=(i+1) %bgcolor.length;
 
}
setInterval(divchange,5000);