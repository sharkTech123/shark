import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import sharedRepo from "../../../../assets/images/sharedRespoImg.png";
import clearTiming from "../../../../assets/images/ClearTimeImg.png";
import awarenessImg from "../../../../assets/images/awarenessImg.png";
import interventionImg from "../../../../assets/images/Intervention img.png";
import sufficientFeedback from "../../../../assets/images/sufficientFeedbacks.png";import { Link } from "react-router-dom";

export default function LessonLayouts() {
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
            Lesson <span>Plan layout</span>
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Part 1 - <span>Lesson Recap</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • Introduce the Examiner, put the learner at ease telling them
                  the examiner is there to evaluate your teaching and not their
                  learning, and if at any time they need a break just to let you
                  know.
                </p>
              </li>
              <li>
                <p>
                  • Did you do any practice? Did you watch any videos to
                  understand further or get help from family and friends?
                </p>
              </li>
              <li>
                <p>
                  • Do you have any questions? What would you like to do today?
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Part 2 - <span>Lesson Planning</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>•What would you like to learn today and why?</p>
              </li>
              <li>
                <p>•How is that going to help your development?</p>
              </li>

              <li>
                <p>
                  • What is the current level of your skills on the practice
                  subject?
                </p>
              </li>
              <li>
                <p>
                  • On a scale of 1-10, (10 is good, 1 is bad) which level are
                  you at? (Example level 6)
                </p>
              </li>
              <li>
                <p>
                  • Ok why do you feel 6? (Example what is good and bad in this
                  subject)
                </p>
              </li>
              <li>
                <p>•What level would you like to achieve today? (Example 8)</p>
              </li>
              <li>
                <p>
                  • What does an 8 look like / what do you need to achieve an 8?
                </p>
              </li>
              <li>
                <p>
                  • What help do you want from me to achieve your goal? / full
                  talk through / explanations / demonstration etc.
                </p>
              </li>
              <li>
                <p>•Get an agreement from the pupil</p>
              </li>
            </ul>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {" "}
          <h2>
            Part 3 - <span>Risk Management</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • This competency is described by DVSA as “the heart of the
                  ADI’s professional skill”.
                </p>
              </li>
              <li>
                <p>
                  • This section is about the ADI’s ability to observe and
                  assess the ever-changing road conditions (Static, moving, and
                  environmental hazards) and when/if the pupil is dealing with
                  them. ADI’s must be continually ‘in tune’ with the needs of
                  the pupil, other road users, and the road/traffic conditions
                  throughout each and every driving lesson. Failure to do so can
                  lead to a loss of concentration and a late response to a
                  hazard
                </p>
              </li>
              <li>
                <p>
                  • An awareness of what is happening ahead (far and middle
                  distance, immediately in front and in mirrors) is essential if
                  hazards are to be dealt with efficiently and safely. Remember,
                  most hazards appear from side roads so scanning using ‘tunnel
                  vision’ is essential.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Part 3 - <span>Risk Management</span>​
          </h2>
          <p id={styles.hazardTestWorkListSectionPara}>
            <span>You:</span> Who is responsible for this vehicle?
          </p>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>•Pupil: The Driver</p>
              </li>{" "}
            </ul>
          </div>
          <p id={styles.hazardTestWorkListSectionPara}>
            <span>You:</span> Who is responsible for passengers inside and
            outside the vehicle?
          </p>{" "}
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>•Pupil: The Driver</p>
              </li>
            </ul>
          </div>
          {/* ///////////////////////////////////// */}
          <p id={styles.hazardTestWorkListSectionPara}>
            <span>You:</span> What is different today?
          </p>{" "}
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>•Pupil: The examiner</p>
              </li>
            </ul>
          </div>
          {/* /////////////////////////////////////// */}
          <p id={styles.hazardTestWorkListSectionPara}>
            <span>You:</span> How does that change things?
          </p>{" "}
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>• Pupil: More weight = braking harder</p>
              </li>
            </ul>
          </div>
          {/* //////////////////////////////////////// */}
          <p id={styles.hazardTestWorkListSectionPara}>
            <span>You:</span> How does that change things?
          </p>{" "}
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>• Pupil: More weight = braking harder</p>
              </li>
              <li>
                <p>
                  •<span> You:</span> We will drive to a suitable area to
                  practice the goal. (Be sure to define what the student is
                  accountable for on the journey and what you will be sharing
                  during the journey i.e. We are going to drive to the xxx
                  estate to practice your goal. During the journey there will be
                  a set of traffic lights and a roundabout, are you happy to
                  drive there taking full accountability, or would you like any
                  help with anything? Clarify what help you are giving partial
                  or full)
                </p>
              </li>
            </ul>
          </div>
          {/* ///////////////////////////////////////////////// */}
          <p id={styles.hazardTestWorkListSectionPara}>
            General <span>Safety Breif</span>
          </p>{" "}
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • At all times today, I expect you to drive as carefully and
                  responsibly as possible. I will expect you to be aware of the
                  road users and controls of the car. If any situation arises
                  that’s putting us and other road users at risk I will
                  intervene by voice commands first however failing to do so I
                  may need to intervene by using my foot controls or steering.
                  If this happens I will have to pull you up so we can discuss
                  what may have happened.
                </p>
              </li>
              <li>
                <p>
                  • I do have the ability to take control of the car in the case
                  of an emergency but I will only use the controls if I feel you
                  are not dealing with the situation yourself. If that happens
                  we will take time to talk about the situation, so you
                  understand for next time.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Part 4 - Teaching & <span>Learning Strategies​</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • Allow learners to practice the agreed goal in their prefered
                  learning style.
                </p>
              </li>
              <li>
                <p>
                  • How do you feel the set goal is going from a scale of 1-10?
                  And why?
                </p>
              </li>
              <li>
                <p>•What was good or what went well?</p>
              </li>
              <li>
                <p>•What score would you give yourself now?</p>
              </li>
              <li>
                <p>
                  • What did not go so well? Why (Explore answer / Fault
                  analysis)
                </p>
              </li>
              <li>
                <p>•How could you do things differently next time?</p>
              </li>
              <li>
                <p>•How can I help to achieve that?</p>
              </li>
              <li>
                <p>
                  • Remember if the pupil makes a different fault during
                  learning the agreed goal you must address that fault and if
                  required change the lesson accordingly.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* ////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Part 5 - <span>Debrief​</span>{" "}
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • How do you feel the set goal went today on a scale of 1-10?
                  And why?
                </p>
              </li>
              <li>
                <p>
                  • Encourage the learner to reflect on the lessons, watch
                  related videos, and get help from family and friends, private
                  practice.
                </p>
              </li>
              <li>
                <p>•Explore goals for next lesson.</p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Please see links below <span>for written lesson plans</span> ​
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/SmartLearner-Lesson-Plans-2024-Adequate-Clearance-for-other-Road-Users-Anticipation-and-overtake.-1.pdf">
                    Adequate Clearance for other Road Users, Anticipation and
                    overtake.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Approaching-Junctions-to-Turn-Left-3.pdf">
                    Approaching Junctions to Turn Left
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Approaching-Junctions-to-Turn-Right-Major-to-Minor.pdf">
                    Approaching Junctions to Turn Right (Major to Minor)
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Cockpit-drill-and-control-1.pdf">
                    Cockpit drill and control
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Crossroads-.pdf">
                    Crossroads
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/emergency-stop-2.pdf">
                    emergency stop
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Emerging-at-T-Junctions-%E2%80%93-Turning-Left-1.pdf">
                    Emerging at T Junctions – Turning Left
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a style={{ textDecoration: "none", color: "red" }} href="">
                    Fault Finding, Fault Analysis and Remedial Coaching
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Fault-Finding-Fault-Analysis-and-Remedial-Coaching.pdf">
                    Fault Finding, Fault Analysis and Remedial Coaching
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Forward-Bay-Park-2.pdf">
                    Forward Bay Park
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/meeting-traffic-2.pdf">
                    meeting traffic
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Moving-Off-and-Stopping-1.pdf">
                    Moving Off and Stopping
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Pedestrian-Crossings-and-Use-of-Signals-1-1.pdf">
                    Pedestrian Crossings and Use of Signals
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Reverse-Bay-Parking-1.pdf">
                    Reverse Bay Parking
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Faster-Road-Single-Dual-Carriageways-Motorways-2.pdf">
                    Faster Road (Single Dual Carriageways Motorways)
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Parallel-Parking-1.pdf">
                    Parallel Parking.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Parking-in-the-Right.pdf">
                    Parking in the Right.
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Planning-Anticipating-1.pdf">
                    Planning & Anticipating
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Roundabouts-1.pdf">
                    Roundabouts
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Use-of-Mirrors-2.pdf">
                    Use of Mirrors
                  </a>
                </p>
              </li>
              <li>
                <p>
                  •
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href="https://smartlearner.com/wp-content/uploads/2024/01/Using-a-Satnav-1.pdf">
                    Using a Satnav
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
