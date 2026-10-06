import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import backgroundImage from "../../../../../assets/images/Anticipation.jpg";
import { useSelector } from "react-redux";

import {
  Eye,
  Brain,
  AlertTriangle,
  Footprints,
  Wind,
  HelpCircle,
  PlayCircle,
  ArrowRight,
  Trophy,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleSeven() {
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
        `notepadTextspage7_${userId}`,
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
      `notepadTextspage7_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage7_${userId}`);
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
        `notepadText2spage7_${userId}`,
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
      `notepadText2spage7_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage7_${userId}`);
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
        `notepadText3spage7_${userId}`,
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
      `notepadText3spage7_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage7_${userId}`);
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
        `notepadText4spage7_${userId}`,
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
      `notepadText4spage7_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage7_${userId}`);
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////
  const [text5, setText5] = useState("");
  const [savedTexts5, setSavedTexts5] = useState([]); // Store multiple saved texts
  const [isEditing5, setIsEditing5] = useState(false); // Track if the user is editing
  const [editIndex5, setEditIndex5] = useState(null);
  const textareaRef5 = useRef(null);

  // ////////////////////////////////////////////////////////////////////////
  const handleChange5 = (e) => {
    setText5(e.target.value);
  };

  const saveText5 = () => {
    if (text5.trim()) {
      // If editing an existing item, replace it
      if (isEditing5) {
        const updatedTexts5 = [...savedTexts5];
        updatedTexts5[editIndex5] = text5;
        setSavedTexts5(updatedTexts5);
        setIsEditing5(false); // Reset editing flag
        setEditIndex5(null);
      } else {
        setSavedTexts5([...savedTexts5, text5]);
      }
      localStorage.setItem(
        `notepadText5spage7_${userId}`,
        JSON.stringify([...savedTexts5, text5]),
      );

      setText5("");
    }
  };

  const editText5 = (index) => {
    setIsEditing5(true);
    setEditIndex5(index);
    setText5(savedTexts5[index]); // Set the text to be edited
    if (textareaRef5.current) {
      textareaRef5.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delete the selected text
  const deleteText5 = (index) => {
    const updatedTexts5 = savedTexts5.filter((_, i) => i !== index);
    setSavedTexts5(updatedTexts5);
    localStorage.setItem(
      `notepadText5spage7_${userId}`,
      JSON.stringify(updatedTexts5),
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(`notepadText5spage7_${userId}`);
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  // ///////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <main className="w-full overflow-hidden font-sans">
        {/* ================= HERO BANNER ================= */}
        <section className="relative h-[75vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl">
                Anticipation in the{" "}
                <span className="text-red-500">COAST Method</span>
              </h1>

              <p className="mt-6 text-lg text-slate-200 max-w-2xl">
                Learn how advanced drivers stay ahead of danger by predicting
                hazards before they happen.
              </p>
            </div>
          </div>
        </section>

        {/* ================= VIDEO ================= */}
        <section className="bg-white">
          {/* ================= INTRO CONTENT ================= */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 fade-up">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">
                  What is <span className="text-red-600">Anticipation?</span> &
                  Why Does It Matter?
                </h2>

                <p className="text-slate-700 leading-relaxed mb-4">
                  Imagine you’re watching a movie, and you just know what’s
                  going to happen next. That’s anticipation— except in driving,
                  it’s not just about guessing right, it’s about staying safe
                  and in control.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Anticipation is your ability to predict what might happen on
                  the road based on what you see and know. It’s what separates
                  reactive drivers (who panic at surprises) from proactive
                  drivers (who are always one step ahead).
                </p>
                <div className="bg-slate-50 p-4 rounded-3xl shadow-xl border-l-8 border-red-500">
                  <p className="text-slate-700 leading-relaxed">
                    In advanced driving, anticipation is key. The examiner in
                    your ADI Part 2 exam will be watching to see if you can read
                    the road like a pro, spot risks early, and make smooth,
                    calculated decisions. No crystal ball required—just sharp
                    observation and smart thinking!
                    <br />
                    <br />
                    Think back to what you learned during Observation, You can
                    anticipate actions by doing good observations!
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
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dyvWRDGJI58"
                      title="Anticipation Video"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= HINTS ================= */}
          <section className="py-20 bg-gradient-to-br from-red-50 to-white">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-3">
                <Brain className="text-red-600 w-10 h-10" />
                Your Anticipation Hints
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* CARD */}
                {[
                  {
                    icon: Eye,
                    title: " Look Far Ahead and Stay Aware",
                    text: "The road isn’t just what’s right in front of you—it’s everything happening in your surroundings.🎙 Try a commentary drive—say out loud everything you see and what you think might happen next. 🪞 Keep checking your mirrors—what’s happening behind and to your sides matters just as much as what’s in front!",
                  },
                  {
                    icon: Footprints,
                    title: "Read Other Road Users Like a Detective",
                    text: "People are predictable—if you know what to look for. Ask yourself:❓ What’s happening now? ❓ What might happen next? Examples:🚗 A parked car with brake lights on? It’s probably about to move. 🚶‍♀️ A pedestrian at a crossing looking at traffic? They might step out. 🚴‍♂️ A cyclist glancing over their shoulder? They could be about to turn.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Let Road Signs and Markings Be Your Guide",
                    text: "Signs aren’t just there for decoration—they’re telling you what’s coming! 🛑 'Give Way' sign? Time to slow down and scan for traffic. ↩️ Sharp bend sign? Reduce speed before you get there, not during the turn!",
                  },
                  {
                    icon: Wind,
                    title: "Adjust for Weather and Road Conditions",
                    text: "Rain, fog, or ice? Time to think ahead. 🌧 Wet roads? Increase your stopping distance and drive smoothly. 🌫 Fog ahead? Start scanning for cars with dim tail lights appearing suddenly.",
                  },
                  {
                    icon: HelpCircle,
                    title: "Use the 'What If?' Game",
                    text: "This is where you train your anticipation reflex: ❓ What if that driver suddenly slams on the brakes ❓ What if the cyclist swerves? ❓ What if the light turns red just as I approach? By constantly asking yourself these questions, you’ll be ready for anything—instead of being caught off guard.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-red-500 hover:shadow-2xl transition"
                  >
                    <item.icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  What are the weather and road conditions?
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
          <section className="py-20 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  2. What potential hazards might I encounter in this
                  environment (e.g., pedestrians, roundabouts, parked cars)?
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
                  3. How can I prepare for these hazards before setting off?
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
          <section className="py-20 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  4. - After the drive, write down: - The hazards you
                  identified. - How you responded to them.
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
          <section className="py-20 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  Any hazards you missed and how you could improve next time.
                </label>
                <textarea
                  ref={textareaRef5}
                  value={text5}
                  onChange={handleChange5}
                  rows={5}
                  className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-emerald-500"
                  placeholder="Write your thoughts here..."
                />
                <button
                  onClick={saveText5}
                  className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
                >
                  {isEditing5 ? "Update" : "Save"}
                </button>

                <div className="mt-6">
                  {savedTexts5.length === 0 ? (
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
                      {savedTexts5.map((savedText, index) => (
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
                              onClick={() => editText5(index)}
                              className="cursor-pointer text-blue-500"
                            />
                            <Trash2
                              onClick={() => deleteText5(index)}
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

          {/* ================= FEEDBACK ================= */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 fade-up">
              <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl max-w-4xl">
                <h2 className="text-3xl font-extrabold mb-4">
                  What is Anticipation and Why Does It Matter?
                </h2>
                <p className="text-slate-700 mb-2">
                  Ask a trainer, mentor, or trusted observer to review your
                  driving and provide feedback on your anticipation.
                </p>
                <p className="text-slate-600">
                  Discuss areas where you excelled and where improvement is
                  needed.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-red-50 to-white">
            <div className="container mx-auto px-6 text-center fade-up">
              <Trophy className="w-14 h-14 text-red-600 mx-auto mb-4" />
              <h2 className="text-4xl font-extrabold mb-2">
                Ready for the Quiz?
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Test your knowledge and see how well you understand observation.
              </p>

              <Link to="/takequizCatName/Anticipation-in-the-COAST-Method-for-Advanced-Driving">
                <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full text-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </section>

          {/* ================= NEXT PAGE ================= */}
          <section className="py-12 bg-white text-center">
            <Link to="/quizModule-eight">
              <button className="px-8 py-3 bg-slate-800 text-white rounded-full">
                Next Page →
              </button>
            </Link>
          </section>
        </section>
        {/* ================= NAVIGATION ================= */}
      </main>
    </>
  );
}
