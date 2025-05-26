// 1.Promise basic method





// const promise = new Promise((res,rej)=>{
//    res('success')
// })

// .then((res)=>{
//    console.log(res);
   
// })

// .catch((err)=>{
//    console.log(err);
   
// })



//Using async function


// async function example(){
//    try {
//       const response=await fetch('http://jsonplaceholder.typicode.com/users')
//    const data=await response.json()
//    console.log(data)
//    } catch (error) {
//       console.log(error);
      
//    }
// }


// example()





//Promise all method


// const promise1 = new Promise((resolve,reject)=>{
//    // resolve('Promise 1 success')
//    reject('Promise 1 Reject')
// })


// const promise2 = new Promise((resolve,reject)=>{
//    // resolve('promise 2 success')
//    reject('Promise 2 Reject')
// })

// const promise3 = new Promise((resolve,reject)=>{
//    resolve('Promise 3 success')
//    // reject('Promise 3 Reject')
// })

// const promise = Promise.any([promise1,promise2,promise3])
// .then((response)=>{
//    console.log(response);
   
// })

// .catch((err)=>{
//    console.log(err);
   
// })



// Promise with async await function 


// function promise1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          resolve('Promise 1 success')
//       }, 3000);
//    })
// }


// function promise2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          resolve('Promise 2 success')
//       }, 2000);
//    })
// }
// function promise3(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          resolve('Promise 3 success')
//       }, 1000);
//    })
// }


// async function display(){
//    try {
//       const user1 = await promise1()
//       console.log(user1)
//       const user2 = await promise2()
//       console.log(user2)
//       const user3 = await promise3()
//       console.log(user3)
//    } catch (error) {
//       console.log(error);
      
//    }
// }

// display()

//Promise arithmetic operation


// function arithmeticPromise(a,b){
//    return new Promise((resolve,reject)=>{
//       if(a ===0 || b ===0){
//          reject('enter number greater than Zero')
//       }else{
//          resolve(a+b)
//       }
//    })
// }

// arithmeticPromise(20,40)

// .then((response)=>{
//    console.log(response);
   
// })

// .catch((error)=>{
//    console.log(error);
   
// })


// Promise Chaining



// const promise = new Promise((resolve,reject)=>{
//    resolve(10)
// })

// .then((response)=>{
//    console.log(response)
//    return response+10
// })
// .then((response)=>{
//    console.log(response)
//    return response+20
// })
// .then((response)=>{
//    console.log(response)
//    return response+30
// })

// .catch((err)=>{
//    console.log(err);
   
// })



