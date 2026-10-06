import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import backgroundImage from "../../../../assets/images/routeplanningbanner.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Map,
  Route,
  CheckCircle2,
  Lightbulb,
  Target,
  ArrowRight,
  PlayCircle,
  Trash2,
  FilePenLine,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3ModuleEight() {
  const heroTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      },
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
        },
      );
    });
  }, []);

  //   //////////////////////////////////////////////////////////////////////
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  //   //////////////////////////////////////////////////////////////
  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveText = () => {
    if (text.trim()) {
      // If editing an existing item, replace it
      if (isEditing) {
        const updatedTexts = [...savedTexts];
        updatedTexts[editIndex] = text;
        setSavedTexts(updatedTexts);
        setIsEditing(false); // Reset editing flag
        setEditIndex(null);
      } else {
        setSavedTexts([...savedTexts, text]);
      }
      localStorage.setItem(
        `notepadTexts1Part3page8_${userId}`,
        JSON.stringify([...savedTexts, text]),
      );

      setText("");
    }
  };

  const editText = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setText(savedTexts[index]); // Set the text to be edited
    if (textareaRef.current) {
      textareaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText = (index) => {
    const updatedTexts = savedTexts.filter((_, i) => i !== index);
    setSavedTexts(updatedTexts);
    localStorage.setItem(
      `notepadTexts1Part3page8_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page8_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  //   ///////////////////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroTextRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Route <span className="text-orange-400">Planning</span>
              </h1>
              <p className="text-slate-200 text-lg">
                Learn how to plan effective driving lesson routes that maximise
                learning, confidence, and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 space-y-8 fade-up">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <p className="text-slate-700 text-lg leading-relaxed">
              Effective route planning is a crucial part of delivering
              successful driving lessons. When you first start out on the roads
              with a student, you’ll likely have learners from various areas,
              and it’s unlikely you’ll know every road, shortcut, or hazard in
              their local neighbourhood. That’s where proper route planning
              becomes essential.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <p className="text-slate-700 text-lg leading-relaxed">
              Before the first lesson, you should have already spoken to your
              learner to discuss their previous driving experience, confidence
              level, and personal goals. Now, it's time to plan the best route
              to maximise their learning experience. Your route will change
              based on their skill level, experience, and the specific goals of
              the lesson.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            What type of roads do you think you would be looking for a beginner?
          </h2>
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What kind of driving environment do you think would best support
              someone learning the basics?
            </label>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 border border-dashed rounded-xl bg-gray-50">
                  <p
                    className="text-gray-500 text-sm"
                    style={{ marginBottom: "0px" }}
                  >
                    No saved thoughts yet ✍️
                  </p>
                </div>
              ) : (
                <ul
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  style={{ paddingLeft: "0px" }}
                >
                  {savedTexts.map((savedText, index) => (
                    <li
                      key={index}
                      className="group relative p-4 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
                    >
                      <p
                        className="text-gray-700 text-sm pr-10"
                        style={{ marginBottom: "0px" }}
                      >
                        {savedText}
                      </p>
                      <div className="absolute top-4 right-4 flex gap-3 opacity-70 group-hover:opacity-100">
                        <FilePenLine
                          onClick={() => editText(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText(index)}
                          className="cursor-pointer text-red-500"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* ================= MAIN CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          <div className="flex items-center gap-4 fade-up">
            <Route className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Planning for{" "}
              <span className="text-orange-500">Driving Lessons</span>
            </h2>
          </div>

          {/* ================= BEGINNER ================= */}
          <div className="fade-up bg-slate-50 p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-orange-500" />
              Planning for a Beginner with No Experience
            </h3>

            <p className="text-slate-700 mb-4">
              If your learner is a complete beginner, choosing the right area is
              vital. The location should be:
            </p>

            <ul
              style={{ paddingLeft: "0px" }}
              className="space-y-3 text-slate-700"
            >
              <li className="flex gap-2">
                <CheckCircle2 className="text-green-500" />
                No more than 10 minutes from their address (since you’ll need to
                drive them there)
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-green-500" />
                Quiet with minimal traffic and hazards (avoid busy junctions,
                schools, or heavily parked streets)
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-green-500" />
                Safe for practicing basic car control, such as moving off,
                stopping, and turning
              </li>
            </ul>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-1">Getting Started</h4>
                <strong>The Drive to the Training Area</strong>
                <p className="text-slate-700">
                  On the way to the practice location, use this time to start
                  questioning your learner about their existing knowledge. Ask
                  them about the cockpit drill, controls, and basic road
                  rules—this keeps the lesson productive from the start.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-1">
                  Finding a Suitable Area
                </h4>
                <p className="text-slate-700">
                  Use Google Maps to scout out quiet residential streets or
                  industrial estates with minimal traffic. If possible, visit
                  the area yourself beforehand to assess its suitability.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-1">Lesson Focus</h4>
                <p className="text-slate-700">
                  The first lesson should include fundamental skills such as
                  moving off safely, stopping, steering control, and making
                  simple left and right turns.
                  <br /> <br />
                  At the end of the lesson, review their progress and set goals
                  for the next session. This allows you to plan the next route
                  in advance, ensuring the lesson remains structured and
                  progressive.
                </p>
              </div>
            </div>
          </div>

          {/* ================= EXPERIENCED ================= */}

          {/* ================= EXPERIENCED LEARNER ================= */}
          <section className="fade-up bg-slate-50 p-10 rounded-3xl shadow-xl space-y-8">
            {/* Heading */}
            <div className="flex items-center gap-4">
              <Lightbulb className="w-9 h-9 text-orange-500" />
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Planning for a Learner with Experience
              </h2>
            </div>

            <p className="text-slate-700 text-lg">
              If the student has previous experience, your route planning will
              depend on:
            </p>

            {/* Checklist */}
            <ul
              style={{ paddingLeft: "0px" }}
              className="space-y-3 text-slate-700"
            >
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 mt-1" />
                How much driving they have done
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 mt-1" />
                What their main challenges are
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 mt-1" />
                Whether they have taken (or failed) a test before
              </li>
            </ul>

            {/* Sub Sections */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              {/* Getting Started */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Route className="text-orange-500 w-5 h-5" />
                  Getting Started
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Begin by driving them to a moderately quiet area and allow
                  them to demonstrate their current ability. Use open questions
                  to assess their knowledge and confidence as they drive.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Once you’re comfortable with their competency, you can
                  gradually introduce more complex roads while ensuring they
                  remain safe and in control.
                </p>
              </div>

              {/* Matching Goals */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Target className="text-orange-500 w-5 h-5" />
                  Matching the Route to Their Goals
                </h3>

                <p className="text-slate-700 text-sm">
                  Each lesson should be structured around the learner’s specific
                  goals:
                </p>

                <ul
                  style={{ paddingLeft: "0px" }}
                  className="space-y-2 text-slate-700 text-sm"
                >
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-green-500 mt-1" />
                    <span>
                      <strong>Roundabouts:</strong> Start with small
                      mini-roundabouts and progress to multi-lane roundabouts as
                      they gain confidence.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-green-500 mt-1" />
                    <span>
                      <strong>Pedestrian Crossings:</strong> Choose a route with
                      a variety of pedestrian crossings, such as zebra
                      crossings, pelican crossings, and puffin crossings,
                      ensuring they get well-rounded exposure
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-green-500 mt-1" />
                    <span>
                      <strong>Dual Carriageways:</strong> If appropriate,
                      include a section with dual carriageways to practice lane
                      discipline and merging.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Adapting Route */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Map className="text-orange-500 w-5 h-5" />
                  Adapting Your Route in Real Time
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed">
                  No lesson will go exactly as planned. Traffic conditions,
                  roadworks, or unexpected challenges may require you to adjust
                  your route on the fly. This is why having a good knowledge of
                  the area is essential.
                </p>

                <ul
                  style={{ paddingLeft: "0px" }}
                  className="space-y-2 text-slate-700 text-sm"
                >
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-green-500 mt-1" />
                    Always have backup routes in case your planned route is
                    unsuitable on the day.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-green-500 mt-1" />
                    Be aware of common hazards in the area at different times of
                    the day (e.g., school traffic, rush hour congestion).
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="text-green-500 mt-1" />
                    If a student struggles with a perticular skill, adapt the
                    route to reinforce that skill before moving on.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ================= FINAL NOTE ================= */}
          <div className="fade-up mt-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-10 rounded-3xl shadow-2xl">
            <p className="text-lg leading-relaxed">
              A well-planned route ensures that every lesson is structured,
              efficient, and maximizes the student’s learning experience.
              Whether you’re working with a beginner or an experienced learner,
              tailoring the route to their needs and skill level is key. Stay
              flexible, observe their progress, and always plan ahead to make
              the most of your lesson time.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NEXT PAGE ================= */}
      <section className="py-20 bg-slate-900 text-center text-white">
        <Link to="/route-direction">
          <button className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 font-semibold shadow-xl transition inline-flex items-center gap-2">
            Next Page <ArrowRight />
          </button>
        </Link>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
            <PlayCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
            <h3 className="text-lg font-semibold mb-2">15 Questions</h3>
            <p className="text-slate-700 mb-6">
              Test your understanding of Route Planning before moving on.
            </p>
            <Link to="/takequizCatName/route-planning">
              <button className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
