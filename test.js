const encrypt = require('./script');

const payload = { userId: '123', role: 'user' };
const secret = 'mySuperSecret';

const token = encrypt(payload, secret);
console.log('Generated Token:', token);
