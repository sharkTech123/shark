import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { useSelector } from "react-redux";

import backgroundImage from "../../../../assets/images/client-centered.jpg";
import { Link } from "react-router-dom";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Ear,
  Users,
  Sparkles,
  Brain,
  ArrowRight,
  PlayCircle,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3ModuleTen() {
  //   ////////////////////////////////////////////////////
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;

  //   //////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page10_${userId}`,
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
      `notepadTexts1Part3page10_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(
      `notepadTexts1Part3page10_${userId}`,
    );
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  //   //////////////////////////////////////////////////////////////

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
        `notepadTexts2Part3page10_${userId}`,
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
      `notepadTexts2Part3page10_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page10_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);

  //   ///////////////////////////////////////////////////////////////////
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
        `notepadTexts3Part3page10_${userId}`,
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
      `notepadTexts3Part3page10_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page10_${userId}`,
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   ////////////////////////////////////////////////////////////////////

  const features = [
    {
      icon: Target,
      title: "Shared Goal Setting",
      description: "Agree on objectives together",
    },
    {
      icon: Ear,
      title: "Active Listening",
      description: "Listen to the pupil’s needs, ideas, concerns",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work together, not top-down teaching",
    },
    {
      icon: Brain,
      title: "Personalised Approach",
      description: "Adjust teaching based on learner’s progress",
    },
    {
      icon: Sparkles,
      title: "Guided Discovery",
      description: "Encourage thinking over giving answers",
    },
  ];

  const heroRef = useRef(null);
  //   //////////////////////////////////////////////////
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

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}

      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div ref={heroRef} className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Client-Centred
              <span className="block text-emerald-400">Learning (CCL)</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />
              Delivering learner-focused driving lessons that build
              independence, confidence, and safety.
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

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl  fade-up">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <label className="block mb-2 font-semibold">
              What do you think client centred learning is?
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

      {/* ================= CONTENT ================= */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6 space-y-16">
          {/* Intro */}
          <div className="fade-up bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-extrabold mb-4 text-emerald-600">
              Understanding Client-Centred Learning
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Client-Centred Learning (CCL) is an educational approach that
              prioritises the learner's needs, goals, and preferences throughout
              the learning journey. In the context of the ADI Part 3
              examination, it refers to how well a driving instructor can tailor
              each lesson to the unique abilities and learning style of their
              pupil, with the ultimate aim of developing independent, safe, and
              thoughtful drivers.
              <br />
              <br />
              Unlike traditional teaching models that focus heavily on
              instructor-led direction, CCL encourages a more collaborative and
              reflective process. The instructor works alongside the learner to
              build understanding, set realistic goals, and foster the ability
              to self-assess and take responsibility for progress.
            </p>
          </div>

          {/* Practice */}
          <div className="fade-up bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              Client-Centred Learning in Practice
            </h3>
            <p className="text-slate-700 leading-relaxed">
              During the ADI Part 3 test, the DVSA examiner assesses your
              ability to deliver lessons that are aligned with client-centred
              principles. This includes the way you plan, deliver, adapt, and
              reflect upon the lesson in collaboration with the learner.
              <br />
              <br />
              At the start of the lesson, the learner should be involved in goal
              setting. This means that instead of the instructor deciding what
              will be taught, the session should begin with a conversation that
              explores what the learner wants to achieve, what they feel
              confident in, and where they think they need further support.
              <br />
              This open dialogue forms the basis of a mutually agreed lesson
              plan. The instructor must then guide the pupil toward achieving
              their goals by offering support that matches the learner’s current
              stage of development. The level of instruction and intervention
              should vary according to the pupil’s ability, ensuring they are
              neither overwhelmed nor under-challenged.
            </p>
          </div>

          {/* Reflection */}
          <div className="fade-up bg-emerald-50 p-10 rounded-3xl border-l-8 border-emerald-500">
            <h3 className="text-2xl font-bold mb-4">
              Promoting Reflection & Independent Thinking
            </h3>
            <p className="text-slate-700">
              An essential aspect of CCL is the encouragement of
              self-reflection. Rather than simply telling a learner what they
              did right or wrong, instructors should invite the pupil to
              consider their own performance. For example, after completing a
              manoeuvre, ask,
            </p>

            <blockquote className="mt-6 pl-6 border-l-4 border-indigo-500 italic text-indigo-700">
              “How do you think that went?” <br />
              “What would you do differently next time?”
            </blockquote>
          </div>
          <section className="py-10 bg-slate-50 ">
            <div className="container mx-auto px-6 max-w-4xl fade-up">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  Write down a few more questions you could ask when your pupil
                  makes a mistake
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
          {/* Adaptability */}
          <div className="fade-up bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-emerald-600">
              Adapting to the Learner’s Needs
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Client-Centred Learning requires the instructor to remain
              adaptable. This means recognising when a learner is struggling or
              anxious and adjusting the lesson accordingly. The instructor
              should be able to read verbal and non-verbal cues—such as tone of
              voice or body language—and respond with empathy and encouragement.
              <br />
              <br />
              For example, if a pupil appears nervous about joining a
              roundabout, rather than pushing them through it, the instructor
              might ask, “What part of this situation make you feel usure? "or"
              would you like to talk through what we are trying to do before
              trying again ?" <br />
              <br />
              This tailored, supportive method ensures that learners feel safe
              and respected, increasing their engagement and confidence.
            </p>
          </div>
          <section className="py-10 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  How do you think you might recognise when a learner is feeling
                  unsure or anxious during a lesson, and how would you adapt
                  your approach in that situation?
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
          {/* Shared Responsibility */}
          <div className="fade-up bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              Shared Responsibility & Outcomes
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A final component of client-centred instruction is the concept of
              shared responsibility. While the instructor is the expert, the
              learner is actively involved in shaping the learning process.
              Together, they identify objectives, evaluate progress, and make
              decisions about when and how to increase levels of independence.
              <br />
              For example, if a pupil is beginning to grasp the skill of
              parallel parking, the instructor might say, “You’ve done a few
              great attempts with my help—do you feel ready to try one more with
              less input from me?” This kind of dialogue promotes autonomy and
              reinforces trust in the pupil's own abilities.
              <br />
              At the conclusion of the lesson, the instructor should invite the
              learner to reflect on what they’ve achieved, what could be
              improved, and what they’d like to focus on next time. This ongoing
              cycle of discussion and reflection is central to the CCL model and
              is a key area of focus in the Part 3 marking criteria. <br />
              Client-Centred Learning is not just a teaching method—it’s a
              mindset. For driving instructors preparing for the ADI Part 3,
              understanding and applying CCL is vital. It enables you to deliver
              personalised, effective lessons that empower learners to take
              ownership of their progress and prepare them for a lifetime of
              safe driving. <br />
              By embedding CCL principles into your lesson planning,
              communication, feedback, and goal setting, you demonstrate your
              ability to develop competent and confident drivers—exactly what
              the DVSA is looking for in a qualified ADI.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RECAP ================= */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 fade-up">
            Quick Recap:{" "}
            <span className="text-emerald-600">
              What Makes a Lesson Client-Centred?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="fade-up bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500"
                >
                  <Icon className="w-10 h-10 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Continue?</h2>
        <p className="text-slate-300 mb-8">
          Move forward to questioning techniques and test your knowledge.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link to="/questioning-techniques" style={{ textDecoration: "none" }}>
            <button className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 font-semibold shadow-xl transition flex items-center gap-2">
              Next Page <ArrowRight />
            </button>
          </Link>

          <Link
            to="/takequizCatName/client-centred-learning"
            style={{ textDecoration: "none" }}
          >
            <button className="px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-semibold shadow-xl transition flex items-center gap-2">
              Start Quiz <PlayCircle />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
