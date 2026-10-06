import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import backgroundImage from "../../../../assets/images/giving-routes.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiTick } from "react-icons/ti";

import {
  AlertTriangle,
  Navigation,
  Eye,
  Mic,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  MessageCircle,
  Sparkles,
  XCircle,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3ModuleNine() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
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

  //   ////////////////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page9_${userId}`,
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
      `notepadTexts1Part3page9_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page9_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  //   ////////////////////////////////////////////////
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
        `notepadTexts2Part3page9_${userId}`,
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
      `notepadTexts2Part3page9_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page9_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   /////////////////////////////////////////////////
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
        `notepadTexts3Part3page9_${userId}`,
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
      `notepadTexts3Part3page9_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page9_${userId}`,
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////////////////
  const [text4, setText4] = useState("");
  const [savedTexts4, setSavedTexts4] = useState([]); // Store multiple saved texts
  const [isEditing4, setIsEditing4] = useState(false); // Track if the user is editing
  const [editIndex4, setEditIndex4] = useState(null);
  const textareaRef4 = useRef(null);

  const handleChange4 = (e) => {
    setText4(e.target.value);
  };

  const saveText4 = () => {
    if (text4.trim()) {
      // If editing an existing item, replace it
      if (isEditing4) {
        const updatedTexts4 = [...savedTexts4];
        updatedTexts4[editIndex4] = text4;
        setSavedTexts4(updatedTexts4);
        setIsEditing4(false); // Reset editing flag
        setEditIndex4(null);
      } else {
        setSavedTexts4([...savedTexts4, text4]);
      }
      localStorage.setItem(
        `notepadTexts4Part3page9_${userId}`,
        JSON.stringify([...savedTexts4, text4]),
      );

      setText4("");
    }
  };

  const editText4 = (index) => {
    setIsEditing4(true);
    setEditIndex4(index);
    setText4(savedTexts4[index]); // Set the text to be edited
    if (textareaRef4.current) {
      textareaRef4.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText4 = (index) => {
    const updatedTexts4 = savedTexts4.filter((_, i) => i !== index);
    setSavedTexts4(updatedTexts4);
    localStorage.setItem(
      `notepadTexts4Part3page9_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(
      `notepadTexts4Part3page9_${userId}`,
    );
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);
  //   ////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div ref={heroRef} className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Giving Route <span className="text-teal-400">Directions</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              Clear instructions save confidence, prevent panic, and build safer
              drivers.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-slate-50 py-10">
        <div className="container mx-auto px-6 max-w-5xl space-y-6 fade-up">
          <h2 className="text-3xl font-extrabold">
            Are Your Directions{" "}
            <span className="text-teal-500">Crystal Clear?</span>
          </h2>
          <h5>Giving Instructions That Actually Land!</h5>

          <p className="text-slate-700 text-lg">
            Let’s be honest—you didn’t just hop into a car one day and become a
            driving pro overnight. You’ve probably got years of experience
            behind the wheel. You can juggle traffic, tunes, weather, maybe even
            sip a coffee (not recommended), and still make it to your
            destination.
          </p>
          <p className="text-slate-700 text-lg">
            But here’s the thing: your learner can’t do that...{" "}
            <strong className="text-teal-500">yet.</strong>
          </p>
          <p className="text-slate-700 text-lg">
            They’re not on autopilot like you. They’re not zoning in and out
            while changing radio stations and merging lanes at the same time.
            Remember what it was like when you were learning to drive?
            <strong className="text-teal-500"> Nerve-wracking. </strong>{" "}
            Everything took 100% of your brainpower. And to top it off, there
            were fewer cars, fewer distractions, and far less complicated road
            layouts back then!
          </p>
          <p className="text-slate-700 text-lg">
            Today’s learners are navigating a jungle of cars, tech, sat navs,
            and blinking dashboard lights. So, the instructions they receive
            from you, their instructor,{" "}
            <strong>need to be absolutely on point. 🚨</strong>.
          </p>

          <div className="bg-amber-100 border-l-8 border-amber-400 p-6 rounded-xl flex items-center gap-4">
            <AlertTriangle className="text-amber-600 w-8 h-8" />
            <p
              className="font-semibold text-amber-900"
              style={{ marginBottom: "0px" }}
            >
              The Golden Rule: Clear, Timely & Unambiguous Instructions
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What do you think is a timely instruction?
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
          <div className="bg-amber-100 border-l-8 border-amber-400 p-6 rounded-xl flex items-center mt-5 gap-4">
            <p
              className="font-semibold text-amber-900"
              style={{ marginBottom: "0px" }}
            >
              As a driving instructor, one of your superpowers is being able to
              guide your learner in a way that builds their confidence, not
              confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              How might a vague instruction like 'Turn left' cause confusion
              during a lesson ?
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
          </div>{" "}
          <div className="bg-amber-100 border-l-8 border-amber-400 p-6 rounded-xl flex items-center gap-4 mt-5">
            <p
              className="font-semibold text-amber-900"
              style={{ marginBottom: "0px" }}
            >
              If you’re vague, too early, too late—or worse,
              inconsistent—they’re going to panic, freeze, or do something
              unexpected. You’ll go from instructor to emergency co-pilot in a
              heartbeat.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ADI METHOD ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 fade-up">
            Use the <span className="text-indigo-500"> ADI Method </span> (Not
            Just for the Badge!)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <Navigation className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold">Alert</h3>
              <p className="text-slate-700">
                Get their attention. Use their name.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <Mic className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold">Direct</h3>
              <p className="text-slate-700">Clearly tell them what to do.</p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <Eye className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold">Identify</h3>
              <p className="text-slate-700">
                Give a visual reference or landmark.
              </p>
            </div>
          </div>

          {/* Example */}
          <div className="fade-up mt-12 bg-indigo-50 p-8 rounded-3xl border-l-8 border-indigo-500">
            <h3 className="text-xl font-bold mb-4">Example</h3>
            <p>
              <strong>“Okay, Raj…”</strong> (Alert)
            </p>
            <p>
              <strong>“Take the next road on the left…”</strong> (Direct)
            </p>
            <p>
              <strong>“Just after the blue car.”</strong> (Identify)
            </p>
            <p>
              This method keeps things flowing and avoids misunderstandings. But
              let’s see how easily it can go sideways.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          {/* SECTION TITLE */}
          <div className="flex items-center gap-4 mb-12 fade-up">
            <AlertTriangle className="w-10 h-10 text-amber-500" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Same Words,{" "}
              <span className="text-amber-500">Different Outcomes</span>
            </h2>
          </div>

          {/* COMPARISON CARDS */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* ❌ WRONG EXAMPLE */}
            <div className="fade-up bg-red-50 border-l-8 border-red-500 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="text-red-600 w-8 h-8" />
                <h3 className="text-xl font-bold text-red-700">
                  Example 1 – Confusing
                </h3>
              </div>

              <div className="space-y-2 text-slate-800 font-medium">
                <p>“Ok Raj…”</p>
                <p>“Turn left…”</p>
                <p>“At the end of the road.”</p>
              </div>

              <div className="mt-5 bg-white/70 p-4 rounded-xl text-red-700 text-sm leading-relaxed">
                😬 What if there’s another left turn before the end of the road?
                The learner may turn too early… or worse, into a driveway.
              </div>
            </div>

            {/* ✅ CORRECT EXAMPLE */}
            <div className="fade-up bg-emerald-50 border-l-8 border-emerald-500 p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-emerald-600 w-8 h-8" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Example 2 – Clear & Controlled
                </h3>
              </div>

              <div className="space-y-2 text-slate-800 font-medium">
                <p>“Ok Raj…”</p>
                <p>“At the end of the road…”</p>
                <p>“Turn left.”</p>
              </div>

              <div className="mt-5 bg-white/70 p-4 rounded-xl text-emerald-700 text-sm leading-relaxed">
                🎯 By saying <strong>when</strong> first and{" "}
                <strong>what</strong>
                second, the learner can mentally prepare and execute smoothly.
              </div>
            </div>
          </div>

          {/* KEY TAKEAWAY */}
          <div className="fade-up mt-12 flex items-center gap-4 bg-indigo-50 p-6 rounded-2xl border-l-8 border-indigo-500 max-w-3xl">
            <ArrowRight className="text-indigo-600 w-6 h-6 flex-shrink-0" />
            <p className="text-indigo-900 font-semibold">
              Instruction order matters. The right words at the right time
              reduce panic and improve decision-making.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              How might using the GROW model help a learner feel more involved
              and motivated during a lesson? Can you think of a goal-setting
              question you might ask to help a future pupil identify what they
              want to achieve?
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
      {/* ================= COMMUNICATION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* ================= COMMUNICATION CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* HOW YOU SAY IT */}
            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-teal-500">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="w-10 h-10 text-teal-500" />
                <h2 className="text-xl sm:text-2xl font-extrabold">
                  How You Say It Matters
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Face your pupil, watch their expressions, and explain why you'll
                sometimes make eye contact.
              </p>
            </div>

            {/* COMMUNICATE */}
            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-10 h-10 text-indigo-500" />
                <h2 className="text-xl sm:text-2xl font-extrabold">
                  Don’t Just Speak — Communicate
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Discuss expectations early on, and always check for
                understanding to avoid mistakes.
              </p>
            </div>
          </div>

          {/* ================= COMMENTARY DRIVING ================= */}
          <div className="fade-up bg-gradient-to-br from-amber-50 to-white p-10 rounded-3xl shadow-2xl border-l-8 border-amber-400 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-5">
              <Mic className="w-10 h-10 text-amber-500" />
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Commentary Driving = Your Secret Weapon
              </h2>
            </div>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              Practice giving yourself directions while driving alone.
              Seriously! Say them out loud. Get the rhythm, timing, and tone
              right. Then think, how would I phrase that for a learner?
              <br />
              <br />
              As your pupils improve, you can give directions closer to
              real-time. But early on, timing is everything.
            </p>

            <div className="mt-6 bg-white/70 rounded-2xl p-6 space-y-2">
              <p className="text-red-600 font-semibold">
                Too early = confusion
              </p>
              <p className="text-amber-600 font-semibold">Too late = panic</p>
              <p className="text-emerald-600 font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Just right = success
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What ways do you think shifting from giving instructions to using
              a coaching approach—like the GROW model—might change how a learner
              experiences a driving lesson?
            </label>
            <textarea
              ref={textareaRef4}
              value={text4}
              onChange={handleChange4}
              rows={5}
              className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your thoughts here..."
            />
            <button
              onClick={saveText4}
              className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
            >
              {isEditing4 ? "Update" : "Save"}
            </button>

            <div className="mt-6">
              {savedTexts4.length === 0 ? (
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
                  {savedTexts4.map((savedText, index) => (
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
                          onClick={() => editText4(index)}
                          className="cursor-pointer text-blue-500"
                        />
                        <Trash2
                          onClick={() => deleteText4(index)}
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
      {/* ================= BONUS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-teal-50 p-10 rounded-3xl shadow-xl">
            <Lightbulb className="w-10 h-10 text-teal-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Bonus Tips for Clear Instruction
            </h3>
            <ul
              style={{ paddingLeft: "0px" }}
              className="space-y-3 text-slate-700"
            >
              <li>
                <TiTick style={{ width: "20px", height: "20px" }} />
                Avoid confusing filler words.
              </li>
              <li>
                <TiTick style={{ width: "20px", height: "20px" }} />
                Use gestures wisely—don’t rely solely on them.
              </li>
              <li>
                <TiTick style={{ width: "20px", height: "20px" }} />
                Clarify instructions with landmarks.
              </li>
              <li>
                <TiTick style={{ width: "20px", height: "20px" }} />
                Stay calm, consistent, and adaptable.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to Test Your Knowledge?
        </h2>
        <p className="text-slate-300 mb-6">
          15-question summary quiz on Giving Route Directions
        </p>

        <Link to="/takequizCatName/giving-routes">
          <button className="px-10 py-4 rounded-full bg-teal-500 hover:bg-teal-600 font-semibold shadow-xl transition">
            Start Quiz
          </button>
        </Link>
      </section>

      {/* ================= NEXT ================= */}
      <section className="py-14 bg-white text-center">
        <Link to="/client-centred-learning">
          <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition">
            Next Page <ArrowRight />
          </button>
        </Link>
      </section>
    </main>
  );
}
