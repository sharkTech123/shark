import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import gdeMatrix from "../../../../assets/images/GDE-matrix.png";
import redCarImg from "../../../../assets/images/redcarimg.png";
import runningImg from "../../../../assets/images/runningManImg.png";
import locationImg from "../../../../assets/images/Location Img.png";
import SkillsImg from "../../../../assets/images/goal-skills.png";
import { Link } from "react-router-dom";
export default function GdeMatrix() {
  return (
    <div>
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
                  <h2>AWARD-WINNING DRIVING LESSONS</h2>
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
          {/* ///////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Introduction to <span>Part 3</span>
            </h2>
            <hr style={{ opacity: "1", border: "1px solid black" }}></hr>
            <div className={styles.hazardTestWorkListDiv}>
              <img
                src={gdeMatrix}
                alt="gdeMatrix"
                style={{ width: "100%", maxWidth: "600px", height: "400px" }}
              />
            </div>
          </section>
          {/* ///////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <div className={styles.bgColorList33}>
              <ul type="none">
                <li>
                  <p>
                    • The GDE is a framework for driver education that
                    emphasises the requirement for the motivational and
                    risk–increasing aspects of driving to be incorporated into
                    driving programs. This is in addition to the current
                    skills-based competencies taught on a daily basis.
                  </p>
                </li>
                <li>
                  <p>
                    • A glance at the GDE matric shows four levels. Level 1 and
                    level 2 are the safe manoeuvring of a vehicle and mastery of
                    traffic situations. These levels have been traditionally
                    addressed by ADIs in order for their pupils to pass their
                    driving test.
                  </p>
                </li>
                <li>
                  <p>
                    • The 3rd level, goals, and context of driving, deal with
                    driver’s decisions relating to the purpose of their journey,
                    the influence of passengers, and the time the drive takes
                    place. The decisions taken by drivers at this level can have
                    a serious impact on driver risk.
                  </p>
                </li>
                <li>
                  <p>
                    • Level 4, goals for life and skills for living, highlights
                    the importance of lifestyle factors in determining risk when
                    we drive. Drivers must have an awareness of their
                    personality characteristics at this level and the effect
                    they may have on risk.
                  </p>
                </li>
                <li>
                  <p>
                    • Instructors must have an understanding of the GDE and,
                    when relevant, address levels 3 and 4 with their students.
                    Success or failure at the higher levels will affect
                    performance at the lowest two levels.
                  </p>
                </li>
                <li>
                  <p>
                    • Instructors should research and fully understand
                    understand of the GDE and how it provides a sound framework
                    for driver education.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <p id={styles.hazardTestWorkListSectionPara}>
              The framework consists of{" "}
              <span>four levels and Three competencies:</span>
            </p>
            <h2>
              Level 1: <span>Vehicle Manoeuvring</span>
            </h2>
            <section className={styles.AdiParttwoDisplayFlex}>
              <div className={styles.hazardTestWorkListDivImg}>
                <img src={redCarImg} alt="redCarImg" />
              </div>
              <div className={styles.bgColorList}>
                <ul type="none">
                  <li>
                    <p>This level is all about vehicle control skills:</p>
                  </li>
                  <li>
                    <p>– Vehicle maintenance</p>
                  </li>
                  <li>
                    <p>– How to use the controls</p>
                  </li>
                  <li>
                    <p>
                      – How to move away and stop on level roads and gradients
                    </p>
                  </li>
                  <li>
                    <p>– How to change gear and use clutch control</p>
                  </li>
                  <li>
                    <p>
                      – How to deal with junctions, roundabouts and pedestrian
                      crossings
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      – Where to position the vehicle – How to steer – Where to
                      look
                    </p>
                  </li>
                  <li>
                    <p>– How to carry out the manoeuvres</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          {/* ///////////////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Level 2: <span>Integrating with other road users</span>
            </h2>
            <section className={styles.AdiParttwoDisplayFlex}>
              <div className={styles.hazardTestWorkListDivImg}>
                <img src={runningImg} alt="running-men" />
              </div>
              <div className={styles.bgColorList}>
                <ul type="none">
                  <li>
                    <p>
                      This level develops the learner so that they can integrate
                      with other road users and get to grips with different
                      traffic situations. The student learns:
                    </p>
                  </li>
                  <li>
                    <p>– Visual scanning – Hazard perception – Use of speed</p>
                  </li>
                  <li>
                    <p>– Judgement and decision making in traffic situations</p>
                  </li>
                  <li>
                    <p>
                      – Road holding – Vehicle limitations – Eco-safe driving
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          {/* ///////////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Level 3: <span>Goals and context of the Journey</span>
            </h2>
            <section className={styles.AdiParttwoDisplayFlex}>
              <div className={styles.hazardTestWorkListDivImg}>
                <img
                  src={locationImg}
                  alt="running-men"
                  style={{ backgroundColor: "white" }}
                />
              </div>
              <div className={styles.bgColorList}>
                <ul type="none">
                  <li>
                    <p>
                      This level looks at journey specific considerations. The
                      student learns about:
                    </p>
                  </li>
                  <li>
                    <p>– Motivation for the journey</p>
                  </li>
                  <li>
                    <p> – Route planning</p>
                  </li>
                  <li>
                    <p> – Distractions</p>
                  </li>

                  <li>
                    <p>– Passenger influence</p>
                  </li>
                  <li>
                    <p> – Eco-safe driving (specific to the journey)</p>
                  </li>
                  <li>
                    <p> – Effects of alcohol and drugs on driving</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          {/* ////////////////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Level 4: <span>Goals for life and skills for living</span>
            </h2>
            <section className={styles.AdiParttwoDisplayFlex}>
              <div className={styles.hazardTestWorkListDivImg}>
                <img src={SkillsImg} alt="SkillsImg" />
              </div>
              <div className={styles.bgColorList}>
                <ul type="none">
                  <li>
                    <p>
                      This level focuses on the personality of the driver and
                      how their thoughts and beliefs impact on their behaviour
                      generally and driving behaviour specifically. The student
                      learns about:
                    </p>
                  </li>
                  <li>
                    <p> – Crash statistics </p>
                  </li>
                  <li>
                    <p> – Typical risky personalities</p>
                  </li>
                  <li>
                    <p> – Attitudes to risk</p>
                  </li>

                  <li>
                    <p> – Personal belief systems</p>
                  </li>
                  <li>
                    <p>– Personal goals for life</p>
                  </li>
                  <li>
                    <p> – Personal skills for living</p>
                  </li>
                </ul>
              </div>
            </section>
          </section>

          {/* ///////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
}
