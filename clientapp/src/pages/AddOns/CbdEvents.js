import React from "react";
import styles from "./CbdEvents.module.css";
import cdbcard1 from "../../assets/images/cbdEvents1.jpeg";
import cdbcard2 from "../../assets/images/cbdEvents2.jpeg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CbdEvents() {
  const text2Ref = useRef(null);

  const splitTextPartTwo = () => {
    const firstPart = "Ready to unlock your potential with our CPD event";
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
        stagger: 0.1,
      });
  }, []);

  return (
    <>
      <div className={styles.cbdEventsComponent}>
        <div className={styles.cbdbanner}>
          <h2 ref={text2Ref}>{splitTextPartTwo()}</h2>
        </div>
        <div className={styles.cbdheadercontent}>
          <p>
            Your personal development is the key to your success, and we’re here
            to kick off the new year with a bang!
          </p>
          <p>
            Join us for a dynamic keynote speaker event in the heart of
            Coventry—come for one day or both!
          </p>
          <p>
            Connect with amazing, like-minded individuals and spark your journey
            towards greatness.
          </p>
          <p>
            We’ve got you covered with lunch, tea, and coffee, plus a
            certificate of attendance that counts towards your CPD or trainee
            hours.
          </p>
        </div>
        <div className={styles.cbdContentBox}>
          <div className={styles.headingFlex}>
            {" "}
            <h1>Day 1 Thursday 23rd Jan </h1> <h2>9.30am - 4.00pm <span>£99</span></h2>
          </div>

          <div className={styles.cbdContentBoxflex}>
            {" "}
            <img src={cdbcard1} alt="" />
            <div className={styles.cbdContent}>
              
              <h2>
                Benefits of a Session with Graham Hooper (ADI Industry Expert):
              </h2>
              <p>
                Expertise: With 30+ years in driver education, Graham offers
                in-depth knowledge and practical skills.
              </p>
              <p>
                Comprehensive Training: Tailored courses on Part 3, Standards
                Checks, risk management, and business development.
              </p>
              <p>
                Personalized Coaching: Focuses on client-centered teaching,
                enhancing skills and learner engagement.
              </p>
              <p>
                Proven Results: Praised by trainees for boosting confidence and
                achieving qualification success.
              </p>
              <p>
                Road Safety Commitment: Emphasizes producing competent,
                safety-focused driving instructors.
              </p>
              <p>
                A session with Graham ensures practical insights and
                professional growth in the driving instruction field.
              </p>
              <a href="https://book.stripe.com/bIYeXe1ZP5U7epa004">
                <button>Pay Now</button>
              </a>
            </div>
          </div>
          <div className={styles.headingFlex}>
            {" "}
            <h1>Day 2 Friday 24th Jan </h1> <h2>9.30am - 4.00pm <span>£99</span></h2>
          </div>

          <div className={styles.cbdContentBoxflex}>
            {" "}
            <img src={cdbcard2} alt="" />
            <div className={styles.cbdContent}>
              <h2>
                Benefits of Your Session with Chris Howes: ( Former Assistant
                Chief Driving Examiner and head of DVSA's Cardington Examiner
                Training Centre)
              </h2>

              <p>
                In-Depth Industry Knowledge: Chris has extensive experience in
                driving examiner training and ADI examiner training, providing
                valuable insights into the standards and expectations of the
                Driver and Vehicle Standards Agency (DVSA).
              </p>
              <p>
                Clarification of Testing Standards: He can demystify the
                requirements of Part 2 and Part 3 tests, as well as the
                Standards Check, helping instructors understand exactly what's
                needed to succeed.
              </p>
              <p>
                Clarification of Testing Standards: He can demystify the
                requirements of Part 2 and Part 3 tests, as well as the
                Standards Check, helping instructors understand exactly what's
                needed to succeed.
              </p>
              <p>
                Interactive Learning: His sessions often include interactive Q&A
                segments, allowing participants to have their specific questions
                answered, enhancing the learning experience.
              </p>
              <p>
                Participating in a session with Chris Howes can provide clarity,
                boost confidence, and enhance your effectiveness as a driving
                instructor.
              </p>
              <a href="https://book.stripe.com/9AQeXebApgyL2Gs9AF">
                <button>Pay Now</button>
              </a>
            </div>
          </div>
          <div className={styles.headingFlex}>
              {" "}
              <h1>Day 1 & 2 23rd & 24th Jan </h1>
              <h2>9.30am - 4.00pm <span>£149</span></h2>
            </div>
          <div className={styles.cbdSpacialOffers}>
            
            <h2>Special 2 Day Offer </h2>
            <p>
              Our exclusive 2-day special is the perfect opportunity to gain
              fresh insights and build lasting friendships.
            </p>
            <p>
              Imagine engaging with like-minded individuals, sharing ideas, and
              discovering new perspectives. This is your chance to connect,
              learn, and grow in a supportive environment. But don’t wait too
              long—spots are limited and filling up fast!
            </p>
            <a href="https://book.stripe.com/aEUdTa0VL6Yb80M3cj">
              <button>Pay Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
