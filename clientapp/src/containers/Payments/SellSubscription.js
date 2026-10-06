import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./css/SellSubscription.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  applyCouponCode,
  createPayment,
  createUserSubscription,
  fetchPlans,
  pdiPartOneApplyCouponCode,
  resetDiscountedPrice,
} from "../../redux/features/subscriptionSlice";
import { getAllUsers } from "../../redux/features/userSlice";
import toast from "react-hot-toast";
import httpHandler from "../../utils/httpHandler";
import RevolutCheckout from "@revolut/checkout";
import { useRef } from "react";
import Loader2 from "../../components/loader/Loader2";

export default function SellSubscription() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [subscription, setSubscription] = useState("");

  const { plans } = useSelector((state) => state.subscription);
  const subsdiscountedPrice = useSelector(
    (state) => state.subscription.subsdiscountedPrice
  );

  const { users, loading } = useSelector((state) => state.user);
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [searchedEmail, setSearchedEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");

  // Fetch all plans on mount
  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  const handleCouponSubmit = async () => {
    if (!userDetails || !subscription || !couponCode.trim()) {
      toast.error("Please select user, subscription, and enter a coupon code.");
      return;
    }

    const userId = userDetails._id;
    const planId = subscription;

    try {
      let result;

      if (couponCode === "GET50OFF") {
        result = await dispatch(
          pdiPartOneApplyCouponCode({ userId, planId, couponCode })
        ).unwrap();
      } else if (couponCode === "GET80OFF") {
        result = await dispatch(
          applyCouponCode({ userId, planId, couponCode })
        ).unwrap();
      } else {
        toast.error("Invalid coupon code.");
        return;
      }

      toast.success(result?.message || "Coupon applied successfully!");
    } catch (error) {
      toast.error(error?.message || "Failed to apply coupon.");
      console.error("Error applying coupon:", error);
    }
  };

  // Search users when search button is clicked
  const handleSearchUser = () => {
    if (!searchTerm.trim()) return;

    setSearchedEmail(searchTerm.toLowerCase()); // Save current searched email
    dispatch(getAllUsers(searchTerm, 1, 10));
  };

  // When users update, check if user exists and show toast accordingly
  useEffect(() => {
    if (!searchedEmail) return; // No search yet

    const foundUser = users?.find(
      (user) => user.email.toLowerCase() === searchedEmail
    );

    if (foundUser) {
      setUserDetails(foundUser);
      toast.success("User found!");
    } else if (!loading && users?.length > 0) {
      setUserDetails("");
      toast.error("User not found with this email.");
    }
  }, [users, searchedEmail]);

  const handleSubscriptionChange = (event) => {
    setSubscription(event.target.value);
    setCouponCode("");
    dispatch(resetDiscountedPrice());
  };

  // Calculate total amount and quantity for basket
  const totalQuantity = userSubscriptions.length;
  const totalAmount = userSubscriptions.reduce(
    (sum, sub) => sum + sub.price,
    0
  );
  const handleRemoveSubscription = (id) => {
    setUserSubscriptions((prevSubs) =>
      prevSubs.filter((sub) => sub._id !== id)
    );
    dispatch(resetDiscountedPrice());
    toast.success("Subscription removed!");
  };

  /////////////////////////////////////////////////////
  const plan = userSubscriptions.length > 0 ? userSubscriptions[0] : null;

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
        userId: userDetails._id,
        subscriptionId: ogPlan._id,
        orderId: order.id,
        method: "PayPal",
        isTrial: false,
      };

      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
      navigate("/admin/sell-subscription");
      toast.success("subscription added");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };
  // //////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////
  const revolut15ContainerRef = useRef(null);
  const [activePlan, setActivePlan] = useState(null);
  const [revolutLoading, setRevolutLoading] = useState(false);

  const initRevolutPay = async (plan, subsdiscountedPrice) => {
    setActivePlan(plan);

    console.log("sdfsdere", plan);

    const priceToUse = subsdiscountedPrice || plan.price; // Use the updated price directly

    try {
      const { revolutPay } = await RevolutCheckout.payments({
        locale: "en",

        publicToken: "pk_6beHPJuibNeh8OnYfdQnU25E6cCQjjh0tLXsDSvy54xkmMXf", // Use env variable in prod
      });

      revolutPay.mount(revolut15ContainerRef.current, {
        currency: "GBP",
        totalAmount: Math.round(parseFloat(priceToUse) * 100),

        mobileRedirectUrls: {
          success: `${window.location.origin}/admin/sell-subscription`,
          failure: `${window.location.origin}/admin/sell-subscription`,
          cancel: `${window.location.origin}/admin/sell-subscription`,
        },

        createOrder: async () => {
          const res = await httpHandler.post(
            "/api/subscription/revolut-charge",
            {
              amount: Math.round(parseFloat(priceToUse) * 100),
              currency: "GBP",
              subscriptionId: plan._id,
              userId: userDetails._id,
            }
          );

          console.log("sa123sdasd", res);
          console.log("Asas", res.data.token);

          localStorage.setItem(
            "PdiPartOneSubsBuy",
            JSON.stringify({
              userId: userDetails._id,
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
                  userId: userDetails._id,
                }
              );
              if (res.data.success) {
                localStorage.removeItem("PdiPartOneSubsBuy");

                navigate("/part-one-theory-questions");
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
                  userId: userDetails._id,
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
                  userId: userDetails._id,
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
      {revolutLoading && <Loader2 />}
      <div className={styles.subsContainerFlex}>
        <Box className={styles.containerSubsadmin}>
          <section className={styles.headerSubsadmin2}>
            <p className={styles.headerSubsadmin}>Sell Subscription</p>
            <em>Please Search Email First then select subscription</em>
          </section>

          {/* Search Input and Button */}
          <Box className={styles.inputSectionSubsadmin}>
            <TextField
              label="Enter Email"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="medium"
              className={styles.inputFieldSubsadmin}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchUser}
              startIcon={
                loading ? (
                  <CircularProgress size={20} color="secondary" />
                ) : (
                  <SearchIcon />
                )
              }
              disabled={loading || !searchTerm.trim()}
              className={styles.searchBtnSubsadmin}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </Box>

          {/* User Details */}
          {userDetails && !loading && (
            <Card
              variant="outlined"
              className={styles.userDetailsCardSubsadmin}>
              <CardContent>
                <Typography variant="h6" className={styles.userTextSubsadmin}>
                  User Details
                </Typography>
                <Divider className={styles.dividerSubsadmin} />
                <Typography className={styles.userTextSubsadmin}>
                  <strong>Name:</strong> {userDetails.username}
                </Typography>
                <Typography className={styles.userTextSubsadmin}>
                  <strong>Email:</strong> {userDetails.email}
                </Typography>
                <Typography className={styles.userTextSubsadmin}>
                  <strong>PhoneNumber:</strong> {userDetails.phoneNumber}
                </Typography>
              </CardContent>
            </Card>
          )}

          {/* Subscription Dropdown */}
          <div className={styles.subscriptionSelectSubsadmin}>
            <div className={styles.subscriptionSelectSubsBox}>
              <FormControl fullWidth>
                <InputLabel>Select Subscription</InputLabel>
                <Select
                  value={subscription}
                  label="Select Subscription"
                  onChange={handleSubscriptionChange}>
                  {plans?.map((plan) => (
                    <MenuItem key={plan._id} value={plan._id}>
                      {plan.planname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <button
                variant="contained"
                color="secondary"
                onClick={() => {
                  const selectedPlan = plans.find(
                    (plan) => plan._id === subscription
                  );
                  if (selectedPlan) {
                    setUserSubscriptions([selectedPlan]); // only one at a time
                    toast.success("Subscription added.");
                  }
                }}
                disabled={!userDetails || !subscription}
                className={styles.submitBtnSubsadmin}>
                Add Subs
              </button>
            </div>
          </div>

          {/* Added Subscriptions */}
          {userSubscriptions.length > 0 && (
            <Box mt={4}>
              <Typography variant="h6" className={styles.userTextSubsadmin}>
                Added Subscriptions
              </Typography>
              <Divider className={styles.dividerSubsadmin} />
              {userSubscriptions.map((sub, index) => (
                <Card
                  key={sub._id}
                  variant="outlined"
                  sx={{ mt: 2 }}
                  className={styles.userDetailsCardSubsadmin2}>
                  <Typography>
                    <section className={styles.subscriptionDetailsSec}>
                      <strong>
                        {index + 1}. {sub.planname}
                      </strong>{" "}
                      <span>
                        {" "}
                        Price: €{sub.price}{" "}
                        <DeleteIcon
                          color="error"
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleRemoveSubscription(sub._id)}
                        />
                      </span>
                    </section>
                  </Typography>
                </Card>
              ))}
            </Box>
          )}
        </Box>
        {/* Basket Section */}
        <Box className={styles.containerSubsadmin2}>
          <Box
            p={2}
            border="1px solid #ccc"
            borderRadius={2}
            className={styles.basketSection}>
            <Typography variant="h6">Basket Summary</Typography>
            <div className="coupon-section">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
                className="coupon-input"
              />
              <button
                onClick={handleCouponSubmit}
                className="coupon-button"
                disabled={!userDetails || !subscription || !couponCode.trim()}>
                Apply Coupon
              </button>
            </div>
            <Divider sx={{ mb: 1 }} />
            <Typography>
              <strong>Total Quantity:</strong> {totalQuantity}
            </Typography>
            <Typography>
              {" "}
              <strong>Booking fee: </strong> <span>£ 0%</span>
            </Typography>
            <Typography>
              <strong>Total Amount:</strong> €
              {subsdiscountedPrice
                ? subsdiscountedPrice
                : totalAmount.toFixed(2)}{" "}
            </Typography>
          </Box>
          <div style={{ marginTop: "1rem" }}>
            <div>
              {" "}
              {plan && !subsdiscountedPrice ? (
                <PayPalButtons
                  createOrder={(data, actions) =>
                    handleCreateSubscription(plan, subsdiscountedPrice)
                  }
                  onApprove={(data, actions) =>
                    handleApprovePayment(plan, actions)
                  }
                  fundingSource="paypal"
                  disabled={subsdiscountedPrice}
                />
              ) : (
                <></>
              )}
            </div>

            {plan && subsdiscountedPrice ? (
              <PayPalButtons
                createOrder={(data, actions) =>
                  handleCreateSubscription(plan, subsdiscountedPrice)
                }
                onApprove={(data, actions) =>
                  handleApprovePayment(plan, actions)
                }
                fundingSource="paypal"
              />
            ) : (
              <></>
            )}
          </div>
          <div style={{ marginTop: "1rem" }}>
            {" "}
            <>
              {plan && !subsdiscountedPrice ? (
                <div style={{ marginBottom: "20px" }}>
                  <button
                    className={styles.revolutbutton}
                    onClick={() => initRevolutPay(plan, subsdiscountedPrice)}
                    disabled={subsdiscountedPrice}>
                    Pay with Revolut
                  </button>
                  {activePlan?._id === plan._id && (
                    <div className={styles.revolutbuttoncontainer}>
                      <div
                        ref={revolut15ContainerRef}
                        className="revolut-pay-button"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </>
            {plan && subsdiscountedPrice ? (
              <div style={{ marginBottom: "20px" }}>
                <button
                  className={styles.revolutbutton}
                  onClick={() => initRevolutPay(plan, subsdiscountedPrice)}>
                  Pay with Revolut
                </button>
                {activePlan?._id === plan._id && (
                  <div className={styles.revolutbuttoncontainer}>
                    <div
                      ref={revolut15ContainerRef}
                      className="revolut-pay-button"
                    />
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </Box>
      </div>
    </>
  );
}
