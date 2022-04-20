const crypto = require('crypto');

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^([a-zA-Z0-9_-]){3,5}$/;
  return passwordRegex.test(password);
};

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

//regex reference: https://www.sitepoint.com/using-regular-expressions-to-check-string-length/

module.exports = {
  validateEmail,
  validatePassword,
  generateToken,
};
