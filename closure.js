// functions bind together in their lexical environment
// function along with lexical scope formed a closure
// a closure give you access to another function scope  from inner function 

function x(){
    let a = 7;
  
    function y(b){
        console.log(a+b) //10
    }
    return y; // not only function return , whole closure return with lexical scope , function 
               /// remember all things 
}
let z = x();  // function y 

z(3);

// 1 function currying 
//2 . event handling
// asynchronous
// data encapsulation -- data hiding , create private varible 
//setTimeout


// function multiply(a){
//     return function y(b){
//         return a*b;
//     }
// }
//  const multi2 = multiply(2)  // multiplication of 2
 
//  console.log(multi2(5))

//  const multi3 = multiply(3); // multi.. of 3
//  console.log(multi3(5))