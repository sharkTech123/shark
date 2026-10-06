import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaCarCrash,
  FaUserShield,
  FaLock,
  FaRegMoneyBillAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import bannerImg from "../../../../assets/images/legulstuffbanner.jpg";

export default function Adi3Modulethree() {
  //   ///////////////////////////////////////////////////////
  const sections = [
    {
      icon: <FaBalanceScale />,
      title: "Equality & Diversity Laws",
      color: "#ff4d4d",
      points: [
        "Equality Act 2010 – Ensures that all learners receive fair and equal treatment, regardless of age, disability, gender, race, religion, or sexual orientation. 🔹 Example: A driving instructor should make reasonable adjustments for a learner with dyslexia by providing verbal voice recordings of feedback instead of written notes.",
        "Disability Discrimination Act 1995 (now covered by the Equality Act 2010) – Requires instructors to accommodate disabled learners, ensuring they have equal access to driving lessons. 🔹 Example: If a learner has limited mobility, the instructor should use a vehicle with hand controls if needed or recommend them to an appropriate trainer.",
      ],
    },
    {
      icon: <FaCarCrash />,
      title: "Road Traffic Laws & Instructor Regulations",
      color: "#ffa64d",
      points: [
        "Road Traffic Act 1988 – Governs safe road use and requires instructors to ensure learners drive legally and safely. 🔹 Example: An instructor must ensure that a learner has a valid provisinal licence before beginning lessons.",
        "Motor Vehicles (Driving Licences) Regulations 1999 – Outlines the legal requirements for learner drivers, including supervision and eyesight standards. 🔹 Example: An instructor must ensure their learner can read a number plate from 20 metres before starting lessons.",
        "Driving Instruction (Suspension and Exemption Powers) Act 2009 – Allows the DVSA to suspend instructors who pose a risk to learners. 🔹 Example: If an instructor has unsafe teaching practices, such as allowing learners to drive without proper supervision, they may be suspended.",
      ],
    },
    {
      icon: <FaLock />,
      title: "Data Protection & Confidentiality",
      color: "#4dd2ff",
      points: [
        "UK General Data Protection Regulation (UK GDPR) & Data Protection Act 2018 – Requires instructors to handle personal data securely and not share it without consent. 🔹 Example: A driving instructor must not share a learner’s phone number or test results without permission.",
      ],
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Health & Safety Regulations",
      color: "#4dff88",
      points: [
        "Health and Safety at Work Act 1974 – Ensures a safe learning environment for both the instructor and learner. 🔹 Example: Instructors must regularly maintain their vehicle to prevent mechanical failiures during lesson.",
        "Management of Health and Safety at Work Regulations 1999 – Requires risk assessments to ensure lessons are conducted safely. 🔹 Example: If road conditions are hazardous due to ice, an instructor should assess whether it’s safe to conduct the lesson or postpone it.",
      ],
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Consumer Rights & Business Compliance",
      color: "#ff66cc",
      points: [
        "Consumer Rights Act 2015 – Ensures that driving lessons are fairly priced and meet expected service standards. 🔹 Example: If an instructor cancels a prepaid lesson without rescheduling, they must offer a refund.",
        "The Supply of Goods and Services Act 1982 – Requires instructors to deliver lessons with reasonable care and skill. 🔹 Example: An instructor must provide clear, structured lessons rather than cutting lessons short or failing to give proper guidance.",
      ],
    },
    {
      icon: <FaUserShield />,
      title: "Criminal Record & Safeguarding Laws",
      color: "#cccc00",
      points: [
        "Rehabilitation of Offenders Act 1974 – Requires instructors to undergo an enhanced DBS check to ensure they are safe to work with young and vulnerable learners. 🔹 Example: An instructor with a history of serious driving offences or safeguarding concerns may be refused a licence to teach.",
        "Children Act 1989 & Safeguarding Vulnerable Groups Act 2006 – Protects young and vulnerable learners from harm or abuse. 🔹 Example: If a young learner confides in their instructor about being in danger, the instructor must report it to the appropriate safeguarding authority.",
      ],
    },
  ];
  // ////////////////////////////////////////////////////////////////

  return (
    <div className="w-full overflow-hidden font-sans">
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              The
              <span className="text-emerald-400"> legal </span> stuff
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              You've successfully completed Part 2 of the Approved Driving
              Instructor (ADI) exam, and you've demonstrated the skills and
              professionalism required to advance to the next step.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////// */}
      <section className="bg-white">
        <div className={styles.adipart3threecontainer}>
          <h1 className={styles.adipart3threeheading}>
            Legal Requirements for Driving Instructors
          </h1>
          <p className={styles.adipart3threesubheading}>
            Here’s a brief explanation of each legal act with examples relevant
            to driving instructors:
          </p>
          <div className={styles.adipart3threegrid}>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={styles.adipart3threecard}
                style={{ borderColor: section.color }}
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={styles.adipart3threeicon}
                  style={{ color: section.color }}
                >
                  {section.icon}
                </div>
                <h3 className={styles.adipart3threetitle}>{section.title}</h3>
                <ul className={styles.adipart3threelist}>
                  {section.points.map((point, idx) => {
                    const parts = point.split("🔹").filter(Boolean); // Remove empty strings
                    return (
                      <li key={idx}>
                        {parts.map((part, subIdx) => (
                          <p key={subIdx}>🔹 {part.trim()}</p>
                        ))}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className={styles.licenseSection}>
            <h2 className={styles.licenseHeading}>Licence Check Code</h2>
            <p className={styles.licenseText}>
              Just because a student presents a provisional licence doesn’t mean
              it’s valid. Always confirm its authenticity at:
              <a
                href="https://www.gov.uk/view-driving-licence"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/view-driving-licence
              </a>
              <br />
              Then use the code at:
              <a
                href="https://www.gov.uk/check-driving-information"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.gov.uk/check-driving-information
              </a>
            </p>
          </div>
        </div>
        {/* ///////////////////////////////////////////////// */}

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 text-center space-y-10">
            <Link to="/learning-style">
              <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
                Next Page →
              </button>
            </Link>

            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl mx-auto">
              <h2 className="text-2xl font-extrabold mb-2">Start Quiz</h2>
              <h4 className="text-slate-500 mb-4">15 Questions</h4>
              <p className="text-slate-700 mb-6">
                Test your understanding of the legal stuff before moving
                forward.
              </p>
              <Link to="/takequizCatName/legal-stuff">
                <button className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      {/* ////////////////////////////////////////////////////////// */}
    </div>
  );
}
