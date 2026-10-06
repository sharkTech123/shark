import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import backgroundImage from "../../../../assets/images/risk-management.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  AlertTriangle,
  Users,
  PlayCircle,
  ArrowRight,
  ClipboardCheck,
  Trash2,
  FilePenLine,
} from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Module14() {
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
  // /////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page14_${userId}`,
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
      `notepadTexts1Part3page14_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page14_${userId}`,
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
        `notepadTexts2Part3page14_${userId}`,
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
      `notepadTexts2Part3page14_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page14_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////
  const cards = [
    {
      title: "Risk Management",
      content: `
      This is about how well the instructor identifies, communicates, and manages safety risks during a driving lesson. The examiner is looking to see that the
instructor takes proactive steps to ensure safety.
      - Identifying potential hazards (e.g., busy junctions, pedestrians, incorrect road positioning).
      - Intervening appropriately — verbally or physically (dual controls) — to avoid danger.
      - Giving timely instructions to avoid placing the learner in unsafe situations.
      - Encouraging self-awareness in the learner, helping them recognise risks and think about safe decisions.
      - Not letting the learner drive beyond their ability, especially in complex situations.

      You’ll be marked poorly if:
      - You allow the pupil to make dangerous mistakes without intervention.
      - You miss obvious hazards or give unclear directions that put the learner or others at risk.
      `,
    },
    {
      title: "🧭 Responsibility",
      content: `
      "Sharing responsibility" during a driving lesson is a big concept in the ADI Part 3 exam.
      It means:
      - Balancing control between instructor and learner.
      - Helping learners gradually take more responsibility.
      - Staying ready to intervene if needed.

      It's not just instructing or controlling — it's about empowering safe, independent driving.
      `,
    },
  ];

  ///////////////////////////////////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden font-sans bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-indigo-900/70" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-4xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Risk Management & <br />
                <span className="text-emerald-400">Responsibility</span>
              </h1>

              <p className="text-slate-200 text-lg">
                Learn how to balance safety, independence, and shared
                responsibility during ADI Part 3 lessons.
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

      <section className="py-10 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What do you think is meant by Risk Management and Responsibility?
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

      {/* ================= FLIP CARDS ================= */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 fade-up">
            🚗 Driving Lesson Mastery
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="fade-up bg-white rounded-3xl shadow-xl p-8 border-t-8 border-emerald-500"
              >
                <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-700 whitespace-pre-line">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTENT BLOCKS ================= */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6">
          {/* MAIN HEADING */}
          <div className="max-w-3xl mb-14 fade-up">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Understanding the{" "}
              <span className="text-emerald-500">
                Balance of Responsibility
              </span>
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed">
              Teaching safe driving isn’t just about control — it’s about
              knowing when to guide and when to step back.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🛡️ Your Role as the Safety Net
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                As a driving instructor, you hold the full licence, you have the
                experience, and you’re the safety net. That means you’ve got a
                duty—not just to your pupil, but to every other road user—to
                make sure every lesson happens in a controlled, safe
                environment.
              </p>
              <p className="text-slate-700 leading-relaxed">
                But here's the twist: your learner is behind the wheel.
                Responsibility doesn’t disappear — it starts to shift.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-indigo-500">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🔄 So… Who Does What?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                Early on, learners are focused on basic survival — clutch
                control, steering, not stalling.
                <span className="font-semibold text-indigo-500">
                  {" "}
                  That’s normal.
                </span>
              </p>
              <p className="text-slate-700 leading-relaxed">
                Their ability to manage wider risks is limited, which means your
                job is to clearly define roles and adjust them gradually as
                confidence and competence grow.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="fade-up bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                ⚠️ Why It Matters More Than You Think
              </h2>
              <p className="leading-relaxed">
                New drivers are statistically more likely to be involved in an
                accident within two years of passing their test.
              </p>
              <p className="leading-relaxed mt-3 text-emerald-300 font-semibold">
                This isn’t usually about bad luck — it’s about undeveloped risk
                perception and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCRIPT ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="max-w-3xl mb-12 fade-up">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Example <span className="text-emerald-500">Guided Script</span>
            </h3>
            <p className="text-slate-600 text-lg">
              A real-world example of how responsibility is shared through
              guided coaching and clear communication.
            </p>
          </div>

          {/* Chat Container */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 fade-up">
            {/* Instructor */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                I
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-emerald-600">
                    INSTRUCTOR:
                  </span>{" "}
                  “Alright Maya, if you look ahead you’ll notice a small shop
                  with a red sign on the left. Just before that is a road on the
                  right, and I’d like you to take that turning.”
                </p>
              </div>
            </div>

            {/* Learner */}
            <div className="flex items-start gap-4 justify-end text-right">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-indigo-600">MAYA:</span>{" "}
                  “Okay, I see it.”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                I
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-emerald-600">
                    INSTRUCTOR:
                  </span>{" "}
                  “Great. As we approach, have a look in your centre mirror to
                  check who’s behind us, and then glance at your right-hand
                  mirror to see if anything’s coming up alongside us. Let me
                  know what you notice.”
                </p>
              </div>
            </div>

            {/* Learner */}
            <div className="flex items-start gap-4 justify-end text-right">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-indigo-600">MAYA:</span>{" "}
                  “Nothing in either mirror, all clear.”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                I
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-emerald-600">
                    INSTRUCTOR:
                  </span>{" "}
                  “Perfect. Now, let’s let other road users know our
                  intention—go ahead and switch on your right indicator.”
                </p>
              </div>
            </div>

            {/* Learner */}
            <div className="flex items-start gap-4 justify-end text-right">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-indigo-600">MAYA:</span>{" "}
                  “Right signal on.”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                I
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-emerald-600">
                    INSTRUCTOR:
                  </span>{" "}
                  “Nice. Now come off the accelerator gently and begin to apply
                  some light pressure on the brake. Let the speed drop and tell
                  me when you’ve reached about 10 miles per hour.”
                </p>
              </div>
            </div>

            {/* Learner */}
            <div className="flex items-start gap-4 justify-end text-right">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-indigo-600">MAYA:</span>{" "}
                  “Okay... that’s 10 now.”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                I
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-emerald-600">
                    INSTRUCTOR:
                  </span>{" "}
                  “Good. Now press the clutch pedal all the way down, shift from
                  second gear into first, and bring the clutch pedal back up
                  fully”
                </p>
              </div>
            </div>

            {/* Learner */}
            <div className="flex items-start gap-4 justify-end text-right">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-indigo-600">MAYA:</span>{" "}
                  “Done!”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                I
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-emerald-600">
                    INSTRUCTOR:
                  </span>{" "}
                  “Excellent. Now, as we approach the junction, look into the
                  new road to make sure it's safe and clear. Begin your turn to
                  the right, steering as needed, and once you’ve made the turn,
                  gently straighten the wheel so we’re driving nicely in the new
                  road.”
                </p>
              </div>
            </div>

            {/* Learner */}
            <div className="flex items-start gap-4 justify-end text-right">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 max-w-lg">
                <p className="text-slate-700">
                  <span className="font-semibold text-indigo-600">MAYA:</span>{" "}
                  “Alright! That felt smooth!”
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        {/* =========================
      FROM GUIDED TO INDEPENDENT
  ========================== */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2">
            🔄 From Guided to Independent
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Risk-sharing isn’t static. As your learner gains experience, you
            gradually scale back your input. Early on, it’s full guidance. Then
            prompting. Eventually, they take full responsibility.
          </p>

          <div className="flex flex-wrap gap-3 my-6">
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
              👣 Full Guidance
            </span>
            <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold">
              👉 Prompting
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
              🚗 Independent Driving
            </span>
          </div>

          <p className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg font-medium text-emerald-800">
            That’s when you know they’re test-ready — and more importantly,
            road-ready.
          </p>

          <p className="mt-4 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg text-orange-800">
            ⚠️ If you agree on independent driving, don’t jump back in with
            constant instructions. That’s not support — it’s over-instruction,
            and it will be noticed during your Part 3 or Standards Check.
          </p>
        </div>

        {/* =========================
      COMMON PITFALLS
  ========================== */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2">
            🚧 Common Pitfalls (and How to Avoid Them)
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            New instructors often explain responsibility clearly — then abandon
            it when things feel uncomfortable. If you constantly take over, your
            pupil never learns how to manage risk or build confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="font-bold text-red-700 mb-3">❌ Avoid</h4>
              <ul
                style={{ padding: "0px" }}
                className="space-y-2 text-slate-700"
              >
                <li>• Taking control too early</li>
                <li>• Panicking under pressure</li>
                <li>• Ignoring agreed roles</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h4 className="font-bold text-green-700 mb-3">✅ Do Instead</h4>
              <ul
                style={{ padding: "0px" }}
                className="space-y-2 text-slate-700"
              >
                <li>• Keep communication open</li>
                <li>• Adjust roles gradually</li>
                <li>• Coach — don’t control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* =========================
      ACTIVITY SCENARIO
  ========================== */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2">
            🎯 Activity Scenario
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Your job is empowerment. You’re not just teaching driving skills —
            you’re helping learners become safe, self-reliant drivers who can
            manage risk without you.
          </p>

          <div className="bg-slate-100 rounded-2xl p-6 mb-6">
            <p className="font-bold mb-3">
              Ask yourself at the start of every lesson:
            </p>
            <ul style={{ padding: "0px" }} className="space-y-2 text-slate-700">
              <li>🤔 Does my pupil know their responsibility today?</li>
              <li>🧠 Do I know what I’m managing?</li>
              <li>🤝 Are we both comfortable with this setup?</li>
            </ul>
          </div>

          <p className="font-semibold text-slate-800">
            Risk management isn’t a lecture — it’s a partnership. Make it a
            two-way street, and your learners will thank you long after test
            day.
          </p>
        </div>

        {/* =========================
      SCENARIO FOOTER
  ========================== */}
        <div className="text-center text-xl font-extrabold">
          🚗 Real-World Scenario
        </div>

        <div className="bg-slate-900 text-slate-200 rounded-3xl p-8 md:p-10">
          <p className="leading-relaxed">
            You’re giving a driving lesson to a 17-year-old student named
            <span className="font-semibold text-white"> Jamie</span>. This is
            their third lesson. The first two were in quiet residential areas
            focusing on basic controls, turns, and stops. Today, you’re
            introducing a moderately busy main road for the first time.
          </p>
        </div>
      </section>
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Write down how you would manage responsibility and what potential
              risks there could be.
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
      {/* ================= CTA ================= */}
      <section className="py-10 bg-slate-900 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Continue?</h2>
        <p className="text-slate-300 mb-8">
          Move forward with your ADI Part 3 training.
        </p>

        <div className="flex justify-center gap-6">
          <Link to="/intervention">
            <button className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 font-semibold shadow-xl">
              Next Page
            </button>
          </Link>

          <Link to="/takequizCatName/risk-management-responsbilities">
            <button className="px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-semibold shadow-xl">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
