import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import { useSelector } from "react-redux";
import { FaDownload, FaEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import backgroundImage from "../../../../assets/images/gde-matrix.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Layers,
  Car,
  Map,
  Target,
  HeartHandshake,
  ShieldAlert,
  Brain,
  ArrowRight,
  Download,
  Users,
  MapPin,
  CheckCircle,
  TrafficCone,
  ShieldCheck,
  FilePenLine,
  Trash2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModule() {
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

  //   ///////////////////////////////////////////////////////////////
  const levels = [
    {
      level: "1. Vehicle Control (Basic Skills)",
      focus:
        "The student practices braking, accelerating smoothly, and steering correctly.",
      teaching: [
        "Instructor guides them in maintaining a steady speed.",
        "Teaches smooth stopping at traffic lights and pedestrian crossings.",
        "Ensures proper use of mirrors and indicators.",
      ],
    },
    {
      level: "2. Traffic Situations (Tactical Decisions)",
      focus:
        "The student learns to adjust speed, anticipate other drivers, and handle intersections.",
      teaching: [
        "Instructor asks: 'What do you notice about the cyclists ahead?'",
        "Helps them decide when to slow down or change lanes.",
        "Practices safe following distances and reaction to traffic signals.",
      ],
    },
    {
      level: "3. Goals and Context of Driving (Strategic Planning)",
      focus:
        "The student considers when and where to drive based on personal comfort and risks.",
      teaching: [
        "Discusses: 'Would you feel comfortable driving here at night or in heavy rain?'",
        "Encourages thinking about distractions (e.g., music, passengers).",
      ],
    },
    {
      level: "4. Goals for Life & Personal Factors",
      focus:
        "The student reflects on their driving habits, attitudes, and risks.",
      teaching: [
        "Instructor asks: 'How do you think stress or being in a hurry might affect your driving?'",
        "Discusses peer pressure and risky behaviors, like speeding to impress friends.",
      ],
    },
  ];

  //   ///////////////////////////////////////////////////////////////////////////////////////////
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
        `notepadTexts1Part3page6_${userId}`,
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
      `notepadTexts1Part3page6_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTexts1Part3page6_${userId}`);
    if (savedData) {
      setSavedTexts(JSON.parse(savedData));
    }
  }, []);
  //   //////////////////////////////////////////////////////////////////
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
        `notepadTexts2Part3page6_${userId}`,
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
      `notepadTexts2Part3page6_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(
      `notepadTexts2Part3page6_${userId}`,
    );
    if (savedData2) {
      setSavedTexts2(JSON.parse(savedData2));
    }
  }, []);
  // /////////////////////////////////////////////////////////////////////////////
  const steps = [
    {
      title: "Goal (G) – Setting a Clear Objective",
      content: [
        "The first step in the GROW model is to establish a meaningful and motivating goal. In driver instruction, this might be mastering roundabouts, improving hazard awareness, or building confidence in urban traffic. Goals should challenge the learner, giving them a sense of achievement once accomplished. Rather than simply telling learners what to focus on, instructors should guide them toward discovering their own goals. This creates buy-in and personal commitment. Asking the right questions helps unlock motivation:",
      ],
      questions: [
        "What are you trying to achieve in today’s lesson?",
        "What part of driving feels most challenging for you right now?",
        "How will achieving this goal improve your driving?",
        "What excites you most about reaching this milestone?",
        "How will you measure success?",
        "What skills will you develop along the way?",
        "By keeping the focus on the future and growth, learners feel empowered and motivated to improve.",
      ],
    },
    {
      title: "Reality (R) – Assessing the Current Situation",
      content: [
        "Before progress can be made, the learner must understand where they currently stand in relation to their goal. This step involves honest self-assessment and identifying strengths, weaknesses, and areas for improvement. The goal should feel like a stretch—challenging but achievable—rather than overwhelming.",
      ],
      questions: [
        "What’s happening right now with your driving?",
        "How do you feel about your current ability in this area?",
        "What challenges are you facing?",
        "What do you believe needs to change?",
        "On a scale of 1-10, how would you rate your skill level?",
        "If nothing changes, how would that impact your driving experience?",
        "By helping learners reflect on their current skills, instructors can bridge the gap between where they are and where they want to be.",
      ],
    },
    {
      title: "Options (O) – Exploring Possible Solutions",
      content: [
        "Once the learner understands their current reality, the next step is to brainstorm ways to move forward. This includes identifying obstacles and possible strategies to overcome them. Obstacles may be external (e.g., traffic conditions, road layout) or internal (e.g., confidence, mindset, motivation). Rather than giving direct solutions, instructors should help learners generate their own strategies—increasing engagement and problem-solving skills.",
      ],
      questions: [
        "What obstacles might you face in achieving this goal?",
        "What strategies have worked for you in the past?",
        "How can you overcome any barriers?",
        "What small changes could help you improve?",
        "Which of these options do you feel most confident about trying?",
        "What support or guidance would help you succeed?",
        "Encouraging learners to explore different approaches ensures they feel in control of their progress and can adapt their learning style to suit their needs.",
      ],
    },
    {
      title: "Will (W) – Committing to an Action Plan",
      content: [
        "The final step is turning options into concrete actions. Learners should commit to specific steps, outlining what they will do, when they will do it, and how they will track progress.",
      ],
      questions: [
        "What is the first step you will take?",
        "What are the next steps? When will you do them?",
        "How will you handle obstacles if they arise?",
        "How will you measure your progress?",
        "How will achieving this goal help you in the future?",
        "Do you need additional support or coaching?",
        "By setting clear, measurable steps, learners feel more accountable and engaged in their development.",
      ],
    },
  ];
  // //////////////////////////////////////////////////////////////////////////////
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
        `notepadTexts3Part3page6_${userId}`,
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
      `notepadTexts3Part3page6_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(
      `notepadTexts3Part3page6_${userId}`,
    );
    if (savedData3) {
      setSavedTexts3(JSON.parse(savedData3));
    }
  }, []);

  //   //////////////////////////////////////////////////////////////////////
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
        `notepadTexts4Part3page6_${userId}`,
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
      `notepadTexts4Part3page6_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(
      `notepadTexts4Part3page6_${userId}`,
    );
    if (savedData4) {
      setSavedTexts4(JSON.parse(savedData4));
    }
  }, []);
  //   ///////////////////////////////////////////////////////////
  const [text5, setText5] = useState("");
  const [savedTexts5, setSavedTexts5] = useState([]); // Store multiple saved texts
  const [isEditing5, setIsEditing5] = useState(false); // Track if the user is editing
  const [editIndex5, setEditIndex5] = useState(null);
  const textareaRef5 = useRef(null);

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
        `notepadTexts5Part3page6_${userId}`,
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
      `notepadTexts5Part3page6_${userId}`,
      JSON.stringify(updatedTexts5),
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(
      `notepadTexts5Part3page6_${userId}`,
    );
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl">
              GDE Matrix & <span className="text-red-500">GROW Coaching </span>{" "}
              Model
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
              <strong>Well done!</strong>
              <br />A structured approach to building safer, more self-aware and
              confident drivers.
            </p>

            <p className="mt-4 text-slate-200 text-sm sm:text-lg">
              Your hard work has paid off — now you're ready for{" "}
              <strong>Part 3</strong>.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white">
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* ================= HEADER ================= */}
            <div className="text-center mb-16 fade-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                How the <span className="text-red-600">GDE Matrix</span> Works
              </h1>

              <p className="mt-6 text-slate-700 text-base sm:text-lg max-w-3xl mx-auto">
                The Goals for Driver Education (GDE) Matrix structures driver
                education into different hierarchical levels and addresses key
                influencing factors shaping a driver's decisions.
              </p>

              <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                By combining these elements, it ensures that driver training is
                not just about technical skills, but also about understanding
                risks, personal decision-making, and external influences.
              </p>
            </div>

            {/* ================= FOUR LEVELS ================= */}
            <div className="mb-20 fade-up">
              <div className="flex items-center gap-4 mb-8">
                <Layers className="w-10 h-10 text-red-600" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Breaking Down Driving into Four Levels
                </h2>
              </div>

              <p className="text-slate-700 mb-10">
                Each level in the matrix represents a different aspect of
                driving, from basic control to personal attitudes:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* LEVEL 1 */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-red-500">
                  <Car className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">
                    Vehicle Control
                  </h4>
                  <p className="text-sm text-slate-600">
                    Learning how to physically operate a car.
                  </p>
                </div>

                {/* LEVEL 2 */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-red-500">
                  <Map className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">
                    Traffic Situations
                  </h4>
                  <p className="text-sm text-slate-600">
                    Applying skills to navigate real-world traffic.
                  </p>
                </div>

                {/* LEVEL 3 */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-red-500">
                  <Target className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">
                    Goals & Context
                  </h4>
                  <p className="text-sm text-slate-600">
                    Making choices about when, where, and how to drive.
                  </p>
                </div>

                {/* LEVEL 4 */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-red-500">
                  <HeartHandshake className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">
                    Personal Influence
                  </h4>
                  <p className="text-sm text-slate-600">
                    Understanding how values and emotions affect driving
                    behaviour.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= INFLUENCING FACTORS ================= */}
            <div className="mb-20 fade-up">
              <div className="flex items-center gap-4 mb-8">
                <ShieldAlert className="w-10 h-10 text-red-600" />
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Addressing Three Key Influencing Factors
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-7 rounded-3xl shadow-xl">
                  <Brain className="w-7 h-7 text-red-500 mb-3" />
                  <h4 className="font-semibold text-lg mb-2">
                    Knowledge & Skills
                  </h4>
                  <p className="text-sm text-slate-600">
                    Teaching essential driving rules, techniques, and mechanics.
                  </p>
                </div>

                <div className="bg-white p-7 rounded-3xl shadow-xl">
                  <ShieldAlert className="w-7 h-7 text-red-500 mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Risk Awareness</h4>
                  <p className="text-sm text-slate-600">
                    Training drivers to recognize and manage dangers.
                  </p>
                </div>

                <div className="bg-white p-7 rounded-3xl shadow-xl">
                  <Users className="w-7 h-7 text-red-500 mb-3" />
                  <h4 className="font-semibold text-lg mb-2">
                    Self-Evaluation
                  </h4>
                  <p className="text-sm text-slate-600">
                    Encouraging reflection and responsible decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= WHY IMPORTANT ================= */}
            <div className="fade-up">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-red-500">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Why the GDE Matrix is Important
                </h2>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg">
                  <p>
                    Traditional driver education often focuses only on vehicle
                    control and traffic rules. The GDE Matrix expands this by
                    addressing why drivers make certain decisions and how
                    personal factors influence their behaviour.
                  </p>

                  <p>
                    It emphasises risk awareness. Many accidents happen not due
                    to lack of skill, but because drivers fail to recognize
                    dangers or make poor decisions.
                  </p>

                  <p>
                    It encourages self-reflection. By understanding their own
                    tendencies, biases, and emotions, drivers can avoid
                    overconfidence and risky behavior.
                  </p>

                  <p>
                    It accounts for personal and societal influences. Peer
                    pressure, fatigue, distractions, and emotional states all
                    impact driving, and the GDE Matrix helps drivers manage
                    these factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= GDE LEVELS ================= */}

        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">
              GDE Matrix in Action
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              See how the GDE Matrix translates theory into real-world driving
              lessons.
            </p>
          </div>

          {/* Scenario Intro Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 mb-10 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Lesson Topic:{" "}
                <span className="text-indigo-600">
                  Navigating Urban Traffic
                </span>
              </h2>
            </div>

            <p
              className="text-gray-700 leading-relaxed"
              style={{ marginBottom: "0px" }}
            >
              <strong>Scenario:</strong> The student will drive through a busy
              city area, dealing with intersections, pedestrians, cyclists, and
              traffic lights.
            </p>
          </div>

          {/* Levels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {levels.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Level Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.level}
                  </h3>
                </div>

                {/* Focus */}
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold text-gray-800">Focus:</span>{" "}
                  {item.focus}
                </p>

                {/* Teaching Points */}
                <ul style={{ paddingLeft: "0px" }} className="space-y-3">
                  {item.teaching.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                Now try and write an example for a lesson on Pedestrian
                crossings
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
                What were your results and how will you use this during your own
                learning ?
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
        {/* ================= GROW MODEL ================= */}
        <section className="py-24 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-12 fade-up">
              How the <span className="text-red-600">GROW Coaching Model</span>{" "}
              Enhances Driver Instruction
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="fade-up bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-7 h-7 text-red-600" />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-slate-700 mb-4">{step.content}</p>
                  <ul
                    style={{ paddingLeft: "0px" }}
                    className="list-disc list-inside text-slate-600 space-y-2"
                  >
                    {step.questions.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                How might using the GROW model help a learner feel more involved
                and motivated during a lesson? Can you think of a goal-setting
                question you might ask to help a future pupil identify what they
                want to achieve?
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
                what ways do you think shifting from giving instructions to
                using a coaching approach—like the GROW model—might change how a
                learner experiences a driving lesson?
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

        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Intro Text */}
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
            By using the GROW coaching model, driving instructors shift from
            simply giving instructions to empowering learners. This approach
            fosters:
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-6">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Active Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Encouraging students to problem-solve and reflect on their own
                progress.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-6">
                <TrafficCone className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Self-Awareness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helping learners understand their strengths, weaknesses, and
                mindset.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-6">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Confidence & Responsibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Giving drivers control over their development, leading to safer
                and more independent driving.
              </p>
            </div>
          </div>
        </div>
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                You notice the learner you are teaching tends to speed on
                lessons. You have mentioned this before, but the pupil continues
                to do it. What type of questions could you ask using the grow
                model?
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
        {/* ================= DOWNLOAD ================= */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-600 py-20 px-6 rounded-3xl mx-6 mb-12 text-center text-white">
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

          <h2 className="text-3xl font-bold mb-4">
            Get Your Lesson Planning Documents
          </h2>

          <p className="text-white/90 max-w-xl mx-auto mb-10">
            Click below to download all documents as a ZIP file.
          </p>

          <a
            style={{ textDecoration: "none" }}
            href="/Lessonsubjectsskillsets.zip"
            download
            className="inline-flex items-center gap-3 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" />
            Download ZIP
          </a>
        </div>

        {/* ================= NAVIGATION ================= */}
        <section className="py-12 bg-white text-center fade-up">
          <Link to="/lesson-planning">
            <button className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full hover:bg-slate-800 transition">
              Next Page <ArrowRight />
            </button>
          </Link>
        </section>

        {/* ================= QUIZ ================= */}
        <section className="py-24 bg-slate-50 fade-up">
          <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl text-center">
            <Brain className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Start Quiz</h2>
            <p className="text-slate-600 mb-6">
              Test your understanding of the GDE Matrix and GROW model.
            </p>
            <Link to="/takequizCatName/gde-matrix">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition">
                Start Quiz
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
