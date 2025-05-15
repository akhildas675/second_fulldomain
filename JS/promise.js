// 1.Promise basic method

// const promisee = new Promise((resolve,reject)=>{
//    resolve("Success promise")
// })

// .then((response)=>{
//    console.log(response);
   
// })
// .catch((error)=>{
//    console.log(error);
   
// })


//Using async function

// async function example() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// example()







//Promise all method


// const promise1= new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       resolve('Promise 1 success')
//    }, 1000);
// })
// const promise2= new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       // resolve('Promise 2 success')
//       reject('Promise 2 rejected')
//    }, 2000);
// })
// const promise3= new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       resolve('Promise 3 success')
//    }, 3000);
// })

// const promise = Promise.any([promise1,promise2,promise3])
// .then((response)=>{
//    console.log(response);
   
// })
// .catch((error)=>{
//    console.log(error);
   
// })


// Promise with async await function 


// function promise1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          resolve('Promise 1 is success')
//       }, 1000);
//    })
// }

// function promise2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          resolve('Promise 2 is success')
//       }, 2000);
//    })
// }


// async function display() {
//    try {
//       const user1= await promise1()
//       console.log(user1)
//       const user2 = await promise2()
//       console.log(user2)
//    } catch (error) {
//       console.log(error);
      
//    }
// }

// display()



//Promise arithmetic operation


function add(a,b){
   return new Promise((resolve,reject)=>{
      if(!isNaN(a) &&!isNaN(b)){
         resolve(a+b)
      }else{
         reject('Failed')
      }
   })
}


add(10,20)

.then((response)=>{
   console.log(response);
   
})
.catch((error)=>{
   console.log(error);
   
})



// Promise Chaining



const promise=new Promise((resolve,reject)=>{
   resolve(1)
})


.then((result)=>{
   console.log(result);
   return result+1
})

.then((result)=>{
   console.log(result);
   return result+2
})

.then((result)=>{
   console.log(result);
   return result+3
})

.catch((error)=>{
   console.log(error);
   
})