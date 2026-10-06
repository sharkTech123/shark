// import React from 'react'
import styles from "./css/IntensiveCourses.module.css";
import ClockImg from "../assets/images/clock.png";
import { useState } from "react";
import DrivenForm from "../components/forms/DrivenForm"
import CallBackForm from "../components/forms/CallBackForm"
import {
  FaSearch,
  FaCarSide,
  FaRegMoneyBillAlt,
  FaBookOpen,
  FaTrophy,
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import {  FaCommentSms } from "react-icons/fa6";


export default function Products() {
  

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContent = [
    {
      question: "Manual Vs. Automatic",
      answer: [
        "Manual Vs. Automatic is one of the tougher choices for a new driver to make. Both sides have their benefits.",
        "If you choose auto there is no need to worry about clutch control and gear changes. Some drivers can find these topics quite challenging to learn.",
        "Choose manual, and you will often save money on the car, the insurance and servicing. If you pass in manual you can also drive an automatic without having to take another driving test!",
        "Whichever side you ultimately decide on, SmartLearner can help you achieve your driving goals. We have both manual and automatic driving instructors in the West Midlands and Warwickshire. Just specify when booking, and we will make it happen!",
      ],
    },
    {
      question: "How can I get help with my theory?",
      answer: [
        "If your struggling with prep for your theory test then there no need to worry. Before you start preparing for your practical test—there’s still the matter of the theory test to get through. After all, you’ll need a valid theory test pass in order to book a practical test—so getting this out of the way early is vital",
        "Luckily, if you haven’t yet passed this hurdle SmartLearner Driving School offer 1-2-1 theory support to ensure you pass your theory first time.",
      ],
    },
  ];
  return (
    <div className={styles.intensiveCourses}>
      <section className={styles.intensiveCoursesBanner}>
        <div className={styles.intensiveCoursesHead}>
          <div className={styles.intensiveCoursesHeadDetails}>
            <div className={styles.head1}>
              <h1>INTENSIVE DRIVING COURSES</h1>
            </div>

            <div className={styles.head2}>
              <h2>Drive slow, pass fast!</h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.intensiveCoursesImage}>
            <img src={ClockImg} alt="ClockImg" />
          </div>
        </div>
      </section>
      {/* --------------------------------Drivin Section------------------------------------------- */}
      <section className="driverSection" style={{ backgroundColor: "#ffd840" }}>
       <DrivenForm/>
      </section>
      {/* ////////////////////////// Intensive Courses Details ///////////////////////////// */}

      <section className={styles.intensiveCoursesDetails}>
        <div className={styles.intensivedetailsHeading}>
          <h1>Intensive Driving Courses</h1>
        </div>
        <div className={styles.intensiveDetailsParagraph}>
          <p>
            If you’ve never taken any driving lessons before, it can sometimes
            be difficult to know where to start. How do you choose the right
            driving instructor? Should you choose to learn in a manual or
            automatic car? Would you benefit from an intensive driving course?
          </p>
          <p>
            At SmartLearner Driving School we offer both Intensive Driving
            Courses and standard Driving Lessons. If you decided to do an
            intensive driving lessons it means that you will be passing much
            faster than with traditional lessons. We understand that every
            learner’s needs are different so we let you decide how you structure
            your course. SmartLearner offers a range of course options.
            Intensive courses with us can range from 6 hours per week to 6 hours
            per day.
          </p>
          <p>
            All of our driving lessons are one-on-one, meaning that you’ll have
            the full and undivided attention of your local DVSA-approved driving
            instructor.
          </p>
        </div>
      </section>
      {/* ////////////////////////////Book now section ///////////////////// */}
      <section className={styles.sectionContainer}>
        <div className={styles.iconDiv}>
          <FaCarSide className={styles.iconCar} />
        </div>
        <div className={styles.headingDiv}>
          <h1>Book Your Intensive Driving Course</h1>
        </div>
        <div className={styles.buttonDiv}>
          <a href="tel:+123456789">
            <button id={styles.buttonDiv}>Call Us</button>
          </a>
        </div>
      </section>
      {/* //////////////////////////// Why choose section ////////////////////////////*/}
      <section className={styles.features}>
        <h4>Why choose SmartLearner?</h4>
        <p>
          SmartLearner Driving School are dedicated to making sure they make
          driving instructor training high-quality and affordable!
        </p>
        <div className="mainFeatures">
          <div className="column">
            <span>
              <FaTrophy id="featuresIcon" />
            </span>

            <h3>Award Winning Service</h3>
            <p>
              In 2021 and 2022, SmartLearner Driving School was voted the best
              regional driving school in the UK!
            </p>
          </div>
          <div className="column">
            <span>
              <FaRegMoneyBillAlt id="featuresIcon" />
            </span>

            <h3>Affordable Prices</h3>
            <p>
              We are always looking at industry prices to ensure our learners
              get the best-valued lessons!
            </p>
          </div>
          <div className="column">
            <span>
              <FaCommentSms id="featuresIcon" />
            </span>

            <h3>Automated SMS Alerts</h3>
            <p>
              You will receive SMS alerts on your phone to remind you of your
              lesson.
            </p>
          </div>
          <div className="column">
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

      {/* ///////////////////////// intensive driving and form ////////////////////////////// */}
      <section className={styles.intensiveDrivingInfoSection}>
        <div className={styles.intensivedrivingQA}>
          <h1>What is an intensive driving course?</h1>
          <p>
            An intensive course, or ‘crash course’ as its otherwise known, is a
            phrase used to express a lot hours of driving lessons in a short
            amount of time. Our definition means that you would take over 6
            hours in a week or 5 hours in one day. Intensive courses are aimed
            to make learners pass their practical exam as fast as they can and
            most intensive courses end with a test. This means that you must of
            passed your theory exam before being considered for an intensive
            course. We also like to do an assessment lesson before hand so that
            one of our qualified ADI’s can give you an estimated amount of hours
            you will need. We offer intensive courses in both automatic and
            manual.
          </p>
        </div>
        <div className={styles.intensivedrivingFormContainer}>
       <CallBackForm/>
        </div>
      </section>
      {/* /////////////////////////////// Tab Questions ///////////////////////////// */}
      <section className={styles.tabsection}>
        <div className={styles.tabs}>
          {tabContent.map((tab, index) => (
            <div
              key={index}
              className={`${styles.tab} ${
                index === activeTab ? styles.active : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.question}
            </div>
          ))}
        </div>
        <div className={styles.tabContent}>
          <div>
            {tabContent[activeTab].answer.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      {/* //////////////////////Which Area Smartlearner cover ///////////////////// */}
      <section className={styles.coverAreaSection}>
        <div className={styles.coverAreaHeading}>
          <h1>Which Areas Does SmartLearner Cover?</h1>
        </div>
        <div className={styles.smartlearnerArea}>
          <div className={styles.smartlearnerAreaDetailsSection1}>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Coventry</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Nuneaton</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Bedworth</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Lutterworth</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Rugby</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Southam</p>
            </div>
          </div>
          <div className={styles.smartlearnerAreaDetailsSection2}>
          <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Kenilworth</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Solihull</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>South Birmingham</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Acocks Green</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Leamington Spa</p>
            </div>
            <div className={styles.smartlearnerAreaDetails}>
              <FaCheck id={styles.FaCheckDetailsIcon}/>
              <p>Warwick</p>
            </div>
          </div>
        </div>
      </section>
       {/* /////////////////// Reviews section /////////////////*/}

 <section className={styles.facebookReviewsSection}>
        
        <div className={styles.facebookReviewsContainer}>
        <h4 id={styles.heading1}>Our Reviews</h4>
        <hr />
          <div className={styles.reviewsList}>

          </div>
          <div className={styles.followUsLinks}>
            <h4>Follow us!</h4>
            <hr />
            <div className={styles.socialFollowIcons}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook id={styles.FollowIcons} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram id={styles.FollowIcons}  />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSnapchat id={styles.FollowIcons}  />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter id={styles.FollowIcons}  />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube id={styles.FollowIcons}  />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
