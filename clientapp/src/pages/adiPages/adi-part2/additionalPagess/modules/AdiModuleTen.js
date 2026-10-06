import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./AdiModuleOne.module.css";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import backgroundImage from "../../../../../assets/images/ten.jpg";
import roadImg from "../../../../../assets/images/moduleNine1Img.png";
import road2Img from "../../../../../assets/images/moduleNine2Img.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Info,
  Eye,
  Navigation,
  Share2,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleTen() {
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
        `notepadTextspage10_${userId}`,
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
      `notepadTextspage10_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage10_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);

  // /////////////////////////////////////////////////////////////////////////////////////
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
        `notepadText2spage10_${userId}`,
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
      `notepadText2spage10_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage10_${userId}`);
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
        `notepadText3spage10_${userId}`,
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
      `notepadText3spage10_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage10_${userId}`);
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  // //////////////////////////////////////////////////////////////////////////
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
        `notepadText4spage10_${userId}`,
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
      `notepadText4spage10_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage10_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  // ///////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl leading-tight">
              Mastering the <span className="text-purple-400">TUG Method</span>{" "}
              for Safer & Smoother Driving
            </h1>
            <p className="mt-6 max-w-2xl text-slate-200 text-lg">
              Learn how to Take, Use, and Give information effectively to stay
              ahead of hazards and communicate confidently on the road.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-purple-600" />
              Watch & Learn
            </h2>
            <p className="text-slate-700">
              This video explains how the TUG method works in real driving
              scenarios and why it’s essential for safe decision-making.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_myGENJPhVg"
                title="TUG Method"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS TUG ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-fuchsia-700 text-white">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-4xl font-extrabold mb-10 flex items-center gap-4">
            <Info className="w-10 h-10" />
            What’s the TUG Method?
          </h2>

          <div className={styles.adiseventipBox}>
            <p style={{ marginBottom: "1rem" }}>
              Think of the TUG Method as your personal driving toolkit. It’s a
              simple yet powerful way to make sure you stay in control, aware of
              your surroundings, and connected with other road users. Here’s the
              breakdown:
            </p>
            <ul style={{ paddingLeft: "0px" }}>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Take:</strong> Take information. Grab that space to make
                sure you have maximum visibility and safety to take in the most
                information from your observations.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Use:</strong> Take full advantage of the information
                around you to make smarter decisions.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Give:</strong> Let other road users know exactly what
                you’re doing with clear signals and positioning.
              </li>
            </ul>
            <p>
              "Take" is all about positioning your car for the best view and the
              quickest reaction time. It's like being the road superhero, always
              ready for whatever comes your way! 💪
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Examples of Taking Space:</strong>
            </p>
            <ul style={{ paddingLeft: "0px" }}>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Country Roads:</strong>
                If the road’s narrow, shift a little closer to the center to get
                a better view of oncoming traffic.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>Bends:</strong>
                Steer towards the center line to see more around the curve (but
                always check if it’s safe!).
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>Why Does Taking Space Help?</h3>

            <ul style={{ paddingLeft: "0px" }}>
              <li>
                <strong>Better hazard detection</strong> (so you can react
                early).
              </li>
              <li>
                <strong>More time to think and act.</strong>
              </li>
            </ul>
          </div>

          <div className={styles.adiseventipBox}>
            <h3>Activity: Positioning Practice!</h3>
            <p>
              Look at this diagram of a curved country road. Where would you
              position your vehicle for optimal visibility? Remember what we
              have previously studied regarding limit points and funnel vision.
              Write down why that position works best for safety. 🤔
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={roadImg}
              alt=""
              style={{
                marginTop: "1rem",
                maxWidth: "500px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Why does taking space help? Write down your reasoning:
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

      {/* ================= USE ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-4xl font-extrabold mb-8 flex items-center gap-4">
            <Eye className="w-10 h-10" />
            Use – Making the Most of Information
          </h2>
          <p>
            "Use" means you’re actively soaking in everything around you—the
            road signs, the weather, the vehicles ahead, and those cyclists
            weaving in and out. Being a road detective helps you make the best
            choices on the fly! 🕵♂️
          </p>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white/10 rounded-3xl p-8">
              <h3 className="font-bold mb-4">Approaching a Roundabout:</h3>
              <ul style={{ paddingLeft: "0px" }} className="space-y-2">
                <li>
                  ✔ Spot those road signs early to know which exit is yours.
                </li>
                <li>
                  ✔ Observe the other drivers—are they indicating? What’s their
                  position?
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-3xl p-8">
              <h3 className="font-bold mb-4">Urban Driving</h3>
              <ul style={{ paddingLeft: "0px" }} className="space-y-2">
                <li>
                  ✔ Look out for parked cars, pedestrians, and cyclists. They’re
                  ready to pop up in your path, and you need to be ready!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className=" p-8 rounded-3xl shadow-xl fade-up">
            <label className="block mb-2 font-semibold">
              What are some ways you can give information to other road users?
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
      {/* ================= GIVE ================= */}
      <section className="py-20 bg-gradient-to-br from-rose-700 to-pink-700 text-white">
        <div className="container mx-auto px-6 fade-up">
          <h2 className="text-4xl font-extrabold mb-8 flex items-center gap-4">
            <Share2 className="w-10 h-10" />
            Give – Let Others Know Your Moves
          </h2>

          <div className="bg-white/10 rounded-3xl p-8 space-y-4">
            <p>
              "Give" is all about communication! When you’re clear about your
              intentions, other drivers can adjust accordingly, making the road
              safer for everyone.
            </p>

            <div className={styles.adiseventipBox}>
              <h3 style={{ color: "rgb(255, 129, 165)" }}>
                How to Give Information:
              </h3>

              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <strong> 1. Indicators:</strong> Signal early when changing
                  lanes or turning.
                </li>
                <li>
                  <strong>2. Brake Lights:</strong> Gradually press the brake to
                  warn the car behind that you’re slowing down.
                </li>
                <li>
                  <strong>3. Positioning:</strong> Move your car a little to the
                  side before turning to give others the heads-up.
                </li>
              </ul>
            </div>
            <div className={styles.adiseventipBox}>
              <h3 style={{ color: "rgb(255, 129, 165)" }}>
                Example: Changing Lanes on the Motorway:
              </h3>

              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <strong> Signal early.</strong>
                </li>
                <li>
                  <strong>Check your mirrors and blind spots.</strong>
                </li>
                <li>
                  <strong>Change lanes smoothly</strong> so everyone’s on the
                  same page.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 bg-white">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className=" p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Imagine you’re about to merge onto a busy motorway. Write out the
              steps you’d take to signal, position, and change lanes safely and
              clearly. Think about the other road users—how would you make sure
              everyone knows your next move?
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

      {/* ================= FINAL ACTIVITY ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6  fade-up">
          <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-4">
            <AlertTriangle className="w-10 h-10 text-purple-600" />
            Final Activity: TUG in Action
          </h2>

          <div className="bg-white p-10 rounded-3xl shadow-xl space-y-4">
            <p>
              Put your TUG skills to the test! Imagine you’re driving on a rural
              road, and there's a sharp bend ahead. An oncoming car is visible
              but distant, and the road narrows right after the bend.
            </p>
            <div className={styles.adiseventipBox}>
              <h3>Write down your response in a step-by-step format:</h3>
              <p>
                <strong>1. How would you take space </strong> to maximise
                visibility and safety?
              </p>
              <p>
                <strong>2. How would you use the information</strong> from the
                road and other vehicles to make the best decision?
              </p>
              <p>
                <strong>How would you give information</strong> to the oncoming
                driver and other road users?
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <img
              src={road2Img}
              alt="Final Scenario"
              className="mx-auto max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className=" p-8 rounded-3xl shadow-xl fade-up">
            <label className="block mb-2 font-semibold">
              Once you’ve written it, review your plan with an instructor or a
              fellow learner.
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
      {/* ================= NAV + QUIZ ================= */}
      <section className="py-16 bg-white text-center">
        <Link to="/quizModuleEleven">
          <button className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg">
            Next Page
          </button>
        </Link>

        <div className="mt-14 bg-slate-50 p-10 rounded-3xl max-w-xl mx-auto shadow-xl">
          <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
          <p className="mb-6">15 Questions</p>
          <Link to="/takequizCatName/Mastering-the-TUG-Method">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
