import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { BiSolidTagAlt } from "react-icons/bi";
import { faqs } from "../../../assets/data/Faqs";
const AccordionItem = ({ title, content, defaultActive }) => {
  const [isActive, setIsActive] = useState(defaultActive || false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader} ${isActive ? styles.active : ""}`}
        onClick={toggleAccordion}>
        <BiSolidTagAlt id={styles.RightFilled} /> {title}
      </button>
      <div
        className={`${styles.accordionContent} ${
          isActive ? styles.active : ""
        }`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function FaqAccordion() {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion}>
        {faqs.map((item, index) => (
          <AccordionItem title={item.question} content={item.answer} />
        ))}
      </div>
    </div>
  );
}
