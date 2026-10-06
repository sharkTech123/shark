import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "../../../pages/shop/cart/Cart.module.css";
import httpHandler from "../../../utils/httpHandler";
import LoadingWeb from "../../../components/loader/LoadingWeb";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../../redux/features/cartSlice";
import toast from "react-hot-toast";
import paypalLogo from "../../../assets/images/paypalLogos.png";
import stripLogo from "../../../assets/images/Stripe-logo.png";
import { loadStripe } from "@stripe/stripe-js";
import RevolutCheckout from "@revolut/checkout";
import { useRef } from "react";
import Loader2 from "../../../components/loader/Loader2";
import axios from "axios";


 const stripePromise = loadStripe(
    "pk_live_51ThTSzGUAXUVrBdDTImZOY9l3jO6iOgFLKEj28hST52gOoY1LO0C09jJ0iHVHq4bRFCBcBhyNrnpvTpkuAQtzEUO00ucf6IvQU",
  );

export default function PaymentProcessing() {
  const [hashCode, setHashCode] = useState("");
  const [isHashGenerated, setIsHashGenerated] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [error, setError] = useState(null);
  const [paypalError, setPaypalError] = useState(null);
  const [stripeError, setStripeError] = useState(null);
  const [isPaymentCreated, setIsPaymentCreated] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [webloading, setWebLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const revolutContainerRef = useRef(null);

  const carting = useSelector((state) => state.cart.payment);

  const createPayment = async () => {
    setLoading(true);
    try {
      const response = await httpHandler.post("/api/order/create", {
        order: {
          firstName: carting.firstName,
          lastName: carting.lastName,
          city: carting.city,

          email: carting.email,
          myCart: carting.myCart,
          ordernotes: carting.ordernotes,
          phoneNumber: carting.phoneNumber,
          postcode: carting.postcode,
          serviceCharge: carting.serviceCharge,
          streetAddress1: carting.streetAddress1,
          streetAddress2: carting.streetAddress2,
          subtotal: carting.subtotal,
          total: carting.total.toFixed(2),
        },
      });

      if (response.data.success) {
        setPaymentId(response.data.paymentId);
        setOrderId(response.data.orderId);
        setIsPaymentCreated(true);
      } else {
        setError("Failed to create payment.");
      }
    } catch (err) {
      setError("Payment creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Stripe Payment Handler
  const stripe = useStripe();
  const elements = useElements();

  const handleStripePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setError("Stripe not initialized. Please try again.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
      return;
    }

    try {
      setWebLoading(true);
      const response = await httpHandler.post("/api/order/stripe-charge", {
        paymentMethodData: {
          type: "card",
          card: {
            token: token.id, // Pass the token here
          },
        },
        orderId,
        amount: carting.total.toFixed(2),
      });

      if (response.data.requiresAction) {
        // Confirm the payment with the client secret from backend
        const { error: confirmationError, paymentIntent } =
          await stripe.confirmCardPayment(
            response.data.paymentIntentClientSecret,
          );

        if (confirmationError) {
          setError(
            "Payment authentication failed: " + confirmationError.message,
          );
        } else if (paymentIntent.status === "succeeded") {
          dispatch(emptyCart());
          navigate("/paymentSuccess");
          toast.success(response.data.message);
        } else {
          setError("Payment failed. Please try again.");
          toast.error(response.data.message);
        }
      } else if (response.data.success) {
        // Payment was successful
        dispatch(emptyCart());
        navigate("/paymentSuccess");
      } else {
        setError("Stripe payment failed. Please try again.");
      }
    } catch (err) {
      setError("Stripe payment failed. Please try again.");
    } finally {
      setWebLoading(false);
    }
  };

  // PayPal Payment Execution
  const executePayment = async (paymentId, payerId, orderId) => {
    setWebLoading(true);
    try {
      const response = await httpHandler.post("/api/order/execute", {
        paymentId,
        payerId,
        orderId,
      });

      if (response.data.success) {
        dispatch(emptyCart());
        navigate("/paymentSuccess");
      } else {
        setError("Payment execution failed. Please try again.");
      }
    } catch (err) {
      setError("Payment execution failed. Please try again.");
    } finally {
      setWebLoading(false);
    }
  };

  const handleApprove = (data, actions) => {
    const payerId = data.payerID;
    const paymentId = data.orderID;
    executePayment(paymentId, payerId, orderId);
  };

  const handleError = (error) => {
    setPaypalError("Payment failed: " + error.message);
  };

  useEffect(() => {
    createPayment();
  }, []);

  ///////////////////Klarna Payment Handler/////////////////

 
const handleKlarnaPayment = async () => {
  setLoading(true);

  // SHOW FULL SCREEN LOADER
  setWebLoading(true);

  setError("");

  // ── Guard: minimum Klarna order is £1.00 ──
  const totalAmount = parseFloat(carting?.total);

  if (!totalAmount || totalAmount < 1) {
    setError("Order total is too low for Klarna. Minimum is £1.00.");
    setLoading(false);
    setWebLoading(false);
    return;
  }

  try {
    const stripe = await stripePromise;

    if (!stripe) {
      setError(
        "Stripe failed to load. Check your publishable key in .env"
      );

      setLoading(false);
      setWebLoading(false);
      return;
    }

    // ── 1. Create PaymentIntent on backend ──
    console.log("[Klarna] Sending order to backend…");

    const { data } = await axios.post(
      `https://api.smartlearner.com/api/order/create-payment-intent`,
      {
        firstName: carting.firstName,
        lastName: carting.lastName,
        city: carting.city,
        email: carting.email,
        myCart: carting.myCart,
        ordernotes: carting.ordernotes || "",
        phoneNumber: carting.phoneNumber,
        postcode: carting.postcode,
        serviceCharge: carting.serviceCharge,
        streetAddress1: carting.streetAddress1,
        streetAddress2: carting.streetAddress2 || "",
        subtotal: carting.subtotal,
        total: totalAmount.toFixed(2),
      }
    );

    console.log("[Klarna] Backend response:", data);

    if (!data.success || !data.clientSecret) {
      setError(data.message || "Failed to create payment. Try again.");

      setLoading(false);
      setWebLoading(false);
      return;
    }

    // OPTIONAL:
    // Hide loader before redirecting to Klarna
    setWebLoading(false);

    // ── 2. Confirm Klarna ──
    console.log("[Klarna] Redirecting to Klarna…");

    const { error: stripeError } =
      await stripe.confirmKlarnaPayment(data.clientSecret, {
        payment_method: {
          billing_details: {
            name: `${carting.firstName} ${carting.lastName}`,
            email: carting.email,
            phone: carting.phoneNumber,
            address: {
              line1: carting.streetAddress1,
              line2: carting.streetAddress2 || "",
              city: carting.city,
              postal_code: carting.postcode,
              country: "GB",
            },
          },
        },

        return_url: `${window.location.origin}/klarna-return`,
      });

    // Only runs if redirect FAILED
    if (stripeError) {
      console.error("[Klarna] Stripe error:", stripeError);

      const friendlyErrors = {
        payment_intent_unexpected_state:
          "This payment has already been processed.",

        payment_method_not_available:
          "Klarna is not available right now. Please try another payment method.",

        amount_too_small:
          "Order total is too small for Klarna. Minimum is £35.",

        country_unsupported:
          "Klarna is not available in your country.",
      };

      setError(
        friendlyErrors[stripeError.code] ||
          stripeError.message ||
          "Payment failed. Please try again."
      );

      setLoading(false);
      setWebLoading(false);
    }
  } catch (err) {
    console.error("[Klarna] Unexpected error:", err);

    if (err?.response?.status === 400) {
      setError(err.response.data?.message || "Invalid order data.");
    } else if (err?.response?.status === 500) {
      setError("Server error. Please contact support.");
    } else if (err?.code === "ERR_NETWORK") {
      setError("Cannot reach server. Check your backend is running.");
    } else {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
    setWebLoading(false);
  }
};

  ///////////////////////////////////////////////////////////

  const initRevolutPay = async () => {
    try {
      const { revolutPay } = await RevolutCheckout.payments({
        locale: "en",

        publicToken: "pk_6beHPJuibNeh8OnYfdQnU25E6cCQjjh0tLXsDSvy54xkmMXf",
      });

      revolutPay.mount(revolutContainerRef.current, {
        currency: "GBP",

        totalAmount: Math.round(parseFloat(carting.total) * 100),
        mobileRedirectUrls: {
          success: `${window.location.origin}/paymentSuccess`,
          failure: `${window.location.origin}/paymentProcessing`,
          cancel: `${window.location.origin}/paymentProcessing`,
        },

        createOrder: async () => {
          const res = await httpHandler.post("/api/order/revolut-charge", {
            amount: Math.round(parseFloat(carting.total) * 100),
            currency: "GBP",

            orderId,
          });

          if (!res.data.success) {
            throw new Error("Revolut order creation failed");
          }
          localStorage.setItem("lastOrderId", orderId);
          return { publicId: res.data.token };
        },
      });

      revolutPay.on("payment", async (event) => {
        switch (event.type) {
          case "success":
            setWebLoading(true);
            try {
              const res = await httpHandler.post(
                "/api/order/revolut-payment-success",
                {
                  orderId,
                },
              );

              if (res.data.success) {
                localStorage.removeItem("lastOrderId");
                dispatch(emptyCart());
                navigate("/paymentSuccess");
                toast.success("Payment completed successfully");
              } else {
                console.error("Payment verification failed");
              }
            } catch (err) {
              console.error("Error notifying backend of Revolut success:", err);
              toast.error("Payment succeeded, but backend notification failed");
            }
            break;
          case "error":
            toast.error("Revolut payment failed");
            try {
              await httpHandler.post("/api/order/revolut-payment-failure", {
                orderId: orderId,
              });
            } catch (err) {
              console.error("Error notifying backend of payment failure:", err);
            }
            break;
          case "cancel":
            toast("Revolut payment cancelled");
            try {
              await httpHandler.post("/api/order/revolut-payment-failure", {
                orderId: orderId,
              });
            } catch (err) {
              console.error("Error notifying backend of payment failure:", err);
            }
            break;
        }
      });
    } catch (error) {
      console.error("Revolut init error:", error);
      toast.error("Revolut payment failed to initialize");
    }
  };

  useEffect(() => {}, [isPaymentCreated, orderId]);

  const revolutbtn = () => {
    if (isPaymentCreated && orderId) {
      initRevolutPay();
    }
  };

  return (
    <>
      {webloading && <Loader2 />}
      <div className="paymentComponent">
        <p style={{ fontSize: "1.3rem", color: "white", textAlign: "center" }}>
          Complete your payment using PayPal or a debit card.
        </p>
        <div>
          <div className="payment-container">
            <h1>
              Amount to be paid:{" "}
              <span>£{Number(carting.total).toFixed(2)}</span>
            </h1>
            <h3>
              Sub Total: <span>£{carting.subtotal}</span>
            </h3>
            <h3>
              Service Charge:{" "}
              <span>£{Number(carting.serviceCharge).toFixed(2)}</span>
            </h3>

            {isPaymentCreated && !loading && (
              <div>
                <img src={paypalLogo} alt="paypal" />
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: carting.total.toFixed(2),
                            currency_code: "GBP",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={handleApprove}
                  onError={handleError}
                  fundingSource="paypal"
                />

                {/* Stripe Payment */}
                {/*   <img src={stripLogo} alt="stripe" />
                <form onSubmit={handleStripePayment}>
                  <CardElement className="stripe-card-input" />
                  <button
                    className="payment-button"
                    type="submit"
                    disabled={!stripe}>
                    Pay with Stripe
                  </button>
                </form>

                {stripeError && (
                  <div className="error-message">{stripeError}</div>
                )}
                {/* <div className="revolut-section" style={{ marginTop: "20px" }}>
                <img
                  src="https://seeklogo.com/images/R/revolut-logo-F5735C9769-seeklogo.com.png"
                  alt="Revolut"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <button
                  className="payment-button revolut"
                  onClick={handleRevolutPayment}>
                  Pay with Revolut
                </button>
              </div> */}
              {/* ///////////////////////klarna payment//////////////////////////////// */}
                <div className={styles.Klarnawrapper}>
                  {error && (
                    <div className={styles.errorBox}>
                      <span>⚠️</span> {error}
                    </div>
                  )}

                  <button
                    onClick={handleKlarnaPayment}
                    disabled={webloading}
                    className={styles.klarnaButton}
                  >
                    {webloading ? (
                      <span className={styles.loadingRow}>
                        <span className={styles.spinner} />
                        Redirecting to Klarna…
                      </span>
                    ) : (
                      <span className={styles.buttonRow}>
                       
                        <svg
                          width="60"
                          height="20"
                          viewBox="0 0 71 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.728 0H6.2C6.2 3.25 4.71 6.2 2 8.19L0 9.71l6.36 8.67h4.39l-5.86-7.99c2.85-2.46 4.83-5.95 4.83-10.39zM12.31 18.38h3.66V0h-3.66v18.38zM25.74 5.47c-1.35 0-2.63.4-3.49 1.55V5.73h-3.49v12.65h3.53v-6.64c0-1.92 1.28-2.86 2.83-2.86 1.65 0 2.6 1 2.6 2.83v6.67h3.5V10.7c0-2.95-2.36-5.23-5.48-5.23zM38.55 5.47c-3.73 0-6.42 2.7-6.42 6.56s2.69 6.59 6.42 6.59 6.42-2.73 6.42-6.59-2.69-6.56-6.42-6.56zm0 9.97c-1.89 0-2.93-1.52-2.93-3.41s1.04-3.38 2.93-3.38 2.93 1.49 2.93 3.38-1.04 3.41-2.93 3.41zM52.48 7.31V5.73h-3.53v12.65h3.56V11.8c0-2.1 2.26-3.23 3.83-3.23h.04V5.47c-1.61 0-3.1.78-3.9 1.84zM63.06 5.47c-1.74 0-3.36.55-4.26 1.63V5.73H55.3v12.65h3.53v-6.64c0-1.92 1.28-2.86 2.83-2.86 1.65 0 2.6 1 2.6 2.83v6.67H67.8V10.7c0-2.95-2.36-5.23-5.48-5.23h-.26z"
                            fill="#17120F"
                          />
                        </svg>
                        &nbsp; Pay in Installments
                      </span>
                    )}
                  </button>

                  <p className={styles.klarnainfoText}>
                    🛡️ Pay later or split into 3 interest-free installments with
                    Klarna. Redirects to Klarna for authentication.
                  </p>
                </div>
{/* ///////////////////////klarna payment//////////////////////////////// */}
                <div style={{ marginTop: "20px" }}>
                  <button className={styles.revolutbutton} onClick={revolutbtn}>
                    Pay with debit/credit card
                  </button>

                  <div className={styles.revolutbuttoncontainer2}>
                    <div
                      ref={revolutContainerRef}
                      className="revolut-pay-button"
                    />
                  </div>
                </div>
              </div>
            )}

            {loading && !isPaymentCreated && <div>Loading... Please wait.</div>}
          </div>
        </div>
        {webloading && <LoadingWeb />}
      </div>
    </>
  );
}
