// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON request bodies
// app.use(express.json());

// app.post('/submit', (req, res) => {
//   const data = req.body;
//   console.log('Received data:', data);

//   // Delay the response by 2 seconds
//   setTimeout(() => {
//     res.json({
//       message: 'Data received after 2 seconds',
//       data: data
//     });
//   }, 2000); // 2000 milliseconds = 2 seconds
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// const express=require('express');

// const app=express()


// const port=process.env.port||4000;

// app.use(express.json());

// app.post('/submit',(req,res)=>{
//   const data = req.body;
//   console.log('Data Received',data);

//   setTimeout(() => {
//     res.json({
//       message:'Data received after 2 seconds',
//       data:data
//     })
//   }, 2000);
// })


// app.listen(port,()=>{
//   console.log(`Server running on http://localhost:${port}`)
// })



// const express = require('express');
// const app = express();
// app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method === 'POST') {
//     return res.status(403).send('POST method is disabled');
// }

//   next();
// });

// app.get('/', (req, res) => {
//   res.send('GET request works');
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



// const express = require('express');

// const app=express();

// const port = process.env.PORT||5000

// app.use(express.json())

// app.post('/submit',(req,res)=>{
//   if(req.method==='POST'){
//    res.send('Post request not allowed')

//   }
// })


// app.get('/get',(req,res)=>{
//   res.send('Get request worked')
//   console.log('Get request worked')
// })

// app.listen(port,()=>{
//   console.log(`server running port http://localhost:${port}`)
// })



// const express = require('express');
// const app = express();

// // Middleware to block all POST requests
// app.use((res, req, next) => {
//   if (req.method === 'POST') {
//     return res.status(405).send('POST requests are not allowed');
//   }
//   next();
// });

// // Example GET route
// app.get('/', (res, req) => {
//   res.send('Welcome! Only non-POST methods are allowed.');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });



// const express = require('express');
// const app = express();

// // Middleware to block POST requests from a specific domain
// app.use((req, res, next) => {
//   const blockedDomain = 'http://baddomain.com';

//   if (req.method === 'POST' && req.headers.origin === blockedDomain) {
//     return res.status(403).json({
//       success: false,
//       message: 'POST requests from this domain are not allowed.',
//       origin: req.headers.origin,
//     });
//   }

//   next();
// });

// // Example GET and POST route
// app.get('/', (req, res) => {
//   res.send('GET request allowed.');
// });

// app.post('/', (req, res) => {
//   res.send('POST request accepted from allowed domains.');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });



const express = require('express');

const app = express()

const port=process.env.PORT||3000

function blockPostRequest(req,res,next){
    if(req.method==='POST'){
      return res.send('Post request blocking ')
    }
    next()
}

app.use(blockPostRequest)


app.get('/home',(req,res)=>{
  res.send('Welcome Home')
})
app.post('/login',(req,res)=>{
  res.send('This request never send')
})

app.listen(port,()=>{
  console.log(`server running port http://localhost:${port}`)
})