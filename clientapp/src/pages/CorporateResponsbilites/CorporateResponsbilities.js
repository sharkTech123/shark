import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Leaf,
  Zap,
  Building2,
  Handshake,
  Globe,
  ArrowRight,
  Sparkles,
  TreePine,
  Car,
  Target,
  CheckCircle2,
  Heart,
  Shield,
  Sun,
} from "lucide-react";

// Import your images
import earthImg from "../../assets/images/earthImg.png";
import eclectricImg from "../../assets/images/electric wave.png";
import BuildingImg from "../../assets/images/buliding img.png";
import treeImg from "../../assets/images/tree img.png";
import handShake from "../../assets/images/hand shake.png";
import UKBranchMap from "../AddOns/UKBranchMap";

gsap.registerPlugin(ScrollTrigger);

export default function CorporateResponsibilities() {
  const heroRef = useRef(null);
  const planetRef = useRef(null);
  const cardsRef = useRef(null);
  const pledgesRef = useRef(null);
  const floatingIconsRef = useRef([]);

  useEffect(() => {
    // Hero Animation
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

    // Floating Icons Animation
    floatingIconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: -20,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Planet Section Animation
    ScrollTrigger.create({
      trigger: planetRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.from(planetRef.current.querySelector("img"), {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        });
        gsap.from(planetRef.current.querySelectorAll("p"), {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      },
    });

    // Cards Animation
    gsap.fromTo(
      cardsRef.current.querySelectorAll(".initiative-card"),
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          once: true,
        },
        clearProps: "opacity,transform",
      },
    );

    // Pledges Animation
    ScrollTrigger.create({
      trigger: pledgesRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.from(pledgesRef.current.querySelectorAll(".pledge-item"), {
          opacity: 0,
          x: -80,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToFloatingRefs = (el) => {
    if (el && !floatingIconsRef.current.includes(el)) {
      floatingIconsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Corporate Responsibilities | SmartLearner</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Corporate-Responsbilities"
        />
        <meta
          name="description"
          content="Discover how SmartLearner embraces corporate responsibility through sustainable practices, community engagement, and ethical business values. Learn more about our commitment to making a positive impact."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-1">
          <div className="absolute top-20 left-10" ref={addToFloatingRefs}>
            <Leaf className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-40 right-20" ref={addToFloatingRefs}>
            <Globe className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-32 left-1/4" ref={addToFloatingRefs}>
            <TreePine className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-20 right-1/3" ref={addToFloatingRefs}>
            <Sun className="w-14 h-14 text-white" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold">Our Commitment</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            CORPORATE SOCIAL
            <span className="block text-yellow-300 drop-shadow-lg">
              RESPONSIBILITY
            </span>
          </h1>

          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-normal leading-relaxed drop-shadow-md">
              Here at SmartLearner driving school it is our social
              responsibility to reducing our carbon footprint!
            </p>
            <p className="text-lg md:text-xl font-normal drop-shadow-md">
              Throughout 2024 and the future we plan to take steps towards
              becoming a sustainable and eco-friendly company.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse drop-shadow-lg" />
            <Heart className="w-6 h-6 text-red-300 animate-pulse drop-shadow-lg" />
            <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse drop-shadow-lg" />
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Planet Section */}
      <section ref={planetRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src={earthImg}
                  alt="Earth"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                OUR PLANET
                <span className="block text-emerald-600">
                  OUR RESPONSIBILITY
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl border-l-4 border-emerald-500">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 leading-relaxed">
                    Lockdown due to coronavirus (COVID-19) was a hard time for
                    the world, however, it has its benefits. One of the major
                    positive impacts COVID had was on our environment.
                  </p>
                </div>

                <div className="flex gap-4 p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-l-4 border-cyan-500">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 leading-relaxed">
                    There is no doubt that carbon emissions have sharply fallen
                    in the recent year and this has had an instant effect on our
                    planet.
                  </p>
                </div>

                <div className="flex gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 leading-relaxed">
                    Clear water in the Venice canals, blue skies over Delhi and
                    wild animals are roaming in locked-down cities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section style={{ maxWidth: "1640px", margin: "0rem auto" }}>
        <UKBranchMap />{" "}
      </section> */}
     
      <section
        ref={cardsRef}
        className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              SL SAVING THE PLANET
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click the{" "}
              <span className="font-bold text-emerald-600">icons</span> below to
              find out more about SmartLearner's current efforts to save our
              planet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Electric Car Scheme */}
            <Link
              style={{ textDecoration: "none" }}
              to="/Electric-Car-Scheme"
              className="initiative-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  Electric Car Scheme
                </h3>

                <p className="text-slate-600 mb-4">
                  Discover our transition to electric vehicles
                </p>

                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Going Green Project */}
            <Link
              to="/Going-Green-Project"
              style={{ textDecoration: "none" }}
              className="initiative-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TreePine className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">
                  Going Green Project
                </h3>

                <p className="text-slate-600 mb-4">
                  Our tree planting and sustainability initiatives
                </p>

                <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Office Efforts */}
            <Link
              style={{ textDecoration: "none" }}
              to="/Our-Office-Green-Efforts"
              className="initiative-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                  Our Office Efforts
                </h3>

                <p className="text-slate-600 mb-4">
                  How we're making our workplace sustainable
                </p>

                <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pledges Section */}
      <section
        ref={pledgesRef}
        className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mb-6 shadow-2xl">
              <Handshake className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              SMARTLEARNER <span className="text-yellow-400">PLEDGES</span>
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-6">
            {/* Pledge 1 */}
            <div className="pledge-item group">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Car className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold">
                        2025 - 2030
                      </span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      By 2025, 35% of our fleet will be fully electric, with
                      hopes of all vehicles being 100% electric by 2030
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pledge 2 */}
            <div className="pledge-item group">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                        2024 Goal
                      </span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      By the end of 2024, we will have planted over 200 trees in
                      Coventry's community and residential areas. Collaborating
                      and partnering up with multiple schools & colleges to
                      plant trees within the West Midlands and Warwickshire.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pledge 3 */}
            <div className="pledge-item group">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold">
                        Ongoing
                      </span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      Our office will engage focus on becoming more
                      environmentally friendly and focus on being sustainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h3 className="text-3xl font-bold mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-lg opacity-90">
            Together, we can create a sustainable future for generations to come
          </p>
        </div>
      </section>
    </div>
  );
}
