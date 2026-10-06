import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import buildingImg from "../../assets/images/buildingImg.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import greenStarImg from "../../assets/images/greenStar.png";
import {
  Leaf,
  Recycle,
  Zap,
  Mail,
  BookOpen,
  Battery,
  Lightbulb,
  TrendingDown,
  Video,
  Power,
  FileText,
  Trees,
  Car,
  Sparkles,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function OurOfficeGreenEfforts() {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const presentEffortsRef = useRef([]);
  const continuousEffortsRef = useRef([]);
  const buildingRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current || !titleRef.current) return;

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
          delay: 0.3,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      /* -------- BUILDING IMAGE -------- */
      if (buildingRef.current) {
        gsap.fromTo(
          buildingRef.current,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buildingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      /* -------- CARDS -------- */
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      /* -------- PRESENT EFFORTS -------- */
      presentEffortsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { x: -50, opacity: 0 },
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

      /* -------- CONTINUOUS EFFORTS -------- */
      continuousEffortsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { x: 50, opacity: 0 },
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

      /* -------- FLOATING ELEMENTS -------- */
      gsap.to(".float-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      /* 🔥 REQUIRED */
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  const presentEfforts = [
    {
      icon: <FileText className="w-6 h-6" />,
      text: "Discarding paper diaries for an online paper service.",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      text: "Newsletters online sent by email, discarding paper post.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Reduced the size of our learner logs and all lesson material are now online.",
    },
    {
      icon: <Battery className="w-6 h-6" />,
      text: "We currently have 1 electric charging port that is ready to use. This shows that we are ready, set and raring to go with plans to implement MORE electric cars!",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "Implemented LED Lights which are energy efficient. An evaluated 99% to 100% are UV emissions free.",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      text: "We have estimated that Smart Learner have approximately decreased 15% of our carbon emissions through these environmentally friendly practices.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      text: "We provide online Zoom sessions for theory reducing learner's travel emissions.",
    },
  ];

  const continuousEfforts = [
    {
      icon: <Power className="w-6 h-6" />,
      text: "Conserve energy within the office, by turning off lights, switches and electrical appliances when the office day is done.",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      text: "We will further our actions to keeping our office paperless as much as we can. Only printing when absolutely necessary.",
    },
    {
      icon: <Trees className="w-6 h-6" />,
      text: "Planting trees within our local area.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      text: "We are also planning to reduce our CO2e output by moving to electric cars with no emissions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Office Green Efforts</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Our-Office-Green-Efforts"
        />
        <meta
          name="description"
          content="Learn how SmartLearner is committed to sustainability through our green office initiatives. From reducing waste to saving energy, see how we're making a positive environmental impact."
        />
      </Helmet>

      {/* Hero Banner Section */}
      <div
        ref={bannerRef}
        className="relative min-h-[500px] bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="float-element absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div
            className="float-element absolute top-40 right-20 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="float-element absolute bottom-20 left-1/3 w-36 h-36 bg-teal-300/20 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div ref={titleRef} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Leaf className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">
                Sustainability Initiative
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              OUR OFFICE GREEN EFFORTS
            </h1>

            <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed max-w-3xl mx-auto">
              Here at Smart Learner driving school we are committed to reducing
              our carbon footprint! We plan to take steps towards becoming a
              more sustainable and eco-friendly company.
            </p>

            <div className="mt-10 animate-bounce">
              <ChevronDown className="w-8 h-8 text-white mx-auto" />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#fafffe"
            />
          </svg>
        </div>
      </div>

      {/* Office Support Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              HOW IS OUR OFFICE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                SUPPORTING THIS CHANGE?
              </span>
            </h2>
          </div>

          {/* Building Image with Content Cards */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div ref={buildingRef} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
                <img
                  src={buildingImg}
                  alt="Smart Learner Office Building"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-xl">
                  <Sparkles className="w-12 h-12" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                "The Smartlearner Office is dedicated to sustainability, implementing eco-friendly practices both on the road and in our office.",
                "We are committed to reducing our carbon footprint through various initiatives aligned with our projects. Below are examples of our current practices and future plans.",
                "Smartlearner's instructors aren't the only ones going green.",
                "Our office is committed to decreasing their carbon emissions and becoming more sustainable.",
              ].map((text, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Present Efforts Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-full mb-4">
                <Zap className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-semibold">
                  Current Initiatives
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                OUR PRESENT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  EFFORTS
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {presentEfforts.map((effort, index) => (
                <div
                  key={index}
                  ref={(el) => (presentEffortsRef.current[index] = el)}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {effort.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 pt-2">
                      {effort.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Efforts Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full mb-4">
                <Recycle className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-semibold">
                  Ongoing Commitment
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                OUR CONTINUOUS{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  EFFORTS
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {continuousEfforts.map((effort, index) => (
                <div
                  key={index}
                  ref={(el) => (continuousEffortsRef.current[index] = el)}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {effort.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 pt-2">
                      {effort.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">15%</div>
              <div className="text-emerald-100">Carbon Emissions Reduced</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-100">UV Emissions Free LEDs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">1+</div>
              <div className="text-emerald-100">Electric Charging Ports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
