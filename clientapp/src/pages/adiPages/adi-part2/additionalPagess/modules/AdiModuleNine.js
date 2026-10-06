import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Clock,
  AlertTriangle,
  Timer,
  Car,
  ShieldCheck,
  FilePenLine,
  Trash2,
  Eye,
  Gauge,
  Route,
  Brain,
  Trophy,
} from "lucide-react";

import backgroundImage from "../../../../../assets/images/time.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleNine() {
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
        `notepadTextspage9_${userId}`,
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
      `notepadTextspage9_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage9_${userId}`);
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
        `notepadText2spage9_${userId}`,
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
      `notepadText2spage9_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage9_${userId}`);
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  // /////////////////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
              Time in the <span className="text-cyan-400">COAST</span> Method
              for Advanced Driving
            </h1>
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BNxcsHbxKv8"
                title="Time in the COAST Method"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Clock className="text-cyan-500" />
                Watch Our Video
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEXTAREA SECTION ================= */}
      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl fade-up">
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
                  style={{ paddingLeft: "0px" }}
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

      {/* ================= WHY TIME MATTERS ================= */}

      {/* ================= WHY TIME MATTERS ================= */}
      <section className="py-20 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-10 fade-up">
            <Clock className="w-10 h-10 text-cyan-300" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Why Does <span className="text-cyan-300">Time</span> Matter in
              Driving?
            </h2>
          </div>

          {/* Intro Cards */}
          <div className="grid lg:grid-cols-2 gap-8 fade-up">
            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl text-white">
              <p className="leading-relaxed">
                Imagine driving is like playing chess—if you only focus on the
                piece right in front of you, you’ll always be caught off guard.
                But if you plan three moves ahead, you can anticipate, adapt,
                and stay in control. That’s exactly what time management in
                driving is all about!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl text-white">
              <p className="leading-relaxed">
                Time isn’t just about how fast you go—it’s about how much room
                you give yourself to think, react, and make the right decisions.
                The more time you allow, the smoother, safer, and less stressful
                your journey will be. Plus, mastering time is a major part of
                the COAST method, helping you drive with confidence and
                professionalism.
              </p>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="mt-12 bg-gradient-to-br from-rose-600 to-red-900 p-10 rounded-3xl shadow-2xl fade-up">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-9 h-9 text-cyan-300" />
              <h3 className="text-2xl font-bold text-cyan-300">
                More Time = Fewer Surprises
              </h3>
            </div>

            <p className="text-white mb-4">
              Ever slammed on the brakes at the last second? Or misjudged a gap
              at a roundabout? That’s what happens when you don’t give yourself
              enough time. When you manage time well, you:
            </p>

            <ul
              style={{ paddingLeft: "0px" }}
              className="grid sm:grid-cols-2 gap-4 text-white list-disc list-inside"
            >
              <li>
                <strong>Spot hazards early</strong> and react before they become
                a problem.
              </li>
              <li>
                <strong>Stay calm</strong> under pressure, avoiding last-minute
                panic moves.
              </li>
              <li>
                <strong>Glide through traffic</strong> smoothly, instead of
                jerky stops.
              </li>
              <li>
                <strong>Create a safety buffer</strong>, reducing close calls.
              </li>
            </ul>

            <p className="mt-4 text-white">
              In short—time is your best tool for stress-free, professional
              driving.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TIME MANAGEMENT PRO ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <Gauge className="w-10 h-10 text-cyan-300" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              How to Be a{" "}
              <span className="text-cyan-300">Time-Management Pro</span> on the
              Road
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl fade-up">
              <Eye className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">
                Look Ahead to Your Limit Points
              </h3>
              <p className="text-white mt-2">
                Think of your eyes like a radar scanning for threats far ahead.
                By spotting bends, traffic lights, or merging vehicles early,
                you can predict what’s coming and adjust your approach
                smoothly—no more last-minute surprises!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl fade-up">
              <Gauge className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">
                Adjust Speed to Conditions
              </h3>
              <p className="text-white mt-2">
                Driving in heavy rain? Thick fog? Rush hour chaos? These
                situations demand more reaction time. Slowing down slightly
                gives you extra moments to process what’s happening, so you’re
                never caught off guard.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl fade-up">
              <Route className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">
                Master the Art of a Smooth Approach
              </h3>
              <ul
                style={{ paddingLeft: "0px" }}
                className="text-white mt-2 list-disc list-inside space-y-2"
              >
                <li>
                  <strong>Junctions</strong> – Slow down in advance so you don’t
                  have to stop suddenly.
                </li>
                <li>
                  <strong>Roundabouts</strong> – Use time to assess gaps and
                  enter confidently.
                </li>
                <li>
                  <strong>Traffic lights</strong> – If you see an amber light,
                  use the extra seconds to decide whether to stop or go safely.
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl fade-up">
              <AlertTriangle className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">
                Give Hazards the Time They Deserve
              </h3>
              <p className="text-white mt-2">
                People and cars can be unpredictable. A pedestrian might step
                onto the road. A parked car could pull out. Instead of reacting
                too late, give yourself extra time to observe and anticipate.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl fade-up">
              <Brain className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">
                More Space = More Time
              </h3>
              <p className="text-white mt-2">
                Keeping a safe distance (like the 2-second rule) isn’t just
                about avoiding crashes—it’s about buying yourself time to react.
                The more space you create, the longer you have to make smart
                decisions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 rounded-3xl shadow-xl fade-up">
              <Car className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">
                When Time Management is a Game-Changer
              </h3>
              <ul
                style={{ paddingLeft: "0px" }}
                className="text-white list-disc list-inside space-y-2 mt-2"
              >
                <li>
                  <strong>Merging Lanes</strong> – Don’t just squeeze in at the
                  last second! Use time to assess gaps and merge smoothly.
                </li>
                <li>
                  <strong>Overtaking</strong> – Rushed overtakes are risky. Take
                  time to scan the road ahead and make sure there’s enough
                  space.
                </li>
                <li>
                  <strong>Bends & Corners</strong> – Approaching too fast? Bad
                  move. Give yourself time to adjust speed and position before
                  the bend.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHALLENGE ================= */}
      <section className="py-20 bg-gradient-to-br from-fuchsia-600 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <AlertTriangle className="w-10 h-10 text-purple-200" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Ready for a <span className="text-purple-200">Challenge?</span>
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur p-10 rounded-3xl shadow-2xl fade-up">
            <h3 className="text-2xl font-bold text-purple-200 mb-4">
              Pre-Drive Planning
            </h3>

            <ul
              style={{ paddingLeft: "0px" }}
              className="text-white list-disc list-inside space-y-2"
            >
              <li>Do I know my route and any tricky areas I might face?</li>
              <li>Will weather or traffic affect my timing today?</li>
              <li>
                Am I mentally prepared to stay calm and anticipate hazards?
              </li>
            </ul>

            <p className="mt-4 text-white">
              <strong>Smooth Approaches Challenge:</strong>For 10 minutes, ease
              off the accelerator early when approaching junctions, roundabouts,
              or traffic lights. Notice how much smoother and stress-free your
              driving feels.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL QUESTION ================= */}
      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl fade-up">
            <label className="block mb-2 font-semibold">
              Have you ever experienced a situation where better timing could
              have improved your reaction or decision?
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center  fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Final Thought: Are You Controlling Time or Is It Controlling You?
          </h2>
          <p>
            Great drivers don’t just react —they stay ahead of the game.
            Managing time well gives you the power to drive smoother, smarter,
            and safer. So, next time you're behind the wheel, remember: more
            time means more control!
          </p>
        </div>
      </section>

      {/* ================= QUIZ ================= */}

      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 text-center fade-up">
          <Trophy className="w-14 h-14 text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold mb-2">Ready for the Quiz?</h2>
          <p className="text-lg text-slate-700 mb-6">
            Test your knowledge and see how well you understand observation.
          </p>

          <Link to="/takequizCatName/Time-in-the-COAST-Method-for-Advanced-Driving">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full text-lg">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>

      {/* ================= NEXT PAGE ================= */}
      <section className="py-12 bg-white text-center">
        <Link to="/quizModule-Ten">
          <button className="px-8 py-3 bg-slate-800 text-white rounded-full">
            Next Page →
          </button>
        </Link>
      </section>

      {/* ================= FINAL CTA ================= */}
    </main>
  );
}
