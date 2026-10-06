// import React from 'react'
import styles from "./SchoolofMomDad.module.css";
import testRoutesImg1 from '../../assets/images/Screenshot-2023-02-09-110346-150x150.jpg'
import testRoutesImg2 from "../../assets/images/Screenshot-2023-02-09-110505-150x150.jpg"
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function SchoolOfMomDad() {
  return (
    <div className={styles.SchoolOfMomDad}>
      <section className={styles.schoolHeadingSection}>
        <div className={styles.schoolHeading}>
          <h2>School of Mum and Dad</h2>
          <hr />
        </div>
      </section>

      {/* ////////////////////////////////practice section/////////////////////////  */}
      <section className={styles.practiceSection}>
        <div className={styles.practiceContainer}>
          <div className={styles.practiceHeading}>
            <h4>Practising with family or friends</h4>
            <hr />
          </div>
          <div className={styles.practiceParagraph}>
            <p>
              Anyone you practice your driving with must have the following:
            </p>
            <p>-Be over 21 years old.</p>
            <p>
              -Be qualified to drive the type of vehicle you want to learn in,
              for example, they must have a manual car licence if they’re
              supervising you in a manual car.
            </p>
            <p>– Have had their full driving licence for 3 years.</p>
            <p>
              You need your own insurance as a learner driver if you are
              practising in a car you own. Your family member or friend will
              usually be covered on this.
            </p>
            <p>
              If you are practising in someone elses car you need to either:{" "}
            </p>
            <p>
              – Make sure you are covered by the car owner’s insurance policy as
              a learner driver.
            </p>
            <p>
              – Take out your own insurance policy that covers your driving in
              the car as a learner driver.
            </p>
          </div>
        </div>
      </section>

      {/* ///////////////////////////////Driving Test Routes///////////////////////////////// */}
      <section className={styles.testRoutes}>
        <div className={styles.testRoutesContainer}>
          <div className={styles.testRoutesHeading}>
            <h4>Driving test routes</h4>
            <hr />
          </div>
          <div className={styles.testRoutesParagraph}>
            <p>
              Recently the Driver and Vehicle Standards Agency (DVSA) stopped
              publishing the driving test routes fir each test centre to prevent
              test candidates from practising the routes that the examiners take
              you on.
            </p>
            <p>
              The driving test routes may have altered in the mean-time,
              although it is likey they are very similar if not identical.
              Listed below are the driving test centre routes for areas our
              instructors cover.
            </p>
            <p>
              The driving test routes should be used for a guide only as test
              routes are for the disceation of the test examiner and may be
              subject to change.
            </p>
          </div>
        </div>
      </section>
      {/* /////////////////////////// glossary section ////////////////////// */}
      <section className={styles.glossarySection}>
      <h2>Glossary</h2>
      <dl className={styles.glossaryList}>
        <div className={styles.term}>
          <p>EOR - End of Road</p>
        </div>
        <div className={styles.term}>
          <p>T/L - Traffic lights</p>
        </div>
        <div className={styles.term}>
          <p>DTC - Driving Test Centre</p>
          
        </div>
      </dl>
    </section>
    {/* ////////////////////////////  Test Routes ////////////////////////// */}
    <section className={styles.RouteSection}>
      <div className={styles.allRoutes}>
      <div className={styles.routes}>
        <img src={testRoutesImg1} alt="testRoutesImg" />
        <a href="/">Coventry Driving Test Routes</a>
      </div>
      <div className={styles.routes}>
        <img src={testRoutesImg2} alt="testRoutesImg" />
        <a href="/">Nuneaton Driving Test Routes</a>
      </div>
      <div className={styles.routes}>
        <img src={testRoutesImg1} alt="testRoutesImg" />
        <a href="/">Rugby Driving Test Routes</a>
      </div>
      <div className={styles.routes}>
        <img src={testRoutesImg2} alt="testRoutesImg" />
        <a href="/">Hinckley Driving Test Routes</a>
      </div>
      <div className={styles.routes}>
        <img src={testRoutesImg1} alt="testRoutesImg" />
        <a href="/">Warwick Driving Test Routes</a>
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
