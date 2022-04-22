const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

//regex reference: https://www.sitepoint.com/using-regular-expressions-to-check-string-length/
const validatePassword = (password) => {
  const passwordRegex = /^([a-zA-Z0-9_-]){3,5}$/;
  return passwordRegex.test(password);
};

const generateToken = () => {
  return crypto.randomBytes(8).toString('hex');
};

const readPosts = (id) => {
  const filePath = path.join(__dirname, '..', 'database/posts.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return id ? posts.find((post) => post.id == id) : posts;
};

const countUpperCase = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].charCodeAt(0);
    if (char >= 65 && char <= 90) {
      count++;
    }
  }
  return count;
};

const teamsValidate = (name, initials, country) => {
  const nameValidate = name.length >= 5;
  const initialsValidate = countUpperCase(initials) <= 3;
  const countryValidate = country.length > 3;
  if (nameValidate && initialsValidate && countryValidate) return true;
  return false;
};

module.exports = {
  validateEmail,
  validatePassword,
  generateToken,
  readPosts,
  teamsValidate,
};
