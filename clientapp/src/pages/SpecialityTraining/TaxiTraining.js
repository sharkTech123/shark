// import React from 'react'
import styles from "./ExtendedTest.module.css";
import TaxiImg from "../../assets/images/texiImg.png";
import { GoPlay } from "react-icons/go";
import {
  FaTaxi,
  FaRegMoneyBillAlt,
  FaBookOpen,
  FaTrophy,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaCommentSms } from "react-icons/fa6";
import EnquiryForm from "../../components/forms/EnquiryForm";
import ShortFaqs from "../../components/shortFaqs/ShortFaqs";
import Review from "../../components/views/Review";


export default function TaxiTraining() {
  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 72 ? 72 : newValue;
      });
      setAnimatedValue2((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 98 ? 98 : newValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.overlay}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>TAXI TRAINING</h1>
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
              <img src={TaxiImg} alt="TaxiImg" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>
      {/* //////////////////////////////body details//////////////////////////// */}
      <section className={styles.ExtendedTestBodyDetails}>
        <FaTaxi id={styles.featuresIconSRU} />
        <h2>Do you need an Taxi Training?</h2>
        <p>
          If you are thinking of beginning a new career as a taxi or private
          hire driver, then you may need to take a taxi driving test depending
          on your local authority. The taxi assessment will allow you to work as
          a private hire or taxi driver and accept fare for paying passengers. A
          step you should take before committing to the test is to consider
          taking professional taxi training prior to taking the test.
        </p>
      </section>

      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
      <section>
        <EnquiryForm />
      </section>
      {/* //////////////////////////// Why choose section ////////////////////////////*/}
      <section className={styles.features}>
        <h4>Why choose SmartLearner?</h4>
        <p>
          SmartLearner Driving School are dedicated to making sure they make
          driving instructor training high-quality and affordable!
        </p>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <span>
              <FaTrophy id={styles.featuresIcon} />
            </span>

            <h3>Award Winning Service</h3>
            <p>
              In 2021 and 2022, SmartLearner Driving School was voted the best
              regional driving school in the UK!
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaRegMoneyBillAlt id={styles.featuresIcon} />
            </span>

            <h3>Affordable Prices</h3>
            <p>
              We are always looking at industry prices to ensure our learners
              get the best-valued lessons!
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaCommentSms id={styles.featuresIcon} />
            </span>

            <h3>Automated SMS Alerts</h3>
            <p>
              You will receive SMS alerts on your phone to remind you of your
              lesson.
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaBookOpen id={styles.featuresIcon} />
            </span>

            <h3>Unique Learning Plans</h3>
            <p>
              Our instructors cater to your unique learning styles and create
              lesson plans around them.
            </p>
          </div>
        </div>
      </section>
      {/* ////////////////////////smartlearner stats ///////////////////////////////// */}
      <div className={styles.smartleanerStats}>
        <section className={styles.smartleanerStatsSection}>
          <h3>THE STATS</h3>
          <div className={styles.statsContaier}>
            <div className={styles.numberContainer}>
              <span>{animatedValue1}%</span>
              <p id={styles.statslowerheading}>PASS FIRST TIME</p>
              <p>
                72% of pupils pass first time. This is 25% higher then that
                national average!
              </p>
            </div>
            <div className={styles.numberContainer}>
              <span>{animatedValue2}%</span>
              <p id={styles.statslowerheading}>WOULD RECOMMEND US</p>
              <p>
                98% of people who have passed with us said they would recommend
                us to their friends and family.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* //////////////////////FAQS///////////////////// */}
      <section>
        <ShortFaqs />
      </section>
      {/* //////////////////////////Reviews /////////////////// */}
      <section>
        <Review />
      </section>
    </div>
  );
}
