import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import handlngIconImg from "../../../assets/images/handling-icon-300x300.png";
import speedBreaker from "../../../assets/images/speedBreaker.jpeg";
import banner from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function VehicleHandling() {
  const textRef = useRef(null);

  const splitText = () => {
    const text = "Vehicle Handling";
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1
              ref={textRef}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              {splitText()}
            </h1>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/Theory-Portal">
                <button className="px-6 py-2 bg-white/90 hover:bg-white rounded-full font-semibold">
                  <MdKeyboardDoubleArrowLeft /> Back
                </button>
              </Link>

              <Link to="/takequizCatName/Vehicle-Handling">
                <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold">
                  Start Quiz
                </button>
              </Link>

              <Link to="/motorway-rules">
                <button className="px-6 py-2 bg-white/90 hover:bg-white rounded-full font-semibold">
                  Next <MdKeyboardDoubleArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS VEHICLE HANDLING ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              What is <span className="text-teal-600">Vehicle Handling?</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Vehicle handling refers to your ability to control your vehicle
              safely under different road, weather, and traffic conditions.
              Drivers must adapt their driving style quickly to maintain safety.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 flex justify-center">
            <img
              src={handlngIconImg}
              alt="Vehicle Handling"
              className="max-w-[280px]"
            />
          </div>
        </div>
      </section>

      {/* ================= LEARNING POINTS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center">
            You’ll Learn How To
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Keep full control of your vehicle",
              "Drive safely in bad weather",
              "Understand road surfaces",
              "Drive safely at night",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition"
              >
                <FaCheckCircle className="text-teal-500 text-3xl mx-auto mb-4" />
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTROLLING VEHICLE ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Controlling <span className="text-teal-600">Your Vehicle</span>
          </h2>

          <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 text-slate-700">
            <p>
              Keeping the clutch down or coasting reduces your control and
              increases danger — especially downhill where engine braking is
              required.
            </p>

            <p>
              Selecting a lower gear downhill allows the engine to slow the car,
              reducing brake wear and overheating.
            </p>

            <p>
              Uphill driving requires sufficient power. Always adapt speed and
              gear selection to road and weather conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
            Driving in Different <span className="text-teal-600">Weather</span>
          </h2>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/3GEgB-xui0M"
              title="Vehicle Handling Weather"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= TRAFFIC CALMING ================= */}
      <section className="py-12 px-6 lg:px-20 bg-slate-50">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-10">
          Traffic <span className="text-teal-600">Calming Measures</span>
        </h3>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src={speedBreaker}
              alt="Traffic Calming"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1 w-full lg:w-1/2 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
            <ul style={{paddingLeft:'0px'}} className="list-disc list-inside space-y-4 text-slate-700 text-base sm:text-lg">
              <li>
                Traffic calming tends to be found in residential areas and is
                used to make the roads safer for vulnerable users by reducing
                speed. One of the most common measures is road humps (sometimes
                called speed humps) but chicanes, speed tables, and road
                narrowing are also used.
              </li>
              <li>
                You will be warned of traffic calming measures by road signs,
                but other systems such as rumble devices (raised markings across
                the road) may be used to warn you of a hazard ahead, such as a
                roundabout, which requires you to reduce your speed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= START QUIZ ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Test <span className="text-teal-600">Your Knowledge</span>
          </h2>

          <p className="text-slate-600 mb-8">
            Start the quiz and see how well you understand vehicle handling.
          </p>

          <Link to="/takequizCatName/Vehicle-Handling">
            <button className="px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold shadow-xl">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
