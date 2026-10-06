import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./LearnerPortal.module.css";
import table from "../../assets/images/tableImg.png";
import { Link } from "react-router-dom";

const Section = ({ title, paragraphs = [], list = [], steps = [], note }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      className={`${styles.contentSection} ${inView ? styles.visible : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {list.length > 0 && (
        <ul>
          {list.map((item, i) => (
            <li key={i}>● {item}</li>
          ))}
        </ul>
      )}
      {steps.length > 0 && (
        <ol>
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      )}
      {note && <p className={styles.note}>{note}</p>}
    </motion.section>
  );
};

// //////////////////////////

const LearnerPortal = () => {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Welcome to the Learner Portal";
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
        color: "#fd9235", // Change text color to red
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
        color: "#ff54d7", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  ///////////////////////////////
  const skills = [
    "Moving off and stopping",
    "Forward bay parking",
    "Reverse bay parking",
    "Parallel parking",
    "Park on the right",
    "Emergency stop",
    "Clearance",
    "Major to minor (left)",
    "Major to minor (right)",
    "Minor to major (left)",
    "Minor to major (right)",
    "Cross roads",
    "Pedestrian crossings",
    "Unmarked junctions",
    "Meeting oncoming traffic",
    "Anticipation and planning",
    "Roundabouts",
    "Dual carriageway",
    "Satnav",
    "Independent driving",
    "Effective use of mirrors",
    "Mock test",
    "Country roads",
    "Steering proficiency",
  ];

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.banner}>
        <div className={styles.opicity}></div>
        <div className={styles.bannerheader}>
          <h1 ref={textRef}>{splitText()}</h1>
          <iframe
            src="https://lottie.host/embed/7e0ac8f1-3d73-4d6e-bd12-fe35a1fb27ef/IsmqvOQzDI.lottie"
            style={{ position: "sticky" }}
          ></iframe>
        </div>
      </header>
      {/* /////////////////////////////////////////////// */}
      {/* <div className={styles.tableImgBanner}>
        <img src={table} alt="table" />
      </div> */}

      {/* /////////////////////////////////////////////////// */}

      <div className={styles.contentdiv}>
        <Section
          title="What to Expect on Your First Driving Lesson"
          paragraphs={[
            "Your first driving lesson is an exciting step toward independence! At SmartLearner Driving School, we make sure your introduction to driving is safe, supportive, and confidence-building.",
            "Here's what typically happens:",
          ]}
          list={[
            "Meet Your Instructor: Your instructor will greet you, check your provisional licence, and answer any questions you have.",
            "Brief Introduction: You'll go over the basics—controls, mirrors, safety checks—and get familiar with the car.",
            "Start Driving: If you're ready, you'll take the wheel on quiet roads to practice moving off, stopping, and steering.",
            "No Pressure: Your instructor will work at your pace. There’s no expectation to do everything perfectly on Day 1.",
          ]}
          note="Wear comfortable shoes and bring your provisional licence—we’ll take care of the rest."
        />

        <Section
          title="The Process of Getting Your Full UK Driving Licence"
          paragraphs={[
            "Getting your full driving licence is a step-by-step journey. Here’s how it works:",
          ]}
          steps={[
            "Apply for a Provisional Licence – You can apply when you’re 15 years and 9 months old, but you must be 17 to start lessons.",
            "Take Driving Lessons – You'll need professional lessons with a qualified instructor and should also practice with a friend or family member (if insured).",
            "Theory Test – You'll need to pass the theory test, which includes multiple-choice questions and a hazard perception video section.",
            "Practical Driving Test – Once you're confident behind the wheel and your instructor agrees you're ready, you'll book the practical driving test.",
            "Get Your Full Licence! – Pass the practical test and you'll receive your full UK driving licence.",
          ]}
          note="Our goal is to make every step as smooth and stress-free as possible. Whether you're a
total beginner or need a refresher, we're here to support you from lesson one to passing your
test.
"
        />
      </div>
      {/* //////////////////////////////////////////////// */}
      <div className={styles.LearnerPortalcontainer}>
        <h1 className={styles.LearnerPortalheading}>
          What is an Assessment Driving Lesson?
        </h1>
        <p className={styles.LearnerPortalintro}>
          Not sure how many lessons you need—or if you're ready for your driving
          test? Our 2-hour Assessment Lesson is the perfect way to find out.
        </p>

        <section className={styles.LearnerPortalsection}>
          <h2>Who is it for?</h2>
          <ul className={styles.LearnerPortalbulletList}>
            <li>● New learners looking for a personalised lesson plan</li>
            <li>● Learners returning to lessons after a break</li>
            <li>
              ● Drivers with previous experience who want to know if they’re
              test-ready
            </li>
            <li>● International licence holders needing a UK driving test</li>
          </ul>
        </section>

        <section className={styles.LearnerPortalsection}>
          <h2>What to Expect During the Assessment</h2>
          <p
            className={styles.LearnerPortalintro}
            style={{ textAlign: "left" }}
          >
            The goal of the assessment is to give you clear, honest feedback on
            your current driving ability.
          </p>
          <p className={styles.LearnerPortalintro}>
            <strong>Here's how the 2-hour session works:</strong>
          </p>
          <div className={styles.LearnerPortalcard}>
            <h3>🗣 Initial Chat</h3>
            <p>
              Your instructor will ask about your driving history and what
              you're hoping to achieve.
            </p>
          </div>
          <div className={styles.LearnerPortalcard}>
            <h3>🚗 Driving Time</h3>
            <p>
              You’ll spend the majority of the lesson driving on a variety of
              roads and traffic conditions. The instructor will observe your
              skills across key areas such as:
            </p>
            <ul>
              <li>● Clutch control and gear use (Manual vehicles)</li>
              <li>● Steering and road positioning</li>
              <li>● Mirror checks and awareness</li>
              <li>● Junctions, roundabouts, and lane discipline</li>
              <li>● Speed control and hazard perception</li>
              <li>● Manoeuvres (e.g. parking, reversing)</li>
            </ul>
          </div>
          <div className={styles.LearnerPortalcard}>
            <h3>📋 Professional Feedback</h3>
            <p>
              At the end of the session, your instructor will give you a clear
              summary of your current level and how close you are to test
              standard.
            </p>
          </div>
        </section>
      </div>
      {/* ////////////////////////////////////////////////// */}
      <div className={styles.learnerPortal2ndcontainer}>
        <h2 className={styles.learnerPortal2ndheading}>
          🚦 What Happens Next?
        </h2>
        <p className={styles.learnerPortal2ndtext}>
          You'll receive a <strong>personalised recommendation</strong>{" "}
          outlining:
        </p>
        <ul className={styles.learnerPortal2ndlist}>
          <li>🕐 An estimated number of hours you may need (if any)</li>
          <li>📌 Key areas to work on</li>
          <li>📘 A suggested lesson plan moving forward</li>
        </ul>
        <p className={styles.learnerPortal2ndtext}>
          Whether you're almost ready or just starting out, this session helps
          you take the next step with
          <strong> confidence</strong> and a clear direction.
        </p>
        <div className={styles.learnerPortal2ndcta}>
          <Link to="/Contact-Us">
            🎯 Book your assessment today for peace of mind!
          </Link>
        </div>

        <h3 className={styles.learnerPortal2ndsubheading}>
          🚘 How Many Driving Lessons Do You Need to Pass?
        </h3>
        <p className={styles.learnerPortal2ndtext}>
          One of the most common questions we get is:
        </p>
        <blockquote className={styles.learnerPortal2ndquote}>
          “How many lessons will I need to pass my driving test?”
        </blockquote>
        <p className={styles.learnerPortal2ndtext}>
          The answer? It depends on the individual—but we’re here to help you
          get there as efficiently and confidently as possible.
        </p>

        <h4 className={styles.learnerPortal2ndguideTitle}>
          📋 DVSA Guidelines
        </h4>
        <p className={styles.learnerPortal2ndtext}>
          The <strong> DVSA (Driver and Vehicle Standards Agency)</strong>{" "}
          recommends:
        </p>
        <ul className={styles.learnerPortal2ndlist}>
          <li>✅ Around 45 hours of professional driving lessons</li>
          <li>➕ 20 hours of private practice (with a qualified supervisor)</li>
        </ul>
        <p className={styles.learnerPortal2ndnote}>
          But keep in mind: some learners need fewer, others need a bit more.
          Everyone learns at a different pace.
        </p>
      </div>
      {/* //////////////////////////////////////// */}
      <div className={styles.learnerPortal3rdwrapper}>
        <motion.h1
          className={styles.learnerPortal3rdheading}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Affects How Many Lessons You’ll Need?
        </motion.h1>
        <p>A few key factors include:</p>
        <motion.ul
          className={styles.learnerPortal3rdlist}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            "Previous driving experience (even informal or international)",
            "Confidence behind the wheel",
            "How often you take lessons (regular sessions = faster progress)",
            "Opportunity for private practice",
            "How quickly you pick up skills like clutch control, observation, and decision-making",
          ].map((item, i) => (
            <motion.li
              className={styles.learnerPortal3rdlistItem}
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className={styles.learnerPortal3rdassessment}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Want a More Accurate Estimate?</h2>
          <p>
            We offer a <strong>2-hour Assessment Lesson</strong> to give you a
            clear picture of your current level and how many lessons you may
            need. You'll receive personalised feedback and a tailored plan to
            get you test-ready.
          </p>
          <Link to="/Contact-Us">
            🎯 Book your assessment today for peace of mind!
          </Link>
        </motion.div>

        <motion.div
          className={styles.learnerPortal3rdvark}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {" "}
          <a
            href="https://vark-learn.com/the-vark-questionnaire/"
            target="_blank"
          >
            <h2>Learning Your Way: The VARK Approach</h2>
          </a>  
          <p>
            Everyone learns differently—and that’s totally okay! At{" "}
            <strong>SmartLearner Driving School</strong>, we use the VARK
            learning model to help you get the most out of your driving lessons.
          </p>
          <div className={styles.learnerPortal3rdvarkGrid}>
            {[
              {
                icon: "🧠",
                title: "Visual – “Show Me”",
                desc: "You learn best by seeing. Diagrams, road layouts, demonstrations, and videos help you understand what to do.",
                support:
                  "✅ We'll use visual aids, route sketches, and demonstration drives.",
                color: "#00c6ff",
              },
              {
                icon: "🎧",
                title: "Auditory – “Tell Me”",
                desc: "You learn best by hearing. Clear instructions, explanations, and talking through what’s happening helps it stick.",
                support:
                  "✅ Our instructors explain things clearly and encourage questions during and after drives.",
                color: "#ff6a95",
              },
              {
                icon: "✍️",
                title: "Reading/Writing – “Let Me Read It”",
                desc: "You learn best by reading notes and writing things down.",
                support:
                  "✅ We provide recap notes, diagrams, and tips you can review between lessons.",
                color: "#a46aff",
              },
              {
                icon: "🤲",
                title: "Kinaesthetic – “Let Me Do It”",
                desc: "You learn best by doing. Hands-on practice and experience is key.",
                support:
                  "✅ You’ll spend plenty of time behind the wheel, with real-world learning at your pace.",
                color: "#00e682",
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                className={styles.learnerPortal3rdcard}
                style={{ borderColor: type.color }}
              >
                <div className={styles.learnerPortal3rdicon}>{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
                <p className={styles.learnerPortal3rdsupport}>{type.support}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <div className={styles.learnerPortal4thcontainer}>
        <section className={styles.learnerPortal4thheaderSection}>
          <h2 className={styles.learnerPortal4thtitle}>Why It Matters</h2>
          <p className={styles.learnerPortal4thintro}>
            When you understand how you learn best, you learn faster, gain more
            confidence, and retain information longer. Our instructors adapt
            their teaching to suit your style—so lessons are effective and
            empowering.
            <br />
            <span className={styles.learnerPortal4thlightbulb}>💡</span> Not
            sure what type of learner you are? We’ll help you find out in your
            first few lessons.
          </p>
        </section>

        <section className={styles.learnerPortal4thskillsSection}>
          <h3 className={styles.learnerPortal4thsubtitle}>
            What You’ll Learn Before Taking Your Driving Test
          </h3>
          <ul className={styles.learnerPortal4thskillsList}>
            {skills.map((skill, idx) => (
              <li key={idx} className={styles.learnerPortal4thskillItem}>
                ● {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* /////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default LearnerPortal;
