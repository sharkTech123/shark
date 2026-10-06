import React, { useEffect } from "react";
import styles from "./DrivingLesson.module.css";
import passImg from "../../assets/images/drivingLessonbanner.jpg";

import starImg from "../../assets/images/redStar.png";
import greenStarImg from "../../assets/images/greenStar.png";
import blueStarImg from "../../assets/images/blueStarImg.png";
import yellowStarImg from "../../assets/images/yellowStar.png";

import { IoCall } from "react-icons/io5";
import { HiMailOpen } from "react-icons/hi";
// ///////////////////////

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntensiveCorousel from "../../components/ui/IntensiveCorousel";
import ManualCorousel from "../../components/ui/ManualCarousel";
import AutomaticCorousel from "../../components/ui/AutomaticCarousel";
import PassPlusCorousel from "../../components/ui/PassPlusCarousel";
import { Element, scroller } from "react-scroll";
import { useParams } from "react-router-dom";
import ImagesCarousel from "../../components/imageCarousel/ImagesCarousel";

import Corousel from "../../components/ui/Carousel";
import CallBackForm from "../../components/forms/CallBackForm";

export default function DrivingLessons() {
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
    <div className={styles.drivingLessonsPage}>
      <div className={styles.DrivingLessonsPagedivFront}>
        <div className={styles.opicity}></div>
        <section className={styles.DrivingLessonsSectionFront}>
          <div id={styles.dLFrontHeading}>
            <h2>
              "The Gold standard <span> of Driver Education"</span>
            </h2>
          </div>
          <div className={styles.dLFrontHeadingPara}>
            <p>"Start Your Journey Today"</p>
          </div>
        </section>
      </div>
      {/* /////////////// calling details ////////////////// */}

      <div className={styles.drivingLessonsCd}>
        <section style={{ background: "rgb(245 208 0)" }}>
          <div>
            <h2>Efficient Learning</h2>
            <p>
              Our carefully crafted training program requires fewer lessons than
              the average instructors.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>Up-to-Date Techniques</h2>
            <p>
              Constantly evaluating to deliver the latest driving techniques and
              legal practices.
            </p>
          </div>
        </section>
        <section style={{ background: "green" }}>
          <div>
            <h2>First-Time Pass Confidence</h2>
            <p>
              Training you to a standard far beyond test conditions, helping you
              achieve a first-time pass.
            </p>
          </div>
        </section>
      </div>
      {/* /////////////////////////////////////////// */}

      {/* ////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////// */}
      {/* <section>
        <Corousel />
      </section> */}
      {/* ///////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="manual-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>MANUAL</h2>
              <span>
                {" "}
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
                <img src={starImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Discover the thrill of hands-on control with our manual driving
                lessons.
              </p>
              <p>
                From mastering the clutch to shifting gears seamlessly, our
                expert instructors will guide you through the art of manual
                driving, empowering you with the skills and confidence to
                navigate any road with finesse and precision.
              </p>
            </div>
            <section>
              <ManualCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="automatic-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>AUTOMATIC</h2>
              <span>
                {" "}
                <img src={blueStarImg} alt="starImg" />
                <img src={blueStarImg} alt="starImg" />
                <img src={blueStarImg} alt="starImg" />
                <img src={blueStarImg} alt="starImg" />
                <img src={blueStarImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Experience the ease and convenience of automatic driving with
                our comprehensive lessons. Our skilled instructors will help you
                navigate the road smoothly, focusing on essential techniques and
                safe driving practices. Whether you’re a beginner or looking to
                refine your skills, we’ll empower you to drive confidently in
                any situation.
              </p>
            </div>
            <section>
              <AutomaticCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="Intensive-section">
          <section className={styles.dManualSections}>
            {" "}
            <div className={styles.dManualDiv}>
              <h2>INTENSIVE</h2>
              <span>
                {" "}
                <img src={greenStarImg} alt="starImg" />
                <img src={greenStarImg} alt="starImg" />
                <img src={greenStarImg} alt="starImg" />
                <img src={greenStarImg} alt="starImg" />
                <img src={greenStarImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Designed for those eager to learn quickly and efficiently, our
                immersive programmes offer focused instruction and hands-on
                experience to help you become a confident driver in no time. Get
                behind the wheel and fast-track your path to driving
                independence with our intensive driving courses.
              </p>
            </div>
            <section>
              <IntensiveCorousel />
            </section>
          </section>

          <hr />
        </Element>
      </section>
      {/* ////////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <Element name="Pass-Plus-section">
          <section className={styles.dManualSections} id="automatic-section4">
            {" "}
            <div className={styles.dManualDiv}>
              <h2>PASS PLUS</h2>
              <span>
                {" "}
                <img src={yellowStarImg} alt="starImg" />
                <img src={yellowStarImg} alt="starImg" />
                <img src={yellowStarImg} alt="starImg" />
                <img src={yellowStarImg} alt="starImg" />
                <img src={yellowStarImg} alt="starImg" />
              </span>
            </div>
            <div className={styles.manualPList}>
              <p>
                Designed specifically for newly qualified drivers, Pass Plus is
                an advanced driving course that helps you maintain and improve
                the skills you've learned while gaining valuable experience on
                the road. Whether you're looking to build confidence in new
                driving conditions, or simply want to become a safer, more
                skilled driver, Pass Plus is the ideal next step.
              </p>
            </div>
            <section>
              <PassPlusCorousel />
            </section>
          </section>

          {/* <hr /> */}
        </Element>
      </section>
      {/* ////////////////////////////////////////////////////// */}
      {/* 
      <div className={styles.whyChooseSml}>
        <div className={styles.whyChooseSmlGHeading}>
          <h2>Why Choose Smartlearner?</h2>
        </div>
        <div className={styles.whyChooseSmlListdiv}>
          <section className={styles.whyChooseSmlLists}>
            <p>
              We are the highest-rated and fastest-growing independent driving
              school in the West Midlands. We offer everything you could need to
              get yourself on the road. We take into consideration your
              availability, your work schedule, and any other requirements you
              may have.
            </p>
          </section>
        </div>
      </div> */}
      {/* /////////////////////////////////////////////// */}
      <section className={styles.dManualSection}>
        <div className={styles.spiralImgContainer}>
          {/* <img src={spiralImg} alt="spiralImg" /> */}
          {/* <hr style={{ opacity: "1", border: "2px solid silver" }} /> */}
        </div>
        <div
          className=" text-white p-4 "
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
          <h2 className="text-center display-4 mb-4">What's included?</h2>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">TOWN DRIVING</h3>
            <p className="fs-4">
              You'll learn how to navigate complex junctions, underpasses,
              trams, bus and cycle lanes.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">
              ALL WEATHER DRIVING
            </h3>
            <p className="fs-4">
              It can be advantageous to learn how to cope with heavy rain, snow,
              ice, fog and dazzling sunshine.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">RURAL ROADS</h3>
            <p className="fs-4">
              This section looks at safe passing places and what to do when you
              encounter sharp corners, horse riders, cyclists, farm vehicles and
              debris in the road.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">
              DRIVING ON MOTORWAYS
            </h3>
            <p className="fs-4">
              In this module you'll learn how to drive at a safe speed in
              different conditions, deal with motorway fatigue, handle a
              breakdown, use lanes correctly and follow signs.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-danger font-weight-bold">NIGHT DRIVING</h3>
            <p className="fs-4">
              This module can help boost your confidence when taking to the
              roads after dark. It deals with the correct use of headlamps,
              adjusting to different light levels, getting used to being dazzled
              and judging speeds and distance.
            </p>
          </div>
        </div>
        <hr />
      </section>
      {/* /////////////////////////////////////////////////// */}
      <div className={styles.spiralImgContainer}>
        {/* <img src={spiralImg} alt="spiralImg" /> */}

        {/* <hr
          style={{
            opacity: "1",
            border: "2px solid silver",
            maxWidth: "1000px",
            margin: "0px auto",
          }}
        /> */}
      </div>
      {/* ======================================= */}
      <div style={{ maxWidth: "700px", width: "100%", margin: "2rem auto" }}>
        <CallBackForm />
      </div>
      {/* //////////////////////////////// */}
      <section className={styles.imageSliderContainer}>
        <div className={styles.whyChooseText}>
          <p>
            See why people choose SmartLearner to{" "}
            <span style={{ color: "green" }}>PASS</span> their driving test.{" "}
          </p>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            marginRight: "auto",
            marginLeft: "auto",
            padding: "2rem 2rem",
            width: "100%",
            margin: "2rem auto",
          }}>
          <ImagesCarousel />
        </div>
      </section>
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
  );
}
