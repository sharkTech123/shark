import React from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import roadImage from "../../../../../assets/images/twosecondrule.jpg";
import cloudImage from "../../../../../assets/images/raincloud.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Eye,
  Focus,
  AlertTriangle,
  Trophy,
  ChevronDown,
  PlayCircle,
  FilePenLine,
  Trash2,
} from "lucide-react";
import { FaChevronDown, FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../../assets/images/humanchecksbg.jpg";
import tunnelVision from "../../../../../assets/images/tunnelVissonImg.png";
import funnelVision from "../../../../../assets/images/funnelVision.png";
import farRearImg from "../../../../../assets/images/far-near-rear-VissionImg.png";
import limitPoints from "../../../../../assets/images/limitPoints.png";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleSix() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [showHints, setShowHints] = useState(false);

  const toggleHints = () => {
    setShowHints((prev) => !prev);
  };

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
        `notepadTexts6_${userId}`,
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
      `notepadTexts6_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts6_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // /////////////////////////////////////////////////////////////////

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
        `notepadText2spage6_${userId}`,
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
      `notepadText2spage6_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage6_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  /////////////////////////////////////////////////////////////////
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
        `notepadText3spage6_${userId}`,
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
      `notepadText3spage6_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage6_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // /////////////////////////////////////////////////////////////

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
        `notepadText4spage6_${userId}`,
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
      `notepadText4spage6_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage6_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
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
  // /////////////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl">
              Observation in the <span className="text-red-500">COAST</span>{" "}
              Method
            </h1>

            <p className="mt-6 text-slate-200 text-lg max-w-2xl">
              Learn how advanced observation techniques help you predict
              hazards, improve control, and drive like a professional.
            </p>

            <ChevronDown className="mt-10 text-white w-10 h-10 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="bg-white">
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 fade-up grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">
                Watch the <span className="text-red-600">Observation</span>{" "}
                Video
              </h2>
              <p className="text-slate-700 text-lg">
                Understand how expert drivers scan the road, anticipate hazards,
                and stay ahead of danger.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-[300px]"
                src="https://www.youtube.com/embed/x2Sye46W1KY"
                title="Observation Video"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ================= INTRO CONTENT ================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 fade-up max-w-4xl">
            <h2 className="text-4xl font-extrabold mb-6 text-center">
              See More, <span className="text-red-600">Drive Smarter</span>
            </h2>

            <div className="bg-slate-50 p-10 rounded-3xl shadow-xl space-y-6">
              <p className="text-lg text-slate-700">
                Imagine driving as a high-speed puzzle—every road sign, every
                bend, every movement from other drivers is a clue. The more
                pieces you spot early, the smoother and safer your drive will
                be. That’s where <strong>observation</strong> comes in! It’s not
                just about looking around; it’s about actively{" "}
                <strong>scanning</strong>, <strong>analysing</strong>, and{" "}
                <strong>predicting</strong> what’s coming next.
              </p>

              <p className="text-lg text-slate-700">
                In the COAST method, observation is your superpower. It helps
                you spot hazards, read the road ahead, and make proactive
                decisions—exactly what examiners want to see in an advanced
                driver. But to truly level up your skills, you need to go beyond
                basic looking and start reading the road like a pro.
              </p>
            </div>
          </div>
        </section>

        {/* ================= TEXTAREA SECTION ================= */}
        <section className="py-20 bg-slate-50 fade-up" ref={textareaRef}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="text-red-600" />
                How do you view the road?
              </h3>
              <textarea
                value={text}
                onChange={handleChange}
                rows={5}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your thoughts here..."
              />
              <button
                onClick={saveText}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-emerald-700"
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

        {/* ================= FUNNEL VS TUNNEL ================= */}
        <div className="py-12 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
              Tunnel Vision vs{" "}
              <span className="text-red-600">Funnel Vision</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Tunnel Vision */}
              <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
                <img
                  src={tunnelVision}
                  alt="Tunnel Vision"
                  className="w-full max-w-md mx-auto rounded-xl"
                />
                <h3 className="mt-4 text-xl font-bold">Tunnel Vision</h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Narrow focus that blocks awareness of surroundings.
                </p>
              </div>

              {/* Funnel Vision */}
              <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
                <img
                  src={funnelVision}
                  alt="Funnel Vision"
                  className="w-full max-w-md mx-auto rounded-xl"
                />
                <h3 className="mt-4 text-xl font-bold">Funnel Vision</h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Wide scanning view from far, mid, near and rear.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Which do you think is better for the best view of the road,
                Write your thoughts below
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

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 fade-up max-w-4xl">
            <h2 className="text-4xl font-extrabold mb-6 text-center">
              See More, <span className="text-red-600">Drive Smarter</span>
            </h2>

            <div className="bg-slate-50 p-10 rounded-3xl shadow-xl space-y-6">
              <p className="text-lg text-slate-700">
                Imagine you're cruising down the road, feeling like a pro—until
                tunnel vision kicks in, turning your view into a narrow
                spotlight. Suddenly, everything outside your immediate line of
                sight vanishes, like you're playing a driving game with blinders
                on
              </p>

              <p className="text-lg text-slate-700">
                Using funnel vision strategically while driving—by shifting
                focus between far, mid, rear, and side views— helps you stay
                aware of everything happening around you. Instead of getting
                locked onto just one point, you’re actively scanning the road
                ahead, checking your mirrors, and keeping an eye on potential
                hazards.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FAR / NEAR / REAR ================= */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 fade-up text-center">
            <h3 className="text-3xl font-bold mb-6">
              When you drive down the road, you should be scanning the road
              ahead and behind in a funnel vision. From far, middle, near to
              rear.
            </h3>

            <p className="max-w-3xl mx-auto text-lg text-slate-700">
              Looking far ahead helps you anticipate traffic flow, mid-range
              vision keeps you aware of immediate surroundings, and rear/side
              checks ensure you know what’s happening behind and beside you.
              This balanced visual approach reduces surprises, improves reaction
              time, and makes you a smoother, safer driver!
            </p>

            <img
              src={farRearImg}
              alt="Far Near Rear"
              className="mx-auto mt-10 rounded-3xl shadow-xl max-w-4xl"
            />
          </div>
        </section>
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Do you know what a limit point is? Write your thoughts below
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

        {/* ================= LIMIT POINT ================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 fade-up max-w-4xl">
            <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-600" />
              What is your limit point?
            </h2>

            <p className="text-lg text-slate-700">
              Ever noticed how the road ahead seems to meet the horizon and then
              shifts as you drive? That’s the limit point—the furthest point you
              can clearly see on the road. Think of it as your
              distance-to-danger gauge.
              <br />
              The limit point is The furthest point to which you have an
              uninterrupted view of the road surface
            </p>

            <img
              src={limitPoints}
              alt="Limit Points"
              className="mt-8 rounded-3xl shadow-xl mx-auto"
            />
          </div>
        </section>

        <section className="py-20 bg-white relative z-10">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Understanding the{" "}
              <span className="text-red-600">Limit Point</span>
            </h2>

            <p className="text-slate-600 mb-10 text-lg">
              Turn into a hazard-spotting pro! Here’s how:
            </p>

            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border-l-8 border-red-500">
                <h3 className="text-xl font-bold mb-3">
                  🛑 Judging Safe Speeds
                </h3>
                <p className="text-slate-700">
                  If the <strong>limit point</strong> is moving away from you,
                  the road is opening up —{" "}
                  <span className="text-red-600 font-semibold">
                    time to gently accelerate!
                  </span>
                </p>
                <p className="mt-2 text-slate-700">
                  If it’s coming closer —{" "}
                  <span className="text-red-600 font-semibold">
                    ease off and be ready to stop.
                  </span>
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">
                  👀 Spotting Hidden Hazards
                </h3>
                <p className="text-slate-700">
                  The limit point changes with bends, hills and dips — revealing
                  what’s waiting ahead.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">
                  🎯 Navigating Curves Like a Pro
                </h3>
                <p className="text-slate-700">
                  Tracking the limit point lets you adjust speed smoothly
                  without panic braking.
                </p>
              </div>

              <h3 className="text-2xl font-extrabold mt-14">
                Why Observation Makes You an Elite Driver
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-white p-6 rounded-2xl shadow">
                  <h4 className="font-semibold text-lg mb-2">
                    🚨 Better Hazard Awareness
                  </h4>
                  <p className="text-slate-700">
                    Earlier detection gives you more time to react smoothly and
                    safely.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                  <h4 className="font-semibold text-lg mb-2">
                    ⚙️ Smoother, Confident Driving
                  </h4>
                  <p className="text-slate-700">
                    Fewer surprises = calmer, controlled driving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.adi2ndImgcontainer}>
          {" "}
          <h3 onClick={toggleHints} className={styles.adi2ndImgclickText}>
            {" "}
            CLICK TO REVEAL TWO HINTS{" "}
            <FaChevronDown
              className={`${styles.adi2ndImgarrow} ${showHints ? styles.adi2ndImgrotate : ""}`}
            />{" "}
          </h3>{" "}
          <div
            className={`${styles.adi2ndImghintContainer} ${showHints ? styles.adi2ndImgshow : ""}`}
          >
            {" "}
            <div className={styles.adi2ndImghintBox}>
              {" "}
              <img
                src={roadImage}
                alt="2 Second Rule"
                className={styles.adi2ndImgimage}
              />{" "}
              <div className={styles.adi2ndImgtooltip}>
                {" "}
                <strong>2 Second rule</strong>{" "}
                <p>
                  {" "}
                  Have you ever heard the saying only a fool breaks the two
                  second rule? This is the...{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className={styles.adi2ndImghintBox}>
              {" "}
              <img
                src={cloudImage}
                alt="Weather Conditions"
                className={styles.adi2ndImgimage}
              />{" "}
              <div className={styles.adi2ndImgtooltip}>
                {" "}
                <p>
                  {" "}
                  When you’re driving in rain, fog or snow, your vision is
                  impaired. This can affect your observations.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className={styles.adi2ndImgnote}>
            {" "}
            <p>
              {" "}
              On your next drive, take into account the weather conditions and
              the types of roads you are on, try and identify the limit point
              and begin using funnel vision to identify hazards.{" "}
            </p>{" "}
          </div>{" "}
        </div>

        {/* ================= QUIZ CTA ================= */}
        <section className="py-24 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 text-center fade-up">
            <Trophy className="w-14 h-14 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold mb-2">
              Ready for the Quiz?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Test your knowledge and see how well you understand observation.
            </p>

            <Link to="/takequizCatName/Observation-in-the-COAST-Method-for-Advanced-Driving">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full text-lg">
                Start Quiz
              </button>
            </Link>
          </div>
        </section>

        {/* ================= NEXT PAGE ================= */}
        <section className="py-12 bg-white text-center">
          <Link to="/quizModuleseven">
            <button className="px-8 py-3 bg-slate-800 text-white rounded-full">
              Next Page →
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
