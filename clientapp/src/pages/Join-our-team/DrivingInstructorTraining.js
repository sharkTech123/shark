import moneyIcon from "../../assets/images/Asset_108.png";
import userTie from "../../assets/images/Asset_107.png";
import workinghour from "../../assets/images/Asset_109.png";
import ladyUser from "../../assets/images/Asset_110.png";
import styles from "./Drivinginstructortraining.module.css";
import award from "../../assets/images/trophy-Icon.png";
import EnquiryForm from "../../components/forms/EnquiryForm";
import { InstructorTestimonials } from "../../assets/data/testimonials";
import { useEffect, useState, useRef } from "react";

import DrivingInstructorUI from "../../components/ui/DrivingInstructorUI";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";

export default function DrivingInstructorTraining() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % InstructorTestimonials.length
      );
    }, 2000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = InstructorTestimonials[currentTestimonialIndex];

  // //////////////////////////////////////////////////////////
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "DRIVING INSTRUCTOR"; // First part before "Driving"
    const secondPart = " TRAINING"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#FF5733", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  // ///////////////////////////////
  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "Become a Driving"; // First part before "Driving"
    const secondPart = " Instructor"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    const secondLine = secondPart
      .split("")
      .map((char, index) => <span key={`second-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  };

  useEffect(() => {
    const letters = text2Ref.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#FF5733", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#FF1493", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  return (
    <div className={styles.drivingInstructorTraining}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Instructor Training Courses</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Driving-Instructor-Training"
        />
        <meta
          property="og:title"
          content="Driving Instructor Training Courses"
        />
        <meta
          property="og:description"
          content="Start your career as a driving instructor with our DVSA-approved training courses. Expert guidance, flexible learning, and full support throughout."
        />
        <meta
          name="description"
          content="Start your career as a driving instructor with our DVSA-approved training courses. Expert guidance, flexible learning, and full support throughout."
        />
      </Helmet>

      <div className={styles.dITPages}>
        <section className={styles.dITPageseees}>
          <div className="opicity"></div>
          <section className={styles.dItFrontHeading}>
            <h2 ref={textRef}>{splitText()}</h2>
          </section>
        </section>
        {/* //////////////////////////// Why choose section */}
        <section className={styles.features}>
          <h4>Why choose SmartLearner Driving School?</h4>
          <p>
            SmartLearner Driving School are dedicated to making sure they make
            driving instructor training high-quality and affordable!
          </p>
          <div className={styles.mainFeatures}>
            <div className={styles.column}>
              <h3>Earn Over £30,000</h3>
              <span>
                <img src={moneyIcon} alt="money-Icon" />
              </span>

              <p>
                An average full-time instructor will earn over £30K per year!
              </p>
            </div>
            <div className={styles.column}>
              <h3>Be Your Own Boss</h3>
              <span>
                <img src={userTie} alt="user-Tie" />
              </span>

              <p>When you are an instructor you`re the boss.</p>
            </div>
            <div className={styles.column}>
              <h3>Flexible Working Hours</h3>
              <span>
                <img src={workinghour} alt="Hour-Icon" />
              </span>

              <p>Work hours that suit you and your family.</p>
            </div>
            <div className={styles.column}>
              <h3>Full Office Support</h3>
              <span>
                <img src={ladyUser} alt="Lady-User" />
              </span>

              <p>We offer full office support to help ensure you succeed.</p>
            </div>
          </div>
        </section>
        {/* ////////////////////////////Book now section ///////////////////// */}
        {/* <div className={styles.drivingLessonsCd}>
          <section className={styles.drivinglCall}>
            <a href="tel:+4402475092784" className={styles.drivinglCall}>
              <IoCall id={styles.IconsS} />
              <p>02475 092 784</p>
            </a>
          </section>
          <section>
            <a href="mailto:admin@smartlearner.com">
              <HiMailOpen id={styles.IconsS} />
              <p>Admin@Smartlearner.com</p>
            </a>
          </section>
        </div> */}
        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.infoTextContainer}>
          <div className={styles.infoTextHeading}>
            <h1>
              Award-Winning <br /> Driving Instructor Training <br /> with{" "}
              <span>SmartLearner</span>{" "}
            </h1>
            <img src={award} alt="award" />
          </div>
          <div className={styles.infoTextHeading2}>
            <h3>
              ** Call us today. Full package prices starting from just £999! **
            </h3>
          </div>
        </section>

        {/* ////////////////How to become a Driving Instructor//////////////// */}
        <section className={styles.instructorContainer}>
          <div className={styles.innerInstructorContainer}>
            <h4 ref={text2Ref}>{splitTextPartTwo()}</h4>

            <div className={styles.detailsContainer}>
              {/* <DrivingInstructorUI /> */}
              <div className={styles.trainingDetails}>
                <h3>Step 1 - Preparation</h3>
                <hr />
                <p>
                  The first step is making sure your eligible to become an
                  instructor. To become an instructor you must be over 21 and
                  have held a full driving license for 3+ years. You will be
                  required to have a Criminal Record Check (CRB). There are 3
                  parts/exams you must pass before you become a fully qualified
                  driving instructor. However, before you apply for these tests
                  we will need to apply and receive your unique PRN number.
                </p>
              </div>
              <div className={styles.trainingDetails}>
                <h3>Step 2 - ADI Theory Test</h3>
                <hr />
                <p>
                  Part 1 of ADI training is all about ensuring you have a
                  thorough knowledge of the highway code and hazard perception.
                  The test consists of 100 multiple choice questions with you
                  needing to achieve a score of 85+ to pass. You will also need
                  to pass the Hazard Perception test by achieving a score of 57
                  out of 75. <br />
                  Note: You have unlimited attempts, however, each test you need
                  to take will cost £81.00
                </p>
              </div>
              <div className={styles.trainingDetails}>
                <h3>Step 3 - Driving Ability Test</h3>
                <hr />
                <p>
                  Part 2 of the ADI training focuses on your driving ability,
                  similar to the original test you would have sat to get your
                  full driving license. To ensure you’re prepared, if you train
                  with us, we provide 10 hours of lessons with an ORDIT Approved
                  Trainer.
                  <br /> Note: You have a maximum of 3 attempts. Each test
                  attempt costs £111.00
                </p>
              </div>
              <div className={styles.trainingDetails}>
                <h3>Step 4 - Learn And Earn</h3>
                <hr />
                <p>
                  After passing your driving ability test, you are required to
                  take 40 hours of training with a qualified trainer. This
                  allows you to apply for a “pink badge” which means you to
                  provisionally teach learners and earn for 6 months. If you
                  decided to go down the “pink badge” route you will be able to
                  take a pupil you are currently teaching. This route requires
                  you to pay for 20 hours of additional training, however, this
                  cost is easily covered by the money you will be earning from
                  lessons.
                </p>
              </div>
              <div className={styles.trainingDetails}>
                <h3>Step 5 - Teaching Ability Test</h3>
                <hr />
                <p>
                  Alternatively, once you complete your 40 hours of training you
                  can apply to take your final test (also known as part 3.) This
                  exam is all about your ability to teach a pupils. If you
                  decide to go straight for the exam you would be required to
                  find a full license holder who owns their own car. Note: You
                  have a maximum of 3 attempts. Each test will cost £111.00
                </p>
              </div>
              <div className={styles.trainingDetails}>
                <h3>Step 6 - Celebrate!</h3>
                <hr />
                <p>
                  All your hard work, perseverance, and commitment have paid
                  off! You can now proudly say you are a fully qualified driving
                  instructor (ADI).
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*///////////////////////////////// Enquire Form/////////////////////////// */}
        <section>
          <EnquiryForm />
        </section>
        {/* /////////////////////////////////////Info Text ///////////////////////////////// */}

        {/*//////////////////////////////////////// testimonial////////////////////////////////////// */}
        {/* <section>
        <section className={styles.testimonialsContainer}>
    <div className={styles.tmcontainer}>
          <h4>Testimonials</h4>
          <div className={styles.testimonial}>
            
            <div className={styles.testimonialContent}><span id={styles.comma1}><p>"</p></span>
            <p className={styles.testimonialName}>{currentTestimonial.name}</p>
              <p className={styles.testimonialComment}>{currentTestimonial.comment}</p>
              <img src={currentTestimonial.image} alt={currentTestimonial.name} className={styles.testimonialImage} />
              <p className={styles.testimonialimgName}>{currentTestimonial.name}</p><span  id={styles.comma2}><p>"</p></span>
            </div>
           
          </div>
        </div>
    </section>
        </section>

        {/* /////////////////// Reviews section /////////////////*/}
        {/* <section>
          {" "}
          <Review />
        </section>  */}
        {/* /////////////////////////////////////Our Partners////////////////////////// */}

        {/* <section className={styles.ourPartnersSection}>
      <div className={styles.bgOverlay}></div>
          <h2>Our Partners</h2>
          <div className={styles.partnerSection}>
            <img src={OurPartners1} alt="" />
          
            <img src={OurPartners2} alt="" />
            <img src={OurPartners3} alt="" />
            <img src={OurPartners4} alt="" />
            <img src={OurPartners5} alt="" />
            <img src={OurPartners7} alt="" />
            <img src={OurPartners8} alt="" />
            <img src={OurPartners9} alt="" />
            <img src={OurPartners10} alt="" />
            <img src={OurPartners11} alt="" />
            <img src={OurPartners12} alt="" />
            <img src={OurPartners13} alt="" />
          </div>
        </section> */}
      </div>
    </div>
  );
}
