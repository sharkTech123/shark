// import React from 'react'
import styles from "./DrivingInstructorFranchise.module.css";
import { GoPlay } from "react-icons/go";
import { FaCheckCircle, FaHandsHelping } from "react-icons/fa";
import moneyIcon from "../../assets/images/Asset_108.png";
import userTie from "../../assets/images/Asset_107.png";
import workinghour from "../../assets/images/Asset_109.png";
import ladyUser from "../../assets/images/Asset_110.png";
import Lplateimg from "../../assets/images/L-Plate.jpg";
import intensiveCoursesImg from "../../assets/images/Intensive-Driving-Course-1024x768.jpg";
import DiaryImg from "../../assets/images/Diary-1536x681.jpg";
import { useEffect, useState, useRef } from "react";
import { joinOurTeamTestimonials } from "../../assets/data/testimonials";

import ImagesCarousel2nd from "../../components/imageCarousel/ImagesCarousel2nd";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";

export default function DrivingInstructorFranchise() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % joinOurTeamTestimonials.length
      );
    }, 2000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = joinOurTeamTestimonials[currentTestimonialIndex];

  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "DRIVING INSTRUCTOR FRANCHISE"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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
    const firstPart = "JOIN OUR DRIVING"; // First part before "Driving"
    const secondPart = "SCHOOL FRANCHISE"; // Second part after "Driving"

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

  // ///////////////////////////////
  const text3Ref = useRef(null);

  const splitTextPartThree = () => {
    const firstPart = "Join Our Driving School Franchise"; // First part before "Driving"
    // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = text3Ref.current.querySelectorAll("span");

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
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving School Franchise</title>
        <meta property="og:title" content="Driving School Franchise" />
        <meta
          property="og:description"
          content="Join our successful driving school franchise and grow your business with expert support, branding, and proven systems. Start your journey with SmartLearner today."
        />
        <link
          rel="canonical"
          href="https://smartlearner.com/Driving-Instructor-Franchise"
        />
        <meta
          name="description"
          content="Join our successful driving school franchise and grow your business with expert support, branding, and proven systems. Start your journey with SmartLearner today."
        />
      </Helmet>
      <div
        className={styles.drivingInstructorTraining}
        style={{
          backgroundColor: "black",
          fontFamily: "'Antonio',sans-serif",
          paddingBottom: "4rem",
        }}
      >
        <section className={styles.imageSection}>
          <div className="opicity"></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1 ref={textRef}>{splitText()}</h1>
              </div>

              <div className={styles.heading2}>
                <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
              </div>
              <div className={styles.btn}>
                <Link to="/Contact-Us">
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* //////////////////////////// Why choose section */}
        <section className={styles.features}>
          <h4 ref={text3Ref}>{splitTextPartThree()}</h4>
          <div className={styles.csrPagesLd}>
            <p>
              If you’re an experienced instructor thinking of joining a driving
              school franchise, you’re probably considering all your options.
              Let’s start by pointing out that SmartLearner was voted ‘Regional
              Driving School of the Year’ in 2021 and 2022!
            </p>
          </div>
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
        {/* //////////////////////////////////// benefits section //////////////////////////////////////// */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsHeading}>
            <h4>Superb Benefits</h4>
          </div>
          <div className={styles.benefitsDetails}>
            <ul className={styles.benefitsList} type="none">
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>Meet and network with other new SmartLearner instructors.</p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  Exclusive access to the SmartLearner Booking System to help
                  manage your business.
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  Opportunities to attend online and in-person instructor
                  training courses - to continue your professional development.
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  Most of our customers prepay. This means less haggling over
                  prices or no-shows.
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  Fixed Franchise Fee – Paid Weekly – No surprise charges
                  throughout your franchise agreement!
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  FREE SmartLearner branding - No need to pay for car stickering
                  or branded clothing.
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  We advertise on various search engines and social media
                  platform to ensure a constant stream of new business.
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>
                  Be treated as a person, not a number. At SmartLearner we
                  understand a driving school is only as successful as its
                  instructors.
                </p>
              </li>
              <li id={styles.benefitsList}>
                <span>
                  <FaCheckCircle id={styles.checkCircle} />
                </span>
                <p>Enjoy your holiday with 4 weeks franchise free per year!</p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <section className={styles.imageSliderContainer}>
          <h2>Our PDI Passes</h2>
          <div
            style={{
              maxWidth: "1100px",
              marginRight: "auto",
              marginLeft: "auto",
              padding: "4rem 2rem",
              width: "100%",
              margin: "2rem auto",
            }}
          >
            <ImagesCarousel2nd />
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////// */}

        {/* ////////////////////////////Join our fleet instruction///////////////////////// */}
        <section className={styles.sectionContainer}>
          <div className={styles.iconDiv}>
            <FaHandsHelping className={styles.helpingHand} />
          </div>
          <div className={styles.headingDiv}>
            <h1>Join Our Fleet Of Instructors!</h1>
          </div>
          <div className={styles.buttonDiv}>
            <a href="tel:+4402475092784">
              <button id={styles.buttonDiv}>Contact Us</button>
            </a>
          </div>
          <div className={styles.paragraphsDiv}>
            <p>
              Lines open Monday to Friday, 9:00AM to 7:00PM Weekends 10:00AM to
              4:00PM{" "}
            </p>
          </div>
        </section>

        {/* /////////////////////////////Our Beloved Customer section ////////////////////// */}
        <section className={styles.belovedCustomerSection}>
          <div className={styles.belovedCustomerdetails}>
            <h1>
              Pupils <span> LOVE</span> SmartLearner!
            </h1>
            <p>
              SmartLearner Driving School has helped thousands of students pass
              their driving test and theory exams!
            </p>
            <p>
              We have an Excellent rating and reviews on{" "}
              <a href="/">TrustPilot</a>,{" "}
              <a href="https://smartlearner.com">Google</a> and{" "}
              <a href="https://www.facebook.com/smartlearnerdrivingschool">
                Facebook
              </a>
              . We have over 10,000+ followers across our social media
              platforms. We always engage with our loyal students/followers
              online to help maximise pupil engagement and constantly generate
              our driving instructors new pupils. SmartLearner Driving School
              also won ‘Regional Driving School of the Year’ at the Intelligent
              Instructor Awards 2021.
            </p>
            <p>
              <strong>More than 4 in 5 Driving Instructors</strong> at
              SmartLearner Driving School currently are fully-booked! All of our
              other driving instructors have over 90% of their diary booked.
            </p>
          </div>
          <div className={styles.pupilsImg}>
            <img src={intensiveCoursesImg} alt="intensiveCoursesImg" />
          </div>
        </section>
        {/* ///////////////////////////////////////////Booking System ////////////////////////////// */}

        <section className={styles.bookingSection}>
          <div className={styles.diaryImgSection}>
            <img src={DiaryImg} alt="Booking Img" />
          </div>
          <div className={styles.diaryDetailsSection}>
            <h4>Our Booking System</h4>
            <p>
              At SmartLearner we use a state-of-the-art booking system! This
              allows our instructors to reduce their admin work and focus on
              what they love doing… teaching. Our system includes various
              features such as a real-time online diary which means our
              instructors and office staff are always on the same page. We also
              have an automated SMS system which sends text alerts to
              instructors and learners to confirm the lesson times or let them
              know when a lesson has been cancelled. Our system allows
              instructors to take card/cash payments in the car, add learner
              notes and even sends learners custom lesson summaries!
            </p>
          </div>
        </section>

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
        </section> */}

        {/* /////////////////// Reviews section /////////////////*/}
        {/* <section>
        <Review/>
      </section> */}
      </div>
    </>
  );
}
