import React, { useEffect, useRef, useState } from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  Car,
  ShieldCheck,
  Clock,
  Eye,
  AlertTriangle,
  ArrowRight,
  PlayCircle,
  Navigation,
  Gauge,
  Trophy,
  Trash2,
  FilePenLine,
} from "lucide-react";

import backgroundImage from "../../../../../assets/images/concentration.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleEight() {
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
        `notepadTextspage8_${userId}`,
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
      `notepadTextspage8_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage8_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  // ////////////////////////////////////////////////////

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
        `notepadText2spage8_${userId}`,
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
      `notepadText2spage8_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage8_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // /////////////////////////////////////////////////////////////
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
        `notepadText3spage8_${userId}`,
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
      `notepadText3spage8_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage8_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // ////////////////////////////////////////////////////

  /////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[85vh]">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Space in the <span className="text-emerald-400">COAST</span>{" "}
              Method
            </h1>

            <p className="mt-6 text-lg text-slate-200 max-w-2xl">
              Mastering space is the secret to smooth, safe, and professional
              advanced driving.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white">
        <section className="bg-slate-50 py-20 ">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Mastering Space: The Secret to Smooth Driving
            </h2>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 fade-up">
            <div>
              <div className="bg-slate-50 p-4 rounded-3xl shadow-xl border-l-8 border-red-500">
                <p className="text-slate-700 leading-relaxed">
                  In advanced driving, space isn’t just about avoiding
                  accidents—it’s about staying ahead of the game. The more space
                  you manage, the more calm, professional, and in control you’ll
                  look behind the wheel. And guess what? Your examiner will
                  definitely notice.
                </p>
              </div>
            </div>
            <div className="container mx-auto px-6 fade-up">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border">
                <div className="flex items-center gap-3 p-6 border-b">
                  <PlayCircle className="w-8 h-8 text-red-600" />
                  <h2 className="text-2xl font-bold">Watch Our Video</h2>
                </div>

                <div className="aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/75chHph3nmk"
                    title="Space in COAST Method"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VIDEO ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Why Does Space Matter?Write your thoughts below
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
        {/* ================= CONTENT BLOCK ================= */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 fade-up">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <p>
                Imagine you're playing a high-stakes game of chess, but instead
                of pieces on a board, you're surrounded by cars, cyclists,
                pedestrians, and unpredictable road conditions. In this game,
                space is your best friend —it gives you the time to think, the
                room to move, and the control to keep everything running
                smoothly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <p>
                In advanced driving, space isn’t just about avoiding
                accidents—it’s about staying ahead of the game. The more space
                you manage, the more calm, professional, and in control you’ll
                look behind the wheel. And guess what? Your examiner will
                definitely notice.
              </p>
            </div>
          </div>
        </section>

        {/* ================= THINK FAST ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="text-blue-600 w-10 h-10" />
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Think Fast, React Faster: The Power of Space
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-slate-50 p-8 rounded-3xl shadow">
                <p>
                  Ever been stuck behind someone who slams their brakes at the
                  last second? Annoying, right? That’s what happens when drivers
                  don’t leave enough space. Keeping a safe distance isn’t just
                  about comfort —it’s your buffer zone for reacting to the
                  unexpected.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl shadow">
                <p>
                  More space means more time to react. It cuts down the risk of
                  collisions, makes driving less stressful, and keeps everything
                  flowing smoothly. Plus, when you're managing space well,
                  you’re always ready for what’s next—whether it’s a sudden
                  stop, a merging vehicle, or a cyclist swerving into the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TYPES OF SPACE ================= */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
              Types of Space You Need to Master
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                [
                  "Following Distance",
                  Car,
                  'If you’re too close to the car in front, you’re asking for trouble. Use the 2-second rule in good weather— double it when the roads are wet. That means picking a fixed point ahead, watching when the car in front passes it, and counting, "One thousand and one, one thousand and two." If you reach the point too soon, back off!',
                ],
                [
                  "Stopping Distance",
                  AlertTriangle,
                  "Braking takes longer than you think—especially in bad weather. Always leave enough space to stop within the visible distance ahead. If you can’t see past a bend or a hill, slow down and expect the unexpected.",
                ],
                [
                  "Side Space",
                  ShieldCheck,
                  "Cyclists, motorcyclists, and parked cars all need their personal space. When overtaking, leave at least 1.5 meters—or more if you can. And when driving near parked cars, be ready for the dreaded door swing from an unsuspecting passenger.",
                ],
                [
                  "Space Behind",
                  ArrowRight,
                  "Got a tailgater breathing down your neck? Don’t hit the brakes to “teach them a lesson”—that’s a recipe for disaster. Instead, gradually slow down to encourage them to back off. If they’re still too close, find a safe place to let them pass.",
                ],
                [
                  "Space at Junctions and Roundabouts",
                  Eye,
                  "Ever seen someone creep forward at a red light, only to get stuck in the middle of the road? Don’t be that driver. Always leave enough room for other vehicles to move freely—especially large ones that need extra turning space.",
                ],
              ].map(([title, Icon, text], i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur p-6 rounded-3xl shadow-xl fade-up"
                >
                  <Icon className="mb-4 w-8 h-8 text-emerald-300" />
                  <h3 className="font-bold text-xl mb-2">{title}</h3>
                  <p className="mt-4 text-white/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW TO KEEP YOUR SPACE ================= */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 fade-up">
              How to Keep Your Space Like a Pro
            </h2>

            <p className="max-w-3xl text-emerald-100 mb-12 fade-up">
              Space management isn’t just about keeping your distance—it’s about
              reading the road and staying ahead of the game. Here’s how to
              master it:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* CARD 1 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl fade-up">
                <div className="flex items-center gap-4 mb-3">
                  <Eye className="w-8 h-8 text-emerald-300" />
                  <h3 className="text-xl font-bold text-emerald-200">
                    Anticipate What’s Coming
                  </h3>
                </div>
                <p className="text-emerald-100">
                  Watch for brake lights, turn signals, and changes in traffic
                  flow. The sooner you spot a potential issue, the easier it is
                  to adjust your space before it becomes a problem.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl fade-up">
                <div className="flex items-center gap-4 mb-3">
                  <Navigation className="w-8 h-8 text-emerald-300" />
                  <h3 className="text-xl font-bold text-emerald-200">
                    Position Yourself Smartly
                  </h3>
                </div>
                <p className="text-emerald-100">
                  Your lane position can make a big difference. When passing
                  parked cars, move slightly to the left to avoid unexpected
                  door swings. When stopped in traffic, leave enough space to
                  maneuver around the car in front if needed.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl fade-up">
                <div className="flex items-center gap-4 mb-3">
                  <Gauge className="w-8 h-8 text-emerald-300" />
                  <h3 className="text-xl font-bold text-emerald-200">
                    Adapt to Speed and Conditions
                  </h3>
                </div>
                <p className="text-emerald-100">
                  The faster you're going, the more space you need. On a dry
                  road, you might be fine with the 2-second rule, but in rain or
                  fog? Give yourself extra room.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl fade-up">
                <div className="flex items-center gap-4 mb-3">
                  <AlertTriangle className="w-8 h-8 text-emerald-300" />
                  <h3 className="text-xl font-bold text-emerald-200">
                    Handle Close-Followers with Confidence
                  </h3>
                </div>
                <p className="text-emerald-100">
                  If someone’s tailgating you, don’t panic. Stay cool, slow down
                  gradually, and let them pass if necessary. It’s better to lose
                  a few seconds than risk an accident.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= ON THE ROAD CHALLENGE ================= */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 fade-up">
              🛞 On-the-Road Spacing Challenge
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CHALLENGE 1 */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-purple-500 fade-up">
                <h3 className="text-lg font-bold text-purple-600 mb-2">
                  1️⃣ Following Distance Check
                </h3>
                <p className="text-slate-700">
                  Pick a fixed point (like a road sign) and test your 2-second
                  rule. If you reach the point too soon, back off and adjust
                  your distance.
                </p>
              </div>

              {/* CHALLENGE 2 */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-purple-500 fade-up">
                <h3 className="text-lg font-bold text-purple-600 mb-2">
                  2️⃣ Side Space Awareness
                </h3>
                <p className="text-slate-700">
                  When passing cyclists or parked cars, keep that 1.5-meter gap.
                  If space is tight, slow down and wait for a safer moment to
                  overtake.
                </p>
              </div>

              {/* CHALLENGE 3 */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-purple-500 fade-up">
                <h3 className="text-lg font-bold text-purple-600 mb-2">
                  3️⃣ Reaction Space Test
                </h3>
                <p className="text-slate-700">
                  As you approach junctions or roundabouts, leave enough room to
                  stop safely if needed. Stay alert and be ready to adjust if
                  traffic flow changes suddenly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Observe other drivers’ spacing habits and identify where
                improvements could be made.
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
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Have you ever experienced a situation where maintaining proper
                space saved you from a collision?
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

        {/* ================= FINAL THOUGHT ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Final Thought: Are You Giving Yourself Enough Room to Breathe?
            </h2>
            <p>
              Space isn’t just empty air between vehicles—it’s your safety net,
              your escape route, and your best tool for stress-free driving.
              Master it, and you’ll be on your way to becoming a smooth,
              confident, and professional driver.
            </p>
            <p></p>
          </div>
        </section>

      

        {/* ================= QUIZ ================= */}

        <section className="py-24 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 text-center fade-up">
            <Trophy className="w-14 h-14 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold mb-2">
              Ready for the Quiz?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Test your knowledge and see how well you understand observation.
            </p>

            <Link to="/takequizCatName/Space-in-the-COAST-Method">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full text-lg">
                Start Quiz
              </button>
            </Link>
          </div>
        </section>

        {/* ================= NEXT PAGE ================= */}
        <section className="py-12 bg-white text-center">
          <Link to="/quizModulenine">
            <button className="px-8 py-3 bg-slate-800 text-white rounded-full">
              Next Page →
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
