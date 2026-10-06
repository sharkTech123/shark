import React from "react";
import styles from "./css/SimulatorTraining.module.css";
import { motion } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import SimulatorContentPage from "../components/ui/CoursePageDesign/othercoursePages/SimulatorContentPage";

const features = [
  {
    title: "Realistic Driving Scenarios",
    description: "Navigate through real-world conditions.",
  },
  {
    title: "Perfect for Beginners",
    description:
      "Gain essential driving skills like steering control, gear shifting, mirror checks, and hazard awareness without the pressure of real-world traffic.",
  },
  {
    title: "Boost Confidence & Safety",
    description:
      "Our simulator helps reduce anxiety and prepares learners for practical lessons, significantly improving performance on the road and test readiness.",
  },
  {
    title: "Eco-Friendly & Cost-Effective",
    description:
      "Save fuel, reduce emissions, and cut down on the number of actual driving hours needed.",
  },
  {
    title: "Perfect for Ages 10 to 80+",
    description:
      "Whether you're a young learner excited to get your licence or a seasoned driver looking for a driving assessment, our simulator adapts to your needs. Ideal for ages 10 and up, it’s never too early — or too late — to sharpen your driving skills",
  },
];

export default function SimulatorTraining() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving Simulator Training</title>
        <meta property="og:title" content="Driving Simulator Training" />
        <meta
          property="og:description"
          content="Enhance your driving skills with our advanced simulator training. Safe, realistic, and ideal for beginners or nervous drivers."
        />
        <link
          rel="canonical"
          href="https://smartlearner.com/simulator-training"
        />
        <meta
          name="description"
          content="Enhance your driving skills with our advanced simulator training. Safe, realistic, and ideal for beginners or nervous drivers."
        />
      </Helmet>

      <SimulatorContentPage />
    </>
  );
}
