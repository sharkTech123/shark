import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";

import bannerImg from "../../../../assets/images/drivinglessons.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RefreshCcw,
  Compass,
  Target,
  CloudRain,
  TrafficCone,
  Smile,
  TrendingUp,
  AlertCircle,
  PlayCircle,
  ArrowRight,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModule() {
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
  const Box = ({ title, content, color, className }) => (
    <motion.div
      className={`${styles.adaptingLessonsbox} ${styles[className]}`}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3>{title}</h3>
      <div>{content}</div>
    </motion.div>
  );

  const Arrow = ({ direction = "down" }) => (
    <div className={`${styles.adaptingLessonsarrow} ${styles[direction]}`}>
      {direction === "right" ? "→" : "↓"}
    </div>
  );

  // ///////////////////////////////////////////////////////////////////////////

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
        `notepadTexts1Part3page13_${userId}`,
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
      `notepadTexts1Part3page13_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page13_${userId}`,
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
        `notepadTexts2Part3page13_${userId}`,
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
      `notepadTexts2Part3page13_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page13_${userId}`,
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
        `notepadTexts3Part3page13_${userId}`,
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
      `notepadTexts3Part3page13_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page13_${userId}`,
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-emerald-900/70" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-3xl space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Adapting the
                <span className="text-emerald-400"> Lesson</span>
              </h1>
              <p className="text-slate-200 text-lg">
                Responsive teaching is not about abandoning plans — it’s about
                shaping lessons around real learners, real conditions, and real
                progress.
              </p>

              <div className="flex gap-4 pt-4">
                <Link to="/Contact-Us">
                  <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-xl transition">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-10">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <RefreshCcw className="w-10 h-10 text-emerald-500" />
              <h2 className="text-3xl font-extrabold">
                Responsive Teaching: The Art of Adapting
              </h2>
            </div>
            <strong>📘 Introduction: Planning with Flexibility</strong>
            <p className="text-slate-700 leading-relaxed mb-1">
              As driving instructors, we start every lesson with a structure —
              clear route, defined objectives, and strategy tailored to
              development.
            </p>
            <p className="text-slate-700 leading-relaxed mb-1">
              But real-life doesn’t always follow the script.
            </p>{" "}
            <p className="text-slate-700 leading-relaxed mb-1">
              An effective lesson plan must be flexible. Because true
              learner-centred instruction doesn’t just focus on ticking boxes —
              it focuses on progress, confidence, and safety. That means knowing
              when to adapt, shift, or even scrap your plan entirely for the
              benefit of the learner.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Why do you think receiving feedback during a driving lesson is
              important, and how might it help you improve as a instructor ?
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
                <ul style={{padding:"0px"}}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                 
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
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 space-y-12">
          {/* Scenario 1 */}
          <div className="fade-up bg-slate-50 p-10 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Compass className="w-8 h-8 text-emerald-500" />
              <h3 className="text-2xl font-bold">
                Scenario 1: When the Lesson Shouldn’t Begin
              </h3>
            </div>
            <p className="text-slate-700  mb-1">
              You arrive for an 8 AM lesson. The pupil takes ages to answer the
              door, eventually picks up the phone groggy and disoriented, and
              shows up late, yawning, confused, and apologetic.
            </p>{" "}
            <p className="text-slate-700 leading-relaxed mb-1">
              Rather than jumping into the car and pushing ahead with the
              original plan, take a step back.
            </p>{" "}
            <p className="text-slate-700 leading-relaxed mb-1">
              Would they be able to safely assess a junction? React to hazards?
              Maintain focus in a busy environment?
            </p>{" "}
            <p className="text-slate-700 leading-relaxed mb-1">
              You have a duty of care — not just to your pupil, but to yourself,
              and other road users. Being flexible here isn’t a compromise; it’s
              professionalism in action.
            </p>
          </div>
          <section className="py-10 ">
            <div className="container mx-auto px-6 max-w-4xl fade-up">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  What were your results and how will you use this during your
                  own learning ?
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
                    <ul style={{padding:"0px"}}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      
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
          {/* Scenario 2 */}
          <div className="max-w-6xl mx-auto px-6 space-y-10">
            {/* ================= SCENARIO 2 ================= */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 overflow-hidden"
            >
              {/* Accent strip */}
              <div className="absolute left-0 top-0 h-full w-2 bg-emerald-500" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 text-2xl">
                  🧭
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                    Scenario 2: Correcting Course Midway
                  </h2>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    Your pupil has been progressing steadily. Today, you’ve
                    planned to tackle more complex roundabouts. But on the way
                    there, they begin stalling repeatedly at basic junctions —
                    which is unusual for them.
                  </p>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    You pull over, have a chat, and agree to revisit clutch
                    control. Still, the issue continues... until you notice they
                    didn’t adjust the seat when they got in. Once adjusted,
                    everything improves dramatically.
                  </p>

                  {/* Key takeaway */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-xl">
                    <p className="font-semibold text-emerald-900">
                      Key takeaway:
                    </p>
                    <p className="text-slate-800">
                      Sometimes what appears to be a skill problem is actually a
                      comfort or setup issue. Being observant, communicative,
                      and flexible turns frustration into progress.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ================= SCENARIO 3 ================= */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 overflow-hidden"
            >
              {/* Accent strip */}
              <div className="absolute left-0 top-0 h-full w-2 bg-cyan-500" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 text-2xl">
                  🎯
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                    Scenario 3: When the Lesson Needs a New Goal
                  </h2>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    You’ve planned to build confidence with a specific
                    manoeuvre, based on last week’s feedback. But within 10
                    minutes, your pupil is handling it confidently, showing
                    control, composure, and a clear understanding of the skill.
                  </p>

                  <p className="text-slate-700 leading-relaxed">
                    After a brief discussion, they reveal they’ve been out with
                    a family member practising the same subject. Now they’re
                    bored and under-stimulated.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What would you do?
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
                <ul style={{padding:"0px"}}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                 
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
      {/* ================= TRIGGERS ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Everyday Adaptation Triggers */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            🚗 Everyday Adaptation Triggers
          </h2>

          <p className="text-gray-600 mb-6 max-w-3xl">
            Adaptation doesn’t always stem from dramatic changes. Here are
            common, everyday reasons for changing your plan:
          </p>

          <ul style={{padding:"0px"}} className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "🌧️",
                title: "Weather Conditions",
                text: "Heavy rain or fog may limit visibility, making certain goals unsafe.",
              },
              {
                icon: "🚧",
                title: "Traffic Incidents",
                text: "Accidents or road closures can block access to planned routes.",
              },
              {
                icon: "😟",
                title: "Emotional State",
                text: "A pupil may be anxious due to school exams, personal stress, or even an argument before the lesson.",
              },
              {
                icon: "🔄",
                title: "Plateau or Setback",
                text: "Sometimes a previously mastered skill seems to regress. That’s okay — it may need a brief revisit.",
              },
              {
                icon: "🚀",
                title: "Overconfidence",
                text: "A pupil performing far better than expected may need the lesson to evolve in real time.",
              },
              {
                icon: "🚦",
                title: "Unexpected Behaviours",
                text: "If your pupil is overly hesitant, distracted, or panicked by a road event (like an aggressive driver), the goal may need to shift toward calming strategies or simpler skills.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Adaptation ≠ Abandoning */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-green-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            🔁 Adaptation ≠ Abandoning the Plan
          </h2>

          <p className="text-gray-600 mb-6">
            Adaptation is intentional, learner-focused, and always discussed:
          </p>

          <ol className="space-y-4">
            {[
              {
                title: "Pause and reflect",
                text: "Is the current plan still useful?",
              },
              {
                title: "Discuss with the learner",
                text: "What are they feeling? Are they still on track for the original goal?",
              },
              {
                title: "Agree a new direction",
                text: " Clearly define what the updated goal is and how it benefits them.",
              },
              {
                title: "Debrief at the end",
                text: "Reinforce how the decision to adapt helped their learning and confidence.",
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-green-800 font-medium">
              This learner-centred approach keeps motivation high and makes
              every lesson feel tailored — because it is.
            </p>
          </div>
        </motion.section>
      </div>

      {/* ================= VIDEO ================= */}
      <div className={styles.adaptingLessonsflowchart}>
        <h2>CAUSE (KUSA)</h2>
        <div className={styles.adaptingLessonsrow}>
          <Box
            className={styles.adaptingLessonsleft}
            color="#ffd6d6"
            content={
              <>
                <p>
                  <strong>
                    What are their thoughts on why this is happening?
                  </strong>{" "}
                </p>
              </>
            }
          />
          <em>OR</em>

          <Box
            className={styles.adaptingLessonsright}
            color="#d4fdd9"
            content={
              <>
                <ul style={{padding:"0px"}}>
                  <li>
                    <strong>Knowledge</strong> - Do they know{" "}
                    <strong>how</strong> to do this?
                  </li>
                  <li>
                    <strong>Understanding</strong> - Do they know{" "}
                    <strong>why</strong> it's done in this way?
                  </li>
                  <li>
                    <strong>Skill</strong> - Can they do it?
                  </li>
                  <li>
                    <strong>Attitude</strong> - Do they recognise the
                    importance?
                  </li>
                </ul>
              </>
            }
          />
        </div>
        <h2>RISK (moment of realisation)</h2>
        <div className={styles.adaptingLessonsrow}>
          <Box
            className={styles.adaptingLessonsleft}
            color="#ffd6d6"
            content={
              <p>
                <strong>
                  What are their thoughts on the risks that this issue could
                  bring?
                </strong>{" "}
              </p>
            }
          />

          <em>OR</em>

          <Box
            className={styles.adaptingLessonsright}
            color="#d4fdd9"
            content={
              <p>
                Stimulate their thoughts into realising what the risks could be.
              </p>
            }
          />
        </div>

        <Arrow direction="down" />
        <Box
          title="SOLUTION"
          className={styles.adaptingLessonscenter}
          color="#ffe3b3"
          content={
            <>
              <p>
                What do <strong>they</strong> think they could do differently to
                alleviate this risk?
              </p>
              <p>
                <strong>= GOAL</strong>
              </p>
            </>
          }
        />

        <Arrow direction="down" />
        <Box
          title="AGREED ROLES AND RESPONSIBILITIES"
          className={styles.adaptingLessonscenter}
          color="#ffcce6"
          content={
            <>
              <p>What help would they like from you?</p>
              <p>Tell them?</p>
              <p>Remind them?</p>
              <p>Try it on their own?</p>
            </>
          }
        />

        <Arrow direction="down" />
        <Box
          title="AGREED DURATION"
          className={styles.adaptingLessonscenter}
          color="#d6e8ff"
          content={
            <p>How many minutes or attempts should we try it like this?</p>
          }
        />
      </div>

      <section className="py-10 bg-slate-900 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Continue Learning?
        </h2>

        <div className="flex justify-center gap-6">
          <Link to="/risk-management-and-responsibility">
            <button className="px-10 py-4 rounded-full bg-teal-500 hover:bg-teal-600 font-semibold shadow-xl">
              Next Page
            </button>
          </Link>

          <Link to="/takequizCatName/adapting">
            <button className="px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-semibold shadow-xl">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
