// import React from 'react'
import styles from "../pages/Transmission/IntensiveTransmision.module.css";

import { IoCallSharp } from "react-icons/io5";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import IntensiveCorousel from "../components/ui/IntensiveCorousel";
import { Helmet } from "react-helmet-async";

export default function IntensiveCourses() {
  const textRef = useRef(null);

  const splitText = () => {
    const firstPart = "Intensive";

    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    return <>{firstLine}</>;
  }; 

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out",
      stagger: 0.1,
      rotationX: 90,
      transformOrigin: "bottom center",
      scale: 0.5,
    })
      .to(letters, {
        scale: 1,
        opacity: 1,
        rotationX: 0,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
      })
      .to(letters, {
        color: "#FF5733",
        rotationY: 360,
        stagger: 0.1,
        duration: 1,
      })
      .to(letters, {
        scale: 1.2,
        opacity: 0.8,
        rotationX: -10,
        stagger: 0.1,
        duration: 1,
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to original
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake
        repeat: 2, // Repeat the shake
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size for bounce
        opacity: 1,
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05,
        duration: 1,
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1,
        y: -30, // Vertical bounce movement
        duration: 0.5,
      })
      .to(letters, {
        color: "#FF1493", // Change to pink
        duration: 2,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse color change
        stagger: 0.1,
      });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Intensive Driving Courses</title>
        <link rel="canonical" href="https://smartlearner.com/intensive" />
        <meta property="og:title" content="Intensive Driving Courses" />
        <meta
          property="og:description"
          content="Pass your driving test faster with our intensive driving courses. Designed for quick learners who want to get on the road in less time."
        />
        <meta
          name="description"
          content="Pass your driving test faster with our intensive driving courses. Designed for quick learners who want to get on the road in less time."
        />
      </Helmet>
      <section className={styles.manualBanner}>
        <div className="opicity"></div>
        <div className="home-banner-flex">
          <div className="home-content-D">
            <h1 ref={textRef}>{splitText()}</h1>

            <div className="home-bannerbnt-sec">
              <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                <button className="button-style">CONTACT US</button>
              </Link>
              <span>
                <a
                  href="tel:+4402475092784"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                  <IoCallSharp className="gradient-icon" /> 02475092784
                </a>
              </span>
            </div>
          </div>

          <div className={styles.bannerImg}>
            {/* <img
                  src={manualround1}
                  alt="driving-car"
                  id={styles.homeDrivingImg1}
                />
                <img
                  src={manualround2}
                  alt="driving-car"
                  id={styles.homeDrivingImg2}
                /> */}
          </div>
        </div>
      </section>

      {/* <div className={styles.IntensivecourseContainer}>
            <h1 className={styles.Intensivetitle}>Intensive Driving Course</h1>
            <p className={styles.IntensiveintroText}>
              Get ready to drive with confidence in just a few days!
            </p>
    
            <div className={styles.IntensivecourseCards}>
              <div className={styles.IntensivecourseCard}>
                <h3>Beginner Basics</h3>
                <p>Learn the essential driving skills to start your journey.</p>
              </div>
              <div className={styles.IntensivecourseCard}>
                <h3>Advanced Techniques</h3>
                <p>Master complex driving maneuvers with ease.</p>
              </div>
              <div className={styles.IntensivecourseCard}>
                <h3>Mock Driving Test</h3>
                <p>Simulate a real driving test to boost your confidence.</p>
              </div>
            </div>
          </div> */}
      <div className={styles.manualContent}>
        <section className={styles.manualPara}>
          <p>Designed for those eager to learn quickly and efficiently,</p>
          <p>
            {" "}
            Our immersive programmes offer focused instruction and hands-on
            experience to help you become a confident driver in no time. Get
            behind the wheel and fast-track your path to driving independence
            with our intensive driving courses.
          </p>
        </section>
      </div>
      <section>
        <IntensiveCorousel />
      </section>
    </div>
  );
}
