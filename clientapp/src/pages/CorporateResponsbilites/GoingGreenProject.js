import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./GoingGreen.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  TreePine,
  Leaf,
  Sprout,
  Heart,
  Target,
  TrendingUp,
  MapPin,
  Waves,
  Sun,
  Wind,
  Footprints,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

import treeImg from "../../assets/images/trees-img.png";
import goingGreenImg1 from "../../assets/images/going-green-img.jpg";
import goingGreenImg2 from "../../assets/images/going-green-img2.jpg";
import goingGreenImg3 from "../../assets/images/going-green-img3.jpg";
import goingGreenImg4 from "../../assets/images/going-green-img4.jpg";
import goingGreenImg5 from "../../assets/images/going-green-img5.jpg";
import goingGreenImg6 from "../../assets/images/going-green-img6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function GoingGreenProject() {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const [animatedValue1, setAnimatedValue1] = useState(0);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);
  const treeCountRef = useRef(null);
  const barsRef = useRef([]);
  const listItemsRef = useRef([]);

  const data = [80, 120, 160, 200, 240];

  // Animated counter for trees planted
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prevValue) => {
        const newValue = prevValue + 1;
        return newValue >= 135 ? 135 : newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(statsRef.current.querySelectorAll(".stat-card"), {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
        clearProps: "all", // 🔥 important
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.fromTo(
      heroRef.current.querySelectorAll("h1, p"),
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        force3D: false,
        autoRound: true,
        clearProps: "transform",
      },
    );

    // Stats animation
  }, []);
  useEffect(() => {
    if (
      !heroRef.current ||
      !treeCountRef.current ||
      cardsRef.current.length === 0
    )
      return;

    const ctx = gsap.context(() => {
      /* ---------------- HERO ---------------- */
      gsap.fromTo(
        heroRef.current.querySelectorAll("h1, p"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      /* ---------------- CARDS ---------------- */
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      /* ---------------- TREE COUNT ---------------- */
      gsap.fromTo(
        treeCountRef.current,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: treeCountRef.current,
            start: "top 80%",
          },
        },
      );

      /* ---------------- BARS ---------------- */
      barsRef.current.forEach((bar, index) => {
        if (!bar) return;

        gsap.fromTo(
          bar,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "bottom",
            duration: 1,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          },
        );
      });

      /* ---------------- LIST ITEMS ---------------- */
      listItemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          },
        );
      });

      /* ---------------- FLOATING ICONS ---------------- */
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3,
      });

      /* 🔥 REQUIRED */
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Going Green Project | SmartLearner Driving School</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Going-Green-Project"
        />
        <meta
          name="description"
          content="Learn about SmartLearner's Going Green Project—our initiative to promote environmental sustainability through eco-friendly practices, education, and innovation in driver training."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 floating-icon">
            <Leaf className="w-24 h-24 text-white" />
          </div>
          <div className="absolute top-40 right-20 floating-icon">
            <TreePine className="w-32 h-32 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 floating-icon">
            <Sprout className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-32 right-1/3 floating-icon">
            <Wind className="w-28 h-28 text-white" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-full border border-emerald-300/30">
            <span className="text-emerald-100 font-semibold flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Environmental Initiative
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            GOING GREEN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              PROJECT
            </span>
          </h1>

          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-emerald-50 font-light leading-relaxed">
              SmartLearner Driving School champions environmental
              sustainability.
            </p>
            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed">
              Through our Going Green Project, we inspire eco-conscious driving
              and advocate for environmental preservation through tree planting
              and education.
            </p>
            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed italic">
              Committed to reducing our carbon footprint, we continuously strive
              to become a sustainable and eco-friendly company. "Prevention is
              better than cure."
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-4 bg-white text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-emerald-500/20 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-emerald-500/30 transition-all duration-300 shadow-lg">
              Get Involved
            </button>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 fill-emerald-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Overview */}
      <section ref={statsRef} className="py-20 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-12 h-12 text-emerald-600" />
                <span className="text-4xl font-bold text-emerald-600">60</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Instructors
              </h3>
              <p className="text-gray-600">
                Committed to green driving practices
              </p>
            </div>

            <div className="stat-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-500">
              <div className="flex items-center justify-between mb-4">
                <Footprints className="w-12 h-12 text-teal-600" />
                <span className="text-4xl font-bold text-teal-600">600</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tons CO2e
              </h3>
              <p className="text-gray-600">Annual emissions we're offsetting</p>
            </div>

            <div className="stat-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <TreePine className="w-12 h-12 text-green-600" />
                <span className="text-4xl font-bold text-green-600">600+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Trees Target
              </h3>
              <p className="text-gray-600">Our commitment to the planet</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secondrySection}>
        <div className={styles.secondryHeading}>
          <h2 style={{ color: "green" }}>
            Prevention is{" "}
            <span style={{ color: "orange" }}> better then cure </span>
          </h2>
        </div>
        <div>
          <Swiper
            slidesPerView={4} // Display 4 slides at a time
            spaceBetween={30} // Space between slides
            loop={true} // Make it loop infinitely
            autoplay={{
              delay: 1000, // Time between slide transitions (set to 3 seconds for smoother experience)
              disableOnInteraction: false, // Don't stop autoplay when interacting
            }}
            centeredSlides={true} // Keep the active slide centered
            pagination={{
              type: "fraction", // Display slide number like '1/5'
            }}
            navigation={true} // Add navigation buttons (next/prev)
            speed={3000} // Transition speed in ms
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
                slidesPerView: 4, // 4 slides for extra large screens
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <img src={goingGreenImg1} alt="goingGreenImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={goingGreenImg2} alt="goingGreenImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={goingGreenImg3} alt="goingGreenImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={goingGreenImg4} alt="goingGreenImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={goingGreenImg5} alt="goingGreenImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={goingGreenImg6} alt="goingGreenImg" />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </section>
      {/* Ethos & Purpose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Ethos */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <Heart className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-bold">OUR ETHOS</h2>
                </div>
                <div className="space-y-4 text-emerald-50">
                  <p className="text-lg leading-relaxed">
                    As a driving school, we at SmartLearner acknowledge our role
                    in CO2 emissions and take responsibility for reducing our
                    environmental impact.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We believe in environmental restoration and the importance
                    of green spaces, advocating that even small actions can have
                    a big positive impact on our community and our environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Purpose */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-bold">OUR PURPOSE</h2>
                </div>
                <div className="space-y-4 text-teal-50">
                  <p className="text-lg leading-relaxed">
                    SmartLearner estimates that each of our 60 instructors
                    releases about 10 tons of CO2e yearly, totaling 600 tons
                    collectively.
                  </p>
                  <p className="text-lg leading-relaxed">
                    To offset this, we'll plant 10 trees per instructor, as each
                    tree absorbs 1 tonne of CO2e in its lifetime. Join our Going
                    Green Project to help create a better future for our
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Chart Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10 text-emerald-600" />
              <h2 className="text-5xl font-bold text-gray-800">
                Green Project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Progress
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mt-4">
              Tracking our environmental impact journey
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="flex items-end justify-center gap-8 h-80">
              {data.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 flex-1"
                >
                  <div
                    ref={(el) => (barsRef.current[index] = el)}
                    className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-500 via-teal-500 to-green-400 relative overflow-hidden group hover:shadow-2xl transition-all"
                    style={{ height: `${value}px`, maxWidth: "80px" }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm font-semibold text-gray-600">
                      Phase {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tree Count Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 
                    bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 
                    relative overflow-hidden"
      >
        {/* Decorative Icons */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
            <TreePine className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32" />
          </div>
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10">
            <Leaf className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
          </div>
          <div className="absolute top-1/2 left-1/3 hidden md:block">
            <Sprout className="w-20 h-20 lg:w-24 lg:h-24" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-white leading-snug"
            >
              So far we have planted a total of...
            </h2>
          </div>

          {/* Counter */}
          <div
            ref={treeCountRef}
            className="flex flex-col sm:flex-row 
                 items-center justify-center 
                 gap-8 sm:gap-12 my-12 sm:my-16"
          >
            <div className="floating-icon hidden sm:block">
              <Sprout className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-emerald-300" />
            </div>

            <div className="text-center">
              <div className="relative">
                <div
                  className="absolute -inset-4 sm:-inset-6 
                          bg-white/10 rounded-full blur-2xl"
                ></div>
                <h3
                  className="relative text-5xl sm:text-7xl lg:text-9xl 
                         font-black text-white drop-shadow-2xl"
                >
                  {animatedValue}+
                </h3>
              </div>
              <p
                className="text-lg sm:text-xl lg:text-2xl 
                      text-emerald-200 mt-3 sm:mt-4 font-semibold"
              >
                Trees Planted
              </p>
            </div>

            <div className="floating-icon hidden sm:block">
              <TreePine className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-teal-300" />
            </div>
          </div>

          {/* Plantation Details */}
          <div
            className="mt-16 sm:mt-20 
                    bg-white/10 backdrop-blur-md 
                    rounded-2xl sm:rounded-3xl 
                    p-6 sm:p-8 lg:p-10 
                    border border-white/20"
          >
            <h3
              className="text-xl sm:text-2xl lg:text-3xl 
                     font-bold text-white mb-6 sm:mb-8 
                     text-center flex items-center justify-center gap-2 sm:gap-3"
            >
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              Plantation Locations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { count: 3, location: "Trees in Stretton Academy" },
                {
                  count: 20,
                  location: "Wild cherry trees in President Kennedy school",
                },
                { count: 40, location: "Trees in Everdon estates" },
                {
                  count: 25,
                  location: "Brown beech trees for Park Gate Primary",
                },
                {
                  count: 1,
                  location:
                    "Established living willow dome structure for Park Gate",
                },
                {
                  count: 7,
                  location: "Fruit apple trees for President Kennedy",
                },
                { count: 20, location: "Fruit Bushes for President Kennedy" },
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  className="flex items-center gap-4 
                       bg-white/10 hover:bg-white/20 
                       backdrop-blur-sm 
                       p-4 sm:p-5 lg:p-6 
                       rounded-xl sm:rounded-2xl 
                       border border-white/20 
                       transition-all duration-300 group"
                >
                  <div
                    className="flex-shrink-0 
                            w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
                            bg-emerald-500 rounded-lg sm:rounded-xl 
                            flex items-center justify-center 
                            group-hover:scale-110 transition-transform"
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      {item.count}
                    </span>
                  </div>

                  <p
                    className="flex-1 text-sm sm:text-base lg:text-lg 
                          text-white leading-relaxed mb-0"
                  >
                    {item.location}
                  </p>

                  <Award
                    className="w-5 h-5 sm:w-6 sm:h-6 
                              text-emerald-300 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity hidden sm:block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-teal-50 to-emerald-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div
              className="bg-gradient-to-r from-emerald-600 to-teal-600 
                      p-6 sm:p-10 lg:p-12 text-center"
            >
              <Leaf className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white mx-auto mb-4 sm:mb-6" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                GET <span className="text-emerald-200">INVOLVED</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-emerald-50 max-w-2xl mx-auto">
                Do you have land, a business or want to support us in our Green
                mission?
              </p>
            </div>

            {/* Contact Cards */}
            <div className="p-5 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Call */}
                <a
                  href="tel:+4402475092784" style={{textDecoration:"None"}}
                  className="group flex items-center gap-4 p-4 sm:p-5
                       bg-gradient-to-r from-emerald-500 to-teal-500 
                       rounded-xl sm:rounded-2xl text-white
                       hover:shadow-2xl transition-all duration-300
                       md:hover:scale-105"
                >
                  <div
                    className="p-3 sm:p-4 bg-white/20 rounded-lg sm:rounded-xl 
                            group-hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  <div className="leading-tight">
                    <p className="text-xs sm:text-sm text-emerald-100 mb-1">
                      Call Us
                    </p>
                    <p className="text-lg sm:text-xl font-bold">
                      02475 092 784
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a style={{textDecoration:"None"}}
                  href="mailto:admin@smartlearner.com"
                  className="group flex items-center gap-4 p-4 sm:p-5
                       bg-gradient-to-r from-teal-500 to-cyan-500
                       rounded-xl sm:rounded-2xl text-white
                       hover:shadow-2xl transition-all duration-300
                       md:hover:scale-105"
                >
                  <div
                    className="p-3 sm:p-4 bg-white/20 rounded-lg sm:rounded-xl 
                            group-hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  <div className="leading-tight break-all sm:break-normal">
                    <p className="text-xs sm:text-sm text-teal-100 mb-1">
                      Email Us
                    </p>
                    <p className="text-lg sm:text-xl font-bold">
                      admin@smartlearner.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Follow Our Journey
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/smartlearnerdrivingschool",
                color: "hover:bg-blue-600",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/smartlearnerdrivingschool",
                color: "hover:bg-pink-600",
              },
              {
                Icon: Twitter,
                href: "https://twitter.com/smartlearner",
                color: "hover:bg-sky-500",
              },
              {
                Icon: Youtube,
                href: "https://www.youtube.com/channel/UCWqlTyiFfPNqgKeffuo68rghttp",
                color: "hover:bg-red-600",
              },
            ].map(({ Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 bg-white/10 backdrop-blur-sm rounded-2xl ${color} transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-white/20`}
              >
                <Icon className="w-8 h-8 text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
