import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  BookOpen,
  TrafficCone,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { FaCheckCircle } from "react-icons/fa";

import listImg from "../../../assets/images/handleiding-300x300.png";
import boxJunction from "../../../assets/images/boxJunction.jpg";
import cycleLane from "../../../assets/images/cycle-lanes.jpg";
import levelCrossing from "../../../assets/images/levelCrossing.jpg";
import Pedestrian from "../../../assets/images/padestrienCrossing.jpg";
import bannerImg from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function RulesOfRoad() {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 80, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

  const splitText = (text) =>
    text.split("").map((char, i) => <span key={i}>{char}</span>);

  return (
    <main className="w-full overflow-hidden font-sans ">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] sm:h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-4xl text-white">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight"
            >
              {splitText("Topic: Rules of The Road")}
            </h1>

            <p className="mt-6 text-slate-200 text-base sm:text-lg">
              Understanding the rules of the road is essential before getting
              behind the wheel.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT ARE RULES ================= */}
      <section className="bg-white">
        <section className="py-20 bg-slate-50 fade-up ">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-5 flex items-center gap-3">
                <BookOpen className="text-pink-600" />
                What are{" "}
                <span className="text-pink-600">Rules Of The Road?</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                The 10th topic from the multiple-choice section of the theory
                test is rules of the road. As you’d probably expect from the
                name, this is an important topic. In fact, it probably
                encompasses most of the knowledge that you will need when you
                finally get behind the wheel, including speed limits, designated
                lanes, positioning on the road and, much more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl flex justify-center">
              <img
                src={listImg}
                alt="rules list"
                className="max-w-xs w-full object-contain"
              />
            </div>
          </div>
        </section>
        {/* ================= GENERAL RULES ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4">
              General Rules Of The Road
            </h2>
            <p className="text-center text-slate-600 mb-10">
              Here are some basic rules you should be following when driving on
              a public road.
            </p>

            <ul className="bg-slate-50 p-8 rounded-3xl shadow-xl space-y-4">
              {[
                "You may drive over a footpath to get to a property.",
                "No-one has priority at unmarked crossroads.",
                "If you are approaching a junction and you realise you are in the wrong lane, you cannot change lanes and must carry on.",
                "No stopping at any time in clearways.",
                "No stopping in urban clearways except to pick up and put down passengers.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* ================= KEY TERMS ================= */}
        {[
          {
            title: "Box Junction",
            img: boxJunction,
            points: [
              "Only enter when your exit road is clear.",
              "If turning right, you may wait in the box if oncoming traffic is stopping you from turning right.",
            ],
          },
          {
            title: "Cycle Lane",
            img: cycleLane,
            points: [
              "You are not allowed to drive in a cycle lane marked with a solid white line.",
              "A broken white line indicates that you may drive or park in the cycle lane if unavoidable.",
            ],
          },
          {
            title: "Level Crossings",
            img: levelCrossing,
            points: [
              "If the train has passed but the lights keep flashing, you must continue waiting.",
              "If the lights come on and the bell rings when you are already on the crossing, keep going until clear.",
            ],
          },
          {
            title: "Pedestrian Crossings",
            img: Pedestrian,
            points: [
              "Zebra crossing: although the actual rule is that you are only obliged to stop once a pedestrian is on the crossing, if you see someone waiting to cross, you should stop and allow them to do so.",
              "Toucan crossing: be aware that cyclists as well as pedestrians may cross.",
              "Pelican crossing: give way to pedestrians still on the crossing when the amber light is flashing.",
            ],
          },
          {
            title: "Other",
            img: cycleLane,
            points: [
              "If the obstruction is on your side of the road, you must give way to oncoming traffic.",
              "You must stop when signalled to do so by the police, a traffic officer or at a school crossing patrol nearby.",
              "Always stop at red traffic lights.",
              "If damage or injury is caused in an accident, you must stop immediately.",
            ],
          },
        ].map((section, idx) => (
          <section key={idx} className="py-20 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
              <img
                src={section.img}
                alt={section.title}
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="text-green-600 mt-1" />
                      <p>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      
        <section className="w-full py-16 bg-gradient-to-b from-slate-50 to-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Important <span className="text-blue-600">Manoeuvres</span>
          </h2>

          {/* Cards Wrapper */}
          <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Turning */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col">
              <img
                src={cycleLane}
                alt="cycleLane"
                className="w-full h-40 object-contain mb-4"
              />

              <h4 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                Turning
              </h4>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <p className="text-slate-600">
                    If turning left from a main road into a minor road, keep
                    well to the left.
                  </p>
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <p className="text-slate-600">
                    If both you and the oncoming driver are turning right, keep
                    the other vehicle on your right and turn behind it.
                  </p>
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <p className="text-slate-600">
                    If turning right on a dual carriageway with a very narrow
                    central reservation, make sure the road is clear in both
                    directions before turning.
                  </p>
                </li>
              </ul>
            </div>

            {/* Parking */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col">
              <img
                src={cycleLane}
                alt="cycleLane"
                className="w-full h-40 object-contain mb-4"
              />

              <h4 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                <span className="text-orange-600">Parking</span>
              </h4>

              <ul className="space-y-3">
                {[
                  "Near a school entrance or exit.",
                  "At a bus stop or nearby.",
                  "Within 10m of a junction.",
                  "Near the brow of a hill.",
                  "On the right hand side of a road at night.",
                  "In disabled bays without a permit.",
                ].map((text, index) => (
                  <li key={index} className="flex gap-3">
                    <FaCheckCircle className="text-orange-500 mt-1" />
                    <p className="text-slate-600">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reversing */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col">
              <img
                src={cycleLane}
                alt="cycleLane"
                className="w-full h-40 object-contain mb-4"
              />

              <h4 className="text-xl font-semibold text-slate-800 mb-4 text-center">
                Reversing
              </h4>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p className="text-slate-600">
                    You may remove your seatbelt but don’t reverse any longer
                    than necessary, and always check it’s safe to do so.
                  </p>
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p className="text-slate-600">
                    Never reverse from a side road directly into a main road.
                  </p>
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p className="text-slate-600">
                    If you are reversing into a side road, be aware that the
                    greatest danger is when the front of your vehicle swings
                    out.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ================= QUIZ ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
              Test Yourself
            </h2>

            <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Start Quiz</h3>
              <p className="mb-6">
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Rules-of-the-Road">
                <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-full text-white font-semibold shadow-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
