import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import EnquiryForm from "../../../../components/forms/EnquiryForm";
import { Link } from "react-router-dom";

export default function StartingOnRoad() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest,
                  <span>learn with the best!</span>
                </h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  AWARD-WINNING <span>DRIVING LESSONS</span>{" "}
                </h2>
              </div>
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Using Our <span>Online Diary System</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
        </section>

        {/* //////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv123}>
              <p id={styles.hazardTestWorkListSectionPara}>
                Login and <span>& pupils</span>{" "}
              </p>

              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    style={{
                      boxShadow: "0px 0px 55px 5px rgba(255, 255, 255, 0.322)",
                    }}
                    width="350px"
                    height="300px"
                    src="https://www.youtube.com/embed/2sIL_Rmk21w"
                    title="How to Login and add pupils"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.hazardTestWorkListDiv123}>
              <p id={styles.hazardTestWorkListSectionPara}>
                Accept Lessons <span>& Block Diary</span>
              </p>

              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    style={{
                      boxShadow: "0px 0px 55px 5px rgba(255, 255, 255, 0.322)",
                    }}
                    width="350px"
                    height="300px"
                    src="https://www.youtube.com/embed/SmIzhPydWCQ"
                    title="Accept Lessons and block off your diary"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDiv123}>
              <p id={styles.hazardTestWorkListSectionPara}>
                Login and <span>& pupils</span>{" "}
              </p>

              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    style={{
                      boxShadow: "0px 0px 55px 5px rgba(255, 255, 255, 0.322)",
                    }}
                    width="350px"
                    height="300px"
                    src="https://www.youtube.com/embed/qEqj7WyToWQ"
                    title="How to Login and add pupils"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.hazardTestWorkListDiv123}>
              <p id={styles.hazardTestWorkListSectionPara}>
                Accept Lessons <span>& Block Diary</span>
              </p>

              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    style={{
                      boxShadow: "0px 0px 55px 5px rgba(255, 255, 255, 0.322)",
                    }}
                    width="350px"
                    height="300px"
                    src="https://www.youtube.com/embed/69JjmWjTH2Y"
                    title="Accept Lessons and block off your diary"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////// */}

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Prior to your <span>first lesson:</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  The office will have begun booking in customers for you, it is
                  important you log onto the diary and CONFIRM these bookings so
                  that your pupils receive their confirmation texts.{" "}
                </p>
              </li>
              <li>
                <p>
                  • During this process it is important to contact each learner
                  directly so that you are prepared for their first lesson. You
                  will have watched the videos above and received a log in to
                  the dairy upon completing your 40 hours training and applying
                  for your trainee badge. The videos will help guide you on how
                  to input learner information.
                </p>
              </li>
              <li>
                <p>
                  • This is an example of what your first phone call with your
                  students should sound like:
                </p>
              </li>
              <li>
                <p>
                  • Hi there,<br></br> This is Joe calling, your assigned
                  driving instructor from Smartlearner. How are you doing today?
                  I wanted to touch base about our upcoming lesson scheduled for
                  X time on X date. We’ve allocated X hours for it. Is that
                  still convenient for you?
                </p>
              </li>
              <li>
                <p>
                  • Before we get started, I’d like to learn a bit about your
                  driving background. Have you had any previous experience
                  behind the wheel? Have you taken any driving tests, or do you
                  have any upcoming ones scheduled?
                </p>
              </li>
              <li>
                <p>
                  • Depending on your experience level, we can tailor our first
                  lesson accordingly. If you’re new to driving, we’ll start with
                  the basics, perhaps getting acquainted with the cockpit. If
                  you’ve driven before, I’d love to hear what you’d like to
                  focus on during our initial session.
                </p>
              </li>
              <li>
                <p>
                  • Could I also grab your emergency contact details? It’s
                  always good to have them on hand just in case. Feel free to
                  provide me with the details of your mum, dad, partner, friend,
                  or any family member you prefer.
                </p>
              </li>
              <li>
                <p>
                  • Before our lesson, I’ll be sending you a license check code,
                  which you can find on the government website. It’s a quick
                  formality to ensure your provisional license is in order.
                  Additionally, I’ll send you a link to the VARK questionnaire,
                  which helps me understand your preferred learning style.
                  Please fill that out and bring it along with your provisional
                  license to our session.
                </p>
              </li>
              <li>
                <p>
                  • The office should have made you aware but just to double
                  check, we do hold a 24 hour cancellation policy so please let
                  me know outside of this if you need to rearrange any sessions.
                </p>
              </li>
              <li>
                <p>• To confirm, the address I have to pick you up is X</p>
              </li>
              <li>
                <p>
                  • Do you have any questions or concerns ahead of our first
                  lesson?
                </p>
              </li>
              <li>
                <p> • Great, looking forward to meeting you on X date!</p>
              </li>
              <h2
                style={{
                  color: "red",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}>
                How to do a license check code:
              </h2>
              <li>
                <p>• Send this link to your learners :</p>
              </li>
            </ul>
            <li>
              <p>• https://www.gov.uk/view-driving-licence </p>
            </li>
            <li>
              <p> • You can then check this here: </p>
            </li>
            <li>
              <p> • https://www.gov.uk/check-driving-information</p>
            </li>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Adding notes to <span>system after lessons</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <div className={styles.hazardTestWorkListDiv}>
            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe
                  style={{
                    boxShadow: "0px 0px 55px 5px rgba(255, 255, 255, 0.322)",
                  }}
                  width="1120"
                  height="631"
                  src="https://www.youtube.com/embed/tkosXE8LSyk"
                  title="Marking Lessons Complete - Standards Check Support"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* <section style={{textAlign:'center'}}>
        <h2 style={{color:"red",fontSize:'3rem'}}>Test - Part 2 - Summary</h2>
       </section> */}
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/ADI---Part-3">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
        {/* ///////////////////////////////// */}
        <section>
          <EnquiryForm />
        </section>

        {/* ////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
