import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import sharedRepo from "../../../../assets/images/sharedRespoImg.png";
import clearTiming from "../../../../assets/images/ClearTimeImg.png";
import awarenessImg from "../../../../assets/images/awarenessImg.png";
import interventionImg from "../../../../assets/images/Intervention img.png";
import sufficientFeedback from "../../../../assets/images/sufficientFeedbacks.png";import { Link } from "react-router-dom";
export default function RiskManagement() {
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
          <h2>Risk management</h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              {" "}
              <div className={styles.innerTheorySupportContent}>
                <div className={styles.theorySupportContentVideo}>
                  <iframe
                    width="500"
                    height="400"
                    src="https://www.youtube.com/embed/Kiohep9Jxck"
                    title="Risk Management - ADI Training"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>There are 5 key parts to risk management.</p>
                </li>
                <li>
                  <p>
                    The Risk Management section seems to have caused the most
                    concern for ADIs. When we are teaching on the move, risky
                    situations develop around us which require our attention if
                    we are to defuse the situation.
                  </p>
                </li>
                <li>
                  <p>
                    In the days of the Check Test, ADIs were assessed on the
                    core competencies of faults identification, analysis, and
                    correction. Fundamentally, nothing has changed. Involving
                    pupils at each stage of a fault’s discussion is really
                    important. Encouraging our pupils to take responsibility for
                    their actions and actively participate In how they correct
                    driving errors is most likely to lead to an improved
                    understanding of driving situations.
                  </p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Shared <span>Responsibility</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={sharedRepo}
                alt="learningStyleImg"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    This criterion of the SC1 form is discussed in the Recap at
                    the start of the lesson. It should be kept short and simple.
                    Similar discussions about risk-sharing may well occur during
                    the lesson too.
                  </p>
                </li>
                <li>
                  <p>
                    At the test Centre, the ADI should ask the pupil what their
                    job/role is when risky situations happen (i.e. a pedestrian
                    idles across the road or a cyclist swerve suddenly in
                    front). “Who’s in charge today keeping us safe?”, is a
                    reasonable question to ask the pupil. A follow-up question
                    might be, “what will you do if you sense a hazard is
                    developing?” Assuming you are satisfied with the pupil’s
                    answers, you might ask, “what’s my role regarding risk?” If
                    the pupil requires elaboration here, you might explain how
                    you could take control verbally or physically if required,
                    but only as a last resort.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Clear instruction <span>In good time</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={clearTiming}
                alt="clearTimeimg"
              />{" "}
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    When giving directions to a pupil, time must be allowed for
                    the pupil to understand what is being asked, identify where
                    they are about to go, and then start (and complete) the
                    MSPSL routine. Directions have to be given early (at least
                    12 car lengths away).
                  </p>
                </li>
                <li>
                  <p>
                    They could include non moving objects as a rough guide on
                    where to start the routine.
                  </p>
                </li>
                <li>
                  <p>• “Take the second road on the left”</p>
                </li>
                <li>
                  <p>
                    Instructions are something different altogether! They can
                    take one of two forms; telling pupils precisely what to do
                    (full or guided talk through) or promoting the correct
                    actions via open Q&A technique.
                  </p>
                </li>
                <li>
                  <p>
                    If there is time for a question, and the pupil can be
                    expected to deal with the developing hazard, then this form
                    of instruction is preferable as it promotes thought, is more
                    client centred and gives responsibility to pupil. However,
                    if in the instructor’s opinion the pupil might struggle with
                    the situation, direct talk through would be required to keep
                    low risk.
                  </p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Intervention <span>when required</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={awarenessImg}
                alt="awarenessImg"
              />
            </div>{" "}
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    This competency is described by DVSA as “the heart of the
                    ADI’s professional skill”.
                  </p>
                </li>
                <li>
                  <p>
                    This section is about the ADI’s ability to observe and
                    assess the ever-changing road conditions (Static, moving,
                    and environmental hazards) and when/if the pupil is dealing
                    with them. ADI’s must be continually ‘in tune’ with the
                    needs of the pupil, other road users, and the road/traffic
                    conditions throughout each and every driving lesson. Failure
                    to do so can lead to a loss of concentration and a late
                    response to a hazard
                  </p>
                </li>
                <li>
                  <p>
                    An awareness of what is happening ahead (far and middle
                    distance, immediately in front and in mirrors) is essential
                    if hazards are to be dealt with efficiently and safely.
                    Remember, most hazards appear from side roads so scanning
                    using ‘tunnel vision’ is essential.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Intervention <span>when required</span> ​
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={interventionImg}
                alt="interventionImg"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Firstly, let’s deal with verbal intervention. It can take
                    the form of full/guided talk through, prompting via open
                    questions, or giving feedback to a pupil on the move. It may
                    also be most appropriate to be silent at times, especially
                    if a pupil is responding well to the road and traffic
                    conditions.
                  </p>
                </li>
                <li>
                  <p>
                    Over, under, or late instruction is to be avoided. Managing
                    risk, ensuring safe passage around an agreed route, is key.
                  </p>
                </li>
                <li>
                  <p>
                    A pupil may need verbal input from the instructor whenever
                    risk is potentially or actually increasing. The timing of
                    the input is critical but will vary in each developing
                    situation. If seen early enough, a prompt such as ‘ how are
                    you going to deal with the bus at the bus stop?’ might be
                    all the pupil needs to negotiate the hazard successfully. If
                    there was a little time available however, and the pupil was
                    struggling to cope, the ADI might takeover by telling the
                    pupil what to do, thereby keeping the risk low.
                  </p>
                </li>
                <li>
                  <p>
                    If the hazard developed suddenly or the pupil failed to
                    handle a tricky situation well, physical intervention might
                    be necessary to manage the risk, such as:
                  </p>
                </li>
                <li>
                  <p>• Use the dual brake or use the clutch</p>
                </li>
                <li>
                  <p>• Take hold of the steering</p>
                </li>
                <li>
                  <p>
                    The likelihood of physical intervention, though entirely
                    possible, should be low providing ADI’s awareness of the
                    surroundings remains high.
                  </p>
                </li>
                <li>
                  <p>
                    Verbal intervention supports the pupils’ learning process as
                    long as it is timely and appropriate. Over-reliance on
                    intervening physically can destroy pupil confidence.
                  </p>
                </li>
                <li>
                  <p>
                    Note: learner drivers on their practical tests often fail
                    due to one lapse in concentration, leading to a serious
                    fault. Similarly, ADI’s could fail their standard check if
                    they fail to control a hazardous situation on behalf of
                    their pupil. Unfortunately, there are no ‘brownie points’
                    offered for doing well to offset a single lapse in
                    concentration when managing risk!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Intervention <span>when required</span> ​
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={sufficientFeedback}
                alt="sufficientFeedback"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    DVSA has chosen to use the phrase ‘potentially
                    safety-critical incidents’ carefully here. If the ADI is
                    managing risk proactively throughout the lesson, any
                    ‘actual’ safety-critical incidents would be minimized or
                    non-existent.
                  </p>
                </li>
                <li>
                  <p>
                    The criterion of the SC1 form roughly equates to the
                    ‘analysis’ heading on the check test form (pre-2015).
                    Whenever possible, after a risky situation occurs, the ADI
                    should pull in and discuss what happened using the Q&A
                    technique. Identifying why it occurred, what the pupils’
                    views and thoughts were at the time of the incident, and how
                    it might be dealt with should a similar situation arise, all
                    need discussing.
                  </p>
                </li>
                <li>
                  <p>
                    The criterion is closely linked with the second heading in
                    Teaching & Learning Strategies I.e. “was the pupil
                    encouraged to analyse problems and take responsibility for
                    their learning?” a simple one-way chat about the cause,
                    consequences, and correction of the fault is not good
                    enough. From a client-centered standpoint, it is imperative
                    that a discussion takes place to help the pupil identify and
                    understand:
                  </p>
                </li>
                <li>
                  <p>• What happened and the effects on all involved.</p>
                </li>
                <li>
                  <p>
                    • What the pupils’ thoughts and feelings were about the
                    incident at the time and, on reflection and now.
                  </p>
                </li>
                <li>
                  <p>• How to avoid a similar incident developing.</p>
                </li>
                <li>
                  <p>• Any assistance needed from the ADI moving forwards.</p>
                </li>
                <li>
                  <p>
                    The five headings of the risk management section are
                    fundamental to a successful, safe, and well-managed driving
                    lesson.
                  </p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
