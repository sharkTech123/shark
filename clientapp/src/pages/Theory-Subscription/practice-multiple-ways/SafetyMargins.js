import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ShieldCheck,
  Gauge,
  AlertTriangle,
  Snowflake,
  Sun,
  Car,
  Eye,
  CornerDownRight,
  CloudFog,
  Wind,
  CloudRain,
} from "lucide-react";

import greenRuler from "../../../assets/images/green-ruler.png";
import motorwayCartflow from "../../../assets/images/motorway-contraflow.png";
import absImg from "../../../assets/images/absImg.png";
import bannerImg from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function SafetyMargins() {
  const textRef = useRef(null);

  useEffect(() => {
    // HERO LETTER ANIMATION
    const text = "Topic: Safety Margins";
    textRef.current.innerHTML = text
      .split("")
      .map((l) => `<span class="inline-block">${l}</span>`)
      .join("");

    gsap.fromTo(
      textRef.current.querySelectorAll("span"),
      { y: 80, opacity: 0, scale: 0.6 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
      }
    );

    // FADE + DEPTH SCROLL
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, z: -200 },
        {
          opacity: 1,
          y: 0,
          z: 0,
          duration: 1.2,
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
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-left text-white px-6 max-w-[1440px]">
          <h1
            ref={textRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight preserve-3d"
          />

          <p className="mt-6 text-lg sm:text-xl text-slate-200 fade-up">
            Learn how to maintain safe distances, control your vehicle, and
            drive confidently in all conditions.
          </p>

          <Link to="/Contact-Us">
            <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* ================= SAFETY MARGINS ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="perspective">
              <img
                src={greenRuler}
                alt="Safety Margins"
                className="rounded-3xl shadow-2xl preserve-3d hover:scale-105 transition"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="w-12 h-12 text-red-600" />
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  What are Safety Margins?
                </h2>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                The 4th topic from the multiple-choice section of the theory
                test is safety margins. This topic focuses on how road and
                weather conditions affect stopping distances and the actions
                required to keep a safe distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STOPPING DISTANCE ================= */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white fade-up">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <Gauge className="w-14 h-14 text-red-600 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Stopping Distances
          </h2>
          <p>
            The following provided stopping times have been calculated correctly
            and are imperative to understand whilst driving especially in harsh
            weather conditions. (hover your cursor over each box for the answer)
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              src="https://www.youtube.com/embed/1afkGSJN9LA"
              title="Stopping Distances"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT TERMS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 fade-up">
            Important Terms
          </h2>
          <p>
            If you’re driving at night or in bad weather, you’ll need to make
            sure you’re using your car lights properly. Take care when following
            large vehicles too, you’ll need to fall back to ensure they’re able
            to see you in their mirrors properly.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Aquaplaning",
                icon: <CloudRain />,
                video: "https://www.youtube.com/embed/iRY8Xsohoh8",
                text: " When roads are wet, your car can aquaplane. This means the tyres have lifted off the surface of the road and are skating on the surface water. If your steering suddenly becomes noticeably light, while driving on a wet road, this is a sign that you are aquaplaning. To correct it ease off the accelerator and allow the tyres to regain grip.",
              },
              {
                title: "Contraflow Systems",
                icon: <AlertTriangle />,
                img: motorwayCartflow,
                text: "A contraflow system is to prevent traffic in peak travel times, to allow everyone to move on, rather than stand still traffic. When entering a contraflow, you must: reduce speed in good time, choose a suitable lane in good time, and keep a safe distance from the vehicle in front of you.",
              },
              {
                title: "Anti-lock Brakes (ABS)",
                icon: <ShieldCheck />,
                img: absImg,
                text: "Anti-lock brakes prevent wheels from locking which means tyres are less likely to skid. Vehicles are still able to be steered whilst under braking when anti-lock brakes come into effect. When a road surface is wet or loose, ie. Gravel, the ABS may not work as well. In event of an emergency, apply brakes as soon as possible and firmly to ensure a quick stop.",
              },
            ].map((item, i) => (
              <div key={i} className="perspective fade-up">
                <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl preserve-3d hover:scale-105 transition">
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4 translate-z-20">
                    {item.icon}
                  </div>

                  {/* IMAGE */}
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-xl mb-4 shadow translate-z-30"
                    />
                  )}

                  {/* VIDEO (Aquaplaning Only) */}
                  {item.video && (
                    <div className="mb-4 rounded-xl overflow-hidden shadow-lg translate-z-30">
                      <iframe
                        className="w-full max-w-[350px] h-[260px]"
                        src={item.video}
                        title="Aquaplaning Animation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <h3 className="text-xl font-bold mb-2 translate-z-20">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 translate-z-10">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}
      {/* ================= DRIVING IN DIFFERENT CONDITIONS ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 fade-up">
            Driving in{" "}
            <span className="text-red-600">Different Conditions</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Snowflake />,
                title: "Ice & Freezing Conditions",
                text: "Braking distances on ice and in freezing conditions can be ten times the normal distance.",
              },
              {
                icon: <CloudRain />,
                title: "Wet Roads",
                text: "Overall stopping distances will be longer when driving in wet conditions.",
              },
              {
                icon: <Wind />,
                title: "Windy Conditions",
                text: "In windy conditions take extra care when passing cyclists and motorcyclists. Always allow them plenty of room.",
              },
              {
                icon: <AlertTriangle />,
                title: "Flooded Roads",
                text: "After driving through floods or a ford the first thing you should do is test your brakes. Driving slowly and applying the brakes gently will also help to dry them.",
              },
              {
                icon: <Sun />,
                title: "Hot Weather",
                text: "In hot weather the road surface can become soft. This can affect your tyre grip and braking.",
              },
              {
                icon: <Wind />,
                title: "Strong Side Winds",
                text: "Side winds are most dangerous on an open stretch of road as there are no buildings to block them.",
              },
              {
                icon: <Car />,
                title: "Motorway Spray",
                text: "When driving on a motorway with surface spray use dipped headlights to remain visible to others.",
              },
              {
                icon: <Snowflake />,
                title: "Snow & Ice Driving",
                text: "When driving on snow or ice use the highest gear possible. This helps avoid wheel spin and allows better grip.",
              },
              {
                icon: <CornerDownRight />,
                title: "Sharp Bends in Poor Conditions",
                text: "When approaching a sharp bend in poor conditions such as ice, slow down and avoid sudden steering movements.",
              },
              {
                icon: <Eye />,
                title: "Vehicle Visibility",
                text: "If your number plate, windows, lights, or mirrors are covered in snow or ice, you must clear them before starting a journey.",
              },
              {
                icon: <Gauge />,
                title: "Black Ice Warning",
                text: "You can tell you are driving on ice or black ice because your tyres make little noise and the steering becomes lighter.",
              },
              {
                icon: <CloudFog />,
                title: "Foggy Conditions",
                text: "When driving in fog use dipped headlights, allow more time for your journey, and slow down.",
              },
            ].map((item, i) => (
              <div key={i} className="perspective fade-up">
                <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl preserve-3d hover:-translate-y-3 hover:shadow-red-200 transition">
                  {/* ICON */}
                  <div className="w-14 h-14 mb-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center translate-z-30">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-lg font-bold mb-2 translate-z-20">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed translate-z-10">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-24 text-center bg-white fade-up">
        <h2 className="text-3xl font-extrabold mb-6">
          Test <span className="text-red-600">Yourself</span>
        </h2>

        <Link to="/takequizCatName/Safety-Margins">
          <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-xl hover:scale-110 transition">
            Start Quiz
          </button>
        </Link>
      </section>
    </main>
  );
}
