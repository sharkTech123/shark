import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ui/drivingLesson/DrivingLessonsCarousel.css";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

import manualImg from "../../assets/images/manualcrouselImg.webp";
import autoImg from "../../assets/images/automaticCrousalImg.jpg";
import intensiveImg from "../../assets/images/IntensiveCrousalImg.jpg";
import passplusImg from "../../assets/images/passplusCarousalImg.jpg";
import theoryImg from "../../assets/images/theoryTestCrausalImg.jpg";

const lessons = [
  {
    id: 1,
    name: "Ben D.",
    position: "Coventry",
    image: manualImg,
    text: "As a first-time driver, I was really nervous about getting behind the wheel, but my instructor made me feel so comfortable from the first lesson. ",
  },
  {
    id: 2,
    name: "Jane S.",
    position: "Warwick",
    image: autoImg,
    text: "After failing my driving test a couple of times, I was really starting to lose confidence. But then I found Smartlearner, and everything changed. Definitely recommended!",
  },
  {
    id: 3,
    name: "Michael B.",
    position: "Leamington",
    image: theoryImg,
    text: "As someone who had driven before but had been away from the roads for a few years, I needed a refresher course to get my confidence back.",
  },
  {
    id: 4,
    name: "Sarah M.",
    position: "Nuneaton",
    image: intensiveImg,
    text: "Choosing smartlearner was the best decision I made in my journey to becoming a confident driver. Highly recommend this driving school to anyone looking to learn safely and efficiently!",
  },
  {
    id: 5,
    name: "James T.",
    position: "Rugby",
    image: passplusImg,
    text: "I can't thank Smartlearner enough for the amazing experience! From my first lesson to passing my driving test. Definitely recommend to those who's looking learn to drive!",
  },
  {
    name: "Michael Jhon",
    position: "Leamington",
    text: "SmartLearner helped me improve my driving knowledge and confidence. The instructors are supportive and the learning experience is top-notch!",
    image: autoImg,
  },
];

const StaticTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // show 3 full cards
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
    <>
      <section className="carousel-section12345">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          style={{ padding: "0px 1rem" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-900 leading-snug">
          <span  style={{ color: "white" }}>What Our Customers Say</span>{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-4xl">
            💙 ✨
          </motion.span>
        </motion.h2>
        <div className="carousel-container12345">
          <Slider {...settings}>
            {lessons.map((lesson, index) => (
              <div
                className={`carousel-card12345 ${
                  index % 2 === 0 ? "card-up12345" : "card-down12345"
                }`}
                key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="relative rounded-2xl p-8 text-gray-800  mx-auto 
                 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-[0_4px_25px_rgba(0,0,0,0.1)] overflow-hidden">
                  {/* Decorative Glow */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-t-2xl"></div>

                  {/* Profile Image */}
                  <div className="relative flex justify-center mb-5">
                    <motion.img
                      src={lesson.image}
                      alt={lesson.name}
                      className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 250 }}
                    />
                    <div className="absolute bottom-0 right-[42%] bg-blue-500 rounded-full p-1 shadow-md">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <Quote className="w-8 h-8 text-blue-500 opacity-70" />
                  </div>

                  {/* Message */}
                  <p className="text-center italic text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                    “{lesson.text}”
                  </p>

                  {/* Name and Position */}
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {lesson.name}
                    </h3>
                    <p className="text-sm text-blue-500 flex items-center justify-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400" />{" "}
                      {lesson.position}
                    </p>
                  </div>

                  {/* Animated floating accent */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-3 right-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default StaticTestimonial;
