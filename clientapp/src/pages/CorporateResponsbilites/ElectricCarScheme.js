import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Leaf,
  Zap,
  Battery,
  TrendingDown,
  DollarSign,
  Clock,
  MapPin,
  Shield,
  Gauge,
  Fuel,
  TreePine,
  Building2,
  ChevronRight,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import electricCar from "../../assets/images/electric-Car.png";
import electricCarScheme from "../../assets/images/electric carScheme.png";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ElectricCarScheme() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const benefitsRef = useRef(null);
  const comparisonRef = useRef(null);
  const floatingRef = useRef(null);

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
  useEffect(() => {
    const ctx = gsap.context(() => {
      // BENEFITS
      gsap.from(benefitsRef.current.querySelectorAll(".benefit-card"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "all",
      });

      // COMPARISON
      gsap.from(comparisonRef.current.querySelectorAll(".comparison-box"), {
        scrollTrigger: {
          trigger: comparisonRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        x: (index) => (index % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Hero animation
    const heroTimeline = gsap.fromTo(
      heroRef.current.querySelectorAll(
        ".hero-title, .hero-subtitle, .hero-content",
      ),
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
    gsap.to(".floating-icon", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    // Benefits cards staggered reveal

    // Projects cards hover effect
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Electric Car Scheme | SmartLearner Driving School</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/Electric-Car-Scheme"
        />
        <meta
          name="description"
          content="Explore SmartLearner's Electric Car Scheme and drive toward a greener future. Benefit from cost-effective, eco-friendly vehicles while reducing your carbon footprint."
        />
      </Helmet>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-10 floating-icon opacity-10">
          <Leaf className="w-32 h-32 text-emerald-400" />
        </div>
        <div className="absolute top-40 right-20 floating-icon opacity-10">
          <Zap className="w-40 h-40 text-cyan-400" />
        </div>
        <div className="absolute bottom-20 left-1/4 floating-icon opacity-10">
          <Battery className="w-36 h-36 text-emerald-400" />
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold tracking-wide">
              Leading the Green Revolution
            </span>
          </div>

          <h1 className="hero-title text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
            <span className="inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                ELECTRIC CAR
              </span>
            </span>
            <br />
            <span className="text-white inline-block">SCHEME</span>
          </h1>

          <div className="hero-subtitle max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              SmartLearner Driving School is committed to reducing our carbon
              footprint. Throughout 2024 and beyond, we continuously strive to
              become an even more sustainable and eco-friendly company.
            </p>
          </div>

          <div className="hero-content flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="text-lg font-semibold">
                Zero Emissions Driving
              </span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <Award className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-semibold">
                First in West Midlands
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-2 border-cyan-500/30 rounded-3xl p-12 overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="text-cyan-400">SKY BLUE CITY</span>
                <br />
                <span className="text-emerald-400">TURNS GREEN</span>
              </h2>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm mt-4">
                <Building2 className="w-5 h-5 text-cyan-400" />
                <p className="text-lg font-semibold mb-0">
                  In Partnership with Coventry City Council
                </p>
              </div>

              {/* Images Container */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                <div className="w-full md:w-1/2 max-w-md">
                  <img
                    src={electricCar}
                    alt="Electric Car"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="w-full md:w-1/2 max-w-md">
                  <img
                    src={electricCarScheme}
                    alt="Electric Car Scheme"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm">
                  Our Mission
                </span>
              </div>

              <h3 className="text-4xl font-bold leading-tight">
                Driving Towards a{" "}
                <span className="text-emerald-400">Greener Future</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-lg">
                <p>
                  As a driving school, we're committed to reducing our CO2
                  emissions. SmartLearner is partnering with Coventry City
                  Council to offer electric cars for our instructors and
                  students.
                </p>
                <p>
                  This initiative sets a green example for our community and
                  promotes eco-conscious driving choices. With this change, we
                  aim to raise awareness about CO2 emissions and their impact on
                  air quality.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-900/50 border-2 border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <Award className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Leading Innovation</h4>
                    <p className="text-slate-400">West Midlands Pioneer</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Thanks to Coventry City Council's support, we're leading the
                  way towards a healthier environment.{" "}
                  <span className="text-emerald-400 font-semibold">
                    SmartLearner is proud to be the first driving school in the
                    West Midlands with an electric car.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card group relative bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/30 rounded-3xl p-8 hover:border-emerald-500/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="relative">
                <Leaf className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-5xl font-black text-emerald-400 mb-2">
                  0%
                </h3>
                <p className="text-xl font-semibold text-slate-300">
                  CO2 Emissions
                </p>
              </div>
            </div>

            <div className="stat-card group relative bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
              <div className="relative">
                <DollarSign className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-5xl font-black text-cyan-400 mb-2">49%</h3>
                <p className="text-xl font-semibold text-slate-300">
                  Lower Costs
                </p>
              </div>
            </div>

            <div className="stat-card group relative bg-gradient-to-br from-violet-500/10 to-transparent border-2 border-violet-500/30 rounded-3xl p-8 hover:border-violet-500/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all"></div>
              <div className="relative">
                <TrendingDown className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-5xl font-black text-violet-400 mb-2">4p</h3>
                <p className="text-xl font-semibold text-slate-300">
                  Per Mile Cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electric Engines Section */}
      <section ref={benefitsRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              ELECTRIC{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                ENGINES
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="benefit-card relative bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/30 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <Zap className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-black text-emerald-400">
                    BENEFITS
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Electrically powered - electricity can be renewable
                      resource, gasoline cannot
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Electric engines do not release CO2 emissions
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Annual tax and maintenance costs (including MOTs and
                      servicing) for electric vehicles are 49% lower than for
                      petrol models
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disadvantages */}
            <div className="benefit-card relative bg-gradient-to-br from-rose-500/10 to-transparent border-2 border-rose-500/30 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-rose-500/20 rounded-xl">
                    <Clock className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="text-3xl font-black text-rose-400">
                    DISADVANTAGES
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-rose-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Recharging the battery takes time
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-rose-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      It can sometimes be difficult to find a charging station
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-rose-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Insurance costs are on average 25% higher for electric
                      vehicles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combustion Engines Section */}
      <section ref={comparisonRef} className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              COMBUSTION{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                ENGINES
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="comparison-box relative bg-gradient-to-br from-orange-500/10 to-transparent border-2 border-orange-500/30 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Gauge className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-black text-orange-400">
                    BENEFITS
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Gas powered cars have more power
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Have better agility in terms of acceleration and speed
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Fuel className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Can be refilled quickly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disadvantages */}
            <div className="comparison-box relative bg-gradient-to-br from-red-500/10 to-transparent border-2 border-red-500/30 rounded-3xl p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <TrendingDown className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-3xl font-black text-red-400">
                    DISADVANTAGES
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Gas powered vehicles emit harmful emissions causing
                      pollution to our atmosphere
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      The cost of fuel is expensive. For an electric car to
                      travel 100 miles would cost around 4p per mile in
                      comparison to gas powered car costing 9p per mile - fuel
                      costing £5 more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-4">
              OUR OTHER{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover more ways we're making a positive impact on the
              environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              style={{ textDecoration: "none" }}
              to="/Going-Green-Project"
              className="project-card group relative bg-gradient-to-br from-emerald-500/10 to-transparent border-2 border-emerald-500/30 rounded-3xl overflow-hidden hover:border-emerald-500/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-emerald-500/20 rounded-2xl">
                    <TreePine className="w-12 h-12 text-emerald-400" />
                  </div>
                  <ChevronRight className="w-8 h-8 text-emerald-400 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-3xl font-black mb-3 text-emerald-400">
                  Going Green Project
                </h3>
                <p className="text-slate-300 text-lg">
                  Explore our comprehensive environmental initiatives and
                  sustainability efforts
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to="/Our-Office-Green-Efforts"
              className="project-card group relative bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 rounded-3xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-cyan-500/20 rounded-2xl">
                    <Building2 className="w-12 h-12 text-cyan-400" />
                  </div>
                  <ChevronRight className="w-8 h-8 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-3xl font-black mb-3 text-cyan-400">
                  Our Office Efforts
                </h3>
                <p className="text-slate-300 text-lg">
                  Learn about the eco-friendly practices we implement in our
                  daily operations
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 border-2 border-emerald-500/30 rounded-3xl p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]"></div>
            <div className="relative">
              <Sparkles className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-5xl font-black mb-6">
                Join Us in Making a{" "}
                <span className="text-emerald-400">Difference</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Together, we can create a cleaner, greener future for the next
                generation. Be part of the electric revolution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-400 font-semibold">
                    Zero Emissions
                  </span>
                </div>
                <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                  <span className="text-cyan-400 font-semibold">
                    Lower Costs
                  </span>
                </div>
                <div className="px-6 py-3 bg-violet-500/20 border border-violet-500/30 rounded-full">
                  <span className="text-violet-400 font-semibold">
                    Sustainable Future
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==============================================
// import React, { useEffect, useRef } from "react";
// import { Helmet } from "react-helmet-async";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Leaf,
//   Zap,
//   Battery,
//   TrendingDown,
//   DollarSign,
//   Clock,
//   MapPin,
//   Shield,
//   Gauge,
//   Fuel,
//   TreePine,
//   Building2,
//   ChevronRight,
//   Sparkles,
//   Heart,
//   Award,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// export default function ElectricCarScheme() {
//   const heroRef = useRef(null);
//   const statsRef = useRef(null);
//   const benefitsRef = useRef(null);
//   const comparisonRef = useRef(null);

//   useEffect(() => {
//     // Hero animation
//     const heroTimeline = gsap.set(".hero-subtitle, .hero-content", {
//       yPercent: 0,
//     });

//     gsap
//       .timeline()
//       .from(".hero-title", {
//         yPercent: 100,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out",
//         clearProps: "transform",
//       })
//       .from(
//         ".hero-subtitle",
//         {
//           yPercent: 50,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.6",
//       )
//       .from(
//         ".hero-content",
//         {
//           yPercent: 30,
//           opacity: 0,
//           duration: 1,
//           ease: "power2.out",
//         },
//         "-=0.5",
//       );

//     // Floating animation for decorative elements
//     gsap.to(".floating-icon", {
//       y: -20,
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: 0.3,
//     });

//     // Stats counter animation
//     gsap.from(".stat-card", {
//       scrollTrigger: {
//         trigger: statsRef.current,
//         start: "top 80%",
//       },
//       y: 60,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "back.out(1.4)",
//     });

//     // Benefits cards staggered reveal
//     gsap.from(".benefit-card", {
//       scrollTrigger: {
//         trigger: benefitsRef.current,
//         start: "top 75%",
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.12,
//       ease: "power2.out",
//     });

//     // Comparison section animation
//     gsap.from(".comparison-box", {
//       scrollTrigger: {
//         trigger: comparisonRef.current,
//         start: "top 70%",
//       },
//       x: (index) => (index % 2 === 0 ? -100 : 100),
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });

//     // Projects cards hover effect
//     const projectCards = document.querySelectorAll(".project-card");
//     projectCards.forEach((card) => {
//       card.addEventListener("mouseenter", () => {
//         gsap.to(card, {
//           scale: 1.05,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//       card.addEventListener("mouseleave", () => {
//         gsap.to(card, {
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Electric Car Scheme | SmartLearner Driving School</title>
//         <link
//           rel="canonical"
//           href="https://smartlearner.com/Electric-Car-Scheme"
//         />
//         <meta
//           name="description"
//           content="Explore SmartLearner's Electric Car Scheme and drive toward a greener future. Benefit from cost-effective, eco-friendly vehicles while reducing your carbon footprint."
//         />
//       </Helmet>

//       {/* Floating Background Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-60 left-10 floating-icon opacity-4">
//           <Leaf className="floating-icon w-32 h-32 text-emerald-600" />
//         </div>
//         <div className="absolute top-40 right-20 floating-icon opacity-4">
//           <Zap className="floating-icon w-40 h-40 text-blue-600" />
//         </div>
//         <div className="absolute bottom-20 left-1/4 floating-icon opacity-4">
//           <Battery className="floating-icon w-36 h-36 text-orange-600" />
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50"
//       >
//         {/* Subtle Pattern Background */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-emerald-100 border-2 border-emerald-300 rounded-full shadow-sm">
//             <Sparkles className="w-5 h-5 text-emerald-600" />
//             <span className="text-emerald-700 font-bold tracking-wide">
//               Leading the Green Revolution
//             </span>
//           </div>

//           <h1 className="hero-title text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
//             <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
//               ELECTRIC CAR
//             </span>
//             <br />
//             <span className="text-gray-900">SCHEME</span>
//           </h1>

//           <div
//             className="hero-subtitle max-w-3xl mx-auto mb-12"
//             style={{ opacity: "1" }}
//           >
//             <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
//               SmartLearner Driving School is committed to reducing our carbon
//               footprint. Throughout 2024 and beyond, we continuously strive to
//               become an even more sustainable and eco-friendly company.
//             </p>
//           </div>

//           <div
//             className="hero-content flex flex-wrap justify-center gap-6"
//             style={{ opacity: "1" }}
//           >
//             <div className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
//               <Heart className="w-6 h-6 text-rose-500" />
//               <span className="text-lg font-bold text-gray-800">
//                 Zero Emissions Driving
//               </span>
//             </div>
//             <div
//               className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//               style={{ opacity: "1" }}
//             >
//               <Award className="w-6 h-6 text-amber-500" />
//               <span className="text-lg font-bold text-gray-800">
//                 First in West Midlands
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partnership Banner */}
//       <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative bg-white border-4 border-blue-200 rounded-3xl p-12 overflow-hidden shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>

//             <div className="relative z-10 text-center">
//               <h2 className="text-5xl md:text-6xl font-black mb-4">
//                 <span className="text-blue-600">SKY BLUE CITY</span>
//                 <br />
//                 <span className="text-emerald-600">TURNS GREEN</span>
//               </h2>
//               <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 border-2 border-blue-300 rounded-full mt-4">
//                 <Building2 className="w-5 h-5 text-blue-600" />
//                 <p className="text-lg font-bold text-gray-800 mb-0">
//                   In Partnership with Coventry City Council
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border-2 border-emerald-300 rounded-full">
//                 <Leaf className="w-4 h-4 text-emerald-600" />
//                 <span className="text-emerald-700 font-bold text-sm">
//                   Our Mission
//                 </span>
//               </div>

//               <h3 className="text-4xl font-black leading-tight text-gray-900">
//                 Driving Towards a{" "}
//                 <span className="text-emerald-600">Greener Future</span>
//               </h3>

//               <div className="space-y-4 text-gray-700 text-lg font-medium">
//                 <p>
//                   As a driving school, we're committed to reducing our CO2
//                   emissions. SmartLearner is partnering with Coventry City
//                   Council to offer electric cars for our instructors and
//                   students.
//                 </p>
//                 <p>
//                   This initiative sets a green example for our community and
//                   promotes eco-conscious driving choices. With this change, we
//                   aim to raise awareness about CO2 emissions and their impact on
//                   air quality.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-3xl blur-2xl opacity-30"></div>
//               <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 border-4 border-emerald-200 rounded-3xl p-8 shadow-xl">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-emerald-200 rounded-xl">
//                     <Award className="w-8 h-8 text-emerald-700" />
//                   </div>
//                   <div>
//                     <h4 className="text-2xl font-black text-gray-900">
//                       Leading Innovation
//                     </h4>
//                     <p className="text-gray-600 font-semibold">
//                       West Midlands Pioneer
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                   Thanks to Coventry City Council's support, we're leading the
//                   way towards a healthier environment.{" "}
//                   <span className="text-emerald-700 font-bold">
//                     SmartLearner is proud to be the first driving school in the
//                     West Midlands with an electric car.
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section ref={statsRef} className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="stat-card group relative bg-white border-4 border-emerald-200 rounded-3xl p-8 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl group-hover:bg-emerald-200 transition-all"></div>
//               <div className="relative">
//                 <Leaf className="w-12 h-12 text-emerald-600 mb-4" />
//                 <h3 className="text-6xl font-black text-emerald-600 mb-2">
//                   0%
//                 </h3>
//                 <p className="text-xl font-bold text-gray-700">CO2 Emissions</p>
//               </div>
//             </div>

//             <div className="stat-card group relative bg-white border-4 border-blue-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl group-hover:bg-blue-200 transition-all"></div>
//               <div className="relative">
//                 <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
//                 <h3 className="text-6xl font-black text-blue-600 mb-2">49%</h3>
//                 <p className="text-xl font-bold text-gray-700">Lower Costs</p>
//               </div>
//             </div>

//             <div className="stat-card group relative bg-white border-4 border-purple-200 rounded-3xl p-8 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl group-hover:bg-purple-200 transition-all"></div>
//               <div className="relative">
//                 <TrendingDown className="w-12 h-12 text-purple-600 mb-4" />
//                 <h3 className="text-6xl font-black text-purple-600 mb-2">4p</h3>
//                 <p className="text-xl font-bold text-gray-700">Per Mile Cost</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Electric Engines Section */}
//       <section ref={benefitsRef} className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">
//               ELECTRIC{" "}
//               <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
//                 ENGINES
//               </span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Benefits */}
//             <div className="benefit-card relative bg-gradient-to-br from-emerald-50 to-white border-4 border-emerald-300 rounded-3xl p-10 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-3 bg-emerald-200 rounded-xl">
//                     <Zap className="w-8 h-8 text-emerald-700" />
//                   </div>
//                   <h3 className="text-3xl font-black text-emerald-700">
//                     BENEFITS
//                   </h3>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-emerald-200 rounded-xl flex items-center justify-center">
//                       <Leaf className="w-5 h-5 text-emerald-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Electrically powered - electricity can be renewable
//                       resource, gasoline cannot
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-emerald-200 rounded-xl flex items-center justify-center">
//                       <TrendingDown className="w-5 h-5 text-emerald-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Electric engines do not release CO2 emissions
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-emerald-200 rounded-xl flex items-center justify-center">
//                       <DollarSign className="w-5 h-5 text-emerald-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Annual tax and maintenance costs (including MOTs and
//                       servicing) for electric vehicles are 49% lower than for
//                       petrol models
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Disadvantages */}
//             <div className="benefit-card relative bg-gradient-to-br from-rose-50 to-white border-4 border-rose-300 rounded-3xl p-10 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-3 bg-rose-200 rounded-xl">
//                     <Clock className="w-8 h-8 text-rose-700" />
//                   </div>
//                   <h3 className="text-3xl font-black text-rose-700">
//                     DISADVANTAGES
//                   </h3>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-rose-200 rounded-xl flex items-center justify-center">
//                       <Clock className="w-5 h-5 text-rose-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Recharging the battery takes time
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-rose-200 rounded-xl flex items-center justify-center">
//                       <MapPin className="w-5 h-5 text-rose-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       It can sometimes be difficult to find a charging station
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-rose-200 rounded-xl flex items-center justify-center">
//                       <Shield className="w-5 h-5 text-rose-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Insurance costs are on average 25% higher for electric
//                       vehicles
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Combustion Engines Section */}
//       <section ref={comparisonRef} className="py-24 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">
//               COMBUSTION{" "}
//               <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//                 ENGINES
//               </span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Benefits */}
//             <div className="comparison-box relative bg-gradient-to-br from-orange-50 to-white border-4 border-orange-300 rounded-3xl p-10 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-3 bg-orange-200 rounded-xl">
//                     <Gauge className="w-8 h-8 text-orange-700" />
//                   </div>
//                   <h3 className="text-3xl font-black text-orange-700">
//                     BENEFITS
//                   </h3>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-orange-200 rounded-xl flex items-center justify-center">
//                       <Gauge className="w-5 h-5 text-orange-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Gas powered cars have more power
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-orange-200 rounded-xl flex items-center justify-center">
//                       <Zap className="w-5 h-5 text-orange-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Have better agility in terms of acceleration and speed
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-orange-200 rounded-xl flex items-center justify-center">
//                       <Fuel className="w-5 h-5 text-orange-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Can be refilled quickly
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Disadvantages */}
//             <div className="comparison-box relative bg-gradient-to-br from-red-50 to-white border-4 border-red-300 rounded-3xl p-10 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-3 bg-red-200 rounded-xl">
//                     <TrendingDown className="w-8 h-8 text-red-700" />
//                   </div>
//                   <h3 className="text-3xl font-black text-red-700">
//                     DISADVANTAGES
//                   </h3>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-red-200 rounded-xl flex items-center justify-center">
//                       <Leaf className="w-5 h-5 text-red-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       Gas powered vehicles emit harmful emissions causing
//                       pollution to our atmosphere
//                     </p>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-red-200 rounded-xl flex items-center justify-center">
//                       <DollarSign className="w-5 h-5 text-red-700" />
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                       The cost of fuel is expensive. For an electric car to
//                       travel 100 miles would cost around 4p per mile in
//                       comparison to gas powered car costing 9p per mile - fuel
//                       costing £5 more
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Projects Section */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">
//               OUR OTHER{" "}
//               <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
//                 PROJECTS
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto font-semibold">
//               Discover more ways we're making a positive impact on the
//               environment
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/Going-Green-Project"
//               className="project-card group relative bg-gradient-to-br from-emerald-50 to-white border-4 border-emerald-300 rounded-3xl overflow-hidden hover:border-emerald-500 hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/0 to-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <div className="relative p-10">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="p-4 bg-emerald-200 rounded-2xl">
//                     <TreePine className="w-12 h-12 text-emerald-700" />
//                   </div>
//                   <ChevronRight className="w-8 h-8 text-emerald-600 group-hover:translate-x-2 transition-transform" />
//                 </div>
//                 <h3 className="text-3xl font-black mb-3 text-emerald-700">
//                   Going Green Project
//                 </h3>
//                 <p className="text-gray-700 text-lg font-medium">
//                   Explore our comprehensive environmental initiatives and
//                   sustainability efforts
//                 </p>
//               </div>
//             </Link>

//             <Link
//               style={{ textDecoration: "none" }}
//               to="/Our-Office-Green-Efforts"
//               className="project-card group relative bg-gradient-to-br from-blue-50 to-white border-4 border-blue-300 rounded-3xl overflow-hidden hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               <div className="relative p-10">
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="p-4 bg-blue-200 rounded-2xl">
//                     <Building2 className="w-12 h-12 text-blue-700" />
//                   </div>
//                   <ChevronRight className="w-8 h-8 text-blue-600 group-hover:translate-x-2 transition-transform" />
//                 </div>
//                 <h3 className="text-3xl font-black mb-3 text-blue-700">
//                   Our Office Efforts
//                 </h3>
//                 <p className="text-gray-700 text-lg font-medium">
//                   Learn about the eco-friendly practices we implement in our
//                   daily operations
//                 </p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-blue-50 to-emerald-50">
//         <div className="max-w-5xl mx-auto">
//           <div className="relative bg-white border-4 border-emerald-300 rounded-3xl p-16 text-center overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
//             <div className="relative">
//               <Sparkles className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
//               <h2 className="text-5xl font-black mb-6 text-gray-900">
//                 Join Us in Making a{" "}
//                 <span className="text-emerald-600">Difference</span>
//               </h2>
//               <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
//                 Together, we can create a cleaner, greener future for the next
//                 generation. Be part of the electric revolution.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <div className="px-6 py-3 bg-emerald-100 border-2 border-emerald-300 rounded-full">
//                   <span className="text-emerald-700 font-bold">
//                     Zero Emissions
//                   </span>
//                 </div>
//                 <div className="px-6 py-3 bg-blue-100 border-2 border-blue-300 rounded-full">
//                   <span className="text-blue-700 font-bold">Lower Costs</span>
//                 </div>
//                 <div className="px-6 py-3 bg-purple-100 border-2 border-purple-300 rounded-full">
//                   <span className="text-purple-700 font-bold">
//                     Sustainable Future
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
