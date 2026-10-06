// config/paypal.js
const axios = require("axios");

const PAYPAL_API_BASE = "https://api.paypal.com";
const CLIENT_ID =
  "ASzR9RCfn9wYYvtySf5-jvqFuRcR48EwxVV8KGq000JxdubcsXDO1ggsyllL";
const CLIENT_SECRET =
  "EEaC2BCdKDLSXyqPk4Hz1-DNzQ0sxeBj4NY6b3GM2kKCNIFhkG8axNPpjI-E";

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${PAYPAL_API_BASE}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error generating access token:", error.response.data);
    throw new Error("Unable to get access token from PayPal");
  }
};

module.exports = {
  getAccessToken,
  PAYPAL_API_BASE,
};
