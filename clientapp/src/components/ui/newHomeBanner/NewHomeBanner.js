import { motion } from "framer-motion";
import style from "./NewHomeBanner.module.css";

import { RxCross2 } from "react-icons/rx";

import logo from "../../../assets/images/White-Logo-Fixed-1024x174.webp";
import tokanImg1 from "../../../assets/images/token1.png";
import tokanImg2 from "../../../assets/images/token2.png";
import tokanImg3 from "../../../assets/images/token3.png";
import tokanImg from "../../../assets/images/bg1.webp";
import roadsafty1 from "../../../assets/images/bg2.webp";
import roadsafty2 from "../../../assets/images/bg3.webp";
import roadsafty3 from "../../../assets/images/bg4.webp";
import roadsafty4 from "../../../assets/images/bg6.webp";
import roadsafty5 from "../../../assets/images/bg7.webp";

export default function NewHomeBanner() {
  const rules = [
    { id: 1, img: roadsafty1, title: "Careless Driving" },
    { id: 2, img: roadsafty2, title: "Distracted" },
    { id: 3, img: roadsafty3, title: "Not Wearing a Seatbelt" },
    {
      id: 4,
      img: roadsafty4,
      title: "Speeding",
    },
    { id: 5, img: roadsafty5, title: "Drink/Drug Driving" },
  ];

  return (
    <div className={style.bannersnewdiv}>
      <section className={style.bannersnewSection}>
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
        <section className={style.bannerSections}>
          <motion.div
            className={style.headingtextbanner}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <div id={style.logoImgBanner}>
              <img src={logo} alt="" className={style.logoImgBanner} />
              <p>DRIVING SCHOOL</p>
            </div>
            <div className={style.bannerHeadingtext}>
              <div id={style.bannerHeadingtextborder}>
                <h2>
                  CELEBRATING <span>Road and Safety Month</span>
                </h2>
              </div>
            </div>
            <section className={style.gridBox}>
              <div className={style.gridSection}>
                {rules.map((rule) => (
                  <div key={rule.id} className="">
                    <div className="relative">
                      <img
                        src={rule.img}
                        alt={rule.title}
                        className={style.gridImgs}
                      />
                      <span className="absolute -top-1 -left-1 bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                        {rule.id}
                      </span>
                    </div>

                    <p className={style.gridImgsTitle}>
                      {" "}
                      <span>
                        {" "}
                        <RxCross2 />
                      </span>
                      {rule.title}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Right Car Image Section */}
        </section>
      </section>
    </div>
  );
}
