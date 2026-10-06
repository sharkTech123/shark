// import React from 'react'
import styles from "./css/About.module.css";
import AboutPageImg from "../assets/images/image_2021_03_03T15_33_28_479Z-1024x768.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "ABOUT US"; // First part before "Driving"

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

  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "About SmartLearner Driving School"; // Second part after "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
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
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "4rem",
      }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Our Driving School</title>
        <meta name="description" content="About SmartLearner Driving School" />
        <link rel="canonical" href="https://smartlearner.com/about" />
        <meta property="og:title" content="About Our Driving School" />
        <meta property="og:url" content="https://smartlearner.com/about" />
        <meta
          property="og:description"
          content="Learn more about our driving school’s mission, values, and experienced instructors."
        />
      </Helmet>
      <div className={styles.TcHomeBanner}>
        <div className={styles.opicity}></div>
        <section>
          <div className={styles.Tcheader}>
            <h2 ref={textRef}>{splitText()}</h2>
          </div>
        </section>
      </div>
      <section className={styles.aboutPageSection}>
        <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
        <div className={styles.smartLearnerAboutPageContent}>
          <img src={AboutPageImg} alt="AboutImg" />
          <div className={styles.aboutPageContent}>
            {" "}
            <p>
              SmartLearner was founded in 2004 with the vision of becoming the
              best driving school in Coventry. Now in 2021, we have far
              surpassed our original goals. We are the highest-rated driving
              school in Warwickshire and the West Midlands. SmartLearner was
              even voted the ‘Regional Driving School Of The Year’ at the
              Intelligent Instructor Awards 2021 and 2024!
            </p>
            <p>
              Our learners regularly achieve a higher-than-average pass rate
              with a below-average number of lessons. This is because we have
              over 50 instructors all based locally who are trained to the
              highest standard! Our driving instructors teach in both Manual and
              Automatic. We have an amazing team of friendly and enthusiastic
              local Male and Female instructors. SmartLearner also doesn’t shy
              away from the use of modern technology to enhance our pupils
              driving experience.
            </p>
            <p>
              At <span>Smart Learner Driving School</span> we understand that
              every learner is different! That is why we offer custom lesson
              plans for every pupil based on their current experience and unique
              learning styles. We offer our pupils so much more than just
              driving lessons. At SmartLearner we offer a range of services to
              support our learners in achieving their goals. Our other services
              include;
            </p>
            <p>
              <ul>
                <li> Intensive Driving Courses</li>
                <li>1-2-1 Theory Support</li>
                <li>Simulated Driving Lessons</li>
                <li>Driving Instructor Training</li>
              </ul>
            </p>
            <p>
              SmartLearner Driving School also has a vested interest in road
              safety and has worked with the local police/fire service, Highways
              England, Coventry City Council and road safety charities that
              include; Because Your Life Counts¹, IAM Road Smart², and Aquarius³
              to try and reduce the number of unnecessary road traffic
              collisions each year.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
