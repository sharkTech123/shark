import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import backgroundImage from "../../../../assets/images/givingfeedback.jpg";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Eye,
  Ear,
  Hand,
  MessageCircle,
  Timer,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  Sparkles,
  UserCheck,
  XCircle,
  TrafficCone,
  RefreshCcw,
  ShieldCheck,
  AlertTriangle,
  Clock,
  FilePenLine,
  Trash2,
} from "lucide-react";

export default function Adi3Module12() {
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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
        `notepadTexts1Part3page12_${userId}`,
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
      `notepadTexts1Part3page12_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page12_${userId}`,
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
        `notepadTexts2Part3page12_${userId}`,
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
      `notepadTexts2Part3page12_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page12_${userId}`,
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
        `notepadTexts3Part3page12_${userId}`,
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
      `notepadTexts3Part3page12_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page12_${userId}`,
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  ///////////////////////////////////////////////////////////////////////
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
        `notepadTexts4Part3page12_${userId}`,
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
      `notepadTexts4Part3page12_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(
      `notepadTexts4Part3page12_${userId}`,
    );
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  //   ////////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-4xl space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Giving Feedback that
                <span className="text-teal-400"> Drives Learning</span>
                <br />
                <span className="text-amber-400">Forward</span>
              </h1>
              <p className="text-slate-200 text-lg max-w-2xl">
                Learn how effective feedback shapes safer, more confident
                drivers — and transforms mistakes into powerful learning
                moments.
              </p>{" "}
              <Link to="/Contact-Us">
                <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
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

      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            🌀 Feedforward, Not Just Feedback
          </h2>
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              How do you think an instructor can give feedback in a way that
              builds your confidence rather than knocks it?
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
                  style={{ paddingLeft: "0px" }}
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
      {/* ================= TOAST EXAMPLE ================= */}
      <section className="py-10">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
              <Sparkles className="text-amber-400" />
              Take something as simple as making toast
            </h2>

            <ul
              style={{ paddingLeft: "0px" }}
              className="space-y-2 text-slate-700"
            >
              <li>• You see the toast pop up</li>
              <li>• You hear the familiar click</li>
              <li>• You smell if it’s burned</li>
              <li>• You touch the hot edge</li>
              <li>• You taste to check if it’s just right</li>
            </ul>

            <p className="mt-6 font-semibold text-indigo-600">
              Now apply that to something far more complex — learning to drive.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SENSORY FEEDBACK ================= */}
      <section className="py-10 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-6">
          <div className="fade-up mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
              <CarIcon />
              Sensory Feedback in Driving
            </h2>
          </div>
          <p className="mt-6 font-semibold text-indigo-600">
            When learning to drive, three senses are especially critical:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-teal-500">
              <Eye className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sight</h3>
              <p className="text-slate-700">
                mirrors, road signs, vehicle positioning
              </p>
            </div>

            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <Ear className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sound</h3>
              <p className="text-slate-700">
                Engine noise, sirens, tire feedback
              </p>
            </div>

            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-amber-500">
              <Hand className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Touch</h3>
              <p className="text-slate-700">
                Steering feel, brake pressure, clutch resistance
              </p>
            </div>
          </div>
          <p className="mt-6 font-semibold text-indigo-600">
            Occasionally, other senses come into play—like smell, if a learner
            rides the clutch too hard. The challenge for new drivers is not only
            interpreting this feedback, but knowing what it means and how to
            respond.
          </p>
        </div>
      </section>
      {/* ================= INSTRUCTOR ROLE ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-slate-50 rounded-3xl shadow-xl p-10 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <UserCheck className="w-10 h-10 text-teal-500" />
              <h2 className="text-3xl font-extrabold">Instructor’s Role</h2>
            </div>

            <p className="text-slate-700 text-lg mb-8">
              This is where instructor guidance becomes vital. Your job is to
              help learners make sense of what they’re experiencing. For
              example:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Correct Example */}
              <div className="bg-green-50 border-l-8 border-green-500 rounded-2xl p-6 shadow-md">
                <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                  <CheckCircle2 />
                  Effective Feedback
                </h4>
                <p className="text-slate-700">
                  “That’s the smooth feel we’re looking for in a gear change.”
                </p>
              </div>

              {/* Incorrect Example */}
              <div className="bg-red-50 border-l-8 border-red-400 rounded-2xl p-6 shadow-md">
                <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                  <XCircle />
                  Needs Improvement
                </h4>
                <p className="text-slate-700">
                  “Taking that roundabout at that speed? Let’s break that down.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAIN FILING PROCESS ================= */}
      <section className="py-10 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-10 h-10 text-amber-400" />
              <h2 className="text-3xl font-extrabold">
                Filing the Experience: How the Brain Categorises Driving
              </h2>
            </div>

            <p className="text-slate-300 text-lg mb-4">
              The brain works like a filing cabinet, storing experiences based
              on the emotions and outcomes associated with them.
            </p>

            <p className="text-slate-300 mb-6">
              For instance, if a learner takes a corner too quickly but feels
              exhilarated rather than concerned, they might subconsciously file
              that behaviour as “fun” or “harmless” — even if it was unsafe.
              Without constructive feedback, that habit can be repeated and
              reinforced.
            </p>

            {/* Intercept Highlight */}
            <div className="bg-amber-400/20 border border-amber-400/40 rounded-2xl p-6 mb-6">
              <p className="text-amber-300 font-semibold flex items-center gap-2">
                <TrafficCone />
                Your role is to intercept that filing process
              </p>
            </div>

            <ul
              style={{ paddingLeft: "0px" }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <li className="bg-slate-800 rounded-xl p-5 flex items-start gap-3">
                <RefreshCcw className="text-teal-400 mt-1" />
                <span>Help reframe experiences.</span>
              </li>
              <li className="bg-slate-800 rounded-xl p-5 flex items-start gap-3">
                <ShieldCheck className="text-indigo-400 mt-1" />
                <span>Replace bad habits with safe, repeatable behaviors.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Why do you think it’s important to reflect on how a driving
              situation made you feel, and how might those emotions affect your
              future driving decisions?
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
                  style={{ paddingLeft: "0px" }}
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

      {/* ================= NLP & TRIGGERS ================= */}
      {/* ================= NLP & EMOTIONAL ROADMAPS ================= */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-7xl fade-up">
          {/* Title */}
          <div className="text-center mb-14">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-indigo-500" />
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                NLP & Driving Triggers
              </h1>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Creating Emotional Roadmaps
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 max-w-5xl mx-auto">
            <p className="text-slate-700 text-lg text-center">
              Neuro-Linguistic Programming (NLP) offers useful insights.
              Emotional{" "}
              <span className="font-semibold text-indigo-600">“flags”</span>{" "}
              often attach themselves to certain roads or scenarios:
            </p>
          </div>

          {/* FLAGS */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Green Flag */}
            <div className="fade-up bg-emerald-50 border-l-8 border-emerald-500 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="text-emerald-600 w-8 h-8" />
                <h3 className="text-2xl font-bold text-emerald-700">
                  Green Flags
                </h3>
              </div>
              <p className="text-slate-700 text-lg">
                Confidence, comfort, and success.
              </p>
            </div>

            {/* Red Flag */}
            <div className="fade-up bg-rose-50 border-l-8 border-rose-500 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="text-rose-600 w-8 h-8" />
                <h3 className="text-2xl font-bold text-rose-700">Red Flags</h3>
              </div>
              <p className="text-slate-700 text-lg">
                Stress, past mistakes, or uncertainty.
              </p>
            </div>
          </div>

          {/* Overwriting Experiences */}
          <div className="fade-up bg-slate-900 text-white rounded-3xl shadow-2xl p-10 mb-16 max-w-6xl mx-auto">
            <p className="text-slate-300 text-lg mb-4">
              If a learner tightens their grip near a particular bend, they may
              be replaying a previous scare—even if they handled it fine.
            </p>

            <p className="text-slate-300 mb-4">
              As the instructor, you can help overwrite those red flags with
              positive experiences.
            </p>

            <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-2xl p-6 mb-4">
              <p className="text-indigo-200 italic" style={{marginBottom:'0px'}}>
                “Jake, that bend felt tricky last time. What can we do
                differently now to make it feel more controlled?”
              </p>
            </div>

            <p className="text-slate-300">
              Repetition, reassurance, and reflection help turn past tension
              into future confidence.
            </p>
          </div>

          {/* Timing Matters */}
          <div className="fade-up bg-white rounded-3xl shadow-xl p-10 mb-16 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="text-teal-500 w-8 h-8" />
              <h2 className="text-3xl font-extrabold">Timing Matters</h2>
            </div>

            <p className="text-slate-700 text-lg mb-6">
              Feedback is most effective when it precedes a potential error—not
              just follows one. Proactive questions might include:
            </p>

            <ul
              style={{ paddingLeft: "0px" }}
              className="grid sm:grid-cols-2 gap-4 mb-6"
            >
              <li className="bg-slate-50 rounded-xl p-4 shadow flex items-center gap-3">
                <ArrowRight className="text-teal-500" />
                “What speed feels right for this bend?”
              </li>
              <li className="bg-slate-50 rounded-xl p-4 shadow flex items-center gap-3">
                <ArrowRight className="text-teal-500" />
                “Is this roundabout tighter than the last?”
              </li>
              <li className="bg-slate-50 rounded-xl p-4 shadow flex items-center gap-3">
                <ArrowRight className="text-teal-500" />
                “How early can you spot the pedestrian crossing?”
              </li>
            </ul>

            <p className="text-slate-700 mb-4">
              This encourages decision-making before mistakes occur. However, if
              a safe mistake does happen, it can become a valuable teaching
              moment.
            </p>

            <div className="bg-amber-50 border-l-8 border-amber-400 rounded-xl p-5">
              <p className="font-semibold text-amber-700">
                Prompt for reflection:
              </p>
              <p className="text-slate-700">
                What are the potential risks if a learner doesn’t receive timely
                feedback after an error?
              </p>
            </div>
          </div>

          {/* Feedback as Dialogue */}
          <div className="fade-up bg-slate-50 rounded-3xl shadow-xl p-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-indigo-500 w-8 h-8" />
              <h2 className="text-3xl font-extrabold">
                Feedback as Dialogue, Not Criticism
              </h2>
            </div>

            <p className="text-slate-700 text-lg mb-8">
              Feedback should be a conversation, not a correction. Compare these
              two approaches:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 shadow">
                <p className="font-semibold text-rose-700">
                  🚫 “You forgot to signal.”
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow">
                <p className="font-semibold text-emerald-700">
                  ✅ “How did that last turn feel to you?”
                </p>
              </div>
            </div>

            <p className="text-slate-700 text-lg">
              Coach-led feedback builds self-awareness and accountability, which
              are essential for safe, independent driving.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Why might asking questions before a driving decision help someone
              learn more effectively than giving feedback after a mistake ?
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
      {/* ================= FEEDBACK DIALOGUE ================= */}
      <div className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* ===== Header ===== */}
          <header className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              🎉 Celebrate Success, Not Just Mistakes
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Avoid making “pulling over” synonymous with criticism. Stopping
              can be a moment to highlight progress, reflect on a tricky
              junction, or simply allow for a reset.
            </p>
          </header>

          {/* ===== Encouragement Card ===== */}
          <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 shadow-sm">
            <p className="text-lg font-medium text-emerald-900">
              💬 “That was a great response to the cyclist—calm, patient, and
              well-timed. What did you notice early on that helped you react
              like that?”
            </p>

            <p className="mt-4 text-emerald-700 font-semibold">
              🤔 What kind of language can reinforce good behaviour while still
              promoting improvement?
            </p>
          </section>

          {/* ===== Safe Mistakes Card ===== */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8 shadow-sm space-y-5">
            <h2 className="text-2xl font-bold text-amber-900">
              💥 The Power of Safe Mistakes
            </h2>

            <p className="text-slate-700">
              Sometimes, the best way for a learner to truly understand is to
              experience a controlled mistake:
            </p>

            <ul
              style={{ paddingLeft: "0px" }}
              className="grid sm:grid-cols-2 gap-4 text-slate-800"
            >
              <li className="flex gap-3 items-start">
                <span>🚗</span>
                <span>Let them stall in a quiet car park.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span>⚙️</span>
                <span>
                  Let them choose the wrong gear and feel the hesitation.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span>⛰️</span>
                <span>
                  Let them roll back slightly on a hill to understand clutch
                  bite.
                </span>
              </li>
            </ul>

            <p className="font-semibold text-amber-800">
              🚀 Describe a situation where allowing a learner to make a mistake
              could improve their driving long-term.
            </p>
          </section>

          {/* ===== Feedforward Card ===== */}
          <section className="bg-sky-50 border border-sky-200 rounded-2xl p-8 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-sky-900">
              🔄 From Feedback to Feedforward
            </h2>

            <blockquote className="italic text-sky-800 text-lg border-l-4 border-sky-400 pl-4">
              “It’s not about what went wrong. It’s about what we do next.”
            </blockquote>

            <p className="text-slate-700">
              Effective feedback is feedforward—a springboard for future
              improvement. You’re not just helping a learner pass a test. You’re
              developing a reflective, responsible, and confident driver for
              life.
            </p>
          </section>
        </div>
      </div>

      {/* ================= NEXT & QUIZ ================= */}
      <section className="py-10 bg-slate-900 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Continue Learning?
        </h2>

        <div className="flex justify-center gap-6">
          <Link to="/adapting-lessons">
            <button className="px-10 py-4 rounded-full bg-teal-500 hover:bg-teal-600 font-semibold shadow-xl">
              Next Page
            </button>
          </Link>

          <Link to="/takequizCatName/giving-feedback">
            <button className="px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-semibold shadow-xl">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function CarIcon() {
  return <Timer className="w-10 h-10 text-teal-500" />;
}
