import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import backgroundImage from "../../../../assets/images/questionsTech.jpg";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HelpCircle,
  Brain,
  MessageCircle,
  CheckCircle,
  PlayCircle,
  ArrowRight,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Module17() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      },
    );

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
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

  //   ////////////////////////////////////////////////

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
        `notepadTexts1Part3page17_${userId}`,
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
      `notepadTexts1Part3page17_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page17_${userId}`,
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
        `notepadTexts2Part3page17_${userId}`,
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
      `notepadTexts2Part3page17_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page17_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   //////////////////////////////////////////////

  return (
    <main className="w-full overflow-hidden bg-slate-50">
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div ref={heroRef} className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Questioning <span className="text-emerald-400">Techniques</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              Transform lessons from instructions into meaningful conversations
              that build confidence and understanding.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* /////////////////////////////////////////////// */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* INTRO */}
          <div className="fade-up relative bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
            <div className="absolute -top-4 left-8 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Introduction
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Let’s Set the Scene
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed">
              Imagine a driving lesson where your pupil isn’t just following
              instructions but actively thinking, reflecting, and even smiling
              while learning. Sounds pretty ideal, right? Well, that’s the magic
              of asking the right questions. Great questions don’t just fill
              silence—they spark conversations, uncover hidden knowledge, build
              trust, and turn a routine lesson into a memorable learning
              experience.
            </p>
          </div>

          {/* WHY QUESTIONS */}
          <div className="fade-up grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-700">
                🚗 Why Bother Asking Questions?
              </h3>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-md border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                Think of questions as the steering wheel of a good lesson—they
                help guide the direction you take with your pupil. A well-timed
                question gets them thinking about why they’re doing something,
                not just how. It invites them into the learning process instead
                of leaving them in the passenger seat. You learn what they know
                (and don’t), help them solve problems, and get to the bottom of
                those
                <strong> “I’m not sure why I did that” </strong>, moments. It’s
                also a great way to build rapport, clear up confusion, and make
                sure everyone’s on the same road—literally and figuratively.
              </p>
            </div>
          </div>

          {/* ATTITUDE */}
          <div className="fade-up grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-700">
                🧠 Beyond the Skill: Attitude & Behaviour Behind the Wheel
              </h3>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-md border border-slate-200 space-y-4">
              <p className="text-slate-700">
                It’s not just about knowing how to use the clutch or when to
                check your mirrors—your pupil’s mindset plays a massive role in
                how they drive. Nervous? They might freeze at a roundabout.
                Overconfident? They might speed into a situation without
                assessing risk.{" "}
                <strong>Distracted, frustrated, tired, hesitant...</strong> all
                of these emotional states shape their behaviour on the road.
              </p>
              <p className="text-slate-700">
                That’s where open questions come in. Instead of asking,{" "}
                <strong>
                  “Did you see that car?” (which invites a yes/no answer),
                </strong>{" "}
                try, “What were you thinking as you approached that junction?”
                or “How did you feel when the car pulled out in front of you?”
                These types of questions help you dig deeper, past the
                surface-level actions and into the motivations, feelings, and
                beliefs driving those actions.
              </p>
            </div>
          </div>

          {/* QUESTION STYLES */}
         <section className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-6xl mx-auto space-y-14">
              {/* SECTION HEADER */}
              <div
                data-animate="fade-up"
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  ❓ Question Styles - Not One-Size-Fits-All
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Questions come in all shapes and sizes, and knowing when and
                  how to use them makes all the difference.
                </p>
              </div>

              {/* MAIN CARDS */}
              <div className="grid gap-10 md:grid-cols-2">
                {/* PARKED CARD */}
                <div
                  data-animate="fade-up"
                  className="bg-white rounded-3xl p-6  shadow-xl border border-slate-200 relative"
                >
                  <span className="absolute -top-5 left-6 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Parked
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    🅿️ Go Deeper
                  </h3>

                  <p className="text-slate-700 leading-relaxed mb-5">
                    When the car is parked and pressure is low, reflective
                    questions create space for deeper thinking and honest
                    conversation.
                  </p>

                  <div className="bg-emerald-50 rounded-xl p-5 space-y-2">
                    <p className="font-semibold text-emerald-900">
                      Try asking:
                    </p>
                    <ul
                      style={{ paddingLeft: "0px" }}
                      className="list-disc pl-5 text-slate-700 space-y-1"
                    >
                      <li>“What was your plan there?”</li>
                      <li>“How did that situation feel for you?”</li>
                    </ul>
                  </div>
                </div>

                {/* DRIVING CARD */}
                <div
                  data-animate="fade-up"
                  className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 relative"
                >
                  <span className="absolute -top-5 left-6 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    On the Move
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    🚗 Keep It Sharp
                  </h3>

                  <p className="text-slate-700 leading-relaxed mb-5">
                    While driving, questions should be short, clear, and focused
                    — helping attention without overload.
                  </p>

                  <div className="bg-indigo-50 rounded-xl p-5 space-y-2">
                    <p className="font-semibold text-indigo-900">Try asking:</p>
                    <ul
                      style={{ paddingLeft: "0px" }}
                      className="list-disc pl-5 text-slate-700 space-y-1"
                    >
                      <li>“Is this your exit?”</li>
                      <li>“What’s the speed limit here?”</li>
                      <li>“Show me how you’d handle this.”</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FOLLOW-UP CARD */}
              <div
                data-animate="fade-up"
                className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 max-w-4xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  🔍 The Power of Follow-Up Questions
                </h3>

                <p className="text-slate-700 leading-relaxed mb-6">
                  When a learner mentions nerves or uncertainty, follow-up
                  questions help uncover the real cause and build
                  self-awareness.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-100 rounded-xl p-5">
                    <p className="font-semibold text-slate-800 mb-2">
                      Ask things like:
                    </p>
                    <ul
                      style={{ paddingLeft: "0px" }}
                      className="list-disc pl-5 text-slate-700 space-y-1"
                    >
                      <li>“What do you think caused that feeling?”</li>
                      <li>“Has this happened before?”</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-100 rounded-xl p-5 text-emerald-900 font-medium">
                    You’re not correcting — you’re coaching toward safer, more
                    independent driving habits.
                  </div>
                </div>
              </div>

              {/* TOP TIPS */}
              <div
                data-animate="fade-up"
                className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 shadow-2xl max-w-5xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  ⭐ Top Tips for Asking Like a Pro
                </h3>

                <ul
                  style={{ paddingLeft: "0px" }}
                  className="grid sm:grid-cols-3 gap-6 text-slate-200"
                >
                  <li className="bg-white/10 rounded-xl p-5">
                    <strong className="text-white">Safety first</strong>
                    <p className="mt-2 text-sm">
                      Ask questions only when the car and learner are under
                      control.
                    </p>
                  </li>

                  <li className="bg-white/10 rounded-xl p-5">
                    <strong className="text-white">Listen fully</strong>
                    <p className="mt-2 text-sm">
                      Genuine interest builds trust and confidence.
                    </p>
                  </li>

                  <li className="bg-white/10 rounded-xl p-5">
                    <strong className="text-white">Time it right</strong>
                    <p className="mt-2 text-sm">
                      Poor timing can distract or overwhelm.
                    </p>
                  </li>
                </ul>
              </div>

              {/* FINAL MESSAGE */}
              <div
                data-animate="fade-up"
                className="text-center max-w-3xl mx-auto"
              >
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your learner’s progress isn’t just about technique — it’s
                  about mindset. Ask what’s happening beneath the surface, and
                  let real learning take shape.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* //////////////////////////////////////////////// */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-4">
            Real-World Coaching Moments
          </h2>

          <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-10">
              When to Ask the Right Questions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "1. When They Seem Nervous or Hesitant",
                  content: (
                    <>
                      <p className="mb-3">
                        <strong>What you might see:</strong> Late decisions,
                        excessive braking, avoiding situations like roundabouts
                        or junctions.
                      </p>
                      <strong>Try asking:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          “What’s going through your mind as you approach this?”
                        </li>
                        <li>
                          “What part of this situation makes you feel unsure?”
                        </li>
                        <li>
                          “When you paused there, what were you thinking about?”
                        </li>
                        <li>
                          “Have you felt this way in similar situations before?”
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "2. When They’re Overconfident or Rushing",
                  content: (
                    <>
                      <p className="mb-3">
                        <strong>What you might see:</strong> Speeding, poor
                        observations, not anticipating hazards.
                      </p>
                      <strong>Try asking:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>“What made you choose to go at that speed?”</li>
                        <li>
                          “How did you assess that it was safe to continue?”
                        </li>
                        <li>
                          “If you had to do that again, would you change
                          anything?”
                        </li>
                        <li>“What might you have missed in that situation?”</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "3. When a Mistake Happens",
                  content: (
                    <>
                      <p className="mb-3">
                        <strong>What you might see:</strong> Wrong lane, missed
                        signal, confusion at roundabouts.
                      </p>
                      <strong>Try asking:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>“What do you think happened there?”</li>
                        <li>“What was your plan as you approached?”</li>
                        <li>
                          “Was that what you intended to do, or did something
                          change last minute?”
                        </li>
                        <li>“What would you do differently next time?”</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "4. When They Seem Distracted or Disengaged",
                  content: (
                    <>
                      <p className="mb-3">
                        <strong>What you might see:</strong> Lack of focus,
                        zoning out, passive learning.
                      </p>
                      <strong>Try asking:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          “You seemed a bit distracted—what’s on your mind?”
                        </li>
                        <li>
                          “Is anything making it hard to concentrate today?”
                        </li>
                        <li>
                          “What part of today’s lesson feels most challenging?”
                        </li>
                        <li>
                          “Is there something you’d like to focus on instead?”
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "5. When You Want to Build Confidence",
                  content: (
                    <>
                      <p className="mb-3">
                        <strong>What you might see:</strong> Timid
                        decision-making, second-guessing, relying too much on
                        you.
                      </p>
                      <strong>Try asking:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          “What do you feel you did well in that situation?”
                        </li>
                        <li>
                          “How did it feel when you made that decision
                          yourself?”
                        </li>
                        <li>“What helped you stay in control there?”</li>
                        <li>
                          “What would you say to someone else in your
                          situation?”
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: "6. When You’re Reviewing or Reflecting at the End",
                  content: (
                    <>
                      <p className="mb-3">
                        <strong>What you might see:</strong> Pupil unsure how
                        they’ve done or waiting for you to lead the summary.
                      </p>
                      <strong>Try asking:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>“What do you think went well today?”</li>
                        <li>
                          “What would you like to get better at next time?”
                        </li>
                        <li>“What helped you stay focused today?”</li>
                        <li>
                          “If you had to score today’s drive out of 10, what
                          would you give it—and why?”
                        </li>
                      </ul>
                    </>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="group perspective">
                  <div className="relative h-[390px] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center backface-hidden">
                      <h3 className="text-lg font-semibold text-center">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-4">
                        Tap to reveal
                      </p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 bg-gray-900 text-white rounded-2xl shadow-xl p-6 overflow-y-auto rotate-y-180 backface-hidden">
                      <div className="text-sm leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BONUS */}
          <div className="fade-up mt-20 bg-slate-900 rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🧠 Bonus: Open Closed Questions
            </h3>

            <div className="grid sm:grid-cols-2 gap-8 text-slate-200">
              <ul style={{ paddingLeft: "0px" }} className="space-y-2">
                <li>❌ Did you check your mirrors?</li>
                <li>
                  ✅ What did you see in your mirrors before changing lanes?
                </li>
                <li>❌ Did you feel ready?</li>
                <li>
                  ✅ What made you feel ready—or not ready—for that manoeuvre?
                </li>
              </ul>

              <ul style={{ paddingLeft: "0px" }} className="space-y-2">
                <li>Try and turn these closed questions into open ones:</li>
                <li>Did you see that pedestrian?</li>
                <li>Was that the right speed?</li>
                <li>Did you feel nervous?</li>
                <li>Are you ready to try that again?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Write your thoughts how you can improve your questions ?
          </h2>
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What question do you personally think is the most important to ask
              your learner?
              <br />
              Put yourself in the shoes of your learner or a first time student
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
      <section className="py-20 bg-slate-50 ">
        <div className="container mx-auto px-6 max-w-4xl fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              Start to think about the curriculum for learning to drive, what
              types of questions could you ask for the subjects
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

      {/* /////////////////////////////////////////////////////// */}

      <div className="w-full flex justify-center py-10 bg-white">
        <Link to="/body-language">
          <button className="px-10 py-4 text-lg font-semibold rounded-full border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Next Page →
          </button>
        </Link>
      </div>

      {/* ///////////////////////////////////////// */}
      <div className="bg-slate-50 py-16 px-4">
        <section className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-10 text-center space-y-6">
          <div className="flex justify-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold">
              🧠
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            Start Quiz
          </h1>

          <h3 className="text-lg font-medium text-slate-500">15 Questions</h3>

          <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
            Ready to put your knowledge into practice? This short quiz will test
            your understanding of{" "}
            <strong>Part 3: Questioning Techniques</strong> before setting off.
          </p>

          <Link to="/takequizCatName/questioning-techniques">
            <button className="mt-4 px-10 py-4 rounded-full text-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Quiz 🚀
            </button>
          </Link>
        </section>
      </div>

      {/* ============================= */}
    </main>
  );
}
