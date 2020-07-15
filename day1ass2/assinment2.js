var name="vinay"   //its has a scope thorugh out the code
 console.log("golbal name=",name);
 {
     let name = "ajay"    // here name is has its scope only in this block
     console.log("name using let=",name);
 }
 console.log("golbal name remain same=",name)
 const pi=3.142 // constant var able cannot be update or reused and it must be initalised
 console.log(pi)