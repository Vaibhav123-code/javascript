// function fetchApi(){
//     fetch('https://dummyjson.com/products')
//     .then(response => {
//        // handle response
//        return response.json();
//     })
//     .then((data) =>{
//         //precess data
//         const productList = data.products;
//         const productConatiner = document.getElementById('product');

//         productList.forEach((product)=> {
//            const title = product.title;
//            const thumbnail = product.thumbnail; //url
          
//       // add title
//            const proEle = document.createElement('h2');
//            proEle.textContent = title;
//           // add img
//           const image = document.createElement('img');
//           image.src = thumbnail;
//          image.style.width = '200px';
//           productConatiner.append(proEle,image);// append 
          
//         })
//     })
//     .catch(error => console.log(error))
// }

// using async await 

//  async function fetchApi(){
//     try{

//         const response = await  fetch('https://dummyjson.com/products');
//         const data = await response.json();
//           //precess data
//         const productList = data.products;
//         const productConatiner = document.getElementById('product');

//         productList.forEach((product)=> {
//            const title = product.title;
//            const thumbnail = product.thumbnail; //url
          
//       // add title
//            const proEle = document.createElement('h2');
//            proEle.textContent = title;
//           // add img
//           const image = document.createElement('img');
//           image.src = thumbnail;
//          image.style.width = '200px';
//           productConatiner.append(proEle,image);// append 
          
//         })
//     }catch(error){
//        console.log(error)
//     }
       
// }