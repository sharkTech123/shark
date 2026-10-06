import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { useLayoutEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  AlertTriangle,
  Award,
  ChevronDown,
  Music,
  Wine,
  Pill,
  DollarSign,
  Smartphone,
  UserX,
  Car,
  Gauge,
  Moon,
  Bike,
  ExternalLink,
  Trophy,
  CheckCircle2,
  TrendingUp,
  Users,
  Heart,
  Target,
} from "lucide-react";
import Truths from "./Truths";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function TheHonestTruth() {
  const [animatedValue1, setAnimatedValue1] = useState(0);
  const [animatedValue2, setAnimatedValue2] = useState(0);
  const [animatedValue3, setAnimatedValue3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const interval = setInterval(() => {
              setAnimatedValue1((prev) => (prev >= 50 ? 50 : prev + 1));
              setAnimatedValue2((prev) => (prev >= 20 ? 20 : prev + 1));
              setAnimatedValue3((prev) => (prev >= 1500 ? 1500 : prev + 15));
            }, 20);

            setTimeout(() => clearInterval(interval), 2000);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",
      });

      // Cards animation
      gsap.from(cardsRef.current.filter(Boolean), {
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
      });

      // Floating icons
      gsap.to(".float-icon", {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.15,
      });
    });

    return () => ctx.revert(); // 👈 VERY IMPORTANT
  }, []);

  const truthIcons = [
    { icon: Music, label: "Music & Distractions" },
    { icon: Wine, label: "Alcohol Awareness" },
    { icon: Pill, label: "Drug Effects" },
    { icon: DollarSign, label: "Financial Impact" },
    { icon: Smartphone, label: "Mobile Safety" },
    { icon: UserX, label: "Passenger Control" },
    { icon: Car, label: "Vehicle Safety" },
    { icon: Gauge, label: "Speed Management" },
    { icon: Moon, label: "Night Driving" },
    { icon: Bike, label: "Vulnerable Users" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Honest Truth Partnership | SmartLearner</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/The-Honest-Truth"
        />
        <meta
          name="description"
          content="SmartLearner proudly partners with The Honest Truth to promote safer driving through real stories and impactful education. Together, we're shaping more responsible young drivers."
        />
      </Helmet>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-[70vh] bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <Shield className="w-20 h-20 text-cyan-300 mx-auto mb-6 float-icon" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              THE HONEST TRUTH
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>

            <div className="max-w-3xl mx-auto mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
                SmartLearner have teamed up with First car on their 'The Honest
                Truth' campaign to help deliver their road safety project across
                the West Midlands and Warwickshire!
              </p>
            </div>

            <div className="pt-8">
              <ChevronDown className="w-12 h-12 text-cyan-300 mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      {/* Campaign Video Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <AlertTriangle className="w-10 h-10" />
              What is The Honest Truth Campaign
            </h2>
          </div>

          <div className="p-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8PskOJsdGM8"
                title="The Honest Truth Campaign Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-r-xl p-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Each year, over 825,000 people in the UK pass their driving
                  test, gaining independence. However, young drivers (17-24) are
                  the highest risk group and road crashes are their leading
                  cause of death.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-r-xl p-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The Honest Truth is a national road safety campaign,
                  collaborating with emergency services, road safety
                  organisations, and driving instructors to deliver
                  straightforward road safety education.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <a
                  href="https://www.thehonesttruth.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  MORE INFO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Statistics
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4 mx-auto float-icon" />
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-center mb-4">
                {animatedValue1}%
              </div>
              <p className="text-white text-center text-lg font-semibold uppercase tracking-wide">
                New Drivers Pass First Time
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <AlertTriangle className="w-12 h-12 text-orange-400 mb-4 mx-auto float-icon" />
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 text-center mb-4">
                {animatedValue2}%
              </div>
              <p className="text-white text-center text-lg font-semibold uppercase tracking-wide">
                Crash Within 1 Year of Passing
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <Heart className="w-12 h-12 text-red-400 mb-4 mx-auto float-icon" />
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 text-center mb-4">
                {animatedValue3}+
              </div>
              <p className="text-white text-center text-lg font-semibold uppercase tracking-wide">
                Young Drivers Die Each Year
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Involvement Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              OUR INVOLVEMENT IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                'THE HONEST TRUTH'
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
              <Target className="w-10 h-10 text-indigo-600 mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                As the leading driving school in the West Midlands and
                Warwickshire, we are committed to setting an example in
                promoting road safety. We are excited to use driving lessons to
                educate young people about the risks they face after passing
                their tests. For the past 15 years, SmartLearner has promoted
                road safety through presentations at schools, colleges, and
                universities in Coventry, Warwick, Rugby, and surrounding areas.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <Users className="w-10 h-10 text-cyan-600 mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed">
                In 2019, we helped establish the road safety charity 'Because
                Your Life Counts' (BYLC), which delivers various road safety
                projects. BYLC has collaborated with West Midlands Police, West
                Midlands Fire Service, and the Warwickshire Police and Crime
                Commissioner.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Get Involved Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Trophy className="w-16 h-16 text-indigo-600 mx-auto mb-6 float-icon" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              GET INVOLVED!
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Get Started
                </h3>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To get involved in the 'Honest Truth' project, book a lesson
                with a Smart Learner Driving Instructor. As an award-winning
                driving school in the West Midlands and Warwickshire, we provide
                fully qualified, DVSA-approved local instructors.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ChevronDown className="w-12 h-12 text-indigo-600 animate-bounce" />
            </div>

            {/* Step 2 */}
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  BOOK YOUR LESSON
                </h3>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  At the start of your lessons, you'll receive a Truth Card
                  listing the 10 truths about safe driving. Your instructor will
                  sign off each topic as you complete it.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The 'Honest Truth' campaign aims to tell young drivers the
                  unvarnished truth about safe driving, hoping to change their
                  behavior and approach to driving.
                </p>

                {/* 10 Truths Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6">
                  {truthIcons.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-indigo-100"
                    >
                      <item.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-slate-700">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ChevronDown className="w-12 h-12 text-indigo-600 animate-bounce" />
            </div>

            {/* Step 3 */}
            <div
              ref={(el) => (cardsRef.current[4] = el)}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-yellow-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                  WIN A PRIZE!
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 leading-relaxed">
                    If your driving instructor has signed off all 10 topics on
                    your Truth Card, congratulations! You can now register to be
                    in with a chance of winning some great prizes. Simply click
                    the link below and you'll be taken to the registration page.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-700 leading-relaxed">
                    The prizes available for completing the course change
                    regularly - register to see what's currently on offer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <section className="py-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-3xl font-bold text-center text-slate-900 mb-12">
            The 10 <span className="text-indigo-600">Truths</span>
          </h4>

          <Truths />
        </div>
      </section>
      {/* Call to Action Footer */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of young drivers who are learning the honest truth
            about safe driving
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.thehonesttruth.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Shield className="w-5 h-5" />
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
