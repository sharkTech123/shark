import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Communities.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import {
  Heart,
  Users,
  Gift,
  ShoppingBag,
  Bike,
  Award,
  Sparkles,
  ChevronRight,
  HandHeart,
  TrendingUp,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import communityChempionImg1 from "../../assets/images/community-champions/CChampion-1.jpg";
import communityChempionImg2 from "../../assets/images/community-champions/CChampion-2.jpg";
import communityChempionImg3 from "../../assets/images/community-champions/CChampion-3.jpg";
import communityChempionImg4 from "../../assets/images/community-champions/CChampion-4.jpg";
import communityChempionImg5 from "../../assets/images/community-champions/CChampion-5.jpg";
import communityChempionImg6 from "../../assets/images/community-champions/CChampion-6.jpg";
import communityChempionImg7 from "../../assets/images/community-champions/CChampion-7.jpg";
import communityChempionImg8 from "../../assets/images/community-champions/CChampion-8.jpg";
import communityChempionImg9 from "../../assets/images/community-champions/CChampion-9.jpg";
import communityChempionImg10 from "../../assets/images/community-champions/CChampion-10.jpg";
import communityChempionImg11 from "../../assets/images/community-champions/CChampion-11.jpg";
import communityChempionImg12 from "../../assets/images/community-champions/CChampion-12.jpg";
import communityChempionImg13 from "../../assets/images/community-champions/CChampion-13.jpg";
import communityChempionImg14 from "../../assets/images/community-champions/CChampion-14.jpg";
import communityChempionImg15 from "../../assets/images/community-champions/CChampion-15.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function CommunitiesChampions() {
  const [activeSlide, setActiveSlide] = useState(0);
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    if (
      !bannerRef.current ||
      !titleRef.current ||
      !subtitleRef.current ||
      !statsRef.current
    )
      return;

    const ctx = gsap.context(() => {
      /* -------- BANNER -------- */
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      /* -------- TITLE -------- */
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      /* -------- SUBTITLE LINES -------- */
      const subtitleChildren = Array.from(subtitleRef.current.children || []);

      gsap.fromTo(
        subtitleChildren,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.4,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      /* -------- STATS -------- */
      gsap.fromTo(
        statsRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.7)",
        },
      );

      /* -------- CARDS (SCROLL) -------- */
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      /* 🔥 VERY IMPORTANT */
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  const campaigns = [
    {
      icon: Gift,
      title: "315 EASTER EGG Campaign",
      description:
        "We raised 500+ Easter Eggs support of Easter Eggs for Zoe's Place and Coventry and Warwickshire University Hospital.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
    },
    {
      icon: Heart,
      title: "SEND YOUR LOVE Campaign",
      description:
        "Donated essential food and items for vulnerable families through our local food bank. In partnership with Coventry City Council.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      icon: Bike,
      title: "BIKEATHON Project",
      description:
        "Raised £300+ for speed of sight charity, as well as worked with NHS to provide free diabetes health checks.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: TrendingUp,
      title: "CYCLE RECYCLER Competition",
      description:
        "Advocating green modes of transport and sustainability, we launched a competition for individuals to win 2 recycled bikes.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
  ];

  const stats = [
    { number: "500+", label: "Easter Eggs Donated", icon: Gift },
    { number: "£300+", label: "Food Bank Value", icon: Heart },
    { number: "£300", label: "Raised for Charity", icon: Award },
    { number: "500+", label: "Competition Entries", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Communities Champions</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Communities-Champions"
        />
        <meta
          name="description"
          content="Discover how SmartLearner supports local heroes and drives positive change through our Communities Champions initiative. Empowering individuals and making a difference together."
        />
      </Helmet>

      {/* Hero Banner Section */}
      <div
        ref={bannerRef}
        className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 overflow-hidden"
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <HandHeart className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              COMMUNITY CHAMPIONS
            </h1>

            <div ref={subtitleRef} className="space-y-3">
              <p className="text-xl sm:text-2xl text-white/90 font-light italic">
                "The local school for local people"
              </p>
              <div className="flex items-center justify-center gap-2 text-lg sm:text-xl text-white/95">
                <Award className="w-6 h-6" />
                <p>
                  Winners of Intelligent Instructors Awards 2023 & 2024
                  'Community Champion Of The Year'
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supporting Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              SUPPORTING OUR CITY AND COMMUNITY
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {campaigns.map((campaign, index) => {
            const Icon = campaign.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${campaign.bgColor} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
              >
                <div
                  className={`${campaign.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className="w-8 h-8 text-gray-700" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {campaign.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>

        {/* Detailed Campaign Sections */}
        <div className="space-y-12">
          {/* Easter Egg Campaign */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 sm:p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Gift className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  315 EASTER EGG CAMPAIGN
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                One of our most recognizable campaigns is the 315 EasterEgg
                project, launched in spring 2022. Partnering with Zoe's Place
                Baby Hospice and University Hospital Coventry & Warwickshire's
                children's ward, our mission was to bring joy and Easter eggs to
                the families, children, and staff of both establishments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our goal was to raise 315 Easter eggs, but we surpassed this by
                collecting over 500 eggs from instructors, learners,
                individuals, and donors in the Coventry community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our success attracted local MP Taiwo's attention, and the
                surplus donations allowed us to extend our reach to various
                charities and homes across the West Midlands. We donated Easter
                eggs to care homes in Coventry, Holbrook's Community Centre, and
                care homes in Nuneaton, spreading the Easter spirit far and
                wide.
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold mt-6">
                <ChevronRight className="w-5 h-5" />
                <span>500+ Easter Eggs Donated</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {/* Send Your Love Campaign */}
          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 sm:p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Heart className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  SEND YOUR LOVE: CHRISTMAS FOOD BANK
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                For years consecutively we collaborated with Coventry City
                Council and our local food bank to raise and donate necessary
                food and items to vulnerable families. Last year in 2023, we
                were able to raise a total of £300+ worth of donations for the
                local community, breaking our previous year's record.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through this, we were ecstatic to know that we were more than
                capable in supporting and assisting as many families as we can
                during the winter seasons. We could not have achieved this
                without the sincere and kind support of our office staff,
                instructors and the local individuals of our community.
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold mt-6">
                <ChevronRight className="w-5 h-5" />
                <span>£300+ Worth of Donations</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {/* Bikeathon */}
          <div
            ref={(el) => (cardsRef.current[6] = el)}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 sm:p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Bike className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  BIKEATHON £300 FOR SPEED OF SIGHT
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                At the annual Intelligent Instructor Conference and Expo, we
                partnered with the NHS to offer free health checks, highlighting
                high blood pressure and diabetes awareness.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Smartlearner also organized a Bikeathon, raising £1 per minute
                for the Speed of Sight charity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Instructors participated enthusiastically, and we raised £300 to
                support inclusive driving events for people of all abilities.
                The charity empowers disabled individuals to engage in unique
                activities and experiences.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold mt-6">
                <ChevronRight className="w-5 h-5" />
                <span>£300 Raised for Charity</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {/* Cycle Recycler */}
          <div
            ref={(el) => (cardsRef.current[7] = el)}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 sm:p-8">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  CYCLE RECYCLER BIKE COMPETITION
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                In summer 2022, SmartLearner Driving School teamed up with The
                Cycle Recycle to promote reusing materials and refurbishing old
                bicycles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In summer 2022, SmartLearner Driving School teamed up with the
                Cycle Recycle to promote reusing materials and refurbishing old
                bicycles. Our campaign aimed to encourage our learners and
                community to adopt sustainable transport, in hand supporting
                Coventry City Council's new bike lanes in parts of Coventry. We
                held a summer-long competition attracting over 500 entries, with
                support from various businesses. Two lucky winners were selected
                through an automated raffle. Below are photos of the winners and
                one of the supporting business owners!
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our campaign aimed to encourage our learners and community to
                adopt sustainable transport. We held a summer-long competition,
                attracting over 500 entries, with support from various
                businesses. Two lucky winners were selected through an automated
                raffle. Below are photos of the winners and one of the
                supporting business owners!
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold mt-6">
                <ChevronRight className="w-5 h-5" />
                <span>500+ Competition Entries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.cCImagesSec}>
        <div className={styles.cCImagesdiv}>
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
              <img src={communityChempionImg1} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg2} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg3} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg4} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg5} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg6} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg7} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg8} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={communityChempionImg9} alt="communityChempion-Images" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={communityChempionImg10}
                alt="communityChempion-Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={communityChempionImg11}
                alt="communityChempion-Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={communityChempionImg12}
                alt="communityChempion-Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={communityChempionImg13}
                alt="communityChempion-Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={communityChempionImg14}
                alt="communityChempion-Images"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={communityChempionImg15}
                alt="communityChempion-Images"
              />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>
        <div id={styles.schoolLocal}>
          <p>"The local School for local people"</p>
        </div>
      </section>
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Making a Difference Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in our mission to support and empower our local community
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              Community Champions 2023 & 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
