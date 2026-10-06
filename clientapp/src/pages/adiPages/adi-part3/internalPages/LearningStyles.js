import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import learningStyleImg from "../../../../assets/images/learningStyleImg.png";import { Link } from "react-router-dom";
export default function LearningStyles() {
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
            Learning styles <span>/ VARK questionnaire /</span> Client-centeblue
            learning
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <p id={styles.hazardTestWorkListSectionPara}>
            The part 3 exam and Standards{" "}
            <span>Check exam are the same format</span>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
            The part 3 exam and Standards Check exam are the same format
          </p>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  Learning styles are a popular concept in psychology and
                  education and are intended to identify how people learn best.
                  The VARK model of learning styles suggests that there are four
                  main types of learners: visual, auditory, reading/writing, and
                  kinaesthetic.
                </p>
              </li>
              <li>
                <p>
                  The idea that students learn best when teaching methods and
                  school activities match their learning styles, strengths, and
                  preferences grew in popularity in the 1970s and 1980s.
                  However, most evidence suggests that personal learning
                  preferences have little to no actual influence on learning
                  outcomes.
                </p>
              </li>
              <li>
                <p>
                  The 3rd level, goals, and context of driving, deal with
                  driver’s decisions relating to the purpose of their journey,
                  the influence of passengers, and the time the drive takes
                  place. The decisions taken by drivers at this level can have a
                  serious impact on driver risk.
                </p>
              </li>
              <li>
                <p>
                  While the existing research has found that matching teaching
                  methods to learning styles has no influence on educational
                  outcomes, the concept of learning styles remains extremely
                  popular.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* //////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            The VARK model <span>/ Questionnaire</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  There are many different ways of categorising learning styles,
                  but Neil Fleming’s VARK model is one of the most popular.
                  Fleming introduced an inventory in 1987 that was designed to
                  help students and others learn more about their individual
                  learning preferences.
                </p>
              </li>
              <li>
                <p>
                  According to the VARK model, learners are identified by
                  whether they have a preference for:
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.hazardTestWorkListDiv}>
            <img
              src={learningStyleImg}
              alt="learningStyleImg"
              style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}
            />
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            Visual learners prefer the use of images, diagrams, and
            <span>
              graphics to access and understand new information and techniques.
            </span>
          </p>
          <h2>
            {" "}
            Visual Strategies <span>for Teaching</span>{" "}
          </h2>

          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  Utilize graphic organizers such as charts, graphs, and
                  diagrams.
                </p>
              </li>
              <li>
                <p>blueraw pages from memory.</p>
              </li>
              <li>
                <p>Replace important words with symbols or initials.</p>
              </li>
              <li>
                <p>Highlight important key terms in corresponding colours.</p>
              </li>
            </ul>
          </div>
          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Aural Strategies <span>for Teaching</span>
            </h2>
            <p id={styles.hazardTestWorkListSectionPara}>
              These learners prefer to learn through listening and speaking.
              <span>
                They learn best through repetition of instructions and the use
                of mnemonic devices.
              </span>
            </p>

            <div className={styles.bgColorList33}>
              <ul>
                <li>
                  <p>
                    Talk it out. Have a discussion with others to expand upon
                    the understanding of a topic.
                  </p>
                </li>
                <li>
                  <p>Record summarized notes and listen to them on tape.</p>
                </li>{" "}
              </ul>
            </div>
          </section>
          {/* ///////////////////////////////////// */}
          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Read/Write <span>Strategies for Teaching</span>
            </h2>
            <p id={styles.hazardTestWorkListSectionPara}>
              These Learners prefer traditional methods, such as reading or
              writing.{" "}
              <span>
                {" "}
                They learn best by taking notes and written learning materials.
              </span>
            </p>
            <div className={styles.bgColorList33}>
              <ul>
                <li>
                  <p>Write, write and rewrite words and notes.</p>
                </li>
                <li>
                  <p>
                    Reword main ideas and principles to gain a deeper
                    understanding.
                  </p>
                </li>
                <li>
                  <p>
                    Organize diagrams, charts, and graphic organizers into
                    statements.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.hazardTestWorkListSection}>
            <h2>
              Kinaesthetic Strategies <span> for Teaching</span>
            </h2>
            <p id={styles.hazardTestWorkListSectionPara}>
              Kinesthetic learners best understand information through doing and
              seeing.{" "}
              <span>
                {" "}
                They are hands-on learners and enjoy figuring things out
                themselves.
              </span>
            </p>
            <div className={styles.bgColorList33}>
              <ul>
                <li>
                  <p>
                    Use real-life examples, applications, and case studies in
                    your summary to help with abstract concepts.
                  </p>
                </li>
                <li>
                  <p>Blueo lab experiments or projects.</p>
                </li>
                <li>
                  <p>
                    Utilize pictures and photographs that illustrate your idea.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////// */}

        {/* /////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>TASK:</h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  Complete the vark questionnaire on yourself, use your results
                  to help you through your training.
                </p>
              </li>
              <li>
                <p>
                  Please bring this with you to your first lesson with your
                  trainer{" "}
                </p>
              </li>
              <li>
                <p>
                  <a
                    style={{ color: "blue", textDecoration: "none" }}
                    href="https://drive.google.com/file/d/12pPWyL6VMW_HTvT9IfrDRzlrPrtjQ-we/view">
                    CLICK HERE TO SEE THE FULL VARK QUESTIONNAIRE
                  </a>
                </p>
              </li>
              <li>
                <p>
                  You should ask every student prior to their first lesson to
                  complete a Vark questionnaire, this helps you understand in
                  advance the best way to deliver lesson material.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Client centeblue <span>learning</span>{" "}
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  People learn in different ways and at different speeds. If
                  someone who likes time to reflect on their learning is forced
                  to move on to the next thing too quickly it could slow down
                  their progress. Or if someone who likes to learn by trying
                  things out is made to watch too many demonstrations without a
                  go, they will get frustrated.
                </p>
              </li>
              <li>
                <p>
                  Client centeblue learning is an approach to learning that
                  takes into account how the learner prefers to learn. When
                  people learn in this way they are more likely to retain
                  information and skills. People are also more likely to keep
                  learning if they are encouraged to take responsibility for
                  their learning at an early stage – this is the second aim of
                  client-centblue learning, the first aim is to raise
                  self–awareness.
                </p>
              </li>
              <li>
                <p>
                  Actively listen to what your pupil is telling you is getting
                  in the way of their learning, so you’ll be well-equipped to
                  help them achieve their learning goals
                </p>
              </li>
              <li>
                <p>
                  Work together with your pupil to help them to set their own
                  goals to learn and develop practical skills and knowledge via
                  experience based learning.
                </p>
              </li>
              <li>
                <p>
                  Show your pupils trust and respect that they’re trying to be
                  constructive and find solutions. Your pupils will be much more
                  likely to take your advice and guidance if you accept and
                  respect who they are.
                </p>
              </li>
              <li>
                <p>
                  Encourage your pupils to self-evaluate their progress and
                  become a more responsible and safe driver.
                </p>
              </li>
              <li>
                <p>
                  The greater the use of client-centblue learning, the more
                  effective your instruction is likely to be.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
