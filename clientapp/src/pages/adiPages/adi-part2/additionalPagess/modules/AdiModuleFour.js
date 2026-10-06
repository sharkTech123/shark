import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ChevronDown,
  Pencil,
  Trash2,
  Brain,
  Eye,
  Telescope,
  ArrowLeftRight,
  Timer,
  PlayCircle,
} from "lucide-react";

import backgroundImage from "../../../../../assets/images/coast.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleFour() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [visible, setVisible] = useState([false, false, false, false, false]);

  const toggle = (index) => {
    const copy = [...visible];
    copy[index] = !copy[index];
    setVisible(copy);
  };

  /* ================= NOTEPAD LOGIC (UNCHANGED) ================= */
  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const saveText = () => {
    if (!text.trim()) return;

    let updated;
    if (isEditing) {
      updated = [...savedTexts];
      updated[editIndex] = text;
      setIsEditing(false);
      setEditIndex(null);
    } else {
      updated = [...savedTexts, text];
    }

    setSavedTexts(updated);
    localStorage.setItem(
      `notepadTextspage4_${userId}`,
      JSON.stringify(updated),
    );
    setText("");
  };

  const editText = (index) => {
    setText(savedTexts[index]);
    setEditIndex(index);
    setIsEditing(true);
    textareaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const deleteText = (index) => {
    const updated = savedTexts.filter((_, i) => i !== index);
    setSavedTexts(updated);
    localStorage.setItem(
      `notepadTextspage4_${userId}`,
      JSON.stringify(updated),
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem(`notepadTextspage4_${userId}`);
    if (saved) setSavedTexts(JSON.parse(saved));
  }, []);

  /* ================= GSAP ANIMATION ================= */
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

  /* ================= COAST DATA ================= */
  const coast = [
    {
      title: "C – Concentration: Stay Sharp, Stay Safe!",
      icon: <Brain className="text-red-500" />,
      text: "Driving isn’t the time for multitasking. Your car, the road, and other drivers deserve your full attention. One quick glance at your phone or a daydream about dinner could mean missing a crucial hazard. Stay locked in!",
      extra: [
        `Put your phone on "Do Not Disturb"—that notification can wait!`,
        "Try mindfulness techniques, like taking deep breaths at red lights, to stay present.",
        "If you're on a long drive, take regular breaks—your brain needs rest too!",
      ],
      text2:
        "🚦 Quick Challenge: Can you drive for 10 minutes without any distractions (no music changes, no taking your eyes off the road, no zoning out)? Give it a go!",
    },
    {
      title: "O – Observation: Eyes Everywhere!",
      icon: <Eye className="text-red-500" />,
      text: "Think of yourself as a detective scanning for clues. The more you see, the better you can react. Look far ahead, check your mirrors often, and always be aware of what's happening around you.",
      extra: [
        "Mirrors, Mirrors, Mirrors! Before you brake, accelerate, turn, or change lanes—check your mirrors",
        "Look as far down the road as possible spotting a hazard early gives you time to react.",
        "Keep an eye on pedestrians, cyclists, and vehicles that might do something unpredictable.",
      ],
      text2:
        "🕵 Quick Challenge:While driving, count how many times you check your mirrors in five minutes. The more, the better!",
    },
    {
      title: "A – Anticipation: Predict & Prepare!",
      icon: <Telescope className="text-red-500" />,
      text: "Driving is like a game of chess—you need to think ahead. If a ball rolls into the street, **what happens next?** If a car ahead is slowing down, why? Being one step ahead helps you stay out of trouble.",
      extra: [
        'Ask yourself, "What if?"– What if that cyclist suddenly swerves? What if the car ahead slams its brakes?',
        "Look for clues—brake lights, pedestrians near crosswalks, or a car creeping forward at a junction.",
        "Adjust your speed and position to **stay in control** of the situation.",
      ],
      text2:
        "🔮 Quick Challenge: On your next drive, try to predict what a driver or pedestrian will do before they do it. Were you right?",
    },
    {
      title: "↔S – Space: Keep Your Bubble!",
      icon: <ArrowLeftRight className="text-red-500" />,
      text: "Ever had someone tailgate you? Annoying, right? Space is your safety net—it gives you time to react and avoid last-second panic stops.",
      extra: [
        "Follow the two-second rule—pick a stationary object, and when the car ahead passes it, you should take at least two seconds to reach the same spot. (In bad weather, make it four seconds!)",
        "Leave extra room when passing parked cars—someone might open a door unexpectedly.",
        "Stay out of blind spots—if you can’t see a truck’s mirrors, they can’t see you!",
      ],
      text2:
        "↔️ Quick Challenge: On your next drive, try to maintain a safe following distance. Can you do it without looking at your speedometer?",
    },
    {
      title: "T – Time: No Need to Rush!",
      icon: <Timer className="text-red-500" />,
      text: "Speeding and last-minute lane changes are recipes for stress and mistakes. Give yourself plenty of time to react, and you’ll be a safer, calmer driver.",
      extra: [
        "Leave earlier—rushing leads to risky decisions.",
        "Slow down in complex driving situations (like busy intersections or unfamiliar roads).",
        "Expect delays—traffic, construction, and slow drivers happen! A relaxed mindset keeps you in control.",
      ],
      text2:
        "⏳ Quick Challenge: On your next drive, try to leave earlier and avoid rushing. Can you do it without feeling stressed?",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[75vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white max-w-3xl">
              The <span className="text-red-500">COAST</span> Method in Advanced
              Driving
            </h1>
            <p className="text-slate-200 mt-6 max-w-2xl text-lg">
              Master professional driving by thinking ahead, managing space, and
              staying fully aware.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="bg-white">
        <section className="py-12 bg-slate-50">
          <section className="py-12  fade-up">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold flex items-center gap-3">
                  <PlayCircle className="w-9 h-9 text-emerald-600" /> Watch Our
                  Video
                </h2>
                <p>
                  Now you have completed your first initial assessment and you
                  have base knowledge of what the examiner is going to be
                  looking for in the exam. Lets look at the COAST model.
                </p>
                <p className="mt-3">
                  The COAST method is a foundational approach in advanced
                  driving that focuses on proactive, safe, and efficient
                  driving. COAST stands for Concentration, Observation,
                  Anticipation, Space, and Time. This method encourages drivers
                  to stay ahead of potential hazards, reduce risks, and drive
                  more smoothly.
                </p>
                <p className="mt-3 italic text-slate-600">
                  “For advanced drivers, such as those preparing for the ADI
                  Part 2 exam, mastering the COAST method demonstrates
                  professionalism and competence on the road.”
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/6I_4SAGRT7g"
                    title="Advanced Driving"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 flex items-center gap-3">
                  <PlayCircle className="text-emerald-500 w-7 h-7" />
                  <h3 className="font-semibold text-lg">Watch Our Video</h3>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* ================= COAST CARDS ================= */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
            {coast.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl shadow-xl p-8 fade-up"
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
                <p className="text-slate-700 mb-6">{item.text}</p>
                <button
                  onClick={() => toggle(i)}
                  className="group inline-flex items-center gap-3 px-4 py-2 rounded-full 
             bg-gradient-to-r from-red-600 to-red-500 
             text-white font-semibold shadow-xl 
             hover:shadow-2xl hover:scale-[1.03] active:scale-95 
             transition-all duration-300"
                >
                  Click Me
                  <ChevronDown
                    className={`transition ${visible[i] ? "rotate-180" : ""}`}
                  />
                </button>
                {visible[i] && (
                  <ul
                    className="mt-4 space-y-2 text-slate-600"
                    style={{ paddingLeft: "0px" }}
                  >
                    {item.extra.map((x, idx) => (
                      <li key={idx}>✔ {x}</li>
                    ))}
                  </ul>
                )}{" "}
                <p className="text-slate-700 mt-6">{item.text2}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= NOTEPAD ================= */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <label className="block text-lg font-semibold mb-3">
              Think about what situation or scenario on the road that you would
              use the Coast method? How will this method improve your driving,
              and why will this have a good impact on other road users?
            </label>

            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="5"
              className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-red-500"
            />

            <button
              onClick={saveText}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full"
            >
              {isEditing ? "Update" : "Save"}
            </button>

            <ul className="mt-6 space-y-4" style={{ paddingLeft: "0px" }}>
              {savedTexts.map((t, i) => (
                <li
                  key={i}
                  className="bg-white p-4 rounded-xl shadow flex justify-between items-start"
                >
                  <p>{t}</p>
                  <div className="flex gap-3">
                    <Pencil
                      onClick={() => editText(i)}
                      className="cursor-pointer text-blue-600"
                    />
                    <Trash2
                      onClick={() => deleteText(i)}
                      className="cursor-pointer text-red-600"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="py-10 text-center">
          <Link to="/quizModulefive">
            <button className="px-6 py-2 bg-slate-800 text-white rounded-full">
              Next Page →
            </button>
          </Link>
        </div>
        {/* ================= CTA ================= */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-4">Start Quiz</h2>
            <p className="text-slate-600 mb-6">15 Questions</p>

            <Link to="/takequizCatName/The-COAST-Method-in-Advanced-Driving">
              <button className="px-8 py-3 bg-red-600 text-white rounded-full">
                Start Quiz
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
