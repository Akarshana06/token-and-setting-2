const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Set the expiration time to 1 hour
  const options = { expiresIn: '1h' };

  // Generate and return the JWT
  return jwt.sign(payload, secret, options);
};

module.exports = encrypt;

