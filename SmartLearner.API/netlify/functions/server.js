const serverless = require('serverless-http');
const app = require('../../app'); // Adjust the path to where your app.js is located

module.exports.handler = async (event, context) => {
  const handler = serverless(app);
  const result = await handler(event, context);
  return result;
};
