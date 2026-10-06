import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import smartTargetsImg from "../../../../assets/images/smartImgLogo.png";
import { Link } from "react-router-dom";
export default function SmartTargets() {
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
              <Link to="/Contact-Us" style={{textDecoration:"none"}}>
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
            Smart <span>Targets</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <div className={styles.hazardTestWorkListDiv}>
            <img
              src={smartTargetsImg}
              alt="learningStyleImg"
              style={{ maxWidth: "600px", width: "100%" }}
            />
          </div>
        </section>
        {/* /////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.AdiParttwoDisplayFlex}>
            <section id={styles.resLists21}>
              <p>
                The ADI and pupil need to work as a team, to focus on specific
                goals to be achieved during the lesson. For example, signal in
                good time at every junction.
              </p>
            </section>{" "}
            <section id={styles.resLists12}>
              {" "}
              <p>
                Both pupil and ADI need to know when the goal has been achieved,
                and have a measure for success, such as completing 5 turns
                unaided.
              </p>
            </section>
            <section id={styles.resLists21}>
              <p>
                Goals must be realistic and attainable if the pupil is to be
                successful. If a goal is not achievable then the pupil may feel
                they are not progressing.
              </p>
            </section>
            <section id={styles.resLists12}>
              <p>
                Goals should be relevant to the overall theme of improving the
                performance at junctions. For example, using and applying the
                MSPSL routine.
              </p>{" "}
            </section>
            <section id={styles.resLists21}>
              <p>
                Can the goal be reached or at least advanced, within the lesson
                time frame? Think about using short term realistic goals rather
                than long term goals.
              </p>
            </section>
          </section>
        </section>
        {/* /////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <section className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  As a driving instructor, setting clear and achievable goals
                  for your learners is essential for their progress and success.
                  One effective method for goal setting is using SMART targets.
                  SMART stands for Specific, Measurable, Achievable, Relevant,
                  and Time-bound. This guide will help driving instructors
                  understand how to use SMART targets with their learners and
                  when it is appropriate to implement them.
                </p>
              </li>
            </ul>
          </section>
        </section>
        {/* ////////////////////////////////////////// */}

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            When to Empower Learners to{" "}
            <span> Set Their Own SMART Targets:</span>
          </p>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  1. At the Beginning of Lessons: Why: Encourage learners to
                  express what specific skills they want to improve, fostering a
                  sense of ownership and motivation. -Example: “By the end of
                  this lesson, I aim to confidently navigate roundabouts with
                  proper signalling and lane positioning.”
                </p>
              </li>
              <li>
                <p>
                  2. After Assessing Previous Lessons: Why: Reflecting on past
                  performance empowers learners to identify areas for
                  improvement and set personalised targets. Example: “In the
                  next two sessions, I will work on smoother gear transitions
                  during city driving to enhance overall driving comfort.”
                </p>
              </li>
              <li>
                <p>
                  3. When Introducing a New Skill: – Why: Empowering learners to
                  set their own targets when learning a new skill fosters
                  engagement and allows them to break down the process into
                  manageable steps. -Example: “Over the next three lessons, I
                  will progressively build confidence in merging onto highways,
                  focusing on adjusting speed and using signals effectively.”
                </p>
              </li>
              <li>
                <p>
                  4. Before Advancing to a Higher Skill Level: Why: Learners can
                  take an active role in their progression by setting targets
                  that align with advancing to more complex driving scenarios.
                  Example: “Before attempting advanced city driving, I aim to
                  confidently handle moderate traffic situations on urban
                  roads.”
                </p>
              </li>
              <li>
                <p>
                  5. To Address Specific Weaknesses: Why: Learners can identify
                  their own challenges and set targets to overcome specific
                  weaknesses, promoting a personalized learning experience.
                  Example: “In the next two sessions, I will enhance my
                  awareness of traffic signs, specifically focusing on
                  understanding right-of-way and yielding.”
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>TASK:</h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>Write down a personal SMART target for yourself</p>
              </li>
              <li>
                <p>
                  Now write down TWO example SMART targets a learner could set
                  during their lessons.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////// */}
      </div>
    </div>
  );
}
