var a=Number(prompt("enter a number"));
var b=Number(prompt("enter another number"));
var k=Number(prompt("enter case"))
switch(k){
    case 1:
     c=a+b;
     console.log(c)
     break;
     case 2:
     c=a-b;
     console.log(c)
     break;
     case 3:
        c=a*b;
        console.log(c)
        break;
     case 4:
        c=a/b;
        console.log(c)
        break;
      case 5:
          c=(a/b)/100
          console.log(c)
          break;
      case 6:
          c=Math.sqrt(a)
          console.log(c)
          break;
      case 7:
          c=Math.sqrt(b)
          console.log(c)
          break;    
     default:
         console.log("nothing is possible")
}