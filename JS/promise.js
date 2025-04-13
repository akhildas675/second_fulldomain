// const promise= new Promise((resolve,reject)=>{
//     resolve("Success")
// })



// promise.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('Error',err);
    
// })

async function example() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data)
    } catch (error) {
        console.log(error);
        
    }
}

example()
