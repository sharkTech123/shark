import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import ReactGA from "react-ga4";

import { Toaster } from "react-hot-toast";
import { router } from "./routing";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Add this import
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactGA.initialize("G-VLMHFWZ124"); // Replace with your Measurement ID

const stripePromise = loadStripe(
  "pk_live_51QUtoPKf87lUPZhYsu1dWGqIA02ddYQaj5REvOdXdH629LBfj8tg4Fea50YjkY44uUzuJe8bcvO3RfDiF2a5jezf00i69P0fXa"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ASzR9RCfn9wYYvtySf5-jvqFuRcR48EwxVV8KGq000JxdubcsXDO1ggsyllL",
          currency: "GBP",
          intent: "capture",
        }}>
        <Elements stripe={stripePromise}>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
          <Toaster position="center" />
        </Elements>
      </PayPalScriptProvider>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
