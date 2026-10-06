import React from "react";
import styles from "./Email.module.css"
import smartlearnerlogo from "../../assets/images/smartlearnerLogo.png"
export default function Email() {
  return (
    <div className={styles.emailReceivedPage}>
      <div className={styles.emailReceivedContainer}>
        <img src={smartlearnerlogo} alt="" style={{maxWidth:'250px', width:'100%'}}/>
        <h1>Email Received</h1>
        <p>
          Here is the information of Sender:
        </p>
        <div className={styles.detailsContainer}>
          <p>
            <strong>First Name:</strong> John
          </p>
          <p>
            <strong>Last Name:</strong> Doe
          </p>
          <p>
            <strong>Address:</strong> 123 Main St, Anytown, USA
          </p>
          <p>
            <strong>Postal Code:</strong> 12345
          </p>
          <p>
            <strong>Mobile No:</strong> +1 234 567 8900
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Tution Type:</strong> Auto
          </p>
          <p>
            <strong>Instructor Type:</strong> Male
          </p>
          <p>
            <strong>Message:</strong> Looking forward to starting lessons!
          </p>
        </div>
      </div>
    </div>
  );
}
