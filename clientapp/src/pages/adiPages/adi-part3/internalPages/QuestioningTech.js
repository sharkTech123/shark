import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import goalquestion from "../../../../assets/images/GoalQuestions.png";
import closedQuestion from "../../../../assets/images/closedQuestionimg.png";
import seftyCritical from "../../../../assets/images/safetyCritical.png";
import openQuestion from "../../../../assets/images/openQimg.png";
import taskimg from "../../../../assets/images/TaskImg.png";import { Link } from "react-router-dom";

export default function QuestioningTech() {
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
            Questioning <span>techniques</span>{" "}
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Goal <span>Questions</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={goalquestion}
                alt="goalquestion"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    This type of question is used to help the client set the
                    goal and also to check what support is required from you to
                    facilitate them achieving this. These questions would often
                    be asked at the start of a lesson but could also be asked in
                    the middle of a lesson where one goal has already been
                    achieved and another one is being set. Normally, they would
                    be used at the side of the road because they are an ideal
                    opportunity to ensure the customer is in control of their
                    own learning process.
                  </p>
                </li>
                <li>
                  <p>Example questions might be:</p>
                </li>
                <li>
                  <p>What would you like to achieve today?</p>
                </li>
                <li>
                  <p>How do you want to do this?</p>
                </li>
                <li>
                  <p>What support do you need from me?</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Closed <span>Questions</span>
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={closedQuestion}
                alt="clearTimeimg"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Closed questions are good for checking knowledge and facts.
                    They have just one correct answer. For example;
                  </p>
                </li>
                <li>
                  <p>What is the speed limit on this road?</p>
                </li>
                <li>
                  <p>
                    These questions can be asked on the move because they are
                    not generally too distracting.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Safety-critical <span>Questions</span>
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={seftyCritical}
                alt="seftyCritical"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Sometimes it will be necessary to step in and say something
                    to keep the car safe even though you have agreed that the
                    customer is going to practise something on their own in
                    silence. You would ideally explain this before the car
                    starts moving but if you haven’t it is still crucial that
                    you recognise the time to intervene with instruction.
                  </p>
                </li>
                <li>
                  <p>
                    If you can do this in the form of a question, all well and
                    good, however, it really doesn’t matter when there is a risk
                    of danger. Whether you ask a question or not you will still
                    be instructing in this situation and will have taken the
                    responsibility back from the customer for the driving task.
                  </p>
                </li>
                <li>
                  <p>
                    Examples of the type of safety-critical questions you might
                    use are:
                  </p>
                </li>
                <li>
                  <p>Do you need to brake for this car to emerge?</p>
                </li>
                <li>
                  <p>Are you going to steer around this cyclist?</p>
                </li>
                <li>
                  <p>Will you be stopping at this pedestrian crossing?</p>
                </li>
                <li>
                  <p>
                    All these questions have instruction in them and the
                    response expected is in the form of an action rather than
                    anything verbal. It would also be appropriate in these
                    situations to have the dual brake covered or to be ready to
                    go for the steering wheel.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            {" "}
            Open <span>questions​</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={openQuestion}
                alt="interventionImg"
              />{" "}
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Open questions have more than one correct answer. A question
                    that can be answered with Yes or No is an open question. It
                    could also be answered with Maybe, Sometimes, That depends,
                    for example, so there is any number of responses.
                  </p>
                </li>
                <li>
                  <p>
                    Usually, the instructor does not know what answer the
                    customer is going to give. These types of questions are
                    asked to start a conversation where the customer is given
                    the opportunity to explore their thoughts, values, opinions
                    about something related to driving.
                  </p>
                </li>
                <li>
                  <p>
                    The more open the question can be the better, however,
                    sometimes, a question that just gets a yes or no response is
                    good because it then helps move the conversation forwards.
                    An example question might be:
                  </p>
                </li>
                <li>
                  <p>What do you think about the speed limit on this road?</p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            {" "}
            Task-specific <span>questions​</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={taskimg}
                alt="sufficientFeedback"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    These questions are part of an exercise that has been agreed
                    upon with the customer. They could be to do with reading the
                    road ahead where you agree that you are going to ask
                    questions about the signs and road markings. For example;
                  </p>
                </li>
                <li>
                  <p>What is the next warning sign?</p>
                </li>
                <li>
                  <p>What is the speed limit on this road?</p>
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
