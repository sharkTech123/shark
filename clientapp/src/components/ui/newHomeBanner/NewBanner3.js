import styles from "./NewBanner3.module.css";
import hat from "../../../assets/images/hat.png";
import plant from "../../../assets/images/hatplant.png";
import imgheading from "../../../assets/images/headingimg2.png";
import { motion } from "framer-motion";
import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";

import tokanImg from "../../../assets/images/bg1.webp";
import tokanImg1 from "../../../assets/images/token1.png";
import tokanImg2 from "../../../assets/images/token2.png";
import tokanImg3 from "../../../assets/images/token3.png";
export default function NewBanner3() {
  return (
    <div>
      <section className={styles.christmasbanner}>
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

        <div className={styles.christmasbannerbox}>
          <div className={styles.christmasbannerheading}>
             <div id={styles.logoImgBanner}>
                          <img src={logo} alt="" className={styles.logoImgBanner} />
                          <p>DRIVING SCHOOL</p>
                        </div>
            {/* <div
              className="relative flex items-center justify-center text-white font-bold text-4xl"
              id={styles.christmasheadings}>
             
              <img
                id={styles.holyhat}
                src={hat}
                alt="Santa Hat"
                className="absolute "
              />

            
              <img
                id={styles.holyplant}
                src={plant}
                alt="Holly Plant"
                className="absolute"
              />

              <div className="text-center" id={styles.textchristmas}>
                <div>THE FESTIVE</div>
                <div>SEASON</div>
                <div>IS HERE!</div>
              </div>
            </div> */}
           
          </div>
        </div>
      </section>
    </div>
  );
}
