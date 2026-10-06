// import React from 'react'
import CallBackForm from "../../components/forms/CallBackForm";
import BookTestImg from "../../assets/images/booktest.jpg";
import styles from "./TheoryPortal.module.css";
import CountDown from "./countdown/CountDown";
import {
  FaExclamation,
  FaAngry,
  FaCar,
  FaRuler,
  FaExclamationTriangle,
  FaWalking,
  FaTruck,
  FaCarCrash,
  FaCarSide,
  FaRoad,
  FaMapSigns,
  FaIdCard,
  FaUserInjured,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSubscriptions } from "../../redux/features/subscriptionSlice";
import starImg from "../../assets/images/yellowStar.png";
import { Helmet } from "react-helmet-async";
import { useRef } from "react";
import httpHandler from "../../utils/httpHandler";

import gsap from "gsap";
import HomeBanner from "../../components/ui/HomeBanner";

export default function TheoryPortal() {
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userId = userDetails?._id;

  const [subscriptionLoaded, setSubscriptionLoaded] = useState(false); // Track when subscription data is loaded

  useEffect(() => {
    // If user is logged in and userId exists, fetch subscription data
    if (userId) {
      dispatch(fetchUserSubscriptions(userId))
        .then(() => setSubscriptionLoaded(true)) // Set subscriptionLoaded to true once data is fetched
        .catch(() => setSubscriptionLoaded(true)); // Handle error and set subscriptionLoaded to true
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/theory-login");
    } else if (
      userDetails.role === "admin" ||
      userDetails.role === "theoryinstructor"
    ) {
      return;
    } else if (subscriptionLoaded) {
      const hasAccess =
        Array.isArray(userSubscription) &&
        userSubscription.some((subscription) => {
          const { planCategory } = subscription.subscriptionId || {};
          const { couponApplied } = subscription;

          return (
            subscription.isActive &&
            (planCategory === "theory-portal package" ||
              planCategory === "theory-portal free-trial")
          );
        });
      if (!hasAccess) {
        navigate("/Theory-Support/Theory-package");
      }
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);

  // ///////////////////////////////////////////////
  useEffect(() => {
    const verifyPayment = async () => {
      const subscriptionData2 = localStorage.getItem("TheorySubsBuy");

      if (!subscriptionData2) return;

      try {
        const parsedData = JSON.parse(subscriptionData2);
        const res = await httpHandler.post(
          "/api/subscription/revolut-payment-success",

          parsedData,
        );

        if (res.data.success) {
          localStorage.removeItem("TheorySubsBuy"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment();
  }, []);

  ///////////////////////////////////////////////////////////////////

  return (
    <div className={styles.TheoryPortal}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Theory Lessons & Resources</title>
        <meta
          property="og:title"
          content="Driving Theory Lessons & Resources"
        />
        <meta
          property="og:description"
          content="Prepare for your driving test with our comprehensive theory lessons."
        />

        <link rel="canonical" href="https://smartlearner.com/Theory-Portal" />
        <meta
          name="description"
          content="Prepare for your driving test with our comprehensive theory lessons."
        />
      </Helmet>
      <HomeBanner />

      {/* //////////////////////////////////// */}
      <section className={styles.theoryTestSectionQ}>
        <div className={styles.theoryTestDivQ}>
          <h2>
            What is a <span>theory test?</span>
          </h2>
          <hr />
          <p>
            The theory test is made up of two sections, multiple-choice and
            hazard perception. You will sit both parts on the same day, first
            the multiple choice section, followed by the hazard perception. You
            must pass both parts of the test to receive your certificate.
          </p>
        </div>
      </section>
      {/* //////////////////////////////////// */}
      <div className={styles.choicesSectionTheoryPortal123}>
        <section className={styles.choicesSectionTheoryPortal}>
          <div className={styles.choicesDivTheoryPortal}>
            <div
              id={styles.choiceIdMc}
              className={styles.ChoicesContentContainer}
            >
              <section>
                <h2>Multiple-choice</h2>
                <hr />
                <p>
                  You have 57 minutes to answer 50 multiple-choice questions.
                  Before the test starts you’ll get instructions on how the test
                  works & the chance to do some practice questions to get used
                  to the screens.
                </p>
                <p>
                  A question and 4 possible answers appear on a screen. You have
                  to select the right answer. However, the final three questions
                  of the exam will be about a short video. It will show a normal
                  driving situation the video is silent and you can watch it as
                  many times as you like during the test.
                </p>
                <p>
                  You can finish the multiple-choice questions part when you’ve
                  answered all of the questions. You do not have to use the full
                  57 minutes. You can have a break of up to 3 minutes before the
                  hazard perception test starts.
                </p>
              </section>
            </div>
            <div
              id={styles.choiceIdHP}
              className={styles.ChoicesContentContainer}
            >
              <div>
                <h2>Hazard Perception</h2>
                <hr />
                <p>
                  Before you start the hazard perception test, you’ll be shown a
                  video about how it works. You’ll then watch 14 video clips.
                  The clips will show everyday road scenes and contain at least
                  one ‘developing hazard’.
                </p>
                <p>
                  One of the clips will feature 2 developing hazards in the same
                  clip. You get points for spotting the developing hazards as
                  soon as they start to happen.
                </p>
                <p>
                  You can score up to 5 points for each developing hazard. To
                  get a high score, click the mouse as soon as you see the
                  hazard starting to develop. You do not lose points if you
                  click and get it wrong. However, you will not score anything
                  if you click continuously or in a pattern. Beware, you only
                  get one attempt at each clip. You cannot review or change your
                  responses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* //////////////////////////////////////////////////////// */}

      <div className={styles.theoryPortalYoutubeVideosSection123}>
        <section className={styles.theoryPortalYoutubeVideosSection}>
          <div className={styles.theoryPortalYoutubeVideosDiv}>
            <iframe
              style={{
                borderRadius: "30px",
                boxShadow: "0 3px 10px rgba(255, 255, 255, 0.644)",
              }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7womeV0brCo?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fsmartlearner.com&widgetid=1"
              title="YouTube video player"
            ></iframe>
          </div>
        </section>
      </div>

      {/* ////////////////////////////////////////////////////////////// */}
      <section className={styles.thchoiceListSection}>
        <section className={styles.features}>
          <div className={styles.mainFeatures}>
            <div className={styles.column}>
              <Link to="/hazard-perception">
                <span>
                  <FaBoxOpen id={styles.featuresIcon} />
                </span>
                <h3>Hazard perception</h3>
              </Link>
            </div>
            <div className={styles.column} id={styles.column}>
              <Link to="/mcq-Part1">
                {" "}
                <span>
                  <FaBoxOpen id={styles.featuresIcon} />
                </span>
                <h3>Mock test</h3>
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* //////////////////////////////////////////////////////////////// */}

      <section className={styles.thAdditionalSupportSection}>
        <div className={styles.thAdditionalSupportHeader}>
          <h2>
            Additional <span>Support</span>
          </h2>
        </div>
        <div className={styles.thAdditionalSupportformAndMap}>
          <div className={styles.thAdditionalSupport2ndHeader}>
            <h2>
              1-<span>2</span>-1 Theory <span>Support</span>
            </h2>
            <hr />
            <section>
              <p>
                SmartLearner Driving School offers online 1-2-1 theory support
                with experienced and dedicated tutors to help you with your
                driving theory test practice. Our tutors will do an assessment
                to gauge your current ability and from there they will craft a
                unique learning plan. They will ensure you cover all of the
                topics and questions that can come up in your theory exam. This
                will make sure that you pass your theory test with ease.
              </p>
              <p>
                We are dedicated to ensure superb customer service and
                understand that every theory pupil has a unique learning style.
                When you choose SmartLearner Theory Support you have full
                control over the time and duration of your theory lessons. At
                SmartLearner we use official DVSA materials to ensure that you
                are learning from relevant and current sources.
              </p>
            </section>
          </div>
          <div className={styles.callBackFormAndMap}>
            <div className={styles.formmap}>
              <CallBackForm />
            </div>

            <div className={styles.formmap}>
              {/* Embed your map here, such as Google Maps iframe */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2431.76492499033!2d-1.510095!3d52.447173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870c1a41cee7455%3A0x371db3a56741de7!2sSmartLearner%20Driving%20School!5e0!3m2!1sen!2sin!4v1719565626829!5m2!1sen!2sin"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ borderRadius: "30px" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////////////// */}
      <section>
        <div className={styles.thAdditionalSupportHeader}>
          <h2>
            Book Your <span>Theory</span>
          </h2>
        </div>
      </section>

      {/* ///////////////////////////////////////////////////////////// */}
      <section className={styles.thFooterSection}>
        <div className={styles.thFooterDiv}>
          <h2>
            Are You <span>Ready?</span>{" "}
          </h2>
          <hr />
          <a href="https://www.gov.uk/book-theory-test">
            <img src={BookTestImg} alt="BookTestImg" />
          </a>
        </div>
      </section>

      {/* //////////////////////////////////////////////////// */}
    </div>
  );
}
