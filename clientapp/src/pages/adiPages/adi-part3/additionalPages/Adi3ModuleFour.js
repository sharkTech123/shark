import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Eye,
  Ear,
  BookOpen,
  HandMetal,
  HelpCircle,
  Sparkles,
  Brain,
  CheckCircle,
  Pin,
  FilePenLine,
  Trash2,
} from "lucide-react";

import bannerImg from "../../../../assets/images/lessonModulebanner.jpg"; // 🔁 replace with your banner

gsap.registerPlugin(ScrollTrigger);

export default function Adi3ModuleFour() {
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
        `notepadTexts1Part3page4_${userId}`,
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
      `notepadTexts1Part3page4_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page4_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////

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
        `notepadTexts2Part3page4_${userId}`,
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
      `notepadTexts2Part3page4_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page4_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

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
        },
      );
    });
  }, []);

  const learningStyles = [
    {
      icon: <Eye className="w-10 h-10 text-sky-400" />,
      title: "Visual Learners",
      description:
        "Visual learners prefer to see information, such as through charts, diagrams, and written instructions.",
    },
    {
      icon: <Ear className="w-10 h-10 text-pink-400" />,
      title: "Auditory Learners",
      description:
        "Auditory learners benefit from listening to information, such as lectures or discussions.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-lime-400" />,
      title: "Reading / Writing Learners",
      description:
        "Reading/Writing learners learn best by reading and writing.",
    },
    {
      icon: <HandMetal className="w-10 h-10 text-orange-400" />,
      title: "Kinesthetic Learners",
      description:
        "Kinesthetic learners learn through physical activity and hands-on experiences.",
    },
  ];

  return (
    <main className="w-full overflow-hidden font-sans bg-slate-50">
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Learning <span className="text-cyan-400">Needs</span> & Styles
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />A professional framework for becoming a confident,
              responsible and fully qualified driving instructor.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
   

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl fade-up">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <Sparkles className="text-cyan-500" />
            Inclusive Driving Lessons
          </h2>

          <p className="text-lg text-slate-700 mb-4">
            As a driving instructor, you will work with learners from diverse
            backgrounds, each with unique needs and abilities. It is essential
            to treat every student with fairness and respect, ensuring that no
            one experiences discrimination. Some learners may have learning
            disabilities that impact how they process information and develop
            driving skills.
          </p>

          <p className="text-lg text-slate-700">
            By understanding these challenges, you can tailor your teaching
            approach to create a supportive learning environment. Personalizing
            lessons not only helps reduce anxiety but also builds confidence,
            ensuring that every learner has the opportunity to become a safe and
            responsible driver—not just pass their test.
          </p>
        </div>
      </section>

      {/* ================= LEARNING DISABILITIES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3 fade-up">
            <Brain className="text-indigo-500" />
            Types of Learning Disabilities & Their Impact on Driving Lessons
          </h2>
          <p className="text-lg text-slate-700">
            Learning disabilities can affect a person's ability to process
            information, follow instructions, or respond to situations quickly.
            As a driving instructor, understanding these challenges and adapting
            teaching methods can help learners succeed. Here are some common
            learning disabilities and how they relate to driving lessons:
          </p>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* DYSLEXIA */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl fade-up">
              <h3 className="text-2xl font-semibold mb-4">
                Dyslexia (Affects reading, writing, and processing speed)
              </h3>

              <p className="flex items-center gap-2 font-semibold">
                <Pin className="text-red-500" /> Challenges
              </p>
              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc ml-6 mb-4"
              >
                <li>Difficulty reading road signs quickly</li>
                <li>Struggling with written theory test questions</li>
                <li>Problems remembering complex verbal instructions</li>
              </ul>

              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle className="text-green-500" /> How to Adapt Lessons:
              </p>
              <ul style={{ paddingLeft: "0px" }} className="list-disc ml-6">
                <li>
                  {" "}
                  Use symbols, colors, or voice recordings instead of written
                  notes.
                </li>
                <li>
                  Give step-by-step spoken instructions instead of long written
                  explanations.
                </li>
                <li>
                  {" "}
                  Use practical demonstrations rather than theory-heavy
                  teaching.
                </li>
              </ul>
              <em>
                <strong>Example:</strong> Instead of saying, “Turn left at the
                second exit,” show the learner a simple diagram or use verbal
                repetition.
              </em>
            </div>

            {/* DYSPRAXIA */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl fade-up">
              <h3 className="text-2xl font-semibold mb-4">
                Dyspraxia (Affects coordination and motor skills)
              </h3>
              <p className="flex items-center gap-2 font-semibold">
                <Pin className="text-red-500" /> Challenges
              </p>
              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc ml-6 mb-4"
              >
                <li>
                  Difficulty with fine motor control (steering, gear changes,
                  clutch control)
                </li>
                <li>Slow reaction times to hazards</li>
                <li>
                  Problems with spatial awareness (e.g., parking, lane
                  positioning)
                </li>
              </ul>
              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle className="text-green-500" /> How to Adapt
              </p>
              <ul style={{ paddingLeft: "0px" }} className="list-disc ml-6">
                <li>Give extra time for practicing physical car control.</li>
                <li>
                  Use hand-over-hand steering techniques and simplified gear
                  change strategies.
                </li>
                <li>
                  Provide calm and patient reassurance to boost confidence.
                </li>
              </ul>{" "}
              <em>
                <strong>Example:</strong> If a learner struggles with parking,
                break it into smaller steps and use visual guides (e.g., cones
                or markers).
              </em>
            </div>

            {/* ADHD */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl fade-up">
              <h3 className="text-2xl font-semibold mb-4">
                {" "}
                ADHD (Attention Deficit Hyperactivity Disorder) (Affects focus,
                impulsivity, and memory)
              </h3>

              <p className="flex items-center gap-2 font-semibold">
                <Pin className="text-red-500" /> Challenges
              </p>
              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc ml-6 mb-4"
              >
                <li>
                  Easily distracted by surroundings (e.g., pedestrians, signs)
                </li>
                <li>
                  Struggles with multi-tasking (e.g., checking mirrors while
                  driving)
                </li>
                <li>
                  Impulsive decision-making (e.g., braking too late, rushing
                  junctions)
                </li>
              </ul>

              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle className="text-green-500" /> How to Adapt
              </p>
              <ul style={{ paddingLeft: "0px" }} className="list-disc ml-6">
                <li>Keep lessons short and structured to maintain focus.</li>
                <li>
                  Use clear, direct instructions without overwhelming
                  information
                </li>
                <li> Encourag regular breaks and hands-on practice</li>
              </ul>
              <em>
                <strong>Example:</strong> Instead of saying, “Make sure you
                check your mirrors regularly,” set a reminder like “Every 10
                seconds, check your mirrors.”
              </em>
            </div>

            {/* AUTISM */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl fade-up">
              <h3 className="text-2xl font-semibold mb-4">
                Autism Spectrum Disorder (ASD) (Affects social interaction,
                sensory processing, and routine)
              </h3>

              <p className="flex items-center gap-2 font-semibold">
                <Pin className="text-red-500" /> Challenges
              </p>
              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc ml-6 mb-4"
              >
                <li>Sensory overload from busy roads, noises, and lights</li>
                <li>
                  Struggles with unpredictable situations (e.g., unexpected lane
                  closures)
                </li>
                <li>
                  Prefers structured routines and may find changing routes
                  stressful
                </li>
              </ul>

              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle className="text-green-500" /> How to Adapt
              </p>
              <ul style={{ paddingLeft: "0px" }} className="list-disc ml-6">
                <li>
                  {" "}
                  Keep a consistent lesson structure and avoid sudden changes.
                </li>
                <li> Use simple, clear instructions with no ambiguity.</li>
                <li>
                  Allow the learner to practice in quieter areas before
                  progressing to busier roads.
                </li>
              </ul>
              <em>
                <strong>Example:</strong> If a learner finds roundabouts
                overwhelming, practice in quiet area first, then gradually build
                confidence in real traffic.
              </em>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl fade-up">
              <h3 className="text-2xl font-semibold mb-4">
                Learning Difficulties (General Processing Delays)
              </h3>

              <p className="flex items-center gap-2 font-semibold">
                <Pin className="text-red-500" /> Challenges
              </p>
              <ul
                style={{ paddingLeft: "0px" }}
                className="list-disc ml-6 mb-4"
              >
                <li>Slower to absorb and apply driving skills</li>
                <li>May need repeated practice to remember key tasks</li>
                <li>Difficulty with quick decision-making</li>
              </ul>

              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle className="text-green-500" /> How to Adapt
              </p>
              <ul style={{ paddingLeft: "0px" }} className="list-disc ml-6">
                <li>
                  {" "}
                  Use repetition and allow extra time to practice key skills.
                </li>
                <li>
                  {" "}
                  Avoid information overload—teach one concept at a time.
                </li>
                <li>
                  Offer visual and hands-on learning rather than relying on
                  explanations alone.
                </li>
              </ul>
              <em>
                <strong>Example:</strong> If a learner struggles to remember
                mirror-signal-manoeuvre (MSM), use a mnemonic or hand signals to
                reinforce the habit.
              </em>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              How might misunderstanding a learner’s behaviour lead to unfair
              treatment or missed teaching opportunities ?
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

      <section className="relative py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a33,transparent_60%)] pointer-events-none" />

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-slate-300 text-lg leading-relaxed mb-16"
        >
          Understanding learning disabilities allows instructors to personalise
          lessons, reduce anxiety, and boost learner confidence. The goal isn’t
          just to pass a test—it’s to make sure every learner becomes a safe and
          capable driver.
        </motion.p>

        {/* Main Container */}
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-sky-400">
              <Sparkles size={22} />
              <span className="uppercase tracking-widest text-sm">
                Learner Support
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              How Can You Support Your Learner?
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg">
              When working with each client, it's essential to understand how
              you can best support their learning needs. There’s no
              one-size-fits-all approach to coaching and driving instruction.
            </p>
          </motion.div>

          {/* Content Cards */}
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {[
              "Think about how you personally prefer to learn. Do you like reading instructions and books, watching video tutorials, or diving in and learning through hands-on experience? Take a moment to reflect on your own learning style.",

              "One of the best ways to help your learner is by asking them directly how they learn best and what kind of support they need from you. If they’re unsure, encourage them to complete a VARK Questionnaire.",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-sky-500/40 transition"
              >
                <p className="text-slate-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* VARK Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border border-sky-500/30 rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-start gap-5">
              <div className="bg-sky-500/20 p-3 rounded-xl">
                <HelpCircle size={36} className="text-sky-400" />
              </div>

              <p className="text-slate-200 leading-relaxed">
                The VARK Questionnaire is a tool designed to identify an
                individual's preferred learning style. <strong>VARK</strong>{" "}
                stands for{" "}
                <strong>Visual, Auditory, Reading/Writing, Kinesthetic</strong>{" "}
                — the four primary learning styles. Understanding their
                preferences will allow you to tailor your teaching methods to
                suit their needs, enhancing their learning experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VARK ================= */}
      <section className="py-12 bg-gradient-to-br from-sky-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningStyles.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition fade-up"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-start gap-4 bg-white p-6 rounded-2xl shadow fade-up">
            <HelpCircle className="text-sky-500 w-8 h-8" />
            <p className="text-slate-700" style={{ marginBottom: "0rem" }}>
              By completing the VARK questionnaire, individuals can identify
              their dominant learning style(s), which helps instructors tailor
              lessons to suit the learner’s preferences, improving understanding
              and retention of information.
            </p>
          </div>

          <p className="text-center mt-6 text-lg">
            Have a go yourself 👉{" "}
            <a
              href="https://vark-learn.com/the-vark-questionnaire/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-600 font-bold"
            >
              Click Here
            </a>
          </p>
        </div>
      </section>
      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What were your results and how will you use this during your own
              learning ?
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

      {/* ================= NEXT ================= */}
      <div className="py-16 flex justify-center">
        <Link to="/lesson-structure">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-lg">
            Next Page
          </button>
        </Link>
      </div>

      {/* ================= QUIZ ================= */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Start Quiz</h2>
          <h3 className="mb-4">15 Questions</h3>
          <p className="mb-6">
            Test your understanding of Learning Needs & Styles
          </p>

          <Link to="/takequizCatName/learning-styles">
            <button className="px-10 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-bold">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
