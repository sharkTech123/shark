// import React from 'react'
import styles from "./css/TheorySupport.module.css";
import poster from "../assets/images/video-poster-img.jpg";

import CallBackForm from "../components/forms/CallBackForm";

import Testemonial from "../components/testimonials/Testemonial";
import TheoryCorousel from "../components/ui/TheorySupportCarousel";
import starImg from "../assets/images/yellowStar.png";
import { Element, scroller } from "react-scroll";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import video from "../assets/videos/Video-1886-041219-B.mp4";

import { IoCallSharp } from "react-icons/io5";
import manualround1 from "../assets/images/theorySupportbanner.png";
import manualround2 from "../assets/images/theorySupportRound1.jpg";
import { gsap } from "gsap";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
import { Helmet } from "react-helmet-async";
import TheoryProductShowCase from "../components/ui/productShowCase/TheoryProductShowCase";
import TheorySupportContent from "../components/ui/CoursePageDesign/othercoursePages/TheorySupportContent";

export default function TheorySupport() {
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
    <div className={styles.theorySupportPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Theory Test Help & Support</title>
        <meta property="og:title" content="Theory Test Help & Support" />
        <meta
          property="og:description"
          content="Need help with your driving theory test? Access support, guidance, and answers to common questions here."
        />
        <link rel="canonical" href="https://smartlearner.com/Theory-Support" />
        <meta
          name="description"
          content="Need help with your driving theory test? Access support, guidance, and answers to common questions here."
        />
      </Helmet>

      <Element name="Theory-package-section">
        <section>
          <TheorySupportContent />
        </section>
      </Element>
    </div>
  );
}
