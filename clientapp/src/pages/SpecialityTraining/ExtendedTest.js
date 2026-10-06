// import React from 'react'
import styles from "./ExtendedTest.module.css";
import carSideimg from "../../assets/images/car-red.png";
import { GoPlay } from "react-icons/go";
import {
  FaRegMoneyBillAlt,
  FaBookOpen,

} from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import  { useState, useEffect } from 'react';
import ShortFaqs from "../../components/shortFaqs/ShortFaqs";
import EnquiryForm from "../../components/forms/EnquiryForm";




export default function ExtendedTest() {

  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1(prevValue => {
        const newValue = prevValue + 1;
        return newValue >= 72 ? 72 : newValue;
      });
      setAnimatedValue2(prevValue => {
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
              <h1>Extended Test TRAINING</h1>
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
        <h2>Do you need Extended Driving Test Training?</h2>
        <p>
          Have you been convicted of a driving offence that resulted in a ban?
          If so you will need extended test training. Once the disqualification
          period has ended you will need to apply to get a new provisional
          driving licence and re-take your theory test (For more information go
          <a href="">Here.</a>) Once you have passed your theory you will then
          be able to retake your driving test. It will be an extended driving
          test.
        </p>
        <p>
          Contact Smart Learner and we will arrange an assessment lesson with
          one of our fully-qualified and experienced instructors. On the
          assessment lesson, they will then discuss with you what you will need
          to do to pass your extended practical driving test.
        </p>
      </section>

      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
      <section>
        <EnquiryForm/>
      </section>
    

      {/* //////////////////////////// Why choose section */}
      <section className={styles.features}>
        <h4>Why choose SmartLearner?</h4>
      
        <div className={styles.mainFeatures}>
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
              <FaCommentSms id="featuresIcon" />
            </span>

            <h3>Automated SMS Alerts</h3>
            <p>
              You will receive SMS alerts on your phone to remind you of your
              lesson.
            </p>
          </div>
          <div className={styles.column}>
          <span>
              <FaBookOpen id="featuresIcon" />
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
          <p>72% of pupils pass first time. This is 25% higher then that national average!</p>
        </div>
        <div className={styles.numberContainer}>
          <span>{animatedValue2}%</span>
          <p id={styles.statslowerheading}>WOULD RECOMMEND US</p>
          <p>98% of people who have passed with us said they would recommend us to their friends and family.</p>
        </div>
      </div>
      </section>
    </div>
    

      {/*  ////////////////////////Faqs ////////////////////// */}

      <section >
       <ShortFaqs/>
      </section>
    </div>
  );
}
