// import React from 'react'
import styles from "./StantardCheckTest.module.css";
import Lplateimg from "../../assets/images/smartlearnerLogo-removebg-preview.png";
import { GoPlay } from "react-icons/go";
import {
  FaUserTie,
  FaRegMoneyBillAlt,
  FaBusinessTime,
  FaUserClock,
  FaCarSide,
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import EnquiryForm from "../../components/forms/EnquiryForm";

export default function StantardCheckTest() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <div className={styles.StantardCheckTest}>
      <section className={styles.imageSection}>
        <div className={styles.overlay}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Standard Check Test</h1>
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
              <img src={Lplateimg} alt="LogoImg" />
              
            </a>
          </div>
        </div>
      </section>

      {/* //////////////////////////////standard check training //////////////////////////// */}
      <section className={styles.StantardCheckTraining}>
        <div className={styles.sctHeading}>
          <h4>Standards check training</h4>
        </div>
        <div className={styles.sctparagraph}>
          <div className={styles.sctparagraph1}>
          <p>
            The approved driving instructor standards check assesses your
            ability to teach pupils.
          </p>
          <p>
            You’ll get a letter from the driver and Vehicle Standards Agency
            when you need to book your ADI standards check.
          </p>
          <p>
            You have to take a standards check even if you do not have a car or
            are not working as an ADI.
          </p>
          </div>
          <div className={styles.sctparagraph2}>
          <p>
            <strong>
              You can be removed from the ADI register if you do not book or go
              to your standards check.
            </strong>
          </p>
          <p><a href="">click here to book your Standards Check Test</a></p>
          </div>
         
        </div>
      </section>

      {/* ////////////////////////////Book now section ///////////////////// */}
      <section className={styles.sectionContainer}>
        <div className={styles.iconDiv}>
          <FaCarSide className={styles.iconCar} />
        </div>
        <div className={styles.headingDiv}>
          <h1>Become a Driving Instructor!</h1>
        </div>
        <div className={styles.buttonDiv}>
          <a href="tel:+123456789">
            <button id={styles.buttonDiv}>Call Us</button>
          </a>
        </div>
      </section>
      {/* //////////////////////////// Why choose section */}
      <section className={styles.features}>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <span>
              <FaRegMoneyBillAlt id={styles.featuresIcon} />
            </span>

            <h3>Earn Over £30,000</h3>
            <p>An average full-time instructor will earn over £30K per year!</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserTie id={styles.featuresIcon} />
            </span>

            <h3>Be Your Own Boss</h3>
            <p>When you are an instructor you`re the boss.</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaBusinessTime id={styles.featuresIcon} />
            </span>

            <h3>Flexible Working Hours</h3>
            <p>Work hours that suit you and your family.</p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserClock id={styles.featuresIcon} />
            </span>

            <h3>Full Office Support</h3>
            <p>We offer full office support to help ensure you succeed.</p>
          </div>
        </div>
      </section>

       {/*///////////////////////////////// Enquire Form/////////////////////////// */}
       <section >
       <EnquiryForm/>
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
