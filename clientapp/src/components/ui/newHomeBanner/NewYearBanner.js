import React from "react";
import { motion } from "framer-motion";
import style from "./NewYearBanner.module.css";
import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";
import nameheader from "../../../assets/images/bannerImges/nameheader2.png";
import tokanImg from "../../../assets/images/bg1.webp";
import tokanImg1 from "../../../assets/images/token1.png";
import tokanImg2 from "../../../assets/images/token2.png";
import tokanImg3 from "../../../assets/images/token3.png";
// //////////////////////////////////////////////

export default function NewYearBanner() {
  return (
    <div className={style.newyearbannerPage}>
      <div id={style.logoImgBanner}>
        <img src={logo} alt="" className={style.logoImgBanner} />
        <p>DRIVING SCHOOL</p>
      </div>

      <motion.div id={style.tokenImg}>
        <img src={tokanImg1} className={style.tokenImg} alt="tokanImg" />
      </motion.div>
      <motion.div id={style.tokenImg2}>
        <img src={tokanImg2} className={style.tokenImg} alt="tokanImg" />
      </motion.div>
      <motion.div id={style.tokenImg3}>
        <img src={tokanImg3} className={style.tokenImg} alt="tokanImg" />
      </motion.div>

      <section>
        <div className="absolute inset-0">
          {[...Array(16)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
        <SparkleParticles />
      </section>
    </div>
  );
}

function Particle({ index }) {
  const angle = (index / 8) * Math.PI * 2 + Math.random() * 0.5;
  const distance = 30 + Math.random() * 70; // px
  const delay = Math.random() * 2;
  const size = 3 + Math.random() * 6;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance * 0.6; // elliptical spread

  return (
    <motion.span
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: size,
        height: size,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 8px rgba(255, 200, 50, 0.9)",
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,240,200,1), rgba(255,200,50,1))",
      }}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.2, 1.1, 0.6],
        x,
        y,
      }}
      transition={{
        duration: 1.6 + Math.random() * 0.8,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5 + Math.random() * 2,
        ease: "easeOut",
      }}
    />
  );
}

// SparkleParticles: a background layer of small randomly twinkling stars across the left side
function SparkleParticles() {
  const stars = [...Array(120)].map((_, i) => ({
    left: 6 + Math.random() * 40, // percent
    top: 10 + Math.random() * 50,
    size: 2 + Math.random() * 5,
    delay: Math.random() * 3,
  }));

  return (
    <>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "rgba(255,215,120,1)",
            boxShadow: "0 0 6px rgba(255,215,120,0.8)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 0.1, 1, 0],
            scale: [0.6, 1.1, 0.8, 1, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: s.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}
