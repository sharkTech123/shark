import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  HeartPulse,
  Smile,
  PlayCircle,
  FilePenLine,
  Trash2,
  ArrowRight,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

import backgroundImage from "../../../../../assets/images/humanchecksbg.jpg";

export default function AdiModuleOne() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]); // Store multiple saved texts
  const [isEditing, setIsEditing] = useState(false); // Track if the user is editing
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  // ///////////////////////////////////////////////
  const [text2, setText2] = useState("");
  const [savedTexts2, setSavedTexts2] = useState([]); // Store multiple saved texts
  const [isEditing2, setIsEditing2] = useState(false); // Track if the user is editing
  const [editIndex2, setEditIndex2] = useState(null);
  const textareaRef2 = useRef(null);

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
        `notepadTexts_${userId}`,
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
      `notepadTexts_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // //////////////////////////////////////////////////////////////////
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
        `notepadTexts2_${userId}`,
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
      `notepadTexts2_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadTexts2_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // ////////////////////////

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

  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <main className="w-full overflow-hidden font-sans bg-slate-50">
        {/* ================= HERO / BANNER ================= */}
        <section className="relative h-[70vh] lg:h-[85vh]">
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
                Human Checks Before{" "}
                <span className="text-emerald-400">Setting Off</span> to Drive
              </h1>
              <p className="mt-6 text-slate-200 max-w-2xl text-base sm:text-lg">
                Understand how your physical, mental and emotional readiness
                impacts safe driving.
              </p>
            </div>
          </div>
        </section>

        {/* ================= VIDEO ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold flex items-center gap-3">
                <PlayCircle className="w-9 h-9 text-emerald-600" /> Watch Our
                Video
              </h2>
              <p className="mt-4 text-slate-600">
                This short video explains why human checks are essential before
                starting a journey.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/B4UL4xfR-gA"
                  title="Human Checks Video"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TEXTAREA QUESTION ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              What do you think we mean by human readiness to drive?
            </h2>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Write your answer below
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
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
                onClick={saveText}
              >
                {isEditing ? "Update" : "Save"}
              </button>

              <div className="mt-6">
                {savedTexts.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 border border-dashed rounded-xl bg-gray-50">
                    <p className="text-gray-500 text-sm">
                      No saved thoughts yet ✍️
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Start writing and save your ideas
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
                        className="group relative p-3 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        {/* Thought Text */}
                        <p
                          className="text-gray-700 text-sm leading-relaxed pr-10"
                          style={{ marginBottom: "0px" }}
                        >
                          {savedText}
                        </p>

                        {/* Action Icons */}
                        <div className="absolute top-4 right-4 flex gap-3 opacity-70 group-hover:opacity-100 transition">
                          <FilePenLine
                            onClick={() => editText(index)}
                            className="cursor-pointer text-blue-500 hover:text-blue-600"
                            title="Edit"
                          />

                          <Trash2
                            onClick={() => deleteText(index)}
                            className="cursor-pointer text-red-500 hover:text-red-600"
                            title="Delete"
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

        {/* ================= CORE CONCEPT ================= */}
        <section className="py-24 bg-white fade-up">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-12">
              Human <span className="text-emerald-600">Readiness</span> to Drive
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500">
                <HeartPulse className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Physical Well-Being</h3>
                <p className="text-slate-700">
                  Are you rested, healthy and free from medication effects that
                  could impair driving?
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500">
                <Brain className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mental Well-Being</h3>
                <p className="text-slate-700">
                  Are you focused, aware of hazards and prepared for your route
                  and conditions?
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500">
                <Smile className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Emotional Well-Being</h3>
                <p className="text-slate-700">
                  Stress, anger or sadness can affect judgement and increase
                  risk on the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SIX KEY CONSIDERATIONS ================= */}
        <section className="py-24 bg-white fade-up">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-12">
              Below are some{" "}
              <span className="text-emerald-600">key considerations</span> for
              each category
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* PHYSICAL 1 */}
              <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500">
                <HeartPulse className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3">Physical Well-Being</h3>
                <p className="text-slate-700 leading-relaxed">
                  Have you had enough sleep? Fatigue can slow reaction times and
                  increase the risk of accidents.
                </p>
              </div>

              {/* MENTAL 1 */}
              <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500">
                <Brain className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3">Mental Well-Being</h3>
                <p className="text-slate-700 leading-relaxed">
                  Do you know your route and expected traffic conditions?
                  Planning ahead reduces stress and distractions.
                </p>
              </div>

              {/* EMOTIONAL 1 */}
              <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500">
                <Smile className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3">Emotional Well-Being</h3>
                <p className="text-slate-700 leading-relaxed">
                  Are you feeling overwhelmed, anxious, or angry? Strong
                  emotions can impair decision-making and focus.
                </p>
              </div>

              {/* PHYSICAL 2 */}
              <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500">
                <HeartPulse className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3">Physical Well-Being</h3>
                <p className="text-slate-700 leading-relaxed">
                  Are you unwell or taking medication that may affect your
                  driving? Some medicines cause drowsiness.
                  <br />
                  Have you eaten and stayed hydrated? Low energy can reduce
                  concentration.
                </p>
              </div>

              {/* MENTAL 2 */}
              <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500">
                <Brain className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3">Mental Well-Being</h3>
                <p className="text-slate-700 leading-relaxed">
                  Are you alert and able to stay focused? Avoid driving if
                  mentally exhausted or easily distracted.
                  <br />
                  Feeling rushed or stressed? Take a moment before driving.
                </p>
              </div>

              {/* EMOTIONAL 2 */}
              <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-emerald-500">
                <Smile className="w-10 h-10 text-emerald-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold mb-3">Emotional Well-Being</h3>
                <p className="text-slate-700 leading-relaxed">
                  Have you recently experienced something upsetting?
                  <br />
                  Are you calm and patient? Impulsive reactions can lead to
                  risky driving behaviour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= REFLECTION ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ClipboardList className="text-emerald-600" /> Reflection
              </h3>
              <textarea
                ref={textareaRef2}
                value={text2}
                onChange={handleChange2}
                rows={5}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your thoughts here..."
              />
              <button
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
                onClick={saveText2}
              >
                {isEditing2 ? "Update" : "Save"}
              </button>
              <div className="mt-6">
                {savedTexts2.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 border border-dashed rounded-xl bg-gray-50">
                    <p className="text-gray-500 text-sm">
                      No saved thoughts yet 🧠
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Your saved notes will appear here
                    </p>
                  </div>
                ) : (
                  <ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    style={{ paddingLeft: "0px" }}
                  >
                    {savedTexts2.map((savedText2, index) => (
                      <li
                        key={index}
                        className="group relative p-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        {/* Thought Content */}
                        <p
                          className="text-gray-700 text-sm leading-relaxed pr-10"
                          style={{ marginBottom: "0px" }}
                        >
                          {savedText2}
                        </p>

                        {/* Edit / Delete Actions */}
                        <div className="absolute top-4 right-4 flex gap-3 opacity-70 group-hover:opacity-100 transition">
                          <FilePenLine
                            onClick={() => editText2(index)}
                            className="cursor-pointer text-indigo-500 hover:text-indigo-600"
                            title="Edit"
                          />

                          <Trash2
                            onClick={() => deleteText2(index)}
                            className="cursor-pointer text-rose-500 hover:text-rose-600"
                            title="Delete"
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

        {/* ================= NAVIGATION ================= */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link to="/quizModuletwo">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-full flex items-center gap-2 hover:bg-emerald-700">
                Next Page <ArrowRight />
              </button>
            </Link>
          </div>
        </section>

        {/* ================= QUIZ CTA ================= */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 to-white fade-up">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
              <p className="text-slate-600 mb-6">
                15 questions to test your understanding of Human Checks before
                setting off.
              </p>
              <Link to="/takequizCatName/Human-Checks">
                <button className="px-10 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
// Redesigned AdiModuleOne using Tailwind CSS + GSAP + lucide-react
// NOTE: Functionality & content are preserved. Only layout, styling, icons & animations are enhanced.
