// callback 
// a callback is fu ction  that is passed as an argument to another
// functin and is executed at a later point in time after a particular event  occur.

 function  fetchData(callback){
  
    setTimeout(()=>{
       callback("fetch Data")
    },2000);
 }
    function processData(data){
        console.log(data);
    }
 fetchData(processData);