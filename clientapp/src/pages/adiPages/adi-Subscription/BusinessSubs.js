import React, { useEffect, useState } from "react";
import "../../../pages/Theory-Subscription/TheorySubscription.css";
import paypalLogo from "../../../assets/images/paypalLogos.png";

import cartIcon from "../../../assets/images/cartIcon1.png";
import { toast } from "react-hot-toast";
import styles from "../../../pages/shop/cart/Cart.module.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlans,
  createAutoUserSubscription,
} from "../../../redux/features/subscriptionSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader2 from "../../../components/loader/Loader2";

export default function BusinessSubs() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);
  const [revolutLoading, setRevolutLoading] = useState(false);

  const navigate = useNavigate();

  const paidPlans = plans.filter(
    (plan) => plan.planCategory === "business mentoring"
  );

  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch, userId]);

  return (
    <>
      {" "}
      {revolutLoading && <Loader2 />}
      <PayPalScriptProvider
        options={{
          "client-id":
            "ASzR9RCfn9wYYvtySf5-jvqFuRcR48EwxVV8KGq000JxdubcsXDO1ggsyllL",
          currency: "GBP",
          intent: "subscription",
          vault: true,
        }}>
        <div className="subscription-cardBox">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Business mentoring</title>
            <link
              rel="canonical"
              href="https://smartlearner.com/business-mentoring"
            />
            <meta property="og:title" content="Business Mentoring" />
            <meta
              property="og:description"
              content="Choose a driving Business Mentoring subscription plan that fits your needs."
            />

            <meta
              name="description"
              content="Choose a driving Business Mentoring subscription plan that fits your needs."
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
                {paidPlans.map((plan, index) => (
                  <div className={styles.cartBtnsContainer}>
                    <div>
                      <div className={styles.basketHeadingTitles}>
                        <h2>BASKET TOTAL</h2>
                        <div className={styles.basketHeadingTitle}>
                          <p>
                            <span>Subtotal:</span>
                            <span>£ {plan.price}</span>
                          </p>
                          <p>
                            <span>Booking fee:</span> <span>£ 0%</span>
                          </p>
                          <p>
                            <span>Total:</span> <span>{plan.price}</span>
                          </p>
                          <div>
                            <img src={paypalLogo} alt="paypal" />
                            {/* <img
                            src={revolutLogo}
                            alt="revolutLogo"
                            id={styles.revolutLogo}
                          /> */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.basketHeadingTitle}></div>
                    </div>

                    <div>
                      <PayPalButtons
                        fundingSource="paypal"
                        createSubscription={(data, actions) => {
                          console.log("PayPal plan_id:", plan?.paypalPlanId);
                          return actions.subscription.create({
                            plan_id: "P-4BA62370SY952642NNE64JPA", // P-XXXX
                          });
                        }}
                        onApprove={async (data) => {
                          await dispatch(
                            createAutoUserSubscription({
                              userId,
                              subscriptionId: plan._id, // your DB plan
                              paypalSubscriptionId: data.subscriptionID,
                              method: "paypal",
                            })
                          );

                          toast.success("Subscription activated!");
                          navigate("/business-mentoring");
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PayPalScriptProvider>
    </>
  );
}
