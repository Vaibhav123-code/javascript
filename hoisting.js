// hoisting : process where varibles and function declaration are moved to top of their containing scope during compilation 
 // process
//1 creation phase - process of aasigining undefine value to all varible 
//2 execution phase - update all values by given value
// myFun();
// console.log(num)
// var num =10;
// function myFun(){
//     console.log("hello")
// }
//temporal dead zone - varible declared with let and const keyword  will be hoisted inside TDZ, 
 
// let a =10;
// var b =20;
// console.log(a)

// let -> block scope 
// var -> context / function scope 


// for(var i =0;i<5;i++){
//     setTimeout(function(){
//      console.log(i)
//     },1000)
// }