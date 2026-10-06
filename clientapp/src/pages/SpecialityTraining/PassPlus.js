// import React from 'react'
import Lplateimg from "../../assets/images/L-Plate.jpg";
import styles from "./PassPlus.module.css";
import { products } from "../../assets/data/Products";
import {
  FaStar,
  FaAngleDoubleRight,
  FaCarSide,
  FaCloudSunRain,
  FaHatCowboySide,
  FaCar,
  FaCloudMoon,
} from "react-icons/fa";
import { FaCity, FaRoad } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Review from "../../components/views/Review"





export default function PassPlus() {

  
 

  const theoryProducts = products.filter(
    (product) => product.category === "Theory"
  );



  return (
    <div>
      <section className={styles.imageSection}>
        <div className={styles.maincontent}>
          <div className={styles.content}>
            <div className={styles.heading1}>
              <h1>Pass Plus Scheme</h1>
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
      {/* ////////////////////////// youtube video section /////////////////////////////// */}
      <section className={styles.videoSection}>
        <div className={styles.videoSectionleft}>
          <h1>What is Pass Plus?</h1>
          <p>
            Pass Plus is a short driving course totalling to six hours, designed
            to help newly qualified drivers improve their skills and safety.
          </p>
          <p>
            SmartLearner has a fleet of highly-qualified local driving You can
            take it any time after you’ve passed your practical driving test but
            it’s usually most beneficial in your first year of driving as most
            road accidents occur within the first 12 months of a new driver
            getting their licence.
          </p>
          <p>
            SmartLearner has a fleet of highly-qualified local driving
            instructors who are ready to provide pass plus course. All of our
            instructors are DVSA-approved and trained to provide amazing
            customer service and make driving lessons both informative and fun.
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

      {/* ///////////////////////////Product catelog ////////////////////////////////// */}
      {/* <section className={styles.passPlusProductCatelog}>
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
      {/* ////////////////////////////////practice section/////////////////////////  */}
      <section className={styles.practiceSection}>
        <div className={styles.practiceContainer}>
          <div className={styles.practiceHeading}>
            <h4>Is Pass Plus Worth it?</h4>
            <h4>What are the Benefits of Pass Plus?</h4>
          </div>
          <div className={styles.practiceParagraph}>
            <p>
              • Having the additional certification of passing the Pass Plus
              course could result in lower insurance costs.
            </p>
            <p>
              • There are no formal examinations that need to be sat at the end
              of the Pass Plus. However your instructor will be assessing your
              standard of driving and understanding after each module and offer
              you the certificate upon completion.
            </p>
            <p>
              • The Pass Plus can be carried out in any location (you do not
              have to go to any specific test centres like you would for your
              theory and practical driving test) allowing you to build on your
              confidence on roads outside of your previous driving experiences.
            </p>
            <p>
              • The Pass Plus allows you to improve your certainty of navigation
              and hazard awareness with less pressure on the operation of the
              car and its controls, as you are likely to feel more relaxed
              having relieved the pressure of passing your test.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* ////////////////////////////Book now section ///////////////////// */}
      <section className={styles.sectionContainer}>
        <div className={styles.iconDiv}>
          <FaCarSide className={styles.iconCar} />
        </div>
        <div className={styles.headingDiv}>
          <h1>Book a Pass Plus Course</h1>
        </div>
        <div className={styles.buttonDiv}>
          <a href="tel:+123456789">
            <button id={styles.buttonDiv}>Call Us</button>
          </a>
        </div>
      </section>

      {/*/////////////////////////////// whats included////////////////////// */}
      <section className={styles.whatincludedSection}>
        <div className={styles.whatincludedSectionHeading}>
          <h2>What is included in Pass Plus?</h2>
        </div>
        <section className={styles.features}>
          <div className={styles.mainFeatures}>
            <div className={styles.column}>
              <span>
                <FaCity id={styles.featuresIcon} />
              </span>

              <h3>Town Driving</h3>
              <p>
                As the majority of motorists will experience urban driving the
                most, this module can be invaluable in helping you to brush up
                your observational skills and increase your awareness levels.
                You’ll learn how to navigate complex junctions, underpasses and
                tram, bus and cycle lanes.
              </p>
            </div>
            <div className={styles.column}>
              <span>
                <FaCloudSunRain id={styles.featuresIcon} />
              </span>

              <h3>All Weather Driving</h3>
              <p>
                If you haven’t driven in extreme weather conditions before, it
                can be advantageous to learn how to cope with heavy rain, snow,
                ice, fog and dazzling sunshine. Preventing and handling skidding
                is also covered in this section, as well as why stopping
                distances are reduced in bad weather.
              </p>
            </div>
            <div className={styles.column}>
              <span>
                <FaHatCowboySide id={styles.featuresIcon} />
              </span>

              <h3>Rural Roads</h3>
              <p>
                Driving in the countryside brings with it different risks to
                driving in built-up areas, including blind bends, animals in the
                road and overtaking slow vehicles. This section looks at safe
                passing places and what to do when you encounter sharp corners,
                horse riders, cyclists, farm vehicles and debris in the road
              </p>
            </div>
            <div className={styles.column}>
              <span>
                <FaRoad id={styles.featuresIcon} />
              </span>

              <h3>Driving on Dual Carriageway</h3>
              <p>
                You should have driven on dual carriageways before your test,
                but you might not feel as though you’ve fully got to grips with
                them. This module focuses on joining and leaving the carriageway
                via slip roads, as well as overtaking, lane discipline and safe
                distances.
              </p>
            </div>
            <div className={styles.column}>
              <span>
                <FaCar id={styles.featuresIcon} />
              </span>

              <h3>Driving on Motorways</h3>
              <p>
                Although learners can now have lessons on motorways with an
                approved instructor, you probably won’t have spent much time on
                them and could still find them intimidating. In this module
                you’ll learn how to drive at a safe speed in different
                conditions, deal with motorway fatigue, handle a breakdown, use
                lanes correctly and follow signs.
              </p>
            </div>
            <div className={styles.column}>
              <span>
                <FaCloudMoon id={styles.featuresIcon} />
              </span>

              <h3>Night Driving</h3>
              <p>
                Night Driving You might not have had much experience of night
                driving before passing your test, so this module can help boost
                your confidence when taking to the roads after dark. It deals
                with the correct use of headlamps, adjusting to different light
                levels, getting used to being dazzled and judging speeds and
                distance.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* //////////////////Reviews //////////////////////// */}
      <section>
        <Review/>
      </section>
    </div>
  );
}
