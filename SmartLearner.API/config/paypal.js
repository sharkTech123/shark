// config/paypal.js
const axios = require("axios");

const PAYPAL_API_BASE = "https://api.paypal.com";
const CLIENT_ID =
  "ARWFS0fp8lNALR42g8KRxn9WUHBrQVtUTOqxBPChr0AyWQxmiaAnwDB0k0VzHN5KFePemtyvUNyqM-Ge";
const CLIENT_SECRET =
  "EHv_ONuwYPGR20qJmrDSSi_cD_-xB9_vDXL_ewTupFzgzaAFXaz5PVLAt53CP_D25fMUQ9yN_TPm8E_y";

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
