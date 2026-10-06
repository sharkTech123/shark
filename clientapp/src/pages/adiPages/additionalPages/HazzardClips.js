import React, { useEffect } from "react";
import styles from "./css/PartOneTraining.module.css";

import HazardVideos from "../../../pages/Theory-Subscription/Hazard/HazardVideos";
import { Link } from "react-router-dom";

import { useRef } from "react";

import gsap from "gsap";

export default function HazzardClips() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>Hazard Perception Clips</h1>
              </div>

              <div className={styles.alertBtn}>
                <Link to="/Contact-Us" style={{ textDecoration: "none" }}>
                  {" "}
                  <button id={styles.btn}>Contact Us</button>
                </Link>
                <Link
                  to="/part-1-trainning-material"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <button id={styles.btn}>Back To Portal</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div>
            <h2>
              Hazard <span>Perception videos</span>
            </h2>
            <p style={{ textAlign: "center" }}>
              Below we have created videos to guide you through hazard
              perception clips.
            </p>
          </div>
          <HazardVideos />
        </section>
        <div className={styles.TMnextPage}>
          <button className={styles.TMnextButton}>
            <Link to="/Adi-part-1-MockTest">NEXT PAGE MockTest</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
