import React, { useEffect, useRef } from "react";
import styles from "./IntensiveTransmision.module.css";

import { IoCallSharp } from "react-icons/io5";
import manualround1 from "./passplusround.jpg";
import manualround2 from "./passplusround2.jpg";

import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WorkShop from "../../components/ui/WorkShop";
import WorkShopContentPage from "../../components/ui/CoursePageDesign/othercoursePages/WorkShopContentPage";

export default function WorkshopTransmission() {
  

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WorkShop</title>
        <link rel="canonical" href="https://smartlearner.com/workshop" />
        <meta property="og:title" content="Workshop" />
      </Helmet>
     

      <section>
        <WorkShopContentPage />
      </section>
    </div>
  );
}
