import React, { useEffect, useState } from "react";
import styles from "./BookingSectio.module.css";
import Accordion from "react-bootstrap/Accordion";
import manual from "./manual1.jpg";
import automatic from "./automatic1.jpg";
import manual2 from "./manual2.jpg";
import automatic2 from "./automatic2.jpg";
import manual3 from "./manual3.jpg";
import automatic3 from "./automatic3.jpg";
import manual4 from "./manual4.jpg";
import automatic4 from "./automatic4.jpg";
import theoryImg1 from "../../../assets/images/theory1.jpg";
import theoryImg2 from "../../../assets/images/theorySupportRound1.jpg";
import theoryImg3 from "../../../assets/images/theory-Img-banner.png";
import passplus1 from "../../../pages/Transmission/passplusbanner.png";
import passplus2 from "../../../pages/Transmission/passplusbanner2.jpg";
import passplus3 from "../../../pages/Transmission/passplusround.jpg";
import passplus4 from "../../../pages/Transmission/passplusround2.jpg";
import { Element, scroller } from "react-scroll";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function BookingSection() {
  const { section } = useParams();
  useEffect(() => {
    if (section) {
      scroller.scrollTo(`${section}-section`, {
        duration: 400,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  const [transmissionType, setTransmissionType] = useState("manual");

  const [activeSlide, setActiveSlide] = useState(0);
  // Function to update the transmission type based on the active Accordion item
  const handleAccordionChange = (eventKey) => {
    switch (eventKey) {
      case "0":
        setTransmissionType("manual");
        break;
      case "1":
        setTransmissionType("automatic");
        break;
      case "2":
        setTransmissionType("theory");
        break;
      case "3":
        setTransmissionType("passplus");
        break;
      case "4":
        setTransmissionType("intensive");
        break;
      default:
        setTransmissionType("manual"); // Handle other cases if needed
    }
  };

  // Render images based on the selected transmission type
  const renderImages = () => {
    if (transmissionType === "manual") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={manual} alt="Manual Transmission 1" id={styles.imges1} />
            <img src={manual2} alt="Manual Transmission 2" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={manual3} alt="Manual Transmission 3" id={styles.imges3} />
            <img src={manual4} alt="Manual Transmission 4" id={styles.imges4} />
          </div>
        </>
      );
    } else if (transmissionType === "automatic") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img
              src={automatic}
              alt="Automatic Transmission 1"
              id={styles.imges1}
            />
            <img
              src={automatic2}
              alt="Automatic Transmission 2"
              id={styles.imges2}
            />
          </div>
          <div className={styles.imgesdiv2}>
            <img
              src={automatic3}
              alt="Automatic Transmission 3"
              id={styles.imges3}
            />
            <img
              src={automatic4}
              alt="Automatic Transmission 4"
              id={styles.imges4}
            />
          </div>
        </>
      );
    } else if (transmissionType === "theory") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={theoryImg1} alt="Theory 1" id={styles.imges1} />
            <img src={theoryImg2} alt="Theory 2" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={theoryImg3} alt="Theory 3" id={styles.imges3} />
            <img src={automatic} alt="Theory 4" id={styles.imges4} />
          </div>
        </>
      );
    } else if (transmissionType === "passplus") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={passplus1} alt="Pass Plus 1" id={styles.imges1} />
            <img src={passplus2} alt="Pass Plus 2" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={passplus3} alt="Pass Plus 3" id={styles.imges3} />
            <img src={manual4} alt="Pass Plus 4" id={styles.imges4} />
          </div>
        </>
      );
    } else if (transmissionType === "intensive") {
      return (
        <>
          <div className={styles.imgesdiv1}>
            <img src={automatic3} alt="Intensive" id={styles.imges1} />
            <img src={theoryImg2} alt="Intensive" id={styles.imges2} />
          </div>
          <div className={styles.imgesdiv2}>
            <img src={passplus2} alt="Intensive" id={styles.imges3} />
            <img src={passplus4} alt="Intensive" id={styles.imges4} />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div>
      <div className={styles.BookingSectionPage}>
        <div className={styles.bookingheading}>
          <h2>Our Courses</h2> <p>Start Your Journey with us Today!</p>
        </div>
        <Element name="our-courses-section">
          <div className={styles.swiperContent}>
            <Swiper
              slidesPerView={4} // Display 3 slides at a time
              spaceBetween={30} // Space between slides
              loop={true} // Make it loop infinitely
              autoplay={{
                // Time between slide transitions
                disableOnInteraction: false, // Don't stop autoplay when interacting
              }}
              centeredSlides={true} // Keep the active slide centered
              pagination={{
                type: "fraction",
                clickable: true,
              }}
              navigation={true}
              // Add navigation buttons (next/prev)
              modules={[Pagination, Navigation, Autoplay]} // Enable Pagination, Navigation, and Autoplay modules
              className="mySwiper"
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              style={{
                padding: "2rem 1rem",
                maxWidth: "1640px",
                margin: "0px auto",
                width: "100%",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1, // 1 slide at a time for small screens
                  spaceBetween: 10, // Less space on small screens
                },
                768: {
                  slidesPerView: 2, // 2 slides at a time for medium screens
                  spaceBetween: 20, // Slightly more space
                },
                1024: {
                  slidesPerView: 3, // 3 slides for large screens
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}>
              <SwiperSlide>
                <Link to="/manual">
                  <div className={styles.slide1}>
                    <div className={styles.opicity}></div>
                    <div id={styles.crousalContent}>
                      <h2>MANUAL</h2>
                      <p>
                        Discover the thrill of hands-on control with our manual
                        driving lessons. From mastering the clutch to shifting
                        gears seamlessly, our expert instructors will guide you
                        through the art of manual driving, empowering you with
                        the skills and confidence to navigate any road with
                        finesse and precision.
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/automatic-transmisson">
                  <div className={styles.slide2}>
                    <div className={styles.opicity}></div>{" "}
                    <div id={styles.crousalContent}>
                      <h2>AUTOMATIC</h2>
                      <p>
                        Experience the ease and convenience of automatic driving
                        with our comprehensive lessons. Our skilled instructors
                        will help you navigate the road smoothly, focusing on
                        essential techniques and safe driving practices. Whether
                        you’re a beginner or looking to refine your skills,
                        we’ll empower you to drive confidently in any situation.
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/workshop">
                  <div className={styles.slide5}>
                    <div className={styles.opicity}></div>{" "}
                    <div id={styles.crousalContent}>
                      <h2>WorkShops</h2>
                      <p>
                        At SmartLearner Driving School, we go beyond the basics.
                        Our specialised workshops are designed to equip learners
                        and new drivers with the practical knowledge, skills,
                        and confidence needed for real-life driving
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/intensive">
                  <div className={styles.slide3}>
                    <div className={styles.opicity}></div>{" "}
                    <div id={styles.crousalContent}>
                      <h2>INTENSIVE</h2>
                      <p>
                        Designed for those eager to learn quickly and
                        efficiently, our immersive programmes offer focused
                        instruction and hands-on experience to help you become a
                        confident driver in no time. Get behind the wheel and
                        fast-track your path to driving independence with our
                        intensive driving courses.
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/pass-plus">
                  <div className={styles.slide4}>
                    <div className={styles.opicity}></div>{" "}
                    <div id={styles.crousalContent}>
                      <h2>PASS PLUS</h2>
                      <p>
                        Designed specifically for newly qualified drivers, Pass
                        Plus is an advanced driving course that helps you
                        maintain and improve the skills you've learned while
                        gaining valuable experience on the road. Whether you're
                        looking to build confidence in new driving conditions,
                        or simply want to become a safer, more skilled driver,
                        Pass Plus is the ideal next step.
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/Theory-Support">
                  <div className={styles.slide5}>
                    <div className={styles.opicity}></div>{" "}
                    <div id={styles.crousalContent}>
                      <h2>THEORY SUPPORT</h2>
                      <p>
                        Need support on passing your theory test? We offer 1-2-1
                        in house, from the comfort of your house on Zoom, or if
                        you want to touch up you driving skills, get ahead or
                        have fun, we have a driving simulator in office!
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/driving-instructor-packages">
                  <div className={styles.slide5}>
                    <div className={styles.opicity}></div>{" "}
                    <div id={styles.crousalContent}>
                      <h2>Instructor Training </h2>
                      <p>
                        Starting a career as a driving instructor can be
                        daunting due to jargon and abbreviations, but we’re here
                        to simplify the process with our step-by-step guide.
                      </p>
                      <button>Explore Now</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              {/* Add more slides as needed */}
            </Swiper>
          </div>
        </Element>
      </div>
    </div>
  );
}
