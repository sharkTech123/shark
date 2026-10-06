import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DrivingLessonsCarousel.css";
import { Link } from "react-router-dom";

import manualImg from "../../../assets/images/manualcrouselImg.webp";
import autoImg from "../../../assets/images/automaticCrousalImg.jpg";
import intensiveImg from "../../../assets/images/IntensiveCrousalImg.jpg";
import passplusImg from "../../../assets/images/passplusCarousalImg.jpg";
import theoryImg from "../../../assets/images/theoryTestCrausalImg.jpg";

const lessons = [
  {
    title: "MANUAL DRIVING LESSONS",
    description: `  Discover the thrill of hands-on control with our manual
                        driving lessons. From mastering the clutch to shifting
                        gears seamlessly, our expert instructors will guide you
                        through the art of manual driving, empowering you with
                        the skills and confidence to navigate any road with
                        finesse and precision.`,
    image: manualImg,
    link: "https://smartlearner.com/manual",
  },
  {
    title: "AUTOMATIC DRIVING LESSONS",
    description: ` Our skilled instructors
                        will help you navigate the road smoothly, focusing on
                        essential techniques and safe driving practices. Whether
                        you’re a beginner or looking to refine your skills,
                        we’ll empower you to drive confidently in any situation.`,
    image: autoImg,
    link: "https://smartlearner.com/automatic-transmisson",
  },
  {
    title: "PDI / ADI Workshops",
    description: ` At SmartLearner Driving School, we go beyond the basics.
                        Our specialised workshops are designed to equip learners
                        and new drivers with the practical knowledge, skills,
                        and confidence needed for real-life driving.`,
    image: theoryImg,
    link: "https://smartlearner.com/workshop",
  },
  {
    title: "INTENSIVE",
    description: ` Designed for those eager to learn quickly and
                        efficiently Get behind the wheel and
                        fast-track your path to driving independence with our
                        intensive driving courses.`,
    image: intensiveImg,
    link: "https://smartlearner.com/intensive",
  },
  {
    title: "PASS PLUS",
    description: ` Designed specifically for newly qualified drivers, Pass
                        Plus is an advanced driving course that helps you
                        maintain and improve the skills you've learned while
                        gaining valuable experience on the road. `,
    image: passplusImg,
    link: "https://smartlearner.com/pass-plus",
  },
  {
    title: "THEORY SUPPORT",
    description: `  Need support on passing your theory test? We offer 1-2-1
                        in house, from the comfort of your house on Zoom, or if
                        you want to touch up you driving skills, get ahead or
                        have fun, we have a driving simulator in office!`,
    image: theoryImg,
    link: "https://smartlearner.com/Theory-Support",
  },
  {
    title: "INSTRUCTOR TRAINING",
    description: `  Starting a career as a driving instructor can be
                        daunting due to jargon and abbreviations, but we’re here
                        to simplify the process with our step-by-step guide.`,
    image: passplusImg,
    link: "https://smartlearner.com/driving-instructor-packages",
  },
];

const DrivingLessonsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // show 3
    slidesToScroll: 1,
    centerMode: true, // centers active slide
    centerPadding: "40px", // adjust this for how much side is visible
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "30px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "30px" } },
    ],
  };

  return (
    <section className="carousel-section12345">
      <div className="carousel-container12345">
        <Slider {...settings}>
          {lessons.map((lesson, index) => (
            <div
              className={`carousel-card12345 ${
                index % 1 === 0 ? "card-up12345" : "card-down12345"
              }`}
              key={index}>
              <div className="card-content12345">
                <div className="card-img-wrapper12345">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="card-img12345"
                  />
                </div>
                <div className="card-body12345">
                  <h3 className="card-title12345">{lesson.title}</h3>
                  <p className="card-desc12345">{lesson.description}</p>
                  <Link to={lesson.link} className="find-btn12345">
                    FIND OUT MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DrivingLessonsCarousel;
