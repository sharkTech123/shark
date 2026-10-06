import React from "react";
import styles from "./css/LoginRegister.module.css";
import { Link } from "react-router-dom";

export default function PaymentCompleted() {
  return (
    <div className={styles.loginRegisterPage}>
      <section className={styles.loginRegisterSection}>
        <div className={styles.loginheading}>
          <h1>{"Welcome"}</h1>
          <p>Thanks for choosing SmartLearner Driving School.</p>
        </div>
        <div className={styles.loginformContainer}>
          <section className={styles.loginRegistration}>
            <h2> Congratulations </h2>
            <p>
              Congratulations your payment has been successful. Please contact
              us on +4402475092784 to get started
            </p>
          </section>
          <div className={styles.formFooter}>
            <Link type="button" to={"/home"}>
              Proceed to Home Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
