// src/components/AutomaticTransmission.js
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { IoCallSharp } from "react-icons/io5";
import styles from "./AutomaticTransmission.module.css";
import manualround1 from "./automaticround.jpg";
import manualround2 from "./automaticround2.jpg";
import AutomaticCarousel from "../../components/ui/AutomaticCarousel";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AutomaticStarter from "../../components/ui/CoursePageDesign/othercoursePages/AutomaticStarter";

const AutomaticTransmission = () => {
 

  return (
    <div className={styles.manualComponent}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Automatic Driving Lesson Packages</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/automatic-transmisson"
        />
        <meta property="og:title" content="Automatic Driving Lesson Packages" />
        <meta
          property="og:description"
          content="Browse our automatic driving lesson packages tailored for stress-free learning. Ideal for beginners and those looking for a smoother driving experience."
        />
        <meta
          name="description"
          content="Browse our automatic driving lesson packages tailored for stress-free learning. Ideal for beginners and those looking for a smoother driving experience."
        />
      </Helmet>
      

     
      <section>
        <AutomaticStarter/>
      </section>
    </div>
  );
};

export default AutomaticTransmission;
