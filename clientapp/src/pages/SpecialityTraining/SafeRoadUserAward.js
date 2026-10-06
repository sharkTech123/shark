// import React from 'react'

import styles from "./ExtendedTest.module.css";
import carSideimg from "../../assets/images/car-red.png";
import { GoPlay } from "react-icons/go";
import {
  FaBookOpen,
} from "react-icons/fa";
import EnquiryForm from "../../components/forms/EnquiryForm";


export default function SafeRoadUserAward() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.overlay}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>ROAD SAFE USER AWARD</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Forget The Rest,
                <br /> Learn With The Best!
              </h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.video}>
            <a href="/">
              <img src={carSideimg} alt="LogoImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>
      {/* //////////////////////////////body details//////////////////////////// */}
      <section className={styles.ExtendedTestBodyDetails}>
        <FaBookOpen id={styles.featuresIconSRU}/>
        <h2>What is the Safe Road User Award</h2>
        <p>
          The ‘Safe Road User Award’ is an NVQ Level 1 which was developed in
          collaboration with the Driving and Vehicle Standards Agency (DVSA) and
          stems directly from recent initiatives by the UK Government to bring
          about changes in driving attitudes in the UK. The aim of the Safe Road
          User Award is to build positive attitudes towards road use and to help
          young people to take responsibility for using the roads safely. There
          is also a possibility for funding if you are between the ages of 15-24
          and located in the West Midlands.
        </p>
      </section>

      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
      <section>
        <EnquiryForm />
      </section>
    </div>
  );
}
