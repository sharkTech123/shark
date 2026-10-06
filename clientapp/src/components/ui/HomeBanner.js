import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./homeContent/BookingSectio.module.css"; // We'll style it here
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Calendar,
  Sparkles,
} from "lucide-react";
import {
  FaExclamation,
  FaAngry,
  FaCar,
  FaRuler,
  FaExclamationTriangle,
  FaWalking,
  FaTruck,
  FaCarCrash,
  FaCarSide,
  FaRoad,
  FaMapSigns,
  FaIdCard,
  FaUserInjured,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";
import banner1 from "../../assets/images/clockCheck.png";
import banner2 from "../../assets/images/quizAttempt.png";
import banner3 from "../../assets/images/banner6.png";
import { Link } from "react-router-dom";
import Countdown from "../../pages/Theory-Subscription/countdown/CountDown";

const slides = [
  {
    id: 1,
    title: "Theory support gets you test ready",
    subtitle: "Everything you need to pass your driving theory test",
    description:
      "Access powerful theory learning products built to boost your knowledge, improve accuracy, and build real test confidence. Study at your own pace with interactive content, practice questions, and clear explanations tailored for learner drivers.",
    image: banner3,
    type: "route",
    target: "/Theory-Support/Theory-package",
  },
  {
    id: 2,
    title: "Practice real theory test questions with our quizes",
    subtitle: "Attempt theory quizzes & track progress",
    description:
      "Test your knowledge with carefully designed driving theory quizzes based on real exam standards. Each quiz attempt helps you understand your strengths and identify areas that need improvement.",
    image: banner2,
    type: "scroll",
    target: "learner",
  },
  {
    id: 3,
    title: "Set Your Driving Test Time",
    subtitle: "Plan smart test ready.",
    description:
      "Select your preferred time and stay prepared for your driving test with ease.",
    image: banner1,
    type: "scroll",
    target: "timer",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const [activeSection, setActiveSection] = useState(null);

  const scrollToRef = (ref) => {
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };
  const lessonsRefCallback = (node) => {
    if (node && activeSection === "lessons") {
      scrollToRef(node);
    }
  };

  const pdiRefCallback = (node) => {
    if (node && activeSection === "pdi") {
      scrollToRef(node);
    }
  };

  const theoryRefCallback = (node) => {
    if (node && activeSection === "theory") {
      scrollToRef(node);
    }
  };

  const handleShow = (section) => {
    setActiveSection(section); // Scroll will happen when section mounts
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  };

  const timerSectionRef = useRef(null);
  const learnerSectionRef = useRef(null);

  const handleBannerAction = (slide) => {
    if (slide.type === "route") return;

    if (slide.type === "scroll") {
      const refMap = {
        timer: timerSectionRef,
        learner: learnerSectionRef,
      };

      const targetRef = refMap[slide.target];
      targetRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className={styles.slider}>
        <div
          className={styles.mobileBackground}
          //  style={{ backgroundImage: `url(${slides[current].image})` }}
         ></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            className={styles.slide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}>
            <div className={styles.textSection}>
              <p className={styles.subtitle} style={{ marginBottom: "0px" }}>
                {slides[current].subtitle}
              </p>
              <h1 className={styles.title}>{slides[current].title}</h1>
              <p className={styles.description}>
                {slides[current].description}
              </p>
              {slides[current].type === "route" ? (
                <Link to={slides[current].target}>
                  <button className={styles.exploreBtn}>
                    <span className={styles.text}>Explore Now</span>
                    <span className={styles.arrow}>→</span>
                  </button>
                </Link>
              ) : (
                <button
                  className={styles.exploreBtn}
                  onClick={() => handleBannerAction(slides[current])}>
                  <span className={styles.text}>Explore Now</span>
                  <span className={styles.arrow}>→</span>
                </button>
              )}
            </div>

            <div className={styles.imageSection}>
              {/* <motion.img
                key={slides[current].image}
                src={slides[current].image}
                alt="Driving Adventure"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              /> */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className={styles.arrows}>
          <button onClick={prevSlide}>
            <ArrowLeft />
          </button>
          <button onClick={nextSlide}>
            <ArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${
                i === current ? styles.activeDot : ""
              }`}
              onClick={() => setCurrent(i)}></button>
          ))}
        </div>
      </div>
      <div className={styles.timerSection} ref={timerSectionRef}>
        <Countdown />
      </div>

      <div className={styles.learnerSection} ref={learnerSectionRef}>
        <section className="relative flex flex-col items-center justify-center py-20 px-6 overflow-hidden  text-gray-900">
          {/* Animated Background Orbs */}
          <motion.div className="absolute -top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <motion.div className="absolute bottom-0 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md text-center z-10">
            Ready to Elevate Your Skills?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-black-700 mb-10 text-center max-w-2xl z-10">
            Choose your path below
          </motion.p>

          {/* Buttons Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center z-10">
            {/* Book Theory */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}>
              <button
                style={{
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                }}
                onClick={() => handleShow("theory")}
                className={`flex flex-col items-center justify-center w-64 sm:w-auto font-bold rounded-2xl px-8 py-6 text-lg shadow-md transition-all duration-300
          ${
            activeSection === "theory"
              ? "bg-yellow-400 text-black shadow-yellow-200 shadow-xl scale-105"
              : "bg-white text-black hover:bg-yellow-100"
          }`}>
                <BookOpenText className="w-6 h-6" />
                Learn Theory
              </button>
            </motion.div>

            {/* Book Lessons */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}>
              <button
                style={{
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                }}
                onClick={() => handleShow("lessons")}
                className={`flex flex-col items-center justify-center w-64 sm:w-auto font-bold rounded-2xl px-8 py-6 text-lg shadow-md transition-all duration-300
          ${
            activeSection === "lessons"
              ? "bg-yellow-400 text-black shadow-yellow-200 shadow-xl scale-105"
              : "bg-white text-black hover:bg-yellow-100"
          }`}>
                <Calendar className="w-6 h-6" />
                Attempt Quiz
              </button>
            </motion.div>
          </motion.div>
        </section>

        <AnimatePresence mode="wait">
          {activeSection === "lessons" && (
            <motion.section
              key="lessons"
              ref={lessonsRefCallback}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full">
              <section className={styles.thMultipleChoiceSection}>
                <div className={styles.thMultipleChoiceListContainer}>
                  <section className={styles.features}>
                    <div
                      className={styles.mainFeatures}
                      id={styles.mainFeatures}>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Alertness-quiz">
                          <span>
                            <FaExclamation id={styles.featuresIcon} />
                          </span>
                          <h3>Alertness</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Attitude">
                          <span>
                            <FaAngry id={styles.featuresIcon} />
                          </span>
                          <h3>Attitude</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Safety-and-Your-Vehicle">
                          {" "}
                          <span>
                            <FaCar id={styles.featuresIcon} />
                          </span>
                          <h3>Safety In Your Vehicle</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Safety-Margins">
                          {" "}
                          <span>
                            <FaRuler id={styles.featuresIcon} />
                          </span>
                          <h3>Safety Margins</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Hazard-Awareness">
                          <span>
                            <FaExclamationTriangle id={styles.featuresIcon} />
                          </span>
                          <h3>Hazard Awareness</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Vulnerable-Road-Users">
                          {" "}
                          <span>
                            <FaWalking id={styles.featuresIcon} />
                          </span>
                          <h3>Vulnerable Road Users</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Other-Types-of-Vehicles">
                          {" "}
                          <span>
                            <FaCarCrash id={styles.featuresIcon} />
                          </span>
                          <h3>Other Vehicles</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Vehicle-Handling">
                          <span>
                            <FaTruck id={styles.featuresIcon} />
                          </span>
                          <h3>Vehicle Handling</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Motorway-Rules">
                          <span>
                            <FaCarSide id={styles.featuresIcon} />
                          </span>
                          <h3>Motorway Rules</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Rules-of-the-Road">
                          {" "}
                          <span>
                            <FaRoad id={styles.featuresIcon} />
                          </span>
                          <h3>Rules Of The Road</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Road-and-Traffic-Signs">
                          {" "}
                          <span>
                            <FaMapSigns id={styles.featuresIcon} />
                          </span>
                          <h3>Road And Traffic Signs</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Documents">
                          <span>
                            <FaIdCard id={styles.featuresIcon} />
                          </span>
                          <h3>Essential Documents</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Incidents--Accidents-and-Emergencies">
                          <span>
                            <FaUserInjured id={styles.featuresIcon} />
                          </span>
                          <h3>Incidents & Accidents</h3>
                        </Link>
                      </div>
                      <div className={styles.column} id={styles.column}>
                        <Link to="/takequizCatName/Vehicle-Loading">
                          <span>
                            <FaBoxOpen id={styles.featuresIcon} />
                          </span>
                          <h3>Vehicle Loading</h3>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </motion.section>
          )}

          {activeSection === "theory" && (
            <motion.section
              key="theory"
              ref={theoryRefCallback}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full">
              {" "}
              <section className={styles.thMultipleChoiceSection}>
                <div className={styles.thMultipleChoiceListContainer}>
                  <section className={styles.features}>
                    <p id={styles.pdp}>
                      Click the ICONS to go through to each of the topic pages
                      and begin practicing!
                    </p>
                    <div className={styles.mainFeatures}>
                      <div className={styles.column}>
                        <Link to="/alertness">
                          <span>
                            <FaExclamation id={styles.featuresIcon} />
                          </span>
                          <h3>Alertness</h3>
                        </Link>

                        <p>Topic 1</p>
                      </div>
                      <div className={styles.column}>
                        <Link to="/attitude">
                          <span>
                            <FaAngry id={styles.featuresIcon} />
                          </span>
                          <h3>Attitude</h3>
                        </Link>

                        <p>Topic 2</p>
                      </div>
                      <div className={styles.column} id={styles.column1}>
                        <Link to="/safety-your-vehicle">
                          {" "}
                          <span>
                            <FaCar id={styles.featuresIcon} />
                          </span>
                          <h3>Safety In Your Vehicle</h3>
                        </Link>

                        <p>Topic 3</p>
                      </div>
                      <div className={styles.column} id={styles.column2}>
                        <Link to="/safety-margins">
                          {" "}
                          <span>
                            <FaRuler id={styles.featuresIcon} />
                          </span>
                          <h3>Safety Margins</h3>
                        </Link>

                        <p>Topic 4</p>
                      </div>
                      <div className={styles.column} id={styles.column1}>
                        <Link to="/hazard-awareness">
                          <span>
                            <FaExclamationTriangle id={styles.featuresIcon} />
                          </span>
                          <h3>Hazard Awareness</h3>
                        </Link>

                        <p>Topic 5</p>
                      </div>
                      <div className={styles.column} id={styles.column2}>
                        <Link to="/vulnerable-road-users">
                          {" "}
                          <span>
                            <FaWalking id={styles.featuresIcon} />
                          </span>
                          <h3>Vulnerable Road Users</h3>
                        </Link>

                        <p>Topic 6</p>
                      </div>
                      <div className={styles.column} id={styles.column3}>
                        <Link to="/other-vehicles">
                          {" "}
                          <span>
                            <FaCarCrash id={styles.featuresIcon} />
                          </span>
                          <h3>Other Vehicles</h3>
                        </Link>

                        <p>Topic 7</p>
                      </div>
                      <div className={styles.column}>
                        <Link to="/vehicle-handling">
                          <span>
                            <FaTruck id={styles.featuresIcon} />
                          </span>
                          <h3>Vehicle Handling</h3>
                        </Link>

                        <p>Topic 8</p>
                      </div>
                      <div className={styles.column} id={styles.column2}>
                        <Link to="/motorway-rules">
                          <span>
                            <FaCarSide id={styles.featuresIcon} />
                          </span>
                          <h3>Motorway Rules</h3>
                        </Link>

                        <p>Topic 9</p>
                      </div>
                      <div className={styles.column}>
                        <Link to="/rules-of-road">
                          {" "}
                          <span>
                            <FaRoad id={styles.featuresIcon} />
                          </span>
                          <h3>Rules Of The Road</h3>
                        </Link>

                        <p>Topic 10</p>
                      </div>
                      <div className={styles.column} id={styles.column1}>
                        <Link to="/road-and-traffic-signs">
                          {" "}
                          <span>
                            <FaMapSigns id={styles.featuresIcon} />
                          </span>
                          <h3>Road And Traffic Signs</h3>
                        </Link>

                        <p>Topic 11</p>
                      </div>
                      <div className={styles.column}>
                        <Link to="/essential-Documents">
                          <span>
                            <FaIdCard id={styles.featuresIcon} />
                          </span>
                          <h3>Essential Documents</h3>
                        </Link>

                        <p>Topic 12</p>
                      </div>
                      <div className={styles.column} id={styles.column1}>
                        <Link to="/incidents-&-accidents">
                          <span>
                            <FaUserInjured id={styles.featuresIcon} />
                          </span>
                          <h3>Incidents & Accidents</h3>
                        </Link>

                        <p>Topic 13</p>
                      </div>
                      <div className={styles.column}>
                        <Link to="/vehicle-loading">
                          <span>
                            <FaBoxOpen id={styles.featuresIcon} />
                          </span>
                          <h3>Vehicle Loading</h3>
                        </Link>

                        <p>Topic 14</p>
                      </div>
                      <div className={styles.column} id={styles.column2}>
                        <Link to="/video-clips">
                          <span>
                            <FaVideo id={styles.featuresIcon} />
                          </span>
                          <h3>Video clips</h3>
                        </Link>
                        <p>Topic 15</p>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
