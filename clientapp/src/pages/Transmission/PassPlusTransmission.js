// PassPlus.js
import React, { useEffect, useRef } from "react";
import styles from "./PassPlus.module.css";

import { IoCallSharp } from "react-icons/io5";
import manualround1 from "./passplusround.jpg";
import manualround2 from "./passplusround2.jpg";

import { gsap } from "gsap";
import PassPlusCarousel from "../../components/ui/PassPlusCarousel";
import { Link } from "react-router-dom";
import PassPlusContentChange from "../../components/ui/CoursePageDesign/othercoursePages/PassPlusContentChange";

const PassPlusTransmission = () => {
  return (
    <div>
      <PassPlusContentChange />
    </div>
  );
};

export default PassPlusTransmission;
