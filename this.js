// this : fundamental concept in js , its behaviour depend on  how and where it used.

//1. global context

// console.log("this",this);// return window object

//2. function context
// regular function

// function exampleFun() {
//   console.log(this)
// }
// exampleFun();

//3 method context 
 //when  a function is method of an object. this refer to the object that the method is called on

// const myObject = {
//   name: "john",
//   myMethod : function() {
//     console.log("this inside method",this)  // this -> myObject   
//   }
// }
// myObject.myMethod();

//4. constructor context
// when a functon is used as a constructor function with new keyword,
// this refer to newly created instance of object 
// function person( first, last){
//   this.firstName = first;  
//   this.lastName = last;

//   this.getFullName = function() {
//     return this.firstName + " " + this.lastName
//   }
// }
//  const person1 = new person('john', 'doe');
//  const person2 = new person('rohit', 'sharma')

//  console.log(person1.getFullName())

//5.Arrow function 

// arrow function do not have its own 'this',
// it inherit this from its surrounding scope.

// const myObject= {
//   name: "sonali",
//   myFunc : ()=>{ 
//     console.log(this) // window objecxt
//   }
// }

// myObject.myFunc();

// Call bind Apply

// these are methods that allow us to manipulate the context(value of this) and
// argument of a function 

// they provide a way to control how the functions is invoked 

// Call 
// function greet(age) {
//   console.log(`hello ${this.name}  age ${age}`)
// }
// const person = { name : "sonali"}
// // greet(25)
// greet.call(person,25);

// apply 
// call and applly both are are same but apply accept an array of arguments

// function greet(message,age) {
//     console.log(`${message} ${this.name}  age ${age}`)
//   }
//   const person = { name : "sonali"}
//   // greet(25)
//   greet.apply(person,['hello',25]); // arument as array

// bind 
// it return a new function  with specific value of this
// it doesnt invoke function  , it create new function that can be called later

// function greet(age) {
//   console.log(`hello ${this.name} ${age}`)
// }

// const person = {
//   name: "sonali"
// }

// const greetperson = greet.bind(person,25);
// greetperson()