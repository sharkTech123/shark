import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { BiSolidTagAlt } from "react-icons/bi";

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

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <AccordionItem
        title="SEND YOUR LOVE DONATIONS"
        content="In December 2021, SmartLearner Driving School supported the Coventry Food Network's 'Send Your Love' campaign, sanctioned by Coventry City Council, to provide food for vulnerable families. Our Hen Lane (Holbrooks) office became a food drop-off point, enabling donations.For those unable to drop off food, our instructors collected donations across Coventry. Every Christmas, we participate in donating food to the food bank."
        defaultActive={true} // Set the first accordion item to be open by default
      />
      <AccordionItem
        title="FAMILY TICKETS TO DINNER & theatre"
        content="SmartLearner Driving School in support and in partnership with Go CV, sponsored a £50 dinner voucher  at The Mulberry Coventry, followed by a family ticket of 4 seats for the spectacular magical panto ‘Beauty & the Beast’ donated by Belgrade Theatre, Coventry.
Go CV registered followers, audience and card users had the chance to win free dinner and tickets to the theatre, through the facebook competition set by the Go CV page"
      />
      <AccordionItem
        title="FAMILY TICKETS FOR FIRE DISPLAYS"
        content="In light of the Bonfire night, In November 2021, SmartLearner Driving School sponsored tickets for a family of 4, in the celebration of sports and community, followed by annual fireworks display at Coventry Rugby Club. All Go CV registered card users had the opportunity to win these free tickets through the Go CV Facebook page."
      />
    </div>
  );
};

export default Accordion;
