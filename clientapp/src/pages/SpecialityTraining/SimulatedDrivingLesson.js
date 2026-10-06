// import React from 'react'
import styles from "./SimulatedDrivingLesson.module.css";
import simulatedDrivingImg from "../../assets/images/simulated2img.jpg";
import Lplateimg from "../../assets/images/L-Plate.jpg";
import { products } from "../../assets/data/Products";
import {
  FaSearch,
  FaCarSide,
  FaRegMoneyBillAlt,
  FaUserClock,
  
  FaStar,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import EnquiryForm from "../../components/forms/EnquiryForm";
import Review from "../../components/views/Review";




export default function SimulatedDrivingLesson() {



  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission here
  // };
  const theoryProducts = products.filter(
    (product) => product.category === "Theory"
  );
  return (
    <div className={styles.parentCompronentSDL}>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>SIMULATED DRIVING LESSONS</h1>
            </div>

            <div className={styles.heading2}>
              <h2>
                Forget the rest,
                <br /> learn with the best!
              </h2>
            </div>
            <div className={styles.btn}>
              <button id={styles.btn}>Contact Us</button>
            </div>
          </div>
          <div className={styles.video}>
            <img src={Lplateimg} alt="LogoImg" />
          </div>
        </div>
      </section>
      {/* /////////////////////////////Our Beloved Customer section ////////////////////// */}
      <section className={styles.SimulatedBodySection}>
        <div className={styles.pupilsImg}>
          <img src={simulatedDrivingImg} alt="intensiveCoursesImg" />
        </div>
        <div className={styles.SimulatedBodydetails}>
          <h1>Realistic Simulated Driving Lessons</h1>
          <p>
            SmartLearner Driving School are the first driving school in England
            to have their very own driving simulator! We now offer simulated
            driving lessons in our office which is based on Hen Lane, Holbrooks,
            Coventry, CV6 4LB!
          </p>
          <p>
            Simulated driving lessons allow you to experience the same feeling
            you would get in an actual lesson but within a controlled
            environment. Our simulator uses the latest technology to monitor
            your driving including the use of eye trackers, motion detectors,
            and an advanced PC system!
          </p>
          <p>
            The driving simulator is perfect if you are a nervous person, suffer
            from anxiety, or just want to start the driving process is a safe
            environment away from the public road. The virtual driving
            instructor will help you master clutch control, steering, and
            general driving skills… all in complete safety of our office.
          </p>
        </div>
      </section>
      {/* ///////////////////////////Product catelog ////////////////////////////////// */}
      {/* <section className={styles.SimulatedProductCatelog}>
        <h2>Choose Your Course</h2>
        <div className={styles.chooseProductSection}>
          <div className={styles.productGrid}>
            {theoryProducts.map(
              ({
                id,
                name,
                image,
                price,
                duration,
                experience,
                Transmission,
                postcode,
                inCart,
                quantity,
                rating,
              }) => (
                <div key={id} className={styles.productCard}>
                  <img src={image} alt={name} />
                  <div className={styles.productDetails}>
                    <h3>{name}</h3>
                    <div className={styles.ratingAndPrice}>
                      <div className={styles.rating}>
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={index < rating ? styles.filled : ""}
                          >
                            <FaStar />
                          </span>
                        ))}
                      </div>
                      <p className={styles.price}>${price}</p>
                    </div>
                    <ul type="none" className={styles.cardDetails}>
                      <li>
                        <p>
                          Course Duration{" "}
                          <span id={styles.arrowIcon}>
                            {" "}
                            <FaAngleDoubleRight
                              id={styles.productmenuArrowIcon}
                            />
                          </span>
                        </p>{" "}
                        <p className={styles.duration}>{duration}</p>
                      </li>
                      <li>
                        <p>
                          Experience{" "}
                          <span id={styles.arrowIcon}>
                            {" "}
                            <FaAngleDoubleRight
                              id={styles.productmenuArrowIcon}
                            />
                          </span>
                        </p>{" "}
                        <p className={styles.duration}>{experience}</p>
                      </li>
                      <li>
                        <p>
                          Transmission{" "}
                          <span id={styles.arrowIcon}>
                            {" "}
                            <FaAngleDoubleRight
                              id={styles.productmenuArrowIcon}
                            />
                          </span>
                        </p>{" "}
                        <p className={styles.duration}>{Transmission}</p>
                      </li>
                    </ul>

                    <div className={styles.buttons}>
                      <button
                        className={styles.bookNow}
                        disabled={inCart}
                        onClick={() => addToCart({ id, name, price }, quantity)}
                      >
                        {inCart === true ? (
                          <span>In Cart</span>
                        ) : (
                          <span>Book Now</span>
                        )}
                      </button>
                      <NavLink to={`/product/${id}`}>
                        <button className={styles.more}>More Info</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section> */}
      {/*/////////////////////////////////////////// Youtube video section/////////////////////////////////////// */}
      <section className={styles.videoSection}>
        <div className={styles.videoSectionleft}>
          <h1>What are simulated driving lessons?</h1>
          <p>
            Simulated Driving Lessons are basically just driving lessons on an
            advanced computer system that simulates car controls and
            road/traffic situations. The simulator allows pupils to focus on
            learning the controls and processes used in driving all in the
            safety of our office.
          </p>
        </div>
        <div className={styles.videoSectionright}>
          <div className={styles.videoContainer}>
            {/* YouTube video container */}
            {/* Replace 'your_video_id' with the actual ID of your YouTube video */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/your_video_id`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* ////////////////////////////Book now section ///////////////////// */}
      <section className={styles.sectionContainer}>
        <div className={styles.iconDiv}>
          <FaCarSide className={styles.iconCar} />
        </div>
        <div className={styles.headingDiv}>
          <h1>Book Your Simulated Driving Lessons</h1>
        </div>
        <div className={styles.buttonDiv}>
          <a href="tel:+123456789">
            <button id={styles.buttonDiv}>Call Us</button>
          </a>
        </div>
      </section>
      {/* //////////////////////////// Why choose section ////////////////////////////*/}
      <section className={styles.features}>
        <h4>Benefits of Simulated Driving Lessons</h4>

        <div className="mainFeatures">
          <div className="column">
            <span>
              <FaRegMoneyBillAlt id="featuresIcon" />
            </span>

            <h3>Adaptable Lesson Plans</h3>
            <p>
              Learn specific topics or elements to driving in a safe environment
            </p>
          </div>
          <div className="column">
            <span>
              <FaSearch id="featuresIcon" />
            </span>

            <h3>Why with Smartlearner?</h3>
            <p>
              In 2021 and 2022 SmartLearner Driving School was voted the best
              regional driving school in the UK!
            </p>
          </div>
          <div className="column">
            <span>
              <FaUserClock id="featuresIcon" />
            </span>

            <h3>Learn At Your Pace</h3>
            <p>
              Our tutors cater to your unique learning styles and create lesson
              plans around them.
            </p>
          </div>
          <div className="column">
            <span>
              <AiOutlineLike id="featuresIcon" />
            </span>

            <h3>Calming Nerves</h3>
            <p>
              Perfect for beginners or refresher lessons to get started before
              heading out onto the roads!
            </p>
          </div>
        </div>
      </section>
      {/*///////////////////////////////// Enquire Form/////////////////////////// */}
    <section><EnquiryForm/></section>

      {/* /////////////////// Reviews section /////////////////*/}
<section><Review/></section>
      
    </div>
  );
}
