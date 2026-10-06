import React, { useEffect, useState } from "react";
import "../../../pages/Theory-Subscription/TheorySubscription.css";
// import subsIcon from "../../../assets/images/subsIconSvg.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
  fetchUserSubscriptions,
  pdiApplyCouponCode,
  pdiPartTwoApplyCouponCode,
  pdiPartThreeApplyCouponCode,
} from "../../../redux/features/subscriptionSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import paypalLogo from "../../../assets/images/paypalLogos.png";
import cartIcon from "../../../assets/images/cartIcon1.png";

import { toast } from "react-hot-toast";
import styles from "../../../pages/shop/cart/Cart.module.css";
import { Helmet } from "react-helmet-async";
import httpHandler from "../../../utils/httpHandler";
import RevolutCheckout from "@revolut/checkout";
import { useRef } from "react";
import LoadingWeb from "../../../components/loader/LoadingWeb";

import revolutLogo from "../../../assets/images/RevolutLogo.png";
import Loader2 from "../../../components/loader/Loader2";

const PartThreeSubscription = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);
  const subsdiscountedPrice = useSelector(
    (state) => state.subscription.subsdiscountedPrice
  );

  const [couponCode, setCouponCode] = useState("");
  const [revolutLoading, setRevolutLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch subscription plans when component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
    dispatch(fetchPlans());
  }, [dispatch, userId]); // Added userId as a dependency

  const handleCouponSubmit = async () => {
    try {
      await dispatch(
        pdiPartThreeApplyCouponCode({ userId, couponCode })
      ).unwrap();
      navigate("/part-three-theory-questions");
      toast.success("subscription added");
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };

  // const handleCreateTrialSubscription = async (plan) => {
  //   try {
  //     const trialEligible = await dispatch(checkTrialEligibility(userId)).unwrap();

  //     if (!trialEligible) {

  //       return;
  //     }

  //     const subscriptionData = {
  //       userId: userId,
  //       subscriptionId: plan._id,
  //       isTrial: true,
  //     };

  //     const subscription = await dispatch(createUserSubscription(subscriptionData)).unwrap();
  //     console.log("Trial subscription created successfully:", subscription);
  //   } catch (error) {
  //     console.error("Error creating trial subscription:", error);
  //   }
  // };

  const handleCreateSubscription = async (ogPlan, subsdiscountedPrice) => {
    const priceToUse = subsdiscountedPrice || ogPlan.price; // Use the updated price directly
    console.log("Price to use for payment:", subsdiscountedPrice);

    const subscriptionData = {
      subscriptionId: ogPlan._id,
      price: priceToUse,
    };

    try {
      const order = await dispatch(createPayment(subscriptionData)).unwrap();
      console.log("Order received from payment creation:", order);
      if (order && order.id) {
        return order.id;
      } else {
        throw new Error("Order ID not received");
      }
    } catch (error) {
      console.error("Error during subscription creation:", error);
      throw error;
    }
  };

  const handleApprovePayment = async (ogPlan, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("Order captured:", order);
      if (!order || !order.id) {
        console.error("No order ID received");
        return;
      }

      const subscriptionData = {
        userId: userId,
        subscriptionId: ogPlan._id,
        orderId: order.id,
        method: "PayPal",
        isTrial: false,
      };

      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
      navigate("/part-three-theory-questions");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };

  // Separate plans into trial and paid
  //   const trialPlans = plans.filter(plan => plan.planCategory === 'free-trial');
  const paidPlans = plans.filter(
    (plan) => plan.planCategory === "pdi-part-three packages"
  );
  const ogPlan = paidPlans[0];

  const planId = paidPlans[0]?._id;

  const revolut4ContainerRef = useRef(null);
  const [activePlan, setActivePlan] = useState(null);

  const initRevolutPay = async (plan) => {
    setActivePlan(plan);

    try {
      const { revolutPay } = await RevolutCheckout.payments({
        locale: "en",

        publicToken: "pk_6beHPJuibNeh8OnYfdQnU25E6cCQjjh0tLXsDSvy54xkmMXf", // Use env variable in prod
      });

      revolutPay.mount(revolut4ContainerRef.current, {
        currency: "GBP",
        totalAmount: Math.round(parseFloat(plan.price) * 100),

        mobileRedirectUrls: {
          success: `${window.location.origin}/part-three-theory-questions`,
          failure: `${window.location.origin}/driving-instructor-training-part-three`,
          cancel: `${window.location.origin}/driving-instructor-training-part-three`,
        },

        createOrder: async () => {
          const res = await httpHandler.post(
            "/api/subscription/revolut-charge",
            {
              amount: Math.round(parseFloat(plan.price) * 100),
              currency: "GBP",
              subscriptionId: plan._id,
              userId: userId,
            }
          );

          console.log("sa123sdasd", res);
          console.log("Asas", res.data.token);

          localStorage.setItem(
            "PdiPartThreeSubsBuy",
            JSON.stringify({
              userId: userId,
              subscriptionId: plan._id,
            })
          );

          return { publicId: res.data.token };
          // this token should be generated from your backend
        },
      });

      revolutPay.on("payment", async (event) => {
        switch (event.type) {
          case "success":
            setRevolutLoading(true);
            try {
              const res = await httpHandler.post(
                "/api/subscription/revolut-payment-success",
                {
                  subscriptionId: plan._id,
                  userId: userId,
                }
              );
              if (res.data.success) {
                localStorage.removeItem("PdiPartThreeSubsBuy");

                navigate("/part-three-theory-questions");
                toast.success("Payment completed successfully");
              }
            } catch (err) {
              console.error("Error notifying backend of Revolut success:", err);
              toast.error("Payment succeeded, but backend notification failed");
            }
            break;
          case "error":
            toast.error("Revolut payment failed");
            try {
              await httpHandler.post(
                "/api/subscription/revolut-payment-failure",
                {
                  subscriptionId: plan._id,
                  userId: userId,
                }
              );
            } catch (err) {
              console.error("Error notifying backend of payment failure:", err);
            }
            break;
          case "cancel":
            toast("Revolut payment cancelled");
            try {
              await httpHandler.post(
                "/api/subscription/revolut-payment-failure",
                {
                  subscriptionId: plan._id,
                  userId: userId,
                }
              );
            } catch (err) {
              console.error("Error notifying backend of payment failure:", err);
            }
            break;
        }
      });
    } catch (error) {
      console.error("Revolut init error:", error);
      toast.error("Failed to initialize Revolut payment");
    }
  };

  return (
    <>
      {" "}
      {revolutLoading && <Loader2 />}
      <div className="subscription-cardBox">
        <Helmet>
          <meta charSet="utf-8" />
          <title>PDI Part Three Plans</title>
          <link
            rel="canonical"
            href="https://smartlearner.com/driving-instructor-training-part-three"
          />
          <meta property="og:title" content="PDI Part Three Plans" />
          <meta
            property="og:description"
            content="Choose a driving PDI subscription plan that fits your needs. Get full access to lessons, practice tests, and learning tools."
          />

          <meta
            name="description"
            content="Choose a driving PDI subscription plan that fits your needs. Get full access to lessons, practice tests, and learning tools."
          />
        </Helmet>
        <div className={styles.cartPage}>
          <div className={styles.cartContainer}>
            <div className={styles.cartheading}>
              <h2>CHECKOUT</h2>
              <img
                src={cartIcon}
                alt="cart icon"
                className={styles.carIconImg}
              />
            </div>
            <div className="coupon-section">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
                className="coupon-input"
              />
              <button onClick={handleCouponSubmit} className="coupon-button">
                Apply Coupon
              </button>
            </div>
            <p style={{ textAlign: "center", color: "white" }}>
              Apply Coupon Code To Get Free Access Of PDI Portal
            </p>
            <div className={styles.cartContentContainer}>
              <div className={styles.cartItemsContainer}>
                <table className={styles.cartTable}>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading && (
                      <p
                        style={{
                          color: "white",
                          fontSize: "1.2rem",
                          textAlign: "center",
                          width: "100%",
                        }}>
                        Loading plans...
                      </p>
                    )}
                    {paidPlans.map((plan, index) => (
                      <tr className={styles.cartRow}>
                        <td>{plan.planname}</td>
                        <td>£ {plan.price}</td>
                        <td> 1 </td>
                        <td>£ {plan.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.cartBtnsContainer}>
                {paidPlans.map((plan, index) => (
                  <div>
                    <div>
                      <div className={styles.basketHeadingTitles}>
                        <h2>BASKET TOTAL</h2>
                        <div className={styles.basketHeadingTitle}>
                          <p>
                            <span>Subtotal:</span>
                            <span>£ {plan.price}</span>
                          </p>
                          <p>
                            <span>Booking fee:</span>{" "}
                            <span>£ 0%</span>
                          </p>
                          <p>
                            <span>Total:</span> <span>{plan.price}</span>
                          </p>
                          <div>
                            <img src={paypalLogo} alt="paypal" />
                            <img
                              src={revolutLogo}
                              alt="revolutLogo"
                              id={styles.revolutLogo}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.basketHeadingTitle}></div>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <button
                        className={styles.revolutbutton}
                        onClick={() => initRevolutPay(plan)}>
                        Pay with debit/credit card
                      </button>
                      {activePlan?._id === plan._id && (
                        <div className={styles.revolutbuttoncontainer}>
                          <div
                            ref={revolut4ContainerRef}
                            className="revolut-pay-button"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div>
                  {" "}
                  {ogPlan && !subsdiscountedPrice ? (
                    <PayPalButtons
                      createOrder={(data, actions) =>
                        handleCreateSubscription(ogPlan, subsdiscountedPrice)
                      }
                      onApprove={(data, actions) =>
                        handleApprovePayment(ogPlan, actions)
                      }
                      fundingSource="paypal"
                      disabled={subsdiscountedPrice}
                    />
                  ) : (
                    <></>
                  )}
                </div>

                {ogPlan && subsdiscountedPrice ? (
                  <PayPalButtons
                    createOrder={(data, actions) =>
                      handleCreateSubscription(ogPlan, subsdiscountedPrice)
                    }
                    onApprove={(data, actions) =>
                      handleApprovePayment(ogPlan, actions)
                    }
                    fundingSource="paypal"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartThreeSubscription;
