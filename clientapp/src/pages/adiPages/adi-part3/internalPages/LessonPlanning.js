import React from "react";
import styles from "../../AdiPartOne.module.css";

import learningGoals from "../../../../assets/images/learningGoals.png";
import pupilAbility from "../../../../assets/images/pupilAbility.png";
import practiceCar from "../../../../assets/images/practiceArea.png";
import adaptingImg from "../../../../assets/images/adaptingLesson.png";import { Link } from "react-router-dom";
export default function LessonPlanning() {
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
          <h2>Lesson planning</h2>
          <hr style={{ opacity: "1", border: "1px solid red" }}></hr>
          <div className={styles.bgColorList33}>
            <ul>
              <li>
                There are 4 key parts to lesson planning. We will cover these in
                the below topics.
              </li>
            </ul>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Identifying the pupil’s <span>learning goals and needs</span>
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={learningGoals} alt="learningStyleImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    There are two elements to this and both must be addressed in
                    the “Recap at the start” at the test centre. You should have
                    agreed with the pupil at the end of the previous lesson what
                    the lesson goals* would be next time. They should be
                    confirmed again with the pupil on the drive to the test
                    centre, on Standards Check day. The examiner is then briefed
                    on these goals by you prior to the lesson starting.
                  </p>
                </li>
                <li>
                  <p>
                    In the “Recap at the Start”, you should confirm through Q&A
                    what the pupil’s goals are, to see if they have changed
                    (hopefully not!). You should be asking the pupil what they
                    want to practice and why. Actively listening and acting on
                    any concerns is important as is taking note of body language
                    which may betray pupil nerves or anxiety. Questions to check
                    theoretical knowledge of the topic(s) prior to driving away,
                    are recommended.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Appropriate lesson <span>structure for pupil's ability</span>
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={pupilAbility} alt="learningStyleImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The lesson structure should have been provisionally agreed
                    prior to driving away from the test centre. The lesson
                    should reflect agreed goals and pupil progress, ideally from
                    simple, to more complex situations, in line with the pupil’s
                    ability to cope with each driving situation encountered.
                  </p>
                </li>
                <li>
                  <p>
                    The lesson might include a briefing (using a diagram) or an
                    instructor demonstration showing how to perform the
                    exercises being practiced. It might have neither of these
                    but be simply a development lesson in an attempt to improve
                    agreed goals and eliminated errors.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Suitable <span>Practice Area</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={practiceCar} alt="learningStyleImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Practicing in an area or on a route that the pupil can cope
                    with in order to achieve learning goals, is vital. A safe
                    learning environment in which the pupil might be stretched
                    to the edge of their comfort is preferable. However, pupils
                    might perceive instructor anxiety, may try too hard, or feel
                    stressed because an examiner is present.
                  </p>
                </li>
                <li>
                  <p>
                    Be ready if the pupil acts differently from normal or
                    struggles to reach their usual ability level. They may need
                    more support and instruction which might require them to
                    move to an area with fewer hazards and risks. Be flexible
                    within the training area and respond swiftly if the pupil
                    isn’t coping.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Adapting the <span>lesson when appropriate</span>
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={adaptingImg} alt="learningStyleImg" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    There are several reasons why a lesson may need to be
                    adapted:
                  </p>
                </li>
                <li>
                  <p>
                    • The pupil is struggling to drive at their usual level due
                    to an examiner being present.
                  </p>
                </li>
                <li>
                  <p>
                    • The Agreed route is busier than usual, presenting more
                    hazards and complex situations than the pupil can cope with.
                  </p>
                </li>
                <li>
                  <p>
                    • The pupil is committing basic errors which require
                    correction and they are undermining the original goals that
                    were agreed upon.
                  </p>
                </li>
                <li>
                  <p>
                    A typical scenario might develop when, for instance, the
                    goals involve improving the pupil’s ability to roundabouts.
                    On the drive to the first roundabout, the pupil stalls the
                    car twice and struggles emerging at T junctions. The
                    instructor should, in agreement with the pupil, correct
                    these driver errors before attempting roundabouts. If
                    confidence and ability are restored and if time allows, a
                    return to the original lesson goals would be logical.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
