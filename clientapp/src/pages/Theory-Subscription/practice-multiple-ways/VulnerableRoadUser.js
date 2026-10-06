import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import {
  FaWalking,
  FaBlind,
  FaBaby,
  FaBiking,
  FaMotorcycle,
  FaHorse,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import vulnerableroad from "../../../assets/images/Vulnerable-road-users.png";
import roadSafty from "../../../assets/images/roadUserVulnerableuser.png";
import dogGuid from "../../../assets/images/guide-dog.jpg";
import horseriding from "../../../assets/images/horse-rider.jpg";
import motorbikecycle from "../../../assets/images/motorbikes-cyclist.jpg";
import schoolChilderns from "../../../assets/images/childern-School.jpg";
import disabilityScooters from "../../../assets/images/disability-scooter.jpeg";
import alertnessBanner from "../../../assets/alertbg.png";

export default function VulnerableRoadUser() {
  const textRef = useRef(null);

  const splitText = () => {
    const text = "Topic: Vulnerable Road Users";
    return text.split("").map((char, i) => <span key={i}>{char}</span>);
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { y: 80, opacity: 0, scale: 0.6 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <main className="bg-slate-50 overflow-hidden font-sans">
      {/* ================= HERO ================= */}
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
              <h1
                ref={textRef}
                className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                {splitText()}
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Learn to identify hazards early and react safely on the road.
              </p>

              <Link to="/Contact-Us">
                <button
                  className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg"
                  style={{ border: "none" }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 sm:py-24">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl
                  grid gap-12 lg:grid-cols-2 items-center"
        >
          <img
            src={vulnerableroad}
            alt="Vulnerable users"
            className="w-full rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Who are Vulnerable Road Users?
            </h2>
            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed">
              The 6th topic from the theory test is vulnerable road users. So
              far, the topics we’ve covered mostly look at what you need to do
              to keep yourself safe when behind the wheel. This time, we’re
              focusing on the people who are most vulnerable on the road, from
              cyclists to horse riders, and how you need to act in order to
              ensure their safety.
              <br />
              <em>
                Road users may be defined as vulnerable with regard to their
                degree of protection in traffic such as pedestrians, cyclists,
                non-motorised road users and motorcyclists, or their degree of
                mobility, such as the young, the elderly, and people with
                disabilities or special needs.
              </em>{" "}
            </p>
          </div>
        </div>
      </section>

      {/* ================= ICON GRID ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
            Who is classed as a Vulnerable Road Users?
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[FaWalking, FaBlind, FaBaby, FaBiking, FaMotorcycle, FaHorse].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-5 text-center hover:-translate-y-2 transition"
                >
                  <Icon className="mx-auto text-3xl text-red-600 mb-3" />
                  <p className="text-sm font-semibold">
                    {
                      [
                        "Pedestrian",
                        "Elderly",
                        "Children",
                        "Cyclists",
                        "Motorbikes",
                        "Horses",
                      ][i]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="w-full bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Why are they classed as Vulnerable Road Users?
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Certain road users are more exposed to danger due to limited
              protection, reduced understanding, or slower reactions.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-blue-600 text-2xl">
                  <IoMdArrowDropright />
                </span>
                <h3 className="font-semibold text-lg text-slate-800">
                  Limited protection from traffic
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                They do not have any protection from others i.e. not in another
                vehicle with airbags and walls to take the impact.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-blue-600 text-2xl">
                  <IoMdArrowDropright />
                </span>
                <h3 className="font-semibold text-lg text-slate-800">
                  Capability to understand
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Young children are sometimes unable to understand the dangers of
                the road and how to keep themselves safe.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-blue-600 text-2xl">
                  <IoMdArrowDropright />
                </span>
                <h3 className="font-semibold text-lg text-slate-800">
                  Reduced Reactions
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                The elderly may have reduced vision, hearing or awareness to
                their surroundings. They are also likely to be slower when
                crossing the road, unable to run across like children can.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WARNING IMAGE ================= */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-extrabold mb-8">
          Learn the <span className="text-red-600">Warning Signs</span>
        </h2>
        <img
          src={roadSafty}
          alt="Warning Signs"
          className="mx-auto max-w-5xl w-full rounded-3xl shadow-2xl"
        />
      </section>

      {/* ================= DETAIL CARDS ================= */}

      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-16">
            How to Deal with Vulnerable Road Users
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Blind Pedestrians",
                img: dogGuid,
                text: "Give extra time and space when assisting blind pedestrians.",
              },
              {
                title: "Horse Riders",
                img: horseriding,
                text: "Pass slowly and leave enough room to avoid startling the horse.",
              },
              {
                title: "Cyclists & Motorbikes",
                img: motorbikecycle,
                text: "Never overtake at junctions. Expect sudden movements.",
              },
              {
                title: "Children & Schools",
                img: schoolChilderns,
                text: "Reduce speed and stay alert near schools.",
              },
              {
                title: "Disability Scooters",
                img: disabilityScooters,
                text: "Watch for slow-moving scooters with flashing yellow lights.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl overflow-hidden
                     hover:-translate-y-3 transition"
              >
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-extrabold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-600 to-red-700 text-white">
        <h2 className="text-3xl font-extrabold mb-6">Test Yourself</h2>
        <Link to="/takequizCatName/Vulnerable-Road-Users">
          <button className="px-10 py-4 bg-white text-red-600 rounded-full font-bold shadow-xl hover:scale-105 transition">
            Start Quiz
          </button>
        </Link>
      </section>
    </main>
  );
}
