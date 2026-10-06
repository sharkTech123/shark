const crypto = require('crypto');

// Function to encode a string to hexadecimal
function encode(input) {
  const stringBytes = Buffer.from(input, 'utf16le'); // Assuming input is in UTF-16LE encoding
  return stringBytes.toString('hex').toUpperCase();
}

// Function to decode a hexadecimal string to string
function decode(hexInput) {
  const bytes = Buffer.from(hexInput, 'hex');
  return bytes.toString('utf16le'); // Assuming input is in UTF-16LE encoding
}

// Function to generate a random OTP (4-digit number)
function generateRandomOTP() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { encode, decode, generateRandomOTP };