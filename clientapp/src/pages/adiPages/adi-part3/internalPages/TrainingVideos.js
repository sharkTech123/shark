import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import { Link } from "react-router-dom";
export default function TrainingVideos() {
  const videoURLs = [
    "https://www.youtube.com/embed/aBaqogvNPOI",
    "https://www.youtube.com/embed/86u6Bx-Ma3A",
    "https://www.youtube.com/embed/GV1FCFWipXQ",
    "https://www.youtube.com/embed/ZNQat_6-z3Y",
    "https://www.youtube.com/embed/UPDG-vBshLs",
    "https://www.youtube.com/embed/j-eFbWjB0tw",
    "https://www.youtube.com/embed/aEX3F9d-a2s",
    "https://www.youtube.com/embed/W9o1EOeB9Bw",
    "https://www.youtube.com/embed/C7X3mtnVu0Y",
    "https://www.youtube.com/embed/z_IhHp1ZJgA",
    "https://www.youtube.com/embed/JED7rvxglfs",
    "https://www.youtube.com/embed/8VduV7iaKZc",
    "https://www.youtube.com/embed/ScIf9t8KsNg",
    "https://www.youtube.com/embed/OJ9sUT2IEzc",
    "https://www.youtube.com/embed/npYlCcfdAKw",
    "https://www.youtube.com/embed/3c2pFeQbrUk",
  ];

  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest,
                  <span>learn with the best!</span>
                </h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  AWARD-WINNING <span>DRIVING LESSONS</span>{" "}
                </h2>
              </div>
              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Giving instruction <span>and feedback</span>{" "}
          </h2>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
          <p id={styles.hazardTestWorkListSectionPara}>
            In the videos below our instructor trainers Raj, Laila and Moh will
            be talking{" "}
            <span>
              {" "}
              through the steps of how to teach the following subjects.
            </span>
          </p>
        </section>
        {/* //////////////////////////////////////////////////// */}
        <div className={styles.hazardTestWorkListSection}>
          <h2>
            Manoeuvres <span>Video Materials</span>{" "}
          </h2>
          <div className={styles.hazardVideosGridContainer}>
            {videoURLs.map((url, index) => (
              <div className={styles.hazardGridItem} key={index}>
                <iframe
                  width="200"
                  height="120"
                  src={url}
                  allowFullScreen></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
