import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/notfound.module.css";
import { removingCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import smartlearnerLogo from "../assets/images/smartlearnerLogo-removebg-preview.png";
import httpHandler from "../utils/httpHandler";

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const orderId = localStorage.getItem("lastOrderId");
      if (!orderId) return;
      try {
        const res = await httpHandler.post(
          "/api/order/revolut-payment-success",
          {
            orderId,
          }
        );

        if (res.data.success) {
          localStorage.removeItem("lastOrderId"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment();
  }, []);

  // ///////////////////////////////
  useEffect(() => {
    const verifyPayment2 = async () => {
      const subscriptionData2 = localStorage.getItem("CompletePdiBuy");

      if (!subscriptionData2) return;

      try {
        const parsedData = JSON.parse(subscriptionData2);
        const res = await httpHandler.post(
          "/api/subscription/revolut-payment-success",
          {
            parsedData,
          }
        );

        if (res.data.success) {
          localStorage.removeItem("CompletePdiBuy"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment2();
  }, []);

  // ////////////////////////////

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({}));
      dispatch(removingCart());
    }
  });
  return (
    <section className={styles.page405}>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <img id={styles.whiteLogo} src={smartlearnerLogo} alt="logo" />
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colSm} ${styles.colSm12}`}>
            <div
              className={`${styles.colSm} ${styles.colSm10} ${styles.colSmOffset1} ${styles.textCenter}`}>
              <div className={styles.paymetSucces}>
                <h1>Payment Success</h1>
              </div>
              <div className={styles.contentBox404}>
                <h2>Congratulations</h2>
                <p style={{ fontSize: "1rem" }}>
                  {" "}
                  Congratulations your payment has been successful. Please
                  contact us on +4402475092784 to get started
                </p>
              </div>
              <div className={styles.formFooter2222}>
                <Link type="button" to={"/home"}>
                  Proceed to Home Page
                </Link>
              </div>
              <div className={styles.formFooter3333}>
                <div className={styles.formFooter2222}>
                  <Link type="button" to="/part-one-theory-questions">
                    PDI Part 1
                  </Link>
                </div>
                <div className={styles.formFooter2222}>
                  <Link type="button" to="/part-two-theory-questions">
                    PDI Part 2
                  </Link>
                </div>
                <div className={styles.formFooter2222}>
                  <Link type="button" to="/part-three-theory-questions">
                    PDI Part 3
                  </Link>
                </div>
              </div>
              <div className={styles.formFooter2222}>
                {/* <Link type="button" to="/Theory-Portal">
                  Theory Portal
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
