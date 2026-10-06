import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import profileImg from "../../../assets/images/car-red.png";
import MyOrders from "../../shop/myOrders/MyOrders";
import { Link } from "react-router-dom";

import { fetchUserSubscriptions } from "../../../redux/features/subscriptionSlice";
import { Helmet } from "react-helmet-async";

export default function MyAccount() {
  // Get user details from Redux state
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
  }, [dispatch, userId]);

  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );

  const subscriptionPlanName =
    userSubscription.length > 0
      ? userSubscription[0].subscriptionId.planname
      : "No Subscription";

  return (
    <div
      style={{
        backgroundColor: "black",
        fontFamily: "'Antonio', sans-serif",
        color: "white",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Account</title>
      </Helmet>
      <h2
        style={{
          background: "linear-gradient(45deg, var(--pink), var(--purple) 60%)",
          WebkitBackgroundClip: "text", // For Safari, Chrome
          backgroundClip: "text", // For other browsers
          color: "transparent",
          fontSize: "4rem",
          textAlign: "center",
        }}
      >
        MyAccount
      </h2>
      <div
        className="rounded shadow-lg"
        style={{
          backgroundColor: "black",
          gap: "30px",
          padding: "5rem 2rem",
          maxWidth: "1140px",
          margin: "0px auto",
        }}
      >
        <div className="d-flex flex-column bg-dark p-4 rounded shadow-md w-100 w-md-67 mt-4 mt-md-0 ml-md-4">
          <div className="d-flex justify-content-between mb-4">
            <span
              className="font-weight-semibold"
              style={{
                background:
                  "linear-gradient(45deg, var(--pink), var(--purple) 60%)",
                WebkitBackgroundClip: "text", // For Safari, Chrome
                backgroundClip: "text", // For other browsers
                color: "transparent",
                fontSize: "1.7rem",
              }}
            >
              Full Name
            </span>
            <span
              className="font-weight-semibold"
              style={{ fontSize: "1.5rem" }}
            >
              {userDetails.username || "N/A"}
            </span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span
              className="font-weight-semibold"
              style={{
                background:
                  "linear-gradient(45deg, var(--pink), var(--purple) 60%)",
                WebkitBackgroundClip: "text", // For Safari, Chrome
                backgroundClip: "text", // For other browsers
                color: "transparent",
                fontSize: "1.7rem",
              }}
            >
              Email
            </span>
            <span
              className="font-weight-semibold"
              style={{ fontSize: "1.5rem" }}
            >
              {userDetails.email || "N/A"}
            </span>
          </div>

          <div className="d-flex justify-content-between mb-4">
            <span
              className="font-weight-semibold"
              style={{
                background:
                  "linear-gradient(45deg, var(--pink), var(--purple) 60%)",
                WebkitBackgroundClip: "text", // For Safari, Chrome
                backgroundClip: "text", // For other browsers
                color: "transparent",
                fontSize: "1.7rem",
              }}
            >
              Role
            </span>
            <span
              className="font-weight-semibold"
              style={{ fontSize: "1.5rem" }}
            >
              {userDetails.role || "N/A"}
            </span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span
              className="font-weight-semibold"
              style={{
                background:
                  "linear-gradient(45deg, var(--pink), var(--purple) 60%)",
                WebkitBackgroundClip: "text", // For Safari, Chrome
                backgroundClip: "text", // For other browsers
                color: "transparent",
                fontSize: "1.7rem",
              }}
            >
              Subscription
            </span>
            <span
              className="font-weight-semibold"
              style={{ fontSize: "1.5rem" }}
            >
              {subscriptionPlanName}
            </span>
          </div>
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <button className="btn btn-info text-white align-self-start">
              Forgot Password
            </button>
          </Link>
        </div>
      </div>

      <MyOrders />
    </div>
  );
}
