import React from "react";
import styles from "./AdiModuleOne.module.css";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";

import { Link } from "react-router-dom";
import backgroundImage from "../../../../../assets/images/whatjpg.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Eye,
  Car,
  ShieldCheck,
  Leaf,
  FilePenLine,
  Trash2,
  Brain,
  ChevronDown,
  PlayCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiModuleThree() {
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id;
  const skills = [
    "Observing hazards early",
    "Planning my actions",
    "Smooth Gear Changes",
    "Eco Safe Driving Habits",
    "Maintaining Vehicle Control",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const toggleGlossary = () => {
    setIsVisible((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary2 = () => {
    setIsVisible2((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary3 = () => {
    setIsVisible3((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary4 = () => {
    setIsVisible4((prevState) => !prevState); // Toggle visibility
  };
  const toggleGlossary5 = () => {
    setIsVisible5((prevState) => !prevState); // Toggle visibility
  };

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

  // ////////////////////////////////////////////////////////////////////////////////
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
        `notepadTextspage3_${userId}`,
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
      `notepadTextspage3_${userId}`,
      JSON.stringify(updatedTexts),
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`notepadTextspage3_${userId}`);
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
        `notepadText2spage3_${userId}`,
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
      `notepadText2spage3_${userId}`,
      JSON.stringify(updatedTexts2),
    );
  };

  useEffect(() => {
    const savedData2 = localStorage.getItem(`notepadText2spage3_${userId}`);
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
        `notepadText3spage3_${userId}`,
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
      `notepadText3spage3_${userId}`,
      JSON.stringify(updatedTexts3),
    );
  };

  useEffect(() => {
    const savedData3 = localStorage.getItem(`notepadText3spage3_${userId}`);
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
        `notepadText4spage3_${userId}`,
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
      `notepadText4spage3_${userId}`,
      JSON.stringify(updatedTexts4),
    );
  };

  useEffect(() => {
    const savedData4 = localStorage.getItem(`notepadText4spage3_${userId}`);
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
        `notepadText5spage3_${userId}`,
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
      `notepadText5spage3_${userId}`,
      JSON.stringify(updatedTexts5),
    );
  };

  useEffect(() => {
    const savedData5 = localStorage.getItem(`notepadText5spage3_${userId}`);
    if (savedData5) {
      setSavedTexts5(JSON.parse(savedData5));
    }
  }, []);

  // ///////////////////////////////////////////////////////////////////
  const [skillFeedback, setSkillFeedback] = useState({});

  const handleSkillClick = (skill, feedbackType) => {
    const updatedFeedback = {
      ...skillFeedback,
      [skill]: {
        userId,
        feedback: feedbackType,
      },
    };
    setSkillFeedback(updatedFeedback);

    // Save to localStorage
    localStorage.setItem("userSkillFeedback", JSON.stringify(updatedFeedback));
  };

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("userSkillFeedback"));
    if (savedFeedback) {
      setSkillFeedback(savedFeedback);
    }
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-bottom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white max-w-4xl">
              What is <span className="text-emerald-400">Advanced Driving</span>{" "}
              in Relation to the ADI Part 2 Exam?
            </h1>
          </div>
        </div>
      </section>
      {/* ================= INTRO ================= */}

      <section className="bg-white">
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold flex items-center gap-3">
                <PlayCircle className="w-9 h-9 text-emerald-600" /> Watch Our
                Video
              </h2>
              <p className="mt-4 text-slate-600">
                Advanced driving requires a high level of skill, awareness, and
                control to ensure safety, efficiency, and professionalism on the
                road. It involves a combination of observation, planning,
                vehicle control, eco-safe driving, legal compliance, and the
                right mindset. Mastering these components is essential for
                anyone aiming to drive at an advanced level, particularly for
                those preparing for professional driving tests.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/JJqpyJE1lO4"
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
        {/* ================= DROPDOWN SECTIONS ================= */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 space-y-10 max-w-5xl">
            {/* Observation */}
            <DropSection
              title="Observation and Planning"
              icon={<Eye />}
              open={isVisible}
              toggle={toggleGlossary}
            >
              <p>
                One of the most crucial aspects of advanced driving is
                observation. A skilled driver constantly scans the road ahead,
                to the sides, and behind using mirrors to maintain full
                awareness of their surroundings. This includes identifying
                potential hazards early, such as pedestrians, cyclists, changing
                road conditions, or unpredictable weather. By actively
                monitoring these factors, drivers can make informed decisions
                and reduce the likelihood of accidents.
              </p>
              <p className="mt-4">
                Planning is equally important, as it allows drivers to
                anticipate how hazards may develop and take the necessary
                precautions. This involves adjusting speed and positioning the
                vehicle appropriately for maximum safety and efficiency. For
                example, when approaching a bend, an advanced driver will
                position their vehicle to optimise visibility and control.
                Similarly, at junctions or roundabouts, they will assess traffic
                flow in advance to ensure smooth navigation.
              </p>
            </DropSection>

            {/* Vehicle Control */}
            <DropSection
              title="Vehicle Control"
              icon={<Car />}
              open={isVisible2}
              toggle={toggleGlossary2}
            >
              <p>
                Maintaining full control of the vehicle is essential for
                advanced driving. This starts with smooth acceleration and
                braking. A skilled driver applies gentle, progressive pressure
                to the accelerator and brakes, avoiding sudden jolts that could
                destabilize the vehicle or cause discomfort to passengers. This
                smooth driving style not only enhances safety but also improves
                fuel efficiency.
              </p>
              <p className="mt-4">
                Gear selection is another key factor in vehicle control.
                Advanced drivers use the appropriate gear for their speed and
                road conditions, shifting smoothly to avoid unnecessary engine
                strain. Keeping the engine within its optimal power range helps
                maintain efficiency and control, particularly when navigating
                challenging road conditions such as steep inclines or heavy
                traffic.
              </p>
              <p className="mt-4">
                Steering technique also plays a vital role in advanced driving.
                A controlled and consistent approach, such as the push-pull
                method, ensures precise handling, particularly when manoeuvring
                through bends and turns. Maintaining a firm yet relaxed grip on
                the wheel allows for quick adjustments while keeping the vehicle
                stable and balanced.
              </p>
            </DropSection>

            {/* Eco Safe */}
            <DropSection
              title="Eco-Safe Driving"
              icon={<Leaf />}
              open={isVisible3}
              toggle={toggleGlossary3}
            >
              <p>
                Eco-safe driving is an integral part of advanced driving,
                focusing on minimizing fuel consumption and reducing wear and
                tear on the vehicle. This involves maintaining a steady speed,
                avoiding harsh acceleration, and using higher gears where
                possible. By driving smoothly and efficiently, drivers can lower
                emissions, save on fuel costs, and extend the lifespan of their
                vehicle. Simple habits such as anticipating traffic flow,
                coasting when appropriate, and reducing unnecessary braking all
                contribute to a more environmentally friendly and cost-effective
                driving style.
              </p>
            </DropSection>

            {/* Legal */}
            <DropSection
              title="Legal Compliance"
              icon={<ShieldCheck />}
              open={isVisible4}
              toggle={toggleGlossary4}
            >
              <p>
                Adhering to road laws and regulations is fundamental to advanced
                driving. Drivers must strictly follow the Highway Code, ensuring
                they comply with speed limits, road signs, and traffic signals
                at all times. Correct procedures must also be demonstrated at
                pedestrian crossings, roundabouts, and junctions, showing an
                understanding of right-of-way rules and safe interactions with
                other road users. Legal compliance not only prevents penalties
                and fines but also reinforces responsible driving habits that
                promote road safety.
              </p>
            </DropSection>

            {/* Mindset */}
            <DropSection
              title="Mindset and Professionalism"
              icon={<Brain />}
              open={isVisible5}
              toggle={toggleGlossary5}
            >
              <p>
                Beyond technical skills, advanced driving requires the right
                mindset. A professional driver remains composed under pressure,
                adapting smoothly to changing road conditions and unexpected
                situations. Courtesy and respect for other road users are also
                essential, whether allowing pedestrians to cross safely, giving
                way to merging traffic, or maintaining a safe following
                distance. By demonstrating patience and awareness, advanced
                drivers contribute to a safer and more cooperative driving
                environment.
              </p>
            </DropSection>
          </div>
        </section>
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl">
              <p>
                In summary, advanced driving is a combination of skill,
                awareness, efficiency, and professionalism. By mastering
                observation and planning, maintaining precise vehicle control,
                driving in an eco-friendly manner, following legal requirements,
                and fostering a responsible mindset, drivers can enhance their
                safety and competence on the road.
              </p>
            </div>
          </div>
        </section>
        <div className={styles.AdiModuleContentBox}>
          <div className={styles.adimoduletableContainer}>
            <table className={styles.adimoduleskillTable}>
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>
                    Confident <span className={styles.adimoduletick}>✔</span>
                  </th>
                  <th>
                    Needs Improvement{" "}
                    <span className={styles.adimodulecross}>✘</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, index) => {
                  const feedback = skillFeedback[skill]?.feedback;

                  return (
                    <tr key={index}>
                      <td>{skill}</td>
                      <td
                        className={styles.iconCell}
                        onClick={() => handleSkillClick(skill, "confident")}
                        style={{
                          cursor: "pointer",
                          color: feedback === "confident" ? "blue" : "#ccc",
                        }}
                      >
                        <TiTick size={28} />
                      </td>
                      <td
                        className={styles.iconCell}
                        onClick={() =>
                          handleSkillClick(skill, "needsImprovement")
                        }
                        style={{
                          cursor: "pointer",
                          color:
                            feedback === "needsImprovement" ? "red" : "#ccc",
                        }}
                      >
                        ✘
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        ;{/* ================= PRACTICAL TASK ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl">
              <p>
                1. Go for a short drive in a controlled environment (with your
                trainer if needed)..
              </p>
              <p className="mt-3">
                2. During the drive, focus on the following tasks:
                <br />
                <br />
                - Spot hazards early (e.g., parked cars, cyclists, or
                junctions).
                <br />- Verbally describe what you see and explain how you’re
                responding to it (e.g., slowing down, changing lanes).
              </p>
              <p className="mt-3 italic text-slate-600">
                “E.g. I am going to take the next turn on the left, I am
                beginning my observations checking my centre left mirror,
                applying my left indicator, slowing down slowly with my brake,
                checking my left mirror before I turn”
              </p>
            </div>
          </div>
        </section>
        {/* ///////////////////////////////// */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <label className="block mb-2 font-semibold">
                3. Ask your trainer or a trusted observer to provide feedback on
                your performance. What was the feedback? Did you do better or
                worse than you predicted? What will you learn from this?
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
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                After the activity, answer these questions:
              </h2>
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <label className="block mb-2 font-semibold">
                  1. What was your biggest strength in advanced driving?
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
                Which area needs the most improvement (e.g., smoother control,
                better planning)?
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
                3. What will you do differently in your next practice session to
                enhance your skills?
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
                - Practice advanced driving during your day whether it be
                driving to work or on the school run, focusing on your weakest
                skill from the self-assessment.
                <br></br>
                What do you think is the most challenging aspect of advanced
                driving, and how do you plan to improve it?<br></br>
                Review the Highway Code to reinforce legal compliance and
                driving etiquette.
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
        <section className="py-16 bg-white fade-up">
          <div className="container mx-auto px-6 flex justify-between">
            <Link to="/quizModulefour">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-full flex items-center gap-2 hover:bg-emerald-700">
                Next Page <ArrowRight />
              </button>
            </Link>
          </div>
        </section>
        {/* ================= QUIZ ================= */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 to-white fade-up">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold mb-2">Start Quiz</h2>
              <p className="text-slate-600 mb-6">
                15 questions to test your understanding of vehicle checks.
              </p>
              <Link to="/takequizCatName/Advanced-Driving-in-Relation-to-the-ADI">
                <button className="px-10 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
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

/* ================= REUSABLE DROPDOWN ================= */
function DropSection({ title, icon, open, toggle, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 fade-up">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <div className="flex items-center gap-3">
          <div className="text-emerald-600 w-8 h-8">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 transition ${
            open ? "rotate-180 text-emerald-600" : ""
          }`}
        />
      </div>

      {open && (
        <div className="mt-6 text-slate-700 leading-relaxed">{children}</div>
      )}
    </div>
  );
}
