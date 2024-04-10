// shallow copy
//1 . only copy top level element 
//2. if we modify nested elements/properties , then it reflect on shallow copy
//3. duplicate only reference of nested elements
// const original = {
//   a: 1,
//   b: { c:2 }
// }
// const shallowCopy = {...original};
// original.a = 10;
// original.b.c= 20;
// console.log(shallowCopy);

// deep copy
// create new object that is duplicate of original including all nested  elements/pro.

// const original = {
//   a: 1,
//   b: { c:2 }
// }
// const jsonString = JSON.stringify(original); // conver obj into json formate
// const deepCopy = JSON.parse(jsonString); // convert json to js obj 
// original.a=10;
// original.b.c = 20;
// console.log(deepCopy)

//Inheritance 
// defination: when object inherit properties and method from another object ,is called inheritance.\

// prototype : each object in js has a prototype which is another object
// that the current object inherits properties and  methods from.

// __proto__ : point to its prototype 
// const obj = {
//   name : "sachin"
// }
// // console.log(obj.__proto__) // its show prototype of obj 
// console.log("using Object method ",Object.getPrototypeOf(obj))

// const obj2 = Object.create(obj);
// // Object.create create new object with specific prototype
// console.log(obj2.name)

// Object chaining : process of linking object through their prototypes.

// const myArr = [1,2,3]

// const myArrPrototype = Object.getPrototypeOf(myArr);
// const ArrPrototype = Object.getPrototypeOf(myArrPrototype)
// const objectPro = Object.getPrototypeOf(ArrPrototype)
// console.log("prototype of myArr=>",myArrPrototype)
// console.log("prototype of Arr=",ArrPrototype)
// console.log("object prototype", objectPro)

// myArr --> Array.prototype --> Object.prototype --> null

// constructor function 

function Person(name){
  this.name = name; 
}

// adding new method to prototype
Person.prototype.sayhello = function(){
  return `hello i am ${this.name}`
}
// creating instance
const john = new Person('john');
const jane = new Person('jane')
// john.__proto__ = Person.prototype  // new keyword
console.log(john.sayhello())
console.log(jane.sayhello())