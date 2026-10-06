// import React from 'react'
import AgeingImg from "../../assets/images/ageingImg.png";
import agedPerson from "../../assets/images/agedPersonIMG.jpg";
import PupilImg2342 from "../../assets/images/pupilImg23423.jpg";
import styles from "./AgeingDriver.module.css";
import { useEffect, useState } from "react";
import {
  FaPhone,
  FaUserTie,
  FaChalkboardTeacher,
  FaLaptop,
} from "react-icons/fa";


const tabContent = [
  {
    question: "What things can affect an senior’s ability to drive?",
    answer: [
      "Medication: Specific prescribed medication can cause side effects such as drowsiness or can possibly slow down reaction time. ",
      "Eyesight & vision problems: Poor eyesight can affect the ability to see in clarity, from the sides and the front.",
      "Mobility issues or pain: There may be difficulties with movement such as the ability to look from side to side, the back, pulling the handbrake or using the foot brakes. Stiffness and neck pains can make it harder to look over your shoulders.  Leg and foot pains can limit your lower body movement, making it difficult to move your foot from the gas to the brake pedal. Diminished arm strength can make it hard to turn the steering wheel quickly and effectively.",
      "Loss of proprioception:  Proprioception refers to the body’s ability to perceive its own position in space. For example, proprioception enables a person to close their eyes and touch their nose with their index finger.",
      "Memory issues: Older people may have issues with memory, they may get lost, confused or disoriented if they are in a unfamiliar place : they may can lose the ability to effectively divide their attention between multiple activities.",
    ],
  },
  {
    question: "Safety tips for ageing drivers",
    answer: [
      "Ageing does not automatically equal total loss of driving ability. There are many things you can do to continue driving safely, including modifying your car, altering the way you drive, & addressing any physical issues that may possibly affect or be detrimental to your driving.",
      "Regular check-ups are critical to keep you in the best possible driving shape.",
      "Get your eyes checked: Make sure that corrective lenses are correct. Keep the windshield, mirrors and headlights clean, and turn the brightness up on the instrument panel on your dashboard.",
      "Have your hearing checked annually: If you need hearing aids, make sure you wear them while driving. Be careful when opening car windows, though, as drafts can sometimes impair a hearing aids effectiveness.",
      "Exercise: Regular strength and flexibility exercises can help improve your reflexes and range of motion, ease pain and stiffness, which will assist you in maintaining enough strength to handle a car.",
      "Talks with your doctors: About how aliments or medications can affect your driving ability. Which specific medications to not take before driving or get prescribed a alternative which does not cause any side effects.",
    ],
  },
  {
    question: "How can ageing drivers further prevent collisions and death?",
    answer: [
      "Safe Cars",
      "Ageing drivers can prevent crashes and collisions by making sure that their cars are modified specifically to fit their requirements. Or either purchasing and selecting a car that will be well suited for them personally.",
      "• Senior drivers will have to evaluate their;",
      "• Muscle strength, flexibility, and range of motion. ",
      "• Coordination and reaction time.",
      "• Judgement and decision making abilities.",
      "• Ability to drive with adaptive equipment. ",
      "When selecting a vehicle, look for and ask about available features designed to improve both the comfort and safety of drivers experiencing whether physical or visual challenges associated with ageing. Some examples of these adjustments are:",
      "• High or extra-wide.",
      "• Adjustable foot pedals.",
      "• Large interior door handles.",
      "• Support handles to assist with entry and exit.",
      "• Large or adjustable-size print for dashboard gauges.",
      "• Seat adjustments that can move the seat in all directions.",
      ",Planned journeys and routes",
      "Planning future journeys before the date will significantly increase the safety for ageing drivers wishing to make a trip. Being prepared such as planning routes, refueling the according amount for the trip and checking engine and tyres beforehand will ensure that the trip will go smoothly without hick-ups and breakdowns.",
      "The importance of developing a ageing driver’s self-evaluation skill",
      "Self-evaluation is significant is assisting an ageing driver. If an senior is capable to feel and recognise what may possibly be an issue or problem that could develop and fester, and if they are able to prevent or tackle the issue, it can potentially save the individual’s life and improve their road safety. ",
      "This also further applies to the ability of family members to track and recognise potential dangers and issues in regards to their ageing driver relative. The sooner the issue is sorted, the better",
    ],
  },
  {
    question: "Red lights & warning signs of unsafe driving in seniors.",
    answer: [
      "There are natural changes that may occur within our brains and bodies as we age. The question of when it is time to limit or stop driving is not about age, but rather whether an individual is capable and able to drive. ",

      "Observing the driving of a loved one, spotting and recognising warning signs of unsafe driving are the first steps in determining whether it’s time to talk about letting go of the keys. ",

      "Driving ability goes beyond the simple ability to physically operate a vehicle. Safely driving a vehicle requires physical and cognitive capabilities, driving skills and good driving behaviour. ",

      "When is it time to brake, stop and give up the keys?",

      "• Delayed responses to unexpected situations.",

      "• Becoming easily distracted while driving.",

      "• Decrease in confidence while driving. ",

      "• Driving too fast or too slow for road conditions. ",

      "• Having difficulty moving into or maintaining the correct lane of traffic.",
    ],
  },
];

