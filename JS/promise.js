// 1.Promise basic method




// const promise= new Promise((resolve,reject)=>{
//     resolve("Success")
// })



// promise.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('Error',err);
    
// })

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


// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise One Success")
//     }, 3000);
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Two Success")
//     }, 2000);
// })


// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Three Success");
//         // reject("Promise Three Rejected");
//     }, 1000);
// })


// const promise=Promise.all([promise1,promise2,promise3])
// .then((response)=>{
//     console.log(response);
    
// })
// .catch((err)=>{
//     console.log('Error',err);
    
// })


const obj=[{a:[1,23,2,23]},{a:[1,232,32]},{a:[1,232,32]},{a:[1,232,32]}]


let sum=0;

function findSum(value){
    for(let key in value){
        let arr=value[key]

        for(let i=0;i<arr.length;i++){
            sum+=arr[i]
        }
    }
}

for(let i=0;i<obj.length;i++){
    findSum(obj[i])
}

console.log(sum)