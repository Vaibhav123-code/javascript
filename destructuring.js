// its a js feature that allow us to extract values from object and arrays 
// and asign  them to varibles in more consice and expressive Way  

// without destructuring 
// const numbers = [1,2,3,4,5];
// const firstNum = num[0];
// const SecondNum = num[1];

//destructuring 
// const [first, second ] = numbers;
// console.log(first, second)

// const person ={ name: "rohit", age:30};
// const personName = person.name;
// const {name , age} = person;
// console.log(name, age ) 

// different name 
// const {name: newName, age: newAge} = person;
// console.log(newName, newAge)

// default values
// const {name , age ,country="india"} = person;
// console.log(country)
// console.log(person)


//rest operator

// const numbers = [1,2,3,4,5];
// const [first, second, ...rest] = numbers;
// console.log(first, second)
// console.log("rest=", rest)

// function argument
// Sum(1,2,3,4,5)
// function Sum(...numbers)
// numbers = [1,2,3,4,5]

// nested desturctuing
// const Person= {
//     name: 'rohit',
//     location:{
//         city:'indore',
//         state:'mp',
//         country:'india'
//     }
// }

// const { name , location: {city, state, country}} = Person;
// console.log(`name is ${name} city ${city} ${state}`)

// pros of des...

// readability
// ease of use -> simplifu process
// improve assignment -> assign muliple varibles in single line
// rest operator && default feature?
// nested object 


// spread opeartors
// it is used to expand or spread itearable object into individual elements.
// it allow us to conveneintly and consicely manipulate array, object and function arguments.

// Array manipulation 
// concating Array

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const combineArray = [...arr1,...arr2];
// console.log(combineArray)

// // copying array
// const original = [1,2,3];
// // const newArr = [...original]
// // console.log(newArr)

// // adding element to array
// const addedArr = [...original, 400];
// console.log(addedArr);

// object maniputation
// const original = {name:'xyz', age:20};
// const newObj = {...original}
// console.log(newObj)

// function argument

// const number = [1,2,3];
// const result = Sum(...number) 
  // Sum(1,2,3)

