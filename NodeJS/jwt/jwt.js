const jwt = require('jsonwebtoken');

const user = { id: 1, username: 'akhildas' };
const secretKey = 'yourSecretKey'; 

// Create token
const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

console.log('JWT Token:', token);


jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.log('Invalid token');
  } else {
    console.log('Decoded data:', decoded);
  }
});
