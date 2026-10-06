import styles from "./ExtendedTest.module.css";
import Trailer from "../../assets/images/Trailer2.png";
import { GoPlay } from "react-icons/go";
import { FaTrailer } from "react-icons/fa";
import EnquiryForm from "../../components/forms/EnquiryForm";
import ShortFaqs from "../../components/shortFaqs/ShortFaqs";
import Review from "../../components/views/Review";

export default function TrailerTraining() {
  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.overlay}></div>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>TRAILER TRAINING</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Forget The Rest,
                <br /> Learn With The Best!
              </h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.video}>
            <a href="/">
              <img src={Trailer} alt="Trailer" />
              <GoPlay className={styles.playIcon} />
            </a>
          </div>
        </div>
      </section>
      {/* //////////////////////////////body details//////////////////////////// */}
      <section className={styles.ExtendedTestBodyDetails}>
        <FaTrailer id={styles.featuresIconSRU} />
        <h2>What is Trailer Training?</h2>
        <p>
          Trailer training is also known as the B+E category (More information
          can be found <a href="https://www.gov.uk/driving-licence-categories">here</a>). At Smart Learner we offer trailer training from
          DVSA Approved Driving Instructors to companies and/or individuals who
          need to drive the B+E category and want to gain confidence doing so.
          We like to make sure that lessons with us are affordable and quick
          while ensuring you are confident and safe on the road.
        </p>
      </section>

      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
      <section>
        <EnquiryForm />
      </section>

      <section >
       <ShortFaqs/>
      </section>

      <section>
        <Review/>
      </section>
    </div>
  );
}
