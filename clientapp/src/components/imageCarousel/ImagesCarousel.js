import "./ImageCarousel.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import styles from "./ShowcaseSlider.module.css";

import image1 from "../../assets/images/Cim1.jpg";
import image2 from "../../assets/images/cimg2.jpg";
import image3 from "../../assets/images/cimg3.jpg";
import image4 from "../../assets/images/cimg4.jpg";
import image5 from "../../assets/images/cimg5.jpg";
import image6 from "../../assets/images/cimg6.jpg";
import image7 from "../../assets/images/cimg7.jpg";
import image8 from "../../assets/images/cimg8.jpg";
import image9 from "../../assets/images/cimg9.jpg";
import image10 from "../../assets/images/cimg10.jpg";
import image11 from "../../assets/images/cimg11.jpg";
import image12 from "../../assets/images/cimg12.jpg";
import image13 from "../../assets/images/cimg13.jpg";
import image14 from "../../assets/images/cimg14.jpg";
import image15 from "../../assets/images/cimg15.jpg";
import image16 from "../../assets/images/cimg16.jpg";
import image17 from "../../assets/images/cimg17.jpg";
import image18 from "../../assets/images/cimg18.jpg";
import image19 from "../../assets/images/cimg19.jpg";
import image20 from "../../assets/images/cimg20.jpg";
import { useEffect } from "react";
import { useRef } from "react";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

function ImagesCarousel() {
  const [current, setCurrent] = useState(0);
  const [spacing, setSpacing] = useState(315);
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) setSpacing(120);
      else if (window.innerWidth < 768) setSpacing(150);
      else if (window.innerWidth < 1024) setSpacing(250);
      else setSpacing(315);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [current, spacing]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.heading}  style={{ color: "white" }}>
        <Sparkles className={styles.sparkleIcon} /> HALL OF FAME
      </h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.navButton} onClick={prevSlide}>
          <ChevronLeft size={26} />
        </button>

        <div className={styles.imageShowcase}>
          <AnimatePresence>
            {images.map((img, index) => {
              const offset = (index - current + images.length) % images.length;
              const isActive = offset === 0;

              // 🌟 New positioning logic – keep active image centered
              let xPosition = 0;
              if (offset === 1) xPosition = spacing; // right
              else if (offset === images.length - 1)
                xPosition = -spacing; // left
              else if (offset === 2) xPosition = spacing * 2;
              else if (offset === images.length - 2) xPosition = -spacing * 2;

              return (
                <motion.img
                  key={img}
                  src={img}
                  alt=""
                  className={`${styles.image} ${isActive ? styles.active : ""}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.4,
                    x: xPosition,
                    zIndex: isActive ? 2 : 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              );
            })}
          </AnimatePresence>
        </div>

        <button className={styles.navButton} onClick={nextSlide}>
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}

export default ImagesCarousel;
