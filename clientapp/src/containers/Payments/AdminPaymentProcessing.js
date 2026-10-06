import React, { useState, useEffect } from "react";
import "../../pages/shop/checkout/Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "../../pages/shop/cart/Cart.module.css";
import httpHandler from "../../utils/httpHandler";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";
import paypalLogo from "../../assets/images/paypalLogos.png";
import stripLogo from "../../assets/images/Stripe-logo.png";

import RevolutCheckout from "@revolut/checkout";
import { useRef } from "react";
import Loader2 from "../../components/loader/Loader2";

export default function AdminPaymentProcessing() {
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
            response.data.paymentIntentClientSecret
          );

        if (confirmationError) {
          setError(
            "Payment authentication failed: " + confirmationError.message
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
          failure: `${window.location.origin}/admin/adminProcessing`,
          cancel: `${window.location.origin}/admin/adminProcessing`,
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
                }
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
        <p style={{ fontSize: "1.3rem", color: "black", textAlign: "center" }}>
          Complete your payment using PayPal or a debit card.
        </p>
        <div>
          <div className="payment-container">
            <h1>
              Amount to be paid: <span>£{carting.total}</span>
            </h1>
            <h3>
              Sub Total: <span>£{carting.subtotal}</span>
            </h3>
            <h3>
              Service Charge: <span>£{carting.serviceCharge}</span>
            </h3>
            <h3>
              Extra Charge: <span>£{carting.extraCharges}</span>
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
                <div style={{ marginTop: "20px" }}>
                  <button className={styles.revolutbutton} onClick={revolutbtn}>
                    Pay with Revolut
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