export default function AgeingDriverSupport() {
  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);
  const [animatedValue3, setAnimatedValue3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue1((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 49 ? 49 : newValue;
      });
      setAnimatedValue2((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 22 ? 22 : newValue;
      });
      setAnimatedValue3((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 8 ? 8 : newValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);


// ////////////tab content /////////////////
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
  setActiveTab(index);
};





  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Ageing Driver Support</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                “Age is not a barrier to driving,
                <br /> it is about the fitness to drive.”
              </h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.video}>
            <img src={AgeingImg} alt="AgeingImg" />
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////// */}
      <section className={styles.ageIng2ndSection}>
        <section className={styles.belovedCustomerSection}>
          <div className={styles.belovedCustomerdetails}>
            <div className={styles.belovedCustomerdetailsQuestionaries}>
              <h1>How does age affect driving?</h1>
              <hr />
              <p>
                Every individual ages differently, so there is no arbitrary
                cut-off as to when someone should stop driving. However, older
                adults particularly those who are within the age range of 60-75+
                have a significantly higher crash death rate, that in comparison
                to middle age drivers (45-54) this may be primarily due to
                increased vulnerability and frailty to injury in a crash. This
                is why it may be beneficial to suggest ageing driver support to
                your elderly relatives/friends.
              </p>
            </div>
            <div className={styles.belovedCustomerdetailsQuestionaries}>
              {" "}
              <h1>What causes this increase?</h1>
              <hr />
              <p>
                As we age, inevitable factors such as decreased vision, impaired
                hearing, slower motor reflexes & worsening health conditions can
                become a complication, that elder drivers need to take into
                consideration. Ageing also tends to result in a reduction of
                strength, coordination and flexibility, which can impact your
                ability to safely control a car.
              </p>
            </div>
          </div>

          <div className={styles.pupilsImg}>
            <img src={agedPerson} alt="agedPerson" />
          </div>
        </section>
      </section>

      {/* ////////////////////////smartlearner stats ///////////////////////////////// */}
      <div className={styles.smartleanerStats}>
        <section className={styles.smartleanerStatsSection}>
          <h3>THE STATS</h3>
          <p>
            UK statistics, according to DVSA, estimates that there are
            approximately a total of 5.4 million motorists on the road in
            Britain who are over the ages of 70 which was recorded at the end of
            May 2019.{" "}
          </p>
          <div className={styles.statsContaier}>
            <div className={styles.numberContainer}>
              <span>{animatedValue1}%</span>
              <p id={styles.statslowerheading}>
                OF UK DRIVERS BELIEVE OLDER DRIVERS SHOULD BE BANNED
              </p>
            </div>
            <div className={styles.numberContainer}>
              <span>{animatedValue2}%</span>
              <p id={styles.statslowerheading}>
                INCREASE IN ROAD ACCIDENTS INVOLVING A OLDER DRIVER
              </p>
            </div>
            <div className={styles.numberContainer}>
              <span>{animatedValue3}%</span>
              <p id={styles.statslowerheading}>
                INCREASE IN DRIVERS 60+ BEING FATALY INJURED DUE TO ACCIDENT
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* ///////////////////////////////////////////////////////////// */}
      <section className={styles.ageIng2ndSection}>
        <section className={styles.belovedCustomerSection}>
          <div className={styles.belovedCustomerdetails}>
            <div className={styles.belovedCustomerdetailsQuestionaries}>
              <h1>Supporting Ageing Drivers in Coventry</h1>
              <hr />
              <p>
                Do you have any concerns about an elder relative in your family
                in regard to their driving? SmartLearner is here to assist and
                provide significant information you may need to know. If you
                believe, notice or recognise any red flags or warning signs of
                unsafe driving in your elder relatives, call SmartLearner on
                02475092784, we will provide a free consultation through the
                phone to see if we should set up an evaluation lesson with one
                of our specially trained instructors. Smartlearner aims to help
                all ageing drivers strengthen their independence and confidence
                whilst driving. SmartLearner has instructors who have undergone
                additional training to help them teach more senior drivers.
              </p>
            </div>
          </div>

          <div className={styles.pupilsImg}>
            <img src={PupilImg2342} alt="PupilImg" />
          </div>
        </section>
      </section>
      {/* ///////////////////////////////////////// */}

      <section className={styles.features}>
        <div className={styles.mainFeatures}>
          <div className={styles.column}>
            <span>
              <FaPhone id={styles.featuresIcon} />
            </span>

            <h3>Free Consultation</h3>
            <p>
              Are you concerned about the driving of a friend or relative
              because of their age? If so, why not contact us and schedule a
              call with one of our instructors who specialise in ageing driver
              support.
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaUserTie id={styles.featuresIcon} />
            </span>

            <h3>Qualified Instructors</h3>
            <p>
              We have instructors who are specifically trained on how to
              accommodate to seniors that may want to drive or re-learning how
              to.
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaChalkboardTeacher id={styles.featuresIcon} />
            </span>

            <h3>1-2-1 Theory Training</h3>
            <p>
              SmartLearner offers one to one driving theory sessions, whether
              online tutoring or face to face. SL can assist older drivers in
              educating them on road safety and proper practices when driving
            </p>
          </div>
          <div className={styles.column}>
            <span>
              <FaLaptop id={styles.featuresIcon} />
            </span>

            <h3>Simulated Driving Lessons</h3>
            <p>
              Smart Learner further accommodates learners who may have not
              driven in building their confidence with the driving simulator.
            </p>
          </div>
        </div>
      </section>
      {/* ///////////////////////////////////////////// */}
      <section className={styles.tabsection}>
        <div className={styles.tabs}>
          {tabContent.map((tab, index) => (
            <div
              key={index}
              className={`${styles.tab} ${
                index === activeTab ? styles.active : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.question}
            </div>
          ))}
        </div>
        <div className={styles.tabContent}>
          <div>
            {tabContent[activeTab].answer.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
