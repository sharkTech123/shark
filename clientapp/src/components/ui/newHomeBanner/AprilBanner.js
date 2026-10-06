import React from "react";
import { motion } from "framer-motion";
import styles from "./AprilBanner.module.css";

import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";
import tokanImg from "../../../assets/images/bg1.webp";
import Start from "../../../assets/images/aprilImg/start.png";
import tokanImg1 from "../../../assets/images/token1.png";
import tokanImg2 from "../../../assets/images/token2.png";
import tokanImg3 from "../../../assets/images/token3.png";

export default function AprilBanner() {
  return (
    <div className={styles.containerSpring}>
      <div id={styles.logoImgBanner}>
        <img src={logo} alt="" className={styles.logoImgBanner} />
        <p>DRIVING SCHOOL</p>
      </div>

      <motion.div
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        id={styles.tokenImg}>
        <img src={tokanImg1} className={styles.tokenImg} alt="tokanImg" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        id={styles.tokenImg2}>
        <img src={tokanImg2} className={styles.tokenImg} alt="tokanImg" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        id={styles.tokenImg3}>
        <img src={tokanImg3} className={styles.tokenImg} alt="tokanImg" />
      </motion.div>

      <div className={styles.headingName}>
        <h1>IT'S A FRESH</h1>
        <br />
        <img src={Start} alt="startImg" />
      </div>
    </div>
  );
}
