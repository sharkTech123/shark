
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/notfound.module.css'; 
const NotFound = () => {
  return (
    <section className={styles.page404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colSm} ${styles.colSm12}`}>
            <div className={`${styles.colSm} ${styles.colSm10} ${styles.colSmOffset1} ${styles.textCenter}`}>
              <div className={styles.fourZeroFourBg}>
                <h1 className={styles.textCenter}>404 !</h1>
              </div>
              <div className={styles.contentBox404}>
                <h3 className={styles.h2}>Look like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <Link to="/" className={styles.link404}>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
