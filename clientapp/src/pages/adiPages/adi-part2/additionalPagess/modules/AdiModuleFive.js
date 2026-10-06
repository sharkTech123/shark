import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  Trophy,
  Brain,
  Zap,
  Eye,
  FilePenLine,
  Pencil,
  Trash2,
  ArrowRight,
  CheckCircle,
  Telescope,
  TelescopeIcon,
} from "lucide-react";
import backgroundImage from "../../../../../assets/images/concentration.jpg";
import styles from "./AdiModuleOne.module.css";
gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleFive() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  const [text, setText] = useState("");
  const [savedTexts, setSavedTexts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveText = () => {
    if (!text.trim()) return;

    let updated = [...savedTexts];

    if (isEditing) {
      updated[editIndex] = text;
      setIsEditing(false);
      setEditIndex(null);
    } else {
      updated.push(text);
    }

    setSavedTexts(updated);
    localStorage.setItem(
      `notepadTextspage5_${userId}`,
      JSON.stringify(updated),
    );
    setText("");
  };

  const editText = (index) => {
    setText(savedTexts[index]);
    setIsEditing(true);
    setEditIndex(index);
    textareaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const deleteText = (index) => {
    const updated = savedTexts.filter((_, i) => i !== index);
    setSavedTexts(updated);
    localStorage.setItem(
      `notepadTextspage5_${userId}`,
      JSON.stringify(updated),
    );
  };

  useEffect(() => {
    const data = localStorage.getItem(`notepadTextspage5_${userId}`);
    if (data) setSavedTexts(JSON.parse(data));

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
  }, [userId]);

  const coast = [
    {
      title: "Dodging Distractions Like a Pro",
      icon: <Brain className="text-red-500" />,
      text: "Have you ever been halfway through a drive and realised you don’t remember the last five minutes? That’s because distractions—both external (noisy passengers, roadside billboards) and internal (fatigue, stress)—can sneak up on you. Identifying them is the first step to shutting them down!",
    },
    {
      title: "Fast Reactions, Smooth Moves",
      icon: <Eye className="text-red-500" />,
      text: "A focused driver spots a hazard early and reacts in time—whether it’s a child running into the road or a sudden lane change from a reckless driver. Keeping your concentration dialled in buys you precious seconds that could make all the difference.",
    },
    {
      title: "Driving Like a Pro (Because You Are!)",
      icon: <TelescopeIcon className="text-red-500" />,
      text: "A smooth, confident driver anticipates traffic flow, avoids jerky movements, and stays one step ahead. This not only keeps you safe but also impresses the examiner—they love to see drivers who stay calm, collected, and always in control.",
    },
  ];

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[75vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white max-w-3xl">
              Concentration in the{" "}
              <span className="text-red-500">Coast Method</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="bg-white">
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
            <div>
              <h2 className="text-3xl font-bold mb-4">Watch Our Video</h2>
              <p className="text-slate-700">
                Build razor-sharp focus and understand how concentration
                directly impacts advanced driving success.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-[320px]"
                src="https://www.youtube.com/embed/g-GIiLNVfx8"
                title="Concentration Video"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ================= INTRO CONTENT ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl">
              <p>
                Mastering Concentration: The Key to Advanced Driving Success
              </p>
              <p className="mt-3">
                Ready to Train Your Brain for the Road?
                <br />
                <br />
                Imagine this: You’re cruising along, everything is going
                smoothly, and suddenly—whoops!—you realize you’ve missed a turn
                or didn’t notice that car creeping up in your blind spot. What
                happened? Your mind wandered!
              </p>
              <p>
                Concentration is the backbone of advanced driving. In the COAST
                method, it’s the first and most crucial element because, without
                it, everything else—observation, anticipation, space, and time
                management— falls apart faster than a house of cards in a
                windstorm.
              </p>
              <p className="mt-2">
                And guess what? In an advanced driving test, the examiner is
                watching you like a hawk, assessing how well you stay focused
                and react under pressure. So, let’s sharpen that concentration!
              </p>
            </div>
          </div>
        </section>

        {/* ================= NOTE PAD ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Why Does Concentration Matter So Much? Write your thoughts below
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
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMMENTARY DRIVE ================= */}
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.adiModulewrapper}>
            <div className={styles.adiModulecontent}>
              <Trophy size={50} className={styles.adiModuleicon} />
              <h1 className={styles.adiModuleheading}>Commentary drive</h1>
              <p>
                <strong>A commentary drive</strong> is like turning your inner
                thoughts into a live sports broadcast—except you're the star
                player!
              </p>
              <p>
                As you drive,{" "}
                <strong>say everything you notice out loud</strong>: “Speed
                limit is 40, checking mirrors, car ahead is braking, pedestrian
                at the crossing—might step out.” Sounds simple, right?
              </p>
              <p>
                But this trick forces your brain to stay{" "}
                <strong>laser-focused</strong> on what’s happening around you.
                The best part? It keeps distractions at bay and trains you to{" "}
                <strong>anticipate hazards</strong> before they happen.
              </p>
              <p>The examiners love to hear commentary drive on your test!</p>
              <p>
                The more you train your brain, the more natural it becomes. And
                when the examiner sees your laser-sharp focus? Boom—advanced
                driving success unlocked! 🚀
              </p>
            </div>
          </div>
        </div>

        {/* ================= NEXT & QUIZ ================= */}

        <section className="py-16 bg-white fade-up">
          <div className="container mx-auto px-6 flex justify-between">
            <Link to="/quizModulesix" style={{textDecoration:"none"}}>
              <button className="px-8 py-3 bg-red-600 text-white rounded-full flex items-center gap-2 hover:bg-emerald-700" style={{textDecoration:"none"}}>
                Next Page <ArrowRight />
              </button>
            </Link>
          </div>
        </section>
        {/* ================= QUIZ ================= */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 to-white fade-up">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
              <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
              <p className="text-slate-600 mb-6">
                15 questions to test your understanding of vehicle checks.
              </p>
              <Link to="/takequizCatName/Concentration-in-the-Coast-Method">
                <button className="px-10 py-3 bg-red-600 text-white rounded-full hover:bg-emerald-700">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
