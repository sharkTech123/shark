import React, { useState } from "react";

import styles from "./DrivingTransmission.module.css";
import { IoCallSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";
import manualround1 from "./manualround1.png";
import manualround2 from "./manualround2.jpg";

import gsap from "gsap";
import { Link, useParams } from "react-router-dom";
import DrivingInstructorUI from "../../components/ui/DrivingInstructorUI";
import { Element, scroller } from "react-scroll";
import { Helmet } from "react-helmet-async";
import SubscriptionPdi from "../../components/ui/productShowCase/SubscriptionPdi";
import PdiPartThreeTraining from "../../components/ui/CoursePageDesign/othercoursePages/PdiPartThreeTraining";

export default function DrivingTransmission() {
  const { section } = useParams();
  console.log(section);
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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Instructor Packages</title>
        <meta property="og:title" content="Driving Instructor Packages" />
        <meta
          property="og:description"
          content="Explore our tailored driving instructor packages designed to support your journey from qualification to starting your own business. Affordable and flexible options available."
        />
        <link
          rel="canonical"
          href="https://smartlearner.com/driving-instructor-packages"
        />
        <meta
          name="description"
          content="Explore our tailored driving instructor packages designed to support your journey from qualification to starting your own business. Affordable and flexible options available."
        />
      </Helmet>

      
       
        {/* ///////////////////////////// */}
        <section className="bg-white">
          <Element name="instructor-packages-section">
            <section className={styles.ManualCorousel}>
              {/* <SubscriptionPdi /> */}
              <PdiPartThreeTraining/>
            </section>
          </Element>
        </section>
       
      </div>
  );
}
