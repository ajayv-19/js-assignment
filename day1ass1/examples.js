// 1. first method console.log() --to print elements
console.log('abc');  
console.log(1); 
console.log(true); 

// 2.Used to log error message to the console. Useful in testing of code. By default the message will be highlighted with red color.
console.error('This is a simple error'); 
 
//3.Used to log warning message to the console. By default the warning message will be highlighted with yellow color.
console.warn('This is a warning.');  

//4.Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in firefox no message is returned.

// console.clear();  

//5.Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console).

console.time('abc'); 
 let fun =  function(){ 
     console.log('fun is running'); 
 } 
 let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
 fun(); // calling fun(); 
 fun2(); // calling fun2(); 
console.timeEnd('abc'); 

//6.This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.
console.table({'a':1, 'b':2}); 
 
//7.This method is used to count the number that the function hit by this counting method.

for(let i=0;i<5;i++){ 
    console.count(i); 
} 