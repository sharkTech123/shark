import styles from "./css/home.module.css";
import callbackimg from "../assets/images/callbacksupportimage.png";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, BookOpenText } from "lucide-react";
import ImagesCarousel from "../components/imageCarousel/ImagesCarousel";
import CallBackForm from "../components/forms/CallBackForm";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
import { Helmet } from "react-helmet-async";
import ProductShowcase from "../components/ui/productShowCase/Productshowcase";
import SubscriptionPdi from "../components/ui/productShowCase/SubscriptionPdi";
import { useState, useEffect } from "react";
import TheoryProductShowCase from "../components/ui/productShowCase/TheoryProductShowCase";
import DrivingLessonsCarousel from "../components/ui/drivingLesson/DrivingLessonsCarousel";
import { Element, scroller } from "react-scroll";
import { useParams } from "react-router-dom";
import NewHomeBanner from "../components/ui/newHomeBanner/NewHomeBanner";
import ChristmasBanner from "../components/ui/newHomeBanner/ChristmasBanner";
import NewYearBanner from "../components/ui/newHomeBanner/NewYearBanner";
import VelentineDayBanner from "../components/ui/newHomeBanner/VelentineDayBanner";
import SpringBanner from "../components/ui/newHomeBanner/SpringBanner";
import AprilBanner from "../components/ui/newHomeBanner/AprilBanner";
import RabbitBanner from "../components/ui/newHomeBanner/RabbitBanner";
import UKBranchMap from "./AddOns/UKBranchMap";
import Newbanner1 from "../components/ui/newHomeBanner/Newbanner1";
import NewBanner2 from "../components/ui/newHomeBanner/NewBanner2";
import NewBanner3 from "../components/ui/newHomeBanner/NewBanner3";
import NewBanner4 from "../components/ui/newHomeBanner/NewBanner4";
import NewBanner5 from "../components/ui/newHomeBanner/NewBanner5";
import NewHomebanners8 from "../components/ui/NewhomeDesign/NewHomebanners8";
import HomePageDesign from "../components/ui/NewhomeDesign/HomePageDesign";

export default function Home() {
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

  const { section } = useParams();
  useEffect(() => {
    if (section) {
      scroller.scrollTo(`${section}-section`, {
        duration: 400,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  return (
    <div className={styles.homepage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smartlearner driving school in coventry Driving lessons</title>
        <meta
          name="description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the West Midlands with advanced technology. "
        />
        <meta
          property="og:title"
          content="Smartlearner driving school in coventry"
        />
        <meta
          property="og:description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the West Midlands with advanced technology. "
        />
      </Helmet>
      <HomePageDesign />
      {/* <NewHomebanners8 /> */}

      {/* <NewYearBanner /> */}
      {/* <ChristmasBanner />
      <SpringBanner />  
             <VelentineDayBanner />   
   
      <RabbitBanner /> 
       <Newbanner1/>
      
      */}
      {/* <section>
        <NewBanner3 />
      </section> */}

      {/* <div className={styles.homepageContainerDiv}>
        <Element name="our-courses-section">
          <section
            style={{
              background:
                "linear-gradient(180deg, rgb(255, 120, 67), rgb(255, 66, 66))",
            }}
            className="relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden  text-gray-900"
          >
            <motion.div className="absolute -top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
            <motion.div className="absolute bottom-0 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />

            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ color: "white" }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md text-center z-10"
            >
              Ready to Elevate Your Skills?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ color: "white" }}
              className="text-base sm:text-lg md:text-xl text-white-700 mb-10 text-center max-w-2xl z-10"
            >
              Choose your path below — whether you’re booking personalized
              lessons or a PDI session, we’ve got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
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
          }`}
                >
                  <BookOpenText className="w-6 h-6" />
                  Book Theory
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
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
          }`}
                >
                  <Calendar className="w-6 h-6" />
                  Book Lessons
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                  onClick={() => handleShow("pdi")}
                  className={`flex flex-col items-center justify-center w-64 sm:w-auto font-bold rounded-2xl px-8 py-6 text-lg shadow-md transition-all duration-300
          ${
            activeSection === "pdi"
              ? "bg-yellow-400 text-black shadow-yellow-200 shadow-xl scale-105"
              : "bg-white text-black hover:bg-yellow-100"
          }`}
                >
                  <Sparkles className="w-6 h-6" />
                  Become an Instructor
                </button>
              </motion.div>
            </motion.div>
          </section>
        </Element>
        <section className={styles.bgColore}>
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
                className="w-full"
              >
                <ProductShowcase />
              </motion.section>
            )}

            {activeSection === "pdi" && (
              <motion.section
                key="pdi"
                ref={pdiRefCallback}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <SubscriptionPdi />
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
                className="w-full"
              >
                <TheoryProductShowCase />
              </motion.section>
            )}
          </AnimatePresence>

          <section>
            <DrivingLessonsCarousel />
          </section>


          <section className={styles.heroSection12345}>
            <div className={styles.callbackformflex}>
              <section>
                <CallBackForm />
              </section>

              <section>
                <img src={callbackimg} alt="callbackimg" />
              </section>
            </div>
            <motion.h1
              className={styles.heroText12345}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              See Why People Choose{" "}
              <span className={styles.highlight12345}>SmartLearner</span> to
              <span className={styles.pass12345}> PASS </span> Their Driving
              Test.
            </motion.h1>
          </section>
          <div>
            <ImagesCarousel />
          </div>
          <section>
            <StaticTestimonial />
          </section>
        </section>
      </div> */} 
    </div>
  );
}
