import React, { useEffect, useRef } from "react";
import styles from "./IntensiveTransmision.module.css";

import { IoCallSharp } from "react-icons/io5";
import manualround1 from "./passplusround.jpg";
import manualround2 from "./passplusround2.jpg";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
import IntensiveCorousel from "../../components/ui/IntensiveCorousel";
import { Helmet } from "react-helmet-async";
import IntensiveWeek from "../../components/ui/CoursePageDesign/othercoursePages/IntensiveWeek";

export default function IntensiveTransmission() {


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
     
      <section>
        <IntensiveWeek />
      </section>
    </div>
  );
}
