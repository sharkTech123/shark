import React from "react";
import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";
import { motion } from "framer-motion";
import style from "./Velentine.module.css";
import bigheart from "../../../assets/images/velentineday/heartImg2.png";
import smallheart1 from "../../../assets/images/velentineday/2.png";
import smallheart2 from "../../../assets/images/velentineday/34.png";
import smallheart3 from "../../../assets/images/velentineday/35.png";
import tokanImg from "../../../assets/images/bg1.webp";
import tokanImg1 from "../../../assets/images/token1.png";
import tokanImg2 from "../../../assets/images/token2.png";
import tokanImg3 from "../../../assets/images/token3.png";

export default function VelentineDayBanner() {
  return (
    <div>
      {" "}
      <div className={style.valentineContainer}>
        <div id={style.logoImgBanner}>
          <img src={logo} alt="" className={style.logoImgBanner} />
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
          id={style.tokenImg}>
          <img src={tokanImg1} className={style.tokenImg} alt="tokanImg" />
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
          id={style.tokenImg2}>
          <img src={tokanImg2} className={style.tokenImg} alt="tokanImg" />
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
          id={style.tokenImg3}>
          <img src={tokanImg3} className={style.tokenImg} alt="tokanImg" />
        </motion.div>
        <div className={style.smallHeartsWrapper}>
          <motion.img
            src={smallheart1}
            className={style.smallHeart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <div>
            <motion.img
              src={smallheart2}
              className={style.smallHeart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            <motion.img
              src={smallheart3}
              className={style.smallHeart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </div>
        </div>
        <div className={style.smallHeartsWrapper2}>
          <motion.img
            src={smallheart1}
            className={style.smallHeart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <div>
            <motion.img
              src={smallheart2}
              className={style.smallHeart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            <motion.img
              src={smallheart3}
              className={style.smallHeart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </div>
        </div>
        <div className={style.smallHeartsWrapper3}>
          <motion.img
            src={smallheart1}
            className={style.smallHeart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <div>
            <motion.img
              src={smallheart2}
              className={style.smallHeart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />

            <motion.img
              src={smallheart3}
              className={style.smallHeart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </div>
        </div>
        <div className={style.headingName}>
          <motion.img
            src={bigheart}
            alt="Big Heart"
            className={style.bigHeart}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <h1>
            The Season <br />
            Of <span>Love</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
