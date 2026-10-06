import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import adaptingImg from "../../../../assets/images/adapted teaching.png";
import EncourageImg from "../../../../assets/images/encouragingImg.png";
import TechnicalInfo from "../../../../assets/images/TechnicalInfo.png";
import ExampleImg from "../../../../assets/images/example.png";
import apropriateTime from "../../../../assets/images/apropriateTime.png";
import pupilImg from "../../../../assets/images/pupilQuestion.png";
import nodiscrimination from "../../../../assets/images/noDiscrimination.png";
import { Link } from "react-router-dom";
export default function InstructionFeedBack() {
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
            Giving instruction <span>and feedback</span>{" "}
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • There has been much debate about driving instructors having
                  to become coaches, otherwise, they will fail their standards
                  check, this is not the case! What is important is that
                  instructors should be helping their pupils in an active way,
                  placing their pupils at the center of proceedings.{" "}
                </p>
              </li>
              <li>
                <p>
                  • This client-centered approach has proven to be more
                  beneficial in helping pupils take responsibility for their
                  learning and help them become more self-aware. Knowing how
                  thoughts and feelings motivate behaviour when driving are the
                  essential ingredients for a proactive, safety-conscious
                  driver.
                </p>
              </li>
              <li>
                <p>
                  • Driving lessons should be client-centered not instructor-led
                  employing the following skills will help:
                </p>
              </li>
              <li>
                <p>• Engendering and maintain a good rapport with the pupil</p>
              </li>
              <li>
                <p>• Effective questioning using simple, open questions</p>
              </li>
              <li>
                <p>
                  • Actively listening to what the pupil say on a deeper,
                  conscious level
                </p>
              </li>
              <li>
                <p>
                  • Encouraging (eliciting) feedback from the pupil about their
                  performance
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Adapting Your Teaching Style <span>& Giving Feedback</span>
          </h2>{" "}
          <p id={styles.hazardTestWorkListSectionPara}>
            Adapted <span> Teaching Style</span>
          </p>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={adaptingImg}
                alt="Adapting"
              />{" "}
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • It is generally accepted that all people differ in how
                    they best learn new skills. Driving instructors should be
                    aware of learning models, three of which are:
                  </p>
                </li>
                <li>
                  <p>• David Kolbs experimental learning (learning cycle)</p>
                </li>
                <li>
                  <p>
                    • Honey and Mumfords adaptation of Kolbs theory (Activist,
                    reflector, theorist and pragmatist styles)
                  </p>
                </li>
                <li>
                  <p>
                    • Neil Flemings VARK model (visual, auditory, red/write and
                    kinaesthetic learning)
                  </p>
                </li>
                <li>
                  <p>
                    • Adapting your teaching style and methods will best support
                    your pupils’ learning. For instance, you will have noticed
                    that some pupils appear to ‘switch off’ mentally if they are
                    shown diagrams and pictures.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    • They may even appear to be disinterested and would
                    probably prefer to just practice the skills you are
                    introducing. Taking a pupil, you didn’t know well to a
                    standards check would be ill-advised. Knowing how best your
                    pupils take in information and being able to modify your
                    approach to help them is important.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>Encourage Self Assessment</h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={EncourageImg}
                alt="EncourageImg"
              />{" "}
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The use of open questions (starting with what, where,
                    when, who, which, how, and why), both on the move and when
                    pulled in, helps pupils to understand problems that arose
                    and how they might overcome them.
                  </p>
                </li>
                <li>
                  <p>
                    • This, in turn, helps develop the acceptance of
                    responsibility and raises pupils’ awareness of their own
                    actions, thoughts, and feelings. In this way, they are more
                    likely to achieve a behavioural change.
                  </p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {" "}
          <h2>
            {" "}
            Use <span>examples</span>{" "}
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={ExampleImg}
                alt="ExampleImg"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Using real-world situations during a lesson to help with
                    pupil understanding is an important tool in the instructors’
                    toolbox.
                  </p>
                </li>
                <li>
                  <p>
                    • An example might be when dealing safely with ‘tailgaters’.
                    If a pupil expressed concern about someone following too
                    closely, explaining how gradually reducing speed should make
                    the tailgater ease back, should help to understand and ease
                    any concerns.
                  </p>
                </li>
                <li>
                  <p>
                    • This action might also encourage an aggressive tailgater
                    to overtake thereby allowing pupils to concentrate on the
                    road ahead.
                  </p>
                </li>
                <li>
                  <p>
                    • Instructors should always be looking for opportunities to
                    link theory to practice by selecting appropriate situations
                    to expand upon.
                  </p>
                </li>
                <li>
                  <p>
                    • Another example might be a pupil who hasn’t grasped why
                    cutting a corner is rarely acceptable when suddenly another
                    driver forces the pupil to slow down as a direct result of
                    cutting a corner. Pulling in to discuss what happened and
                    what sense the pupil made of the incident should clarify
                    learning outcomes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* //////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {" "}
          <h2>
            Use <span>Technical</span> Information​
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={TechnicalInfo}
                alt="TechnicalInfo"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • Instructors are best advised to update their knowledge of
                    the highway code and DVSAs driving essential skills on a
                    regular basis.
                  </p>
                </li>
                <li>
                  <p>
                    • The driving instructor handbook is also a useful resource
                    containing the answers to commonplace questions in the
                    driver training industry. Keep them in your training
                    vehicle.
                  </p>
                </li>
                <li>
                  <p>
                    • Naturally, pupils will ask their instructors questions
                    from time to time. No one is expected to know everything so
                    access to up-to-date technical information is better than
                    guessing.
                  </p>
                </li>
                <li>
                  <p>
                    • Asking pupils to carry out their own research is perfectly
                    acceptable and helps build responsibility for their own
                    learning.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Appropriately <span>Timed Feedback</span> ​
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={apropriateTime}
                alt="apropriateTime"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • In this criterion, we evaluate feedback as one of the four
                    cornerstones of coaching for driver development. Feedback is
                    a critical part of the learning process. It should not be
                    restricted to instruc tors giving their opinions of how the
                    pupil is progressing.
                  </p>
                </li>
                <li>
                  <p>
                    • Obtaining feedback from the pupil, known as eliciting
                    feedback, allows ADI to gauge how the pupil perceives their
                    own actions and overall development.
                  </p>
                </li>
                <li>
                  <p>
                    • Learner drivers like to know how they are doing from time
                    to time and will invariably value their learner’s opinions.
                    When giving feedback, instructors must be positive, honest
                    and link comments to goals for the lesson whenever
                    appropriate.
                  </p>
                </li>
                <li>
                  <p>
                    • Sometimes the feedback will be given as a response to a
                    pupil’s need to know how they are performing. At other times
                    it should be freely offered as a comment on an improvement
                    made by the pupil.
                  </p>
                </li>
                <li>
                  <p>
                    • Good examples of feedback would include, “your mirror
                    checks were well-timed at the roundabout” or “that was good
                    clutch control as we moved away”. Both these examples are
                    short, to the point, make sense and help the pupil feel
                    encouraged to continue doing well.
                  </p>
                </li>
                <li>
                  <p>
                    • Gaining feedback from the pupil, about what they did and
                    why, allows an assessment of the pupil’s thought processes.
                    Using a scale of 1-10, where 1 is poor and 10 is excellent,
                    for a pupil to rate their achievement allows the ADI to
                    check the pupil’s perception of their own performance.
                  </p>
                </li>
                <li>
                  <p>
                    • The score given by the pupil is almost irrelevant, it is
                    just a starting point for meaningful discussion about
                    fine-tuning goals and building pupil responsibility.
                  </p>
                </li>
                <li>
                  <p>
                    • Clearly stating what the feedback refers to is important.
                    Using phrases like, “that was good”, “well done” or “much
                    better that time” is vague and can be easily misunderstood.
                    Good feedback leaves the pupil in no doubt as to exactly
                    what part of their driving is being referred to.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {" "}
          <h2>
            {" "}
            Answer <span>Pupil Questions</span>​
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={pupilImg}
                alt="pupilImg"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The most important aspect here is that the pupil feels
                    valued and relaxed enough to ask direct questions. By
                    establishing and maintaining a good rapport, the pupil will
                    feel encouraged to search for more information.
                  </p>
                </li>
                <li>
                  <p>
                    • Whenever possible, an ADI should turn the original
                    question into a dialogue especially if the instructor
                    suspects the pupil knows the answer.
                  </p>
                </li>
                <li>
                  <p>•The discussion might develop as follows:</p>
                </li>
                <li>
                  <p>
                    • Pupil – “Is the Max speed 40mph sign we’ve just passed
                    mandatory?”
                  </p>
                </li>
                <li>
                  <p>•You – “was it in a red circle?”</p>
                </li>
                <li>
                  <p>
                    •Pupil – “No, a rectangle, Aren’t they information signs?”
                  </p>
                </li>
                <li>
                  <p>
                    • You – “Yes, well done. It was advising an appropriate
                    speed. What was the last speed limit we passed?”
                  </p>
                </li>
                <li>
                  <p>•Pupil – “Oh yes it was the National Speed Limit”</p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}

        {/* ///////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          {" "}
          <h2>
            No Discrimination <span> Or Prejudice​</span>
          </h2>
          <div className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img
                style={{ backgroundColor: "white" }}
                src={nodiscrimination}
                alt="nodiscrimination"
              />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    • The Equality Act 2010, lays down anti-discrimination
                    legislation which provides a legal framework protecting the
                    rights of individuals in education and the workplace.
                  </p>
                </li>
                <li>
                  <p>
                    • Equality is ensuring individuals are not treated
                    differently or less favorably on the basis of their Race,
                    Gender, Age, Religion, disability, Sexual Orientation, or
                    Beliefs.
                  </p>
                </li>
                <li>
                  <p>
                    • Diversity aims to recognise, respect, and value people’s
                    difference to contribute and reach their full potential.
                  </p>
                </li>
                <li>
                  <p>•How does this Act apply to driving instructors?</p>
                </li>
                <li>
                  <p>
                    • Instructors must promote equality and diversity in their
                    day-to-day dealings with their pupils by creating an
                    inclusive culture with equal access and opportunities to
                    learn to drive. This should encompass as wide a range of
                    student as realistically possible, allowing for the
                    limitations of modern vehicles and the specialist training
                    instructors may or may not have received.
                  </p>
                </li>
                <li>
                  <p>
                    • For instance, some instructors may have actively sought
                    and received training and adapted their vehicles in order to
                    teach pupils with specific disabilities. ADIs are not
                    expected to diversify to this extent in the provision of
                    their services. However, with a little thought and prior
                    planning, they are expected to take reasonable steps to
                    ensure pupils with diverse needs can use their services to
                    learn to drive whenever possible.
                  </p>
                </li>
                <li>
                  <p>
                    • Asking a disabled driver what you can do to help them
                    achieve their goal, taking into account their condition, is
                    all that is necessary.
                  </p>
                </li>
                <li>
                  <p>
                    • Actively discriminating against your pupil or any other
                    road user you encounter, is unacceptable. Similarly,
                    colluding with your pupil if they are derogatory towards
                    other road users is plainly wrong and sets a negative
                    example.
                  </p>
                </li>
                <li>
                  <p>
                    • If a pupil expresses a belief which is an improper or
                    sweeping statement about another road user, it is reasonable
                    to challenge that viewpoint. The pupil may not understand
                    fully the demands on other road users who drive/ride for
                    leisure or for a living.
                  </p>
                </li>
              </ul>
            </div>{" "}
          </div>
        </section>
        {/* //////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Reflective <span>Debrief</span>{" "}
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  • A positive finish to a lesson that encourages the pupil to
                  reflect accurately on what was achieved and which aspects of
                  their driving require further development is essential.
                </p>
              </li>
              <li>
                <p>• A five-minute discussion should include:</p>
              </li>
              <li>
                <p>
                  • What the pupil thought overall, about their progress during
                  the lesson.
                </p>
              </li>
              <li>
                <p>
                  • Reflection on the original goals that were agreed at the
                  start and to what extent each goal had been practiced and
                  achieved.
                </p>
              </li>
              <li>
                <p>
                  • Any safety-critical incidents that occurred requiring
                  further practice and development.
                </p>
              </li>
              <li>
                <p>
                  • Identifying and agreeing on what should be practiced during
                  private sessions and in the next driving lesson. Setting any
                  theory practice/revision.
                </p>
              </li>
              <li>
                <p>
                  • Asking the pupil if they have any final questions for you
                  prior to confirming the next appointment.
                </p>
              </li>
              <li>
                <p>
                  • At the end of the lesson, the examiner will return to the
                  test center to complete the marking form which usually takes
                  around ten minutes. The debrief on the whole lesson will take
                  around ten to fifteen minutes to complete.
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
