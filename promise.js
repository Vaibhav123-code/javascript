// promise 
// -- its a object used to handle asynchronous operation.
// - its a representation of eventual completion or failure of an asynchronous operation
// - its allow us to handle result of error or success.

// 1- pending - intial 
// 2. fulfill- sucessful
// 3. rejected- when some error occur
// function fetchData() {
//     console.log("starting...")  // 

//     return new Promise((resolve, reject) => {  // promise intilise
//       setTimeout(()=>{
//       const data = "hello world";
//       resolve(data)
//       },2000)
//     })
// }
// function processData(data){
//     console.log(data);
// }
// fetchData()
// .then(processData)
// .catch(err=>console.log(err))

// // console.log("code continue")

// function example(){
//   console.log("statrt...")
//     return new Promise((resolve,reject)=>{ 

//         setTimeout(()=>{
//          let success = false;    
//          if(success){
//             resolve({name: "sonali"})   // fulfill
//          }else{
//             reject("rejected")  // rejected
//          }
        
//         },2000)
//     })
// }
//  example()
//  .then((data) => console.log(data.name))
//  .catch((err) => console.log(err))

// function print(data){
//     return new Promise((resolve,reject)=>{  
//         setTimeout(()=> {
//         resolve(data)
//         },1000)
//     })
// }

// print("first")
// .then((result) => {
//     console.log(result)
//     return print("second")
// })
// .then((result) => {
//     console.log(result)
//     return print("third")
// })
// .then((result) => {
//     console.log(result);
// })
 
// promise chaining example ------

// function   placeOrder(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("order placed")
//         },1000)
    
//     })
// }

// function preparedFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("food prepared")
//         },1500)

//     })
// }
// function foodDelivered(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("food delivered")
//         },2000)

//     })
// }
// placeOrder()
//     .then((result1) =>{
//         console.log(result1)
//         updateStatus(result1,"first")  // result  & class name 
//         return preparedFood()
//     })
//     .then((result2) =>{
//         console.log(result2);
//         updateStatus(result2,"second")
//         return foodDelivered()
//     })
//     .then((result3) =>{
//         console.log(result3)
//         updateStatus(result3,"third")
//     })
//     .catch((err) =>{  
//         console.log("error :", err)
//     })

//     function updateStatus(statusValue, classname){
//         const status = document.getElementById("status");
//         status.textContent = statusValue;
//         status.classList.add(classname);
//     }


// Async await

// 1. its simplify our code ,code looking more synchronous and readable
//   2. async - used to declare async function and it allow us to use await keyword
// 3. await - used to pause execution until  promise is resolved
// 4 try-catch - used to handle success and error

// function printHello(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hello")
//         },2000)
//     })
// }
//  async function asyncFun(){
//   try{
//      const result = await printHello();
//      console.log(result);
//   }catch(error){
//      console.log(error)
//   }
// }
// asyncFun()


















