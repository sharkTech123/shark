import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import backgroundImage from "../../../../assets/images/interventionbanner.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ShieldAlert,
  Hand,
  MessageCircle,
  Eye,
  Brain,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  FilePenLine,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
export default function Adi3Module15() {
  //   ///////////////////////////////////////////////////////////////////

  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

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
        `notepadTexts1Part3page15_${userId}`,
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
      `notepadTexts1Part3page15_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page15_${userId}`,
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ///////////////////////////////////////////////////////////////
  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const saveText2 = () => {
    if (text2.trim()) {
      // If editing an existing item, replace it
      if (isEditing2) {
        const updatedTexts2 = [...savedTexts2];
        updatedTexts2[editIndex2] = text2;
        setSavedTexts2(updatedTexts2);
        setIsEditing2(false); // Reset editing flag
        setEditIndex2(null);
      } else {
        setSavedTexts2([...savedTexts2, text2]);
      }
      localStorage.setItem(
        `notepadTexts2Part3page15_${userId}`,
        JSON.stringify([...savedTexts2, text2]),
      );

      setText2("");
    }
  };

  const editText2 = (index) => {
    setIsEditing2(true);
    setEditIndex2(index);
    setText2(savedTexts2[index]); // Set the text to be edited
    if (textareaRef2.current) {
      textareaRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText2 = (index) => {
    const updatedTexts2 = savedTexts2.filter((_, i) => i !== index);
    setSavedTexts2(updatedTexts2);
    localStorage.setItem(
      `notepadTexts2Part3page15_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page15_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   ////////////////////////////////////////////////////////////
  const [text3, setText3] = useState("");
  const [savedTexts3, setSavedTexts3] = useState([]); // Store multiple saved texts
  const [isEditing3, setIsEditing3] = useState(false); // Track if the user is editing
  const [editIndex3, setEditIndex3] = useState(null);
  const textareaRef3 = useRef(null);

  const handleChange3 = (e) => {
    setText3(e.target.value);
  };

  const saveText3 = () => {
    if (text3.trim()) {
      // If editing an existing item, replace it
      if (isEditing3) {
        const updatedTexts3 = [...savedTexts3];
        updatedTexts3[editIndex3] = text3;
        setSavedTexts3(updatedTexts3);
        setIsEditing3(false); // Reset editing flag
        setEditIndex3(null);
      } else {
        setSavedTexts3([...savedTexts3, text3]);
      }
      localStorage.setItem(
        `notepadTexts3Part3page15_${userId}`,
        JSON.stringify([...savedTexts3, text3]),
      );

      setText3("");
    }
  };

  const editText3 = (index) => {
    setIsEditing3(true);
    setEditIndex3(index);
    setText3(savedTexts3[index]); // Set the text to be edited
    if (textareaRef3.current) {
      textareaRef3.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText3 = (index) => {
    const updatedTexts3 = savedTexts3.filter((_, i) => i !== index);
    setSavedTexts3(updatedTexts3);
    localStorage.setItem(
      `notepadTexts3Part3page15_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page15_${userId}`,
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////////////////////////////////////////
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
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

  return (
    <main className="w-full overflow-hidden bg-slate-50 font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-cyan-900/70" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Intervention
              </h1>

              <p className="text-slate-200 text-lg">
                Knowing when to step in — and when to step back — is a core
                skill of an effective driving instructor.
              </p>

              <div className="flex gap-4 pt-4">
                <Link to="/Contact-Us">
                  <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-xl transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 fade-up max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <ShieldAlert className="w-10 h-10 text-indigo-600" />
              <h2 className="text-3xl font-extrabold">
                When and Why Should a Driving Instructor Intervene?
              </h2>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Intervention, whether verbal or physical, is a critical tool for
              driving instructors—but it must be applied with care, precision,
              and purpose. A well-timed, necessary intervention can protect both
              learner and public safety. However, overusing it, or stepping in
              unnecessarily, can undermine the learner’s confidence, hinder
              progress, and damage trust in the instructor-learner relationship.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BALANCE ================= */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="fade-up bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex gap-3 items-center">
              🚦 Importance of Balanced Intervention
            </h3>
            <p className="text-slate-700">
              How would you feel if your partner, son daughter or loved one had
              paid £35+ for an hour lesson with an instructor that didn’t let
              them drive? The instructor used the brakes for them, changed the
              gears for them and constantly had one hand on the wheel. When
              asked what they learned, they said nothing.
            </p>

            <p className="mt-4 text-indigo-600 font-semibold">
              This is what happens when you over intervene, controlling
              everything for the learner.
            </p>
          </div>

          <div className="fade-up bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex gap-3 items-center">
              ✋Physical vs Verbal Intervention: Both Are Powerful, But Use
              Wisely
            </h3>
            <p className="text-slate-700">
              Physical intervention—like using the dual controls or grabbing the
              steering wheel—should be a last resort and always followed by
              clear explanation. If you do need to step in physically, make your
              learner aware of it immediately or as soon as it’s safe to do so.
              Otherwise, it may confuse them or give a false impression of their
              ability.
            </p>

            <p className="mt-4 text-cyan-700 font-semibold">
              💡 Golden Rule: Intervene only when necessary, and always with
              clear instruction and reasoning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What do you think is meant by Risk Management and Responsibility?
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
      {/* ================= SCENARIOS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">
              🧠 Understanding Context: When is Intervention Justified?
            </h3>
            <p className="text-slate-700">
              <strong>Example: The "Empty Road" Left Turn</strong>
            </p>
            <p>
              You’ve agreed your learner is driving independently. They approach
              a left turn perfectly—except they forget to indicate.
            </p>
            <ul
              style={{ padding: "0px" }}
              className="list-disc ml-6 text-slate-700 mt-3"
            >
              <li>You verbally prompt: “What signal should you use?”</li>
              <li>You activate the indicator yourself.</li>
            </ul>
          </div>

          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <p className="text-slate-700">
              Once an answer has been submitted, reveal this text below
              <br />
              You could have allowed the action to play out and used it as a
              reflective moment afterward. The learner might even self-identify
              the missed signal. Or they may have consciously decided it wasn’t
              needed due to the absence of other road users. That opens up
              valuable discussion about judgment, risk, and situational
              awareness.
            </p>
          </div>

          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <p className="text-slate-700">
              <strong>Example 2: The Busy Junction Signal Miss</strong>
            </p>
            <p>
              Same scenario—independent driving, missed signal—but this time:
            </p>
            <ul
              style={{ padding: "0px" }}
              className="list-disc ml-6 text-slate-700 mt-3"
            >
              <li>Oncoming traffic</li>
              <li>Vehicles behind and at the junction</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Write down how you would manage responsibility and what potential
              risks there could be.
            </label>
            <textarea
              ref={textareaRef2}
              value={text2}
              onChange={handleChange2}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText2}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing2 ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts2.length === 0 ? (
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
                  {savedTexts2.map((savedText, index) => (
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
                          onClick={() => editText2(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText2(index)}
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

      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Write your thoughts about how you would physically or verbally
              intervene if needed on a lesson, how would you do it and what
              would you say to ensure it is communicated correctly and
              effectively?
            </label>
            <textarea
              ref={textareaRef3}
              value={text3}
              onChange={handleChange3}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText3}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing3 ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts3.length === 0 ? (
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
                  {savedTexts3.map((savedText, index) => (
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
                          onClick={() => editText3(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText3(index)}
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

      {/* ================= MASTERING ================= */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          {/* ================= MAIN HEADING ================= */}
          <div className="text-center fade-up">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Mastering <span className="text-cyan-400">Intervention</span> &
              Communication
            </h1>
            <p className="text-slate-300 max-w-3xl mx-auto">
              The art of knowing when to speak, when to act, and when to stay
              silent.
            </p>
          </div>

          {/* ================= CORE MESSAGE ================= */}
          <div className="fade-up bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-4">
            <p className="text-slate-200 leading-relaxed">
              Here, a{" "}
              <span className="text-cyan-300 font-semibold">missed signal</span>{" "}
              creates risk. Intervention—at least verbal—is warranted. If the
              learner fails to react,
              <span className="text-cyan-300 font-semibold">
                {" "}
                physical intervention
              </span>{" "}
              may be essential.
            </p>

            <p className="text-slate-200 leading-relaxed">
              This scenario justifies a deeper discussion
              <span className="text-cyan-300 font-semibold">
                {" "}
                post-manoeuvre
              </span>{" "}
              about{" "}
              <span className="text-cyan-300 font-semibold">
                communication
              </span>{" "}
              with other road users and why timing and visibility matter.
            </p>

            <p className="text-slate-300">
              Many instructors feel they must talk constantly to demonstrate
              value. But silence can be golden. Excessive instruction can lead
              to cognitive overload, especially in the intense environment of a
              moving vehicle.
            </p>

            <p className="text-slate-100 font-semibold">
              Sometimes, allowing space sends a powerful message:{" "}
              <span className="text-cyan-300">“You’ve got this.”</span>
            </p>
          </div>

          {/* ================= NON-VERBAL COMMUNICATION ================= */}
          <div className="fade-up bg-white rounded-3xl p-8 shadow-2xl text-slate-800">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">
              What Are You Nonverbally Communicating?
            </h2>

            <p className="leading-relaxed mb-4">
              Learners are highly tuned in to your cues. If you're hovering over
              the pedals or inching your hand toward the wheel,
              <span className="font-semibold text-indigo-600">
                {" "}
                they may assume you expect something to go wrong.
              </span>
              This creates tension and undermines their confidence,
              <span className="italic"> even if you never intervene.</span>
            </p>

            <p>
              Show calmness and trust through your posture and gestures.{" "}
              <span className="font-semibold text-indigo-600">
                Let the learner lead
              </span>
              , and step in only when risk demands it.
            </p>
          </div>

          {/* ================= BALANCE AS A TOOL ================= */}
          <div className="fade-up bg-slate-50 rounded-3xl p-8 shadow-xl text-slate-800">
            <h2 className="text-2xl font-bold mb-4">
              Getting the Balance Right: Intervention as a Learning Tool
            </h2>

            <p className="leading-relaxed">
              The goal is{" "}
              <span className="font-semibold text-indigo-600">
                minimal, meaningful intervention.
              </span>{" "}
              Every time you step in unnecessarily, you set your pupil
              back—sometimes literally. But{" "}
              <span className="font-semibold text-indigo-600">
                strategic, justified intervention
              </span>{" "}
              followed by reflective conversation enhances understanding and
              growth.
            </p>
          </div>

          {/* ================= KEY PRINCIPLES ================= */}
          <div className="fade-up bg-white rounded-3xl p-8 shadow-xl text-slate-800">
            <h2 className="text-2xl font-bold mb-4">Key Principles</h2>

            <ul style={{ padding: "0px" }} className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✔</span>
                Use verbal cues first.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✔</span>
                Explain physical interventions immediately after.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✔</span>
                Adjust based on your pupil’s capabilities.
              </li>
            </ul>
          </div>

          {/* ================= WHAT IF MINDSET ================= */}
          <div className="fade-up bg-indigo-50 rounded-3xl p-8 shadow-xl text-slate-800">
            <h2 className="text-2xl font-bold mb-4">
              Teach the “What If” Mindset
            </h2>

            <p className="mb-3">
              Help your learners think beyond the moment. What if the brakes
              failed? What if someone emerged suddenly from a hidden junction?
            </p>

            <p className="mb-3">
              Many young drivers operate with a sense of invincibility.
              Fostering realistic risk awareness—without fear-mongering—instils
              safer driving habits.
            </p>

            <p className="italic">
              Share personal experiences if relevant. These real stories anchor
              theory into reality and highlight why proactive risk management
              matters.
            </p>
          </div>

          {/* ================= INDEPENDENT LEARNING ================= */}
          <div className="fade-up bg-white rounded-3xl p-8 shadow-2xl text-slate-800">
            <h2 className="text-2xl font-bold mb-4">
              Promote Safe, Independent Learning
            </h2>

            <p className="mb-3">
              Interventions may include non-driving elements—like switching on
              lights or demisting windows. Early assistance is fine, but always
              transition responsibility back to the learner.
            </p>

            <p className="mb-3">
              Your role isn’t just to teach driving. It’s to build a safe,
              self-aware driver who takes responsibility confidently—knowing{" "}
              <span className="font-semibold text-indigo-600">
                when to step in, and when to step back.
              </span>
            </p>

            <p className="font-semibold text-indigo-700">
              Progressive independence within a safe learning environment is
              always the goal.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Start Quiz</h2>
        <p className="text-slate-300 mb-6">
          15 questions to test your understanding of intervention.
        </p>

        <Link to="/takequizCatName/intervention">
          <button className="px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 font-semibold shadow-xl transition">
            Start Quiz
          </button>
        </Link>
      </section>

      {/* ================= NEXT ================= */}
      <section className="py-10 text-center bg-white">
        <Link to="/trainee-badge">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xl">
            Next Page <ArrowRight />
          </button>
        </Link>
      </section>
    </main>
  );
}
