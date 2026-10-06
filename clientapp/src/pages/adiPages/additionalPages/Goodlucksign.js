import React, { useEffect, useState } from 'react';
import styles from '../AdiPartOne.module.css';
import { Link } from 'react-router-dom';

const GoodLuckPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`${styles.goodLuckPage} ${animate ? styles.goodluckfadeIn : ''}`}>
      <div className={styles.goodluckcontainer}>
        <h1 className={styles.goodluckheading}>Good Luck!</h1>
        <p className={styles.goodluckmessage}>
          You’ve got this! We believe in your success. Stay focused and confident.
        </p>
       <Link to ="/ADI-Training-Portal"> <button className={styles.goodluckbtn}>Back to Page</button></Link>
      </div>
    </div>
  );
};

export default GoodLuckPage;
