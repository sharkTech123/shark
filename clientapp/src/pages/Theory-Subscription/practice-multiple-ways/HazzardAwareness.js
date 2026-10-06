import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  AlertTriangle,
  School,
  Truck,
  Shuffle,
  Brain,
  Bed,
  Eye,
  Clock,
  Beer,
  Gauge,
  Smartphone,
  Bike,
  PersonStanding,
} from "lucide-react";
import { FaCarCrash } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hazardAwareness from "../../../assets/images/Hazard-awarenessExclamantion.png";
import schoolBusStop from "../../../assets/images/school-bus-300x300.jpg";
import redYellowLorry from "../../../assets/images/red-yellow-lorry-sign-300x183.jpg";
import deviation from "../../../assets/images/deviation.jpg";
import alertnessBanner from "../../../assets/alertbg.png";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);

export default function HazardAwareness() {
  useEffect(() => {
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
    <main className="bg-slate-50 overflow-hidden">
      {/* ================= HERO ================= */}
      {/* ================= FIXED BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${alertnessBanner})`,
          }}
        />

        {/* Dark Overlay (controls opacity) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Hazard <span className="text-red-500">Awareness</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Learn to identify hazards early and react safely on the road.
              </p>

              <Link to="/Contact-Us">
                <button
                  className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg"
                  style={{ border: "none" }}>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS HAZARD ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={hazardAwareness}
            className="rounded-3xl shadow-2xl hover:scale-105 transition"
            alt="Hazard"
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-10 h-10" />
              What is Hazard Awareness?
            </h2>
            <p className="text-lg text-slate-700">
              Hazards are anything that may force you to slow down, change
              direction, or stop. Identifying hazards early allows you to react
              safely and reduce risk.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ROAD SIGNS ================= */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Important Road Signs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: schoolBusStop,
                icon: <School />,
                text: "This sign indicates a school bus.",
              },
              {
                img: redYellowLorry,
                icon: <Truck />,
                text: "Slow or stationary works vehicle. Overtake on the left.",
              },
              {
                img: deviation,
                icon: <Shuffle />,
                text: "Sharp deviation ahead in the indicated direction.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-3 transition">
                <img src={item.img} className="rounded-xl mb-4" alt="sign" />
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY TERMS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Key Terms to Learn
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Brain />, title: "Anticipation" },
              { icon: <Bed />, title: "Tiredness" },
              { icon: <Eye />, title: "Attention" },
              { icon: <Clock />, title: "Reaction Time" },
              { icon: <Beer />, title: "Drink / Drug Driving" },
              { icon: <FaCarCrash />, title: "Hazard Awareness" },
              { icon: <Gauge />, title: "Speeding" },
              { icon: <Smartphone />, title: "Distractions" },
              { icon: <Bike />, title: "Cyclists" },
              { icon: <PersonStanding />, title: "Pedestrians" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-red-200 transition">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALCOHOL VIDEO ================= */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <iframe
            className="w-full h-[300px] sm:h-[400px] rounded-3xl shadow-2xl"
            src="https://www.youtube.com/embed/OxOiZ7kXh2k"
            title="Alcohol Effects"
            allowFullScreen
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Effects of Alcohol on Driving
            </h2>
            <ul className="space-y-3 text-lg">
              <li>• Less control</li>
              <li>• False confidence</li>
              <li>• Poor judgement</li>
              <li>• Reduced coordination</li>
              <li>• Increased insurance cost</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-3xl font-extrabold mb-6">
          Test <span className="text-red-600">Yourself</span>
        </h2>
        <Link to="/takequizCatName/Hazard-Awareness">
          <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-xl hover:scale-105 transition">
            Start Quiz
          </button>
        </Link>
      </section>
    </main>
  );
}
